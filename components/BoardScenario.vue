<template>
  <div>
    <div class="board-container" :class="{'no-input': !inputAllowed}">
      <div ref="tenukiBoard" class="board tenuki-board" />
    </div>
    <article class="message" :class="[{'is-hidden': !message.shown}, message.type]">
      <div class="message-header">
        <p>{{ message.title }} </p>
      </div>
      <div class="message-body">
        <p>{{ message.text }}</p>
        <div>
          <button
            v-if="message.shown && (message.type === messageTypes.success)"
            type="button"
            class="button button-restart is-primary"
            disabled
            @click="restart()"
          >
            Try it again
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import tenuki from 'tenuki'

/*

                user input
                    |
                    |
                    V
 check if it follows the scenario with validateMove()
      |                               |
      |                               |
      V                               |
  it does, so if there's a response do reponseTimeout() and advance through the scenario (or end it with success)
                                      |
                                      |
                                      V
  it doesn't, so throw an error with showMessage() and do undoTimeout()

*/

export default {
  name: 'BoardScenario',
  data () {
    return this.getDefaultData()
  },
  mounted () {
    this.initializeGame()
  },
  methods: {
    getDefaultData () {
      const messageTypes = {
        error: 'is-danger',
        warning: 'is-warning',
        success: 'is-success',
        plan: 'is-primary'
      }
      const defaultTitles = {}
      defaultTitles[messageTypes.error] = 'Incorrect'
      defaultTitles[messageTypes.warning] = 'Caution'
      defaultTitles[messageTypes.success] = 'Success'
      defaultTitles[messageTypes.plain] = 'Info'
      const defaultTexts = {}
      defaultTexts[messageTypes.error] = 'Try a different move'
      defaultTexts[messageTypes.warning] = ''
      defaultTexts[messageTypes.success] = 'You\'ve got it!'
      defaultTexts[messageTypes.plain] = ''
      const game = {}
      return {
        game,
        messageTypes,
        defaultTitles,
        defaultTexts,
        message: {
          shown: false,
          type: messageTypes.plain,
          title: 'Placeholder',
          text: 'Lorem ipsum'
        },
        scenario: {
          current: 0,
          steps: [
            {
              answer: { x: 3, y: 3 },
              response: { x: 3, y: 4 },
              failMessage: 'Wrong one'
            },
            {
              answer: { x: 4, y: 4 },
              response: { x: 4, y: 3 },
              failMessage: 'Heh'
            }
          ]
        },
        inputAllowed: true,
        undoTimeoutObj: null,
        undoTimeoutMS: 1500,
        responseTimeoutObj: null, // TODO: find a better solution for timers?
        responseTimeoutMS: 500,
        lastMoveUndo: false,
        lastMoveResponse: false
      }
    },
    initializeGame () {
      this.game = new tenuki.Game({
        element: this.$refs.tenukiBoard,
        boardSize: 5
      })
      this.game.callbacks.postRender = this.advanceThroughScenario
    },
    timeout (obj, ms, callback) {
      if (obj !== null) { return false }
      obj = setTimeout(() => {
        callback()
        obj = null
      }, ms)
    },
    undoTimeout (ms) {
      this.timeout(this.undoTimeoutObj, ms || this.undoTimeoutMS, this.undo)
    },
    responseTimeout (ms) {
      this.timeout(this.responseTimeoutObj, ms || this.responseTimeoutMS, this.response)
    },
    blockUserInput () {
      this.inputAllowed = false
    },
    unblockUserInput () {
      this.inputAllowed = true
    },
    undo () {
      this.unblockUserInput()
      this.lastMoveUndo = true
      this.game.undo()
    },
    showMessage (type, text, title) {
      this.message.type = type
      this.message.title = title || this.defaultTitles[type]
      this.message.text = text || this.defaultTexts[type]
      this.message.shown = true
    },
    hideMessage () {
      this.message.shown = false
    },
    scenarioEnded () {
      if (this.scenario.current >= this.scenario.steps.length) {
        this.showMessage(this.messageTypes.success)
        this.blockUserInput()
        return true
      }
      return false
    },
    response () {
      this.lastMoveResponse = true
      this.game.playAt(
        this.scenario.steps[this.scenario.current].response.y - 1,
        this.scenario.steps[this.scenario.current].response.x - 1
      )
      this.scenario.current += 1
      this.unblockUserInput()

      this.scenarioEnded()
    },
    advanceThroughScenario (game) {
      if (this.lastMoveUndo) { // attached to postRender callback it executes even after game.undo
        this.lastMoveUndo = false
        return false
      }
      if (this.lastMoveResponse) { // attached to postRender callback it executes even after game.playAt
        this.lastMoveResponse = false
        return false
      }
      const state = game.currentState()
      if ((state.playedPoint) && (this.validateMove(state.playedPoint.x, state.playedPoint.y))) {
        this.hideMessage()
        if (this.scenario.steps[this.scenario.current].response) { // some scenarios end on a user move
          this.blockUserInput()
          this.responseTimeout()
        } else {
          this.scenario.current += 1
          this.scenarioEnded()
        }
      } else {
        this.showMessage(this.messageTypes.error, this.scenario.steps[this.scenario.current].failMessage)
        this.blockUserInput()
        this.undoTimeout()
        return false
      }
      return true
    },
    validateMove (playedX, playedY) {
      // the board api has x and y confused, I'm using humane markup so I swap these 2
      const expectedX = this.scenario.steps[this.scenario.current].answer.y - 1
      const expectedY = this.scenario.steps[this.scenario.current].answer.x - 1
      return playedX === expectedX && playedY === expectedY
    },
    restart () {
      // TODO: figure out the restart without having to fork the Tenuki lib

      /* this.unblockUserInput()
      for (let i = 0; i < this.boardSize * this.boardSize; ++i) {
        this.game.intersectionAt(i, i / this.boardSize).value = 'empty'
      }
      this.scenario.current = 0 // reapply the prop
      */
    }
  }
}
</script>

<style lang="sass">
@import "~/assets/tenuki.css"

.board-container
  width: 20em
  height: 20em
  margin-top: 1em
.board
  width: 100% !important
  height: 100% !important
.message
  margin-top: 0.5em
.button-restart
  margin-top: 0.5em
.no-input
  pointer-events: none
</style>

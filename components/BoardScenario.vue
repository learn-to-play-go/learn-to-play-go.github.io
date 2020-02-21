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
            @click="restart()"
          >
            Restart this puzzle
          </button>
          <button
            v-if="message.shown && (message.type === messageTypes.error)"
            type="button"
            class="button button-restart is-danger"
            @click="undo()"
          >
            Try a different move
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import tenuki from 'tenuki'

export default {
  name: 'BoardScenario',
  props: {
    scenario: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return this.getDefaultData()
  },
  mounted () {
    this.scenario.on('responding', this.preResponse.bind(this))
    this.scenario.on('responded', this.onResponse.bind(this))
    this.scenario.on('incorrect', this.onFail.bind(this))
    this.scenario.on('ended', this.onEnd.bind(this))
    this.scenario.on('restarted', this.onRestart.bind(this))
    this.initializeBoard()
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
        inputAllowed: true
      }
    },

    /* UI */
    blockUserInput () {
      this.inputAllowed = false
    },
    unblockUserInput () {
      this.inputAllowed = true
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
    restart () {
      this.scenario.restart()
    },

    /* Board */
    initializeBoard () {
      this.game = new tenuki.Game({
        element: this.$refs.tenukiBoard,
        boardSize: 5
      })
      this.game.callbacks.postMove = this.playerMoved
    },
    undo () {
      this.hideMessage()
      this.unblockUserInput()
      this.game.undo()
    },

    /* Scenario */
    playerMoved (game, currentPlayer) {
      const isPlayer = currentPlayer !== 'white'
      if (!isPlayer) { return } // ignore automatic moves (always white)
      const played = game.currentState().playedPoint
      if (!played) { return }
      this.scenario.play(played.x + 1, played.y + 1) // `game` returns coords that start with 0, but I start mine with 1
    },
    preResponse () {
      this.blockUserInput()
    },
    onResponse (x, y, message) {
      this.game.playAt(x - 1, y - 1)
      this.unblockUserInput()
      if (message && (message.length > 0)) {
        this.showMessage(this.messageTypes.plain, message)
      }
    },
    onFail (message) {
      this.blockUserInput()
      this.showMessage(this.messageTypes.error, message)
    },
    onEnd (message) {
      this.blockUserInput()
      this.showMessage(this.messageTypes.success, message)
    },
    onRestart () {
      this.game.clear()
      this.unblockUserInput()
      this.hideMessage()
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

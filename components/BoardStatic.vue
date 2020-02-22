<template>
  <div>
    <div class="board-container no-input">
      <div ref="tenukiBoard" class="board tenuki-board" />
    </div>
    <article class="message is-info" :class="{'is-hidden': !messageShown}">
      <div class="message-body">
        {{ message }}
      </div>
    </article>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import tenuki from 'tenuki'

export default {
  name: 'BoardStatic',
  props: {
    layout: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      message: 'Placeholder',
      messageShown: false
    }
  },
  mounted () {
    this.message = this.layout.message
    this.messageShown = this.layout.message && this.layout.message.length > 0

    this.game = new tenuki.Game({
      element: this.$refs.tenukiBoard,
      boardSize: this.layout.getLength()
    })

    const stones = this.layout.getStones()
    const labels = this.layout.getLabels()

    if (stones.length > 0) {
      this.game.stonesAt(stones, 'black')
    }

    if (labels.length > 0) {
      this.game.labelsAt(labels, 'black')
    }
  }
}
</script>

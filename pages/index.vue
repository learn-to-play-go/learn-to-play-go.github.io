<template>
  <div class="container">
    <div class="section">
      <div class="container">
        <h1 class="title">
          Intro and stuff
        </h1>
        <div>
          Me dumb
        </div>
        <Board />
      </div>
    </div>
    <div class="section is-medium">
      <div class="container">
        <h1 class="subtitle">
          Rules and stuff
        </h1>
        <div>Don't die</div>
      </div>
    </div>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'

export default {
  name: 'Index',
  components: {
    Board
  }
}
</script>

<template>
  <div class="container">
    <div class="section">
      <div class="container">
        <h1 class="title">
          Intro and stuff
        </h1>
        <div>
          Play 3-3 and then 4-4 or die
        </div>
        <BoardScenario />
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
import BoardScenario from '@/components/BoardScenario'

export default {
  name: 'Index',
  components: {
    BoardScenario
  }
}
</script>

<template>
  <div class="container">
    <div class="section">
      <div class="container">
        <h1 class="title">
          Intro and stuff
        </h1>
        <div>
          Play 2-2 and then 4-4 or die
        </div>
        <BoardScenario :scenario="first_scenario" />
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
import { Scenario, Step } from '@/components/Scenario'

export default {
  name: 'Index',
  components: {
    BoardScenario
  },
  data () {
    return {
      first_scenario: new Scenario([
        new Step(2, 2, 3, 3, 'wow it works'),
        new Step(4, 4, 3, 4, null, null, 'tadaa')
      ])
    }
  }
}
</script>

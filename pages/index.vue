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
        <BoardScenario :scenario="scenarios.intro" />
      </div>
    </div>
    <div class="section is-medium">
      <div class="container">
        <h1 class="subtitle">
          Rules and stuff
        </h1>
        <div>Don't die</div>
        <BoardStatic :layout="layouts.intro" />
      </div>
    </div>
  </div>
</template>

<script>
import BoardScenario from '@/components/BoardScenario'
import BoardStatic from '@/components/BoardStatic'
import Scenarios from '@/components/ScenarioList'
import Layouts from '@/components/LayoutList'

export default {
  name: 'Index',
  components: {
    BoardScenario,
    BoardStatic
  },
  data () {
    return {
      scenarios: Scenarios,
      layouts: Layouts
    }
  }
}
</script>

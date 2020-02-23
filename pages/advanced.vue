<template>
  <div>
    <div class="content is-medium">
      <h1 class="has-text-centered-mobile is-family-primary is-size-1-desktop is-size-3-mobile">
        Advanced patterns
      </h1>

      <ul>
        <li>
          <strong>Atari</strong> - a move that puts a stone or a group of stones in a position in which they only have 1 free liberty
        </li>
      </ul>

      <BoardStatic :layout="layouts.preAtari" />

      <h2>Ladder</h2>

      <ul>
        <li>There is a pattern that can lead to a repetition of Atari until the entire group is captured - a <strong>ladder</strong></li>
        <li>The main characteristic of a ladder is that the group that is being "laddered" <strong>have no chance of escaping it</strong></li>
      </ul>

      <BoardScenario :scenario="scenarios.ladder" />

      <h2>Snapback</h2>

      <ul>
        <li>Snapback is a pattern in which, after capturing a stone or a group of stones, your own stones are left with 1 liberty, and can subsequently get captured right away</li>
      </ul>

      <BoardScenario :scenario="scenarios.snapback" />
    </div>
  </div>
</template>

<script>
import BoardScenario from '@/components/BoardScenario'
import BoardStatic from '@/components/BoardStatic'
import Scenarios from '@/components/ScenarioList'
import Layouts from '@/components/LayoutList'

export default {
  name: 'Advanced',
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

<template>
  <div>
    <div class="content is-medium">
      <h1 class="is-size-1-desktop is-size-3-mobile">
        Learn to play Go
      </h1>

      <p>
        <strong>Play</strong> the game <strong>while learning</strong> it.<br>
        Dive straight into the <strong>interactive puzzles</strong> that would guide you through the rules of Go.
      </p>

      <h2 class="is-size-1-desktop is-size-3-mobile">
        Rules
      </h2>

      <ul>
        <li>Go Pieces are called <strong>stones</strong>.</li>
        <li>Stones are placed on the <strong>intersections</strong> of the board</li>
        <li>Stones <strong>can't be moved</strong> after they are placed, but they <strong>can be removed</strong> from the board</li>
        <li>Players <strong>take turns</strong> placing stones of their colour, one stone at a time</li>
        <li>Black goes <strong>first</strong></li>
      </ul>

      <BoardScenario :scenario="scenarios.anywhere" />

      <h2>Liberties</h2>
      <ul>
        <li><strong>Liberty</strong> is an unoccupied intersection horizontally or vertically adjacent to a stone</li>
      </ul>

      <BoardStatic :layout="layouts.liberties" />

      <ul>
        <li>If all the liberties are taken by the stones of opposing colour, such stone is getting <strong>captured</strong> and is removed from the board</li>
      </ul>

      <BoardScenario :scenario="scenarios.capture" />

      <ul>
        <li><strong>Groups</strong> of stones of the same colour placed <strong>horizontally or vertically</strong> adjacent to each other <strong>share liberties</strong></li>
      </ul>

      <BoardStatic :layout="layouts.groupLiberties" />

      <ul>
        <li>If a group of stones loses all of its liberties, <strong>the entire group</strong> is getting captured</li>
      </ul>

      <BoardScenario :scenario="scenarios.captureGroup" />

      <ul>
        <li>Accordingly, you can <strong>escape from being captured</strong> and save your stones</li>
      </ul>

      <BoardScenario :scenario="scenarios.escapeCapture" />

      <ul>
        <li>Stones placed on the edge have <strong>fewer liberties</strong> than those elsewhere on the board</li>
      </ul>

      <BoardStatic :layout="layouts.edgeLiberties" />

      <ul>
        <li>Accordingly, it takes <strong>fewer stones to capture</strong> stones placed on the edge</li>
      </ul>

      <BoardScenario :scenario="scenarios.captureEdge" />

      <h2>Ko</h2>
      <i>Reads like the first 'co' in 'coconut'</i>
      <ul>
        <li>Players are not allowed to make a move that <strong>returns the board to its previous position</strong></li>
        <li>An arrangement of stones that allows repetition is commonly called <strong>Ko shape</strong></li>
      </ul>

      <BoardScenario :scenario="scenarios.ko" />

      <ul>
        <li>It can appear <strong>anywhere</strong> on the board</li>
      </ul>

      <BoardScenario :scenario="scenarios.koEdge" />

      <div class="ending has-text-centered">
        <h4>This is it for the rules. Got you interested?</h4>
        <nuxt-link class="button is-primary is-medium basics-button is-flex-mobile" to="/basics">
          Proceed to the Basics section
        </nuxt-link>
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

<style lang="sass" scoped>
.ending
  margin-top: 5rem
  margin-bottom: 2rem
</style>

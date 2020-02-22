<template>
  <div class="container">
    <div class="section">
      <div class="content">
        <h1>Rules</h1>

        <ul>
          <li>Go Pieces are called <strong>stones</strong>.</li>
          <li>Stones are placed on the <strong>intersections</strong> of the board</li>
          <li>Stones can't be moved after they are placed, but they can be removed from the board</li>
          <li>Players take turns placing stones of their colour, one stone at a time</li>
          <li>Black goes <strong>first</strong></li>
        </ul>

        <BoardScenario :scenario="scenarios.intro" />

        Snippet: place a stone anywhere on the board

        <h2>Liberties</h2>
        <ul>
          <li>Liberty is an unoccupied intersection horizontally or vertically adjacent to a stone</li>
        </ul>

        <BoardStatic :layout="layouts.liberties" />
        Snippet: static, showing 4 liberties around 1 stone

        <ul>
          <li>If all the liberties are taken by the stones of opposing colour, such stone is getting captured and is removed from the board</li>
        </ul>

        <BoardScenario :scenario="scenarios.capture" />
        Snippet: Capture a stone

        <ul>
          <li>Stones of the same colour placed horizontally or vertically adjacent to each other share liberties</li>
        </ul>

        <!-- <BoardStatic :layout="layouts.intro" /> -->
        Snippet: static, showing 8 liberties around 3 stones in a row

        <ul>
          <li>If a group of stones loses all of its liberties, the entire group is getting captured</li>
        </ul>

        <!-- <BoardScenario :scenario="scenarios.intro" /> -->
        Snippet: Capture a group of 3 stones

        <ul>
          <li>Stones placed on the edge have fewer liberties</li>
        </ul>

        <!-- <BoardStatic :layout="layouts.intro" /> -->
        Snippet: static, edge stone liberties

        <ul>
          <li>Accordingly, such stones take fewer stones to capture them</li>
        </ul>

        <!-- <BoardScenario :scenario="scenarios.intro" /> -->
        Snippet: Capture a stone on the edge

        <h2>Ko</h2>
        <i>Reads like the first 'co' in 'coconut'</i>
        <ul>
          <li>Players are not allowed to make a move that returns the board to its previous position</li>
          <li>An arrangement of stones that allows repetition is commonly called Ko shape</li>
        </ul>

        <!-- <BoardScenario :scenario="scenarios.intro" /> -->
        Snippet: Ko shape

        <ul>
          <li>It can appear anywhere on the board</li>
        </ul>

        <!-- <BoardScenario :scenario="scenarios.intro" /> -->
        Snippet: Ko shape on the edge

        <p>This is it. Just 2 rules: liberties and ko. Got you interested? Continue to the basics page: button</p>
      </div>
    </div>
  </div>
</template>

<script>
import BoardScenario from '@/components/BoardScenario' // <BoardScenario :scenario="scenarios.intro" />
import BoardStatic from '@/components/BoardStatic' // <BoardStatic :layout="layouts.intro" />
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

<template>
  <div>
    <div class="content is-medium">
      <h1 class="is-size-1-desktop is-size-3-mobile">
        Basics
      </h1>

      <ul>
        <li>The most common board size is <strong>19x19</strong> intersections, however, beginners usually start with <strong>9x9</strong></li>
        <li>The dots that you see on the board don't have any special effect on the game - they're just <strong>cosmetic</strong></li>
        <li>Most of the Go basics are <strong>heuristics</strong> that derive from the rules, rather than something set in stone</li>
      </ul>

      <h2>Eyes</h2>

      <ul>
        <li>You can't play a stone that would have no free liberties the moment it was played</li>
      </ul>

      <BoardStatic :layout="layouts.suicide" />

      <ul>
        <li>However, there is <strong>1 exception</strong>: you can play a suicide stone, as long as it <strong>captures a nearby stone, thus freeing a liberty for itself</strong></li>
      </ul>

      <BoardScenario :scenario="scenarios.suicideCapture" />

      <ul>
        <li>An <strong>inside liberty</strong> like this is called an <strong>eye</strong></li>
        <li>A group with <strong>two eyes</strong> is rendered <strong>irremovable for the board</strong></li>
        <li>Such group is colloquially said to be <strong>alive</strong></li>
      </ul>

      <BoardStatic :layout="layouts.twoEyes" />

      <ul>
        <li>An intersection is only considered to be an eye if there is no way to capture <strong>part of it</strong></li>
        <li>Intersections that visually appear to be forming an eye, but really don't, are colloquially called <strong>false eyes</strong></li>
      </ul>

      <BoardScenario :scenario="scenarios.falseEye" />

      <h2>Game objective</h2>

      <ul>
        <li>The objective of the game is to <strong>get more points than your opponent has</strong>, even if it's by just 1 point</li>
        <li>For going second, <strong>white gets compensation in points</strong>, which generally equals to 6.5 points</li>
        <li>Certain <strong>rulesets</strong> are used for <strong>counting the points</strong> and determining the winner</li>
      </ul>

      <h2>Obtaining points</h2>

      <ul>
        <li>There are 2 ways to obtain points in the game: <strong>by capturing opponent's stones</strong> and by <strong>surrounding territory</strong> (intersections)</li>
        <li>Captured stones count as 1 point each</li>
        <li>Occupied intersections count as 1 point each</li>
      </ul>

      <BoardStatic :layout="layouts.splitBoard" />

      <ul>
        <li>To occupy an intersection, the group that covers it must have <strong>two eyes</strong> or <strong>enough room</strong> to form two eyes</li>
      </ul>

      <BoardStatic :layout="layouts.splitBoardWhiteDead" />

      <ul>
        <li>Intersections that lie <strong>between</strong> two living groups of opposing colours belong to nobody</li>
      </ul>

      <BoardStatic :layout="layouts.splitBoardWhiteAlive" />

      <h2>End of the game</h2>

      <ul>
        <li>The game of Go can end in 3 ways: <strong>by the resignation</strong> of either side, by either side <strong>running out of time</strong>, or <strong>by counting</strong></li>
        <li>Most of the time white get at least 0.5 points of compensation, as to <strong>prevent draws</strong></li>
        <li>Either player can <strong>resign</strong> at any time during the game and subsequently lose it</li>
        <li>If both players <strong>pass</strong>, it is agreed to begin the <strong>counting</strong> of the board</li>
        <li>Many assumptions are made at the time players agree to begin the counting. It is <strong>not necessary to play out every single move and occupy every single intersection</strong> to end the game</li>
      </ul>

      <div class="ending has-text-centered">
        <h4>You're good to go now. Want to play the game?</h4>
        <nuxt-link class="button is-primary is-medium basics-button is-flex-mobile" to="/play">
          Proceed to the Play section
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
  name: 'Basics',
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

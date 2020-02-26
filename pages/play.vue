<template>
  <div>
    <div class="content is-medium">
      <h1 class="is-size-1-desktop is-size-3-mobile">
        Start of the journey
      </h1>

      <ul>
        <li>Go is played both <strong>online</strong> and <strong>over the board</strong></li>
        <li>East Asian regions have a significantly larger community, but the West has plenty enough too</li>
        <li>An average 19x19 game online takes 30 to 50 minutes</li>
        <li>An average 9x9 game online takes less than 15 minutes, and usually less than 10 for beginners</li>
      </ul>

      <h2>Play online</h2>

      <ul>
        <li>Go to <a href="https://online-go.com/play" target="_blank">https://online-go.com/play</a></li>
        <li>Register an account (no email verification required!)</li>
        <li>Go to "Play" on the top, choose 9x9 and the time mode of your liking</li>
        <li>Play the game!</li>
      </ul>

      <h4>Read further if you need some advice</h4>

      <h2>First games</h2>

      <ul>
        <li>The most common beginner advice is: <strong>lose your first 100 games as fast as possible</strong></li>
        <li>Although it sounds intimidating, it's not that many, and you have a lot to do during these games</li>
        <li>Your very first games will be very confusing and you will be losing almost all of them - <strong>don't get discouraged</strong>, you will catch up in no time</li>
      </ul>
      <p>Advice for the <strong>first 15 games</strong>:</p>
      <ul>
        <li>Get the feel of the pace of the game</li>
        <li>Get used to looking at intersections</li>
        <li>Get used to the time settings</li>
      </ul>
      <p>Advice for the <strong>following 30 games</strong>:</p>
      <ul>
        <li>Try to notice when your stones are about to get captured and prevent that</li>
        <li>Try to put your stones closer to each other and keep them connected</li>
        <li>Try to capture more of the opponent's stones</li>
      </ul>
      <p>Advice for the <strong>remainder of the games</strong>:</p>
      <ul>
        <li>Try to focus less on capturing the opponent's stones</li>
        <li>Try to cover more of the board with your stones</li>
        <li>Try to look for ways to form 2 eyes</li>
      </ul>

      <h2>Further reading</h2>

      <ul>
        <li>
          To discover more servers and resources, try the
          <nuxt-link to="/resources">
            "Resources" tab
          </nuxt-link>
          in the header.
        </li>
        <li>
          If you want even more knowledge, check out the
          <nuxt-link to="/advanced">
            "Advanced" tab
          </nuxt-link>
          in the header. Don't worry, it's not very advanced. <strong>Make sure to pay it a visit after your initial 100 losses</strong>
        </li>
        <li>
          If you have some questions about the game, give the
          <nuxt-link to="/faq">
            "FAQ" tab
          </nuxt-link>
          a go
        </li>
      </ul>
      <div class="ending" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Play'
}
</script>

<style lang="sass" scoped>
.ending
  margin-bottom: 5rem
</style>

<template>
  <div class="container">
    <MainNavbar />
    <nuxt />
  </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar'

export default {
  name: 'DefaultLayout',
  components: {
    MainNavbar
  }
}
</script>

<style lang="sass" scoped>
.container
  max-width: 1280px
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.15)
  border: 1px solid rgba(0, 0, 0, 0.10)
  background-color: hsl(0, 0%, 97%)
</style>

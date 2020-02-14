<template>
  <b-navbar type="dark" variant="primary">
    <b-navbar-nav>
      <b-nav-item to="/" exact>
        Home
      </b-nav-item>
      <b-nav-item to="/basics" exact>
        Basics
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'MainNavbar'
}
</script>

<style lang="sass">
.nuxt-link-exact-active
  background-color: white
  color: black
</style>

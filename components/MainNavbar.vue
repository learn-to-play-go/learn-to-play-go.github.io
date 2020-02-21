<template>
  <div class="container">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{'is-active': burgerIsOpen}"
          @click="burgerIsOpen = !burgerIsOpen"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div class="navbar-menu" :class="{'is-active': burgerIsOpen}">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item is-tab is-unselectable">
            Home
          </nuxt-link>
          <nuxt-link to="/basics" class="navbar-item is-tab is-unselectable">
            Basics
          </nuxt-link>
          <nuxt-link to="/about" class="navbar-item is-tab is-unselectable">
            About
          </nuxt-link>
          <!-- <NavbarDropdown :links="linksIntermediate" /> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import NavbarDropdown from '@/components/NavbarDropdown'

export default {
  name: 'MainNavbar',
  components: {
    // NavbarDropdown
  },
  data: () => {
    return {
      burgerIsOpen: false,
      linksIntermediate: [
        { to: '/asd', title: 'Opening' },
        { to: '/qwe', title: 'Tipss' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma"
.nuxt-link-exact-active
  @extend .is-active
.nuxt-link-active
</style>

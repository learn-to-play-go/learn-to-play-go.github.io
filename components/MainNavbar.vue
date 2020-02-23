<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand is-marginless">
      <nuxt-link class="navbar-item logo-link" to="/">
        <img src="~/assets/logo.svg" width="112" height="28">
      </nuxt-link>
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
    <div class="navbar-menu is-family-secondary" :class="{'is-active': burgerIsOpen}">
      <div class="navbar-start">
        <div @click="burgerIsOpen = false">
          <nuxt-link to="/" class="navbar-item is-tab is-unselectable is-size-5 has-text-centered-mobile">
            Rules
          </nuxt-link>
        </div>
        <div @click="burgerIsOpen = false">
          <nuxt-link to="/basics" class="navbar-item is-tab is-unselectable is-size-5 has-text-centered-mobile">
            Basics
          </nuxt-link>
        </div>
        <div @click="burgerIsOpen = false">
          <nuxt-link to="/play" class="navbar-item is-tab is-unselectable is-size-5 has-text-centered-mobile">
            Play
          </nuxt-link>
        </div>
        <div @click="burgerIsOpen = false">
          <nuxt-link to="/resources" class="navbar-item is-tab is-unselectable is-size-5 has-text-centered-mobile">
            Resources
          </nuxt-link>
        </div>
        <div @click="burgerIsOpen = false">
          <nuxt-link to="/advanced" class="navbar-item is-tab is-unselectable is-size-5 has-text-centered-mobile">
            Advanced
          </nuxt-link>
        </div>
        <div @click="burgerIsOpen = false">
          <nuxt-link to="/faq" class="navbar-item is-tab is-unselectable is-size-5 has-text-centered-mobile">
            FAQ
          </nuxt-link>
        </div>
        <!-- <NavbarDropdown :links="linksIntermediate" /> -->
      </div>
      <div class="navbar-end">
        <div @click="burgerIsOpen = false">
          <nuxt-link to="/about" class="navbar-item is-tab is-unselectable is-size-5 has-text-centered-mobile">
            About
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
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
.navbar-end
    padding-right: 2rem
+mobile
  .navbar-end
    padding-right: 0rem
  .navbar-menu .navbar-item
    min-height: 4rem !important
    height: 4rem !important
</style>

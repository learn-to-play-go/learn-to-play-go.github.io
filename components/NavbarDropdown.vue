<template>
  <div
    v-click-outside="() => { isOpen = false }"
    class="navbar-item has-dropdown is-unselectable"
    :class="{'is-active': isOpen}"
    @click="isOpen = !isOpen"
  >
    <div class="navbar-link">
      Intermediate
    </div>
    <div class="navbar-dropdown">
      <div v-for="link in links" :key="link.to">
        <nuxt-link :to="link.to" class="navbar-item is-tab">
          {{ link.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'NavbarDropdown',
  directives: {
    ClickOutside
  },
  props: {
    links: {
      type: Array,
      default: () => {
        return [
          { to: '/', title: 'Placeholder' },
          { to: '/', title: 'Placeholder2' }
        ]
      }
    }
  },
  data: () => {
    return {
      isOpen: false
    }
  }
}
</script>

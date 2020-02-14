<template>
  <div>
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

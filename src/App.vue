<template>
  <MHeader></MHeader>
  <TheTab></TheTab>
  <router-view></router-view>
</template>

<script lang="ts">
import Header from './components/Header/Header.vue'
import TheTab from './components/TheTab.vue'

export default {
  components: {
    MHeader: Header,
    TheTab,
  },
}
</script>

<style lang="scss"></style>

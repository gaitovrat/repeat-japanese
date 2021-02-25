<template>
  <div id="app">
    <p v-if="state.isStart">{{ hirogana[0].text }}</p>
    <button v-on:click="invertStart()">{{ state.isStart ? 'stop' : 'start' }}</button>
  </div>
</template>

<script>
import Data from './utils/data'

export default {
  name: 'App',
  data() {
    return {
      hirogana: Data.hirogana,
      state: {
        isStart: false
      }
    }
  },
  methods: {
    invertStart() {
      this.state.isStart = !this.state.isStart;
    }
  }
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
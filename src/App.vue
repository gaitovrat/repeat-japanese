<template>
  <div id="app" class="flex-center-container">
    <!-- <Chars v-if="state.isStart" @close="invertStart" />
    <div v-else>
      <h1>Japanese-Repeate</h1>
      <div class="buttons flex-center-container">
        <button v-on:click="invertStart()">Start</button>
      </div>
    </div> -->
    <h1>Example</h1>
    <Button text="clickme" />
  </div>
</template>

<script>
// import Chars from './components/Chars'
import Button from './components/style/Button'

export default {
  name: 'App',
  components: {
    // Chars,
    Button,
  },
  data() {
    return {
      state: {
        isStart: false,
      },
    }
  },
  methods: {
    invertStart() {
      this.state.isStart = !this.state.isStart
    },
  },
}
</script>

<style>
.flex-center-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

html,
body,
h1 {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 5rem;
  margin-bottom: 10%;
}

input {
  border: 0;
  padding: 5px;
  margin: 5px;
  border-bottom: 2px solid gray;
  text-align: center;
  font-size: 2rem;
}

input:focus {
  outline: none;
  border-bottom: 2px solid red;
  transition: 1s;
}
</style>

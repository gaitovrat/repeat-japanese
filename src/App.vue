<template>
  <div id="app" class="flex-center-container">
    <Chars v-if="state.isStart" @close="invertStart" />
    <div v-else>
      <h1>Japanese-Repeate</h1>
      <div class="buttons flex-center-container">
        <button v-on:click="invertStart()">Start</button>
      </div>
    </div>
  </div>
</template>

<script>
import Chars from './components/Chars'

export default {
  name: 'App',
  components: {
    Chars,
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

.buttons {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.buttons > button {
  margin: 0 10px;
}

button:hover {
  background-color: white;
  color: black;
  border: 2px solid red;
  padding: 10px 10px;
}

button {
  background-color: red;
  color: white;
  border-radius: 10px;
  border: 2px solid white;
  padding: 10px 10px;
  outline: none;
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

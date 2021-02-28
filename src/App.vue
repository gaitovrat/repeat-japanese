<template>
  <div id="app" class="flex-center-container">
    <Settings v-if="state.isShowModal" @close="invertShowModal" />
    <Chars v-if="state.isStart" @close="invertStart" />
    <div class="buttons" v-else>
      <button v-on:click="invertStart()">Start</button>
      <button v-on:click="invertShowModal()">Settings</button>
    </div>
  </div>
</template>

<script>
import Data from "./utils/data";
import Settings from "./components/Settings";
import Chars from "./components/Chars";

export default {
  name: "App",
  components: {
    Settings,
    Chars,
  },
  data() {
    return {
      hirogana: Data.hirogana,
      state: {
        isStart: false,
        isShowModal: false,
      },
    };
  },
  methods: {
    invertStart() {
      this.state.isStart = !this.state.isStart;
    },
    invertShowModal() {
      this.state.isShowModal = !this.state.isShowModal;
    },
  },
};
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
</style>
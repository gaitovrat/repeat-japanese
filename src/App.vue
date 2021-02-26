<template>
  <div id="app" class="flex-center-container">
    <Settings v-if="state.isShowModal" @close="invertShowModal" />
    <h1 v-if="state.isStart">{{ hirogana[0].text }}</h1>
    <div class="buttons">
      <button v-on:click="invertStart()">
        {{ state.isStart ? "Stop" : "Start" }}
      </button>
      <button v-if="!state.isStart" v-on:click="invertShowModal()">
        Settings
      </button>
    </div>
  </div>
</template>

<script>
import Data from "./utils/data";
import Settings from "./components/Settings";

export default {
  name: "App",
  components: {
    Settings,
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
  flex-direction: column;
}

#app {
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
}

.buttons > button {
  margin: 0 10px;
}

button:hover {
  background-color: white;
  color: black;
  border: 2px solid red;
  padding: 8px 10px;
}

button {
  background-color: red;
  color: white;
  border-radius: 10px;
  border: 0;
  padding: 10px 10px;
  outline: none;
}
</style>
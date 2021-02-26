<template>
  <div id="app" class="flex-center-container">
    <div v-if="state.isShowModal" class="modal-mask">
      <div class="modal-window">
        <button class="close_modal__button" v-on:click="state.isShowModal = false">X</button>
        <h1>I am modal</h1>
      </div>
    </div>
    <h1 v-if="state.isStart">{{ hirogana[0].text }}</h1>
    <div class="buttons">
      <button v-on:click="invertStart()">{{ state.isStart ? 'Stop' : 'Start' }}</button>
      <button v-if="!state.isStart" v-on:click="state.isShowModal = true">Settings</button>
    </div>
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
        isStart: false,
        isShowModal: false
      }
    }
  },
  methods: {
    invertStart() {
      this.state.isStart = !this.state.isStart;
    },
    showModal() {
      
    }
  }
}
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

html, body, #app, .modal-mask {
  width: 100%;
  height: 100%;
}

html, body, h1 {
  margin: 0;
  padding: 0;
}

.buttons {
  flex-direction: row;
}

.buttons > button {
  margin: 0 10px;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  transform: opacity 0.5s ease;
  transition: 0.5s
}

.modal-window {
  background-color: white;
  position: relative;
  top: 30%;
  left: 30%;
  width: 40%;
  border: 3px solid red;
  border-radius: 10px;
  padding: 10px;
}

.close_modal__button {
  position: absolute;
  top: 10px;
  right: 10px;
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
}
</style>
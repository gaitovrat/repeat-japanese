<template>
  <div class="settings">
    <div class="settings__modal">
      <button class="settings__close" v-on:click="close()">X</button>
      <h1>I am modal</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  methods: {
    close() {
      this.$emit("close")
    },
  },
};
</script>

<style scoped>
.settings {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  transform: opacity 0.5s ease;
  transition: 0.5s;
}

.settings__modal {
  background-color: white;
  position: relative;
  top: 30%;
  left: 30%;
  width: 40%;
  border: 3px solid red;
  border-radius: 10px;
  padding: 10px;
}

.settings__close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
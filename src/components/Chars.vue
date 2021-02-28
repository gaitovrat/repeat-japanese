<template>
  <div class="chars flex-center-container">
    <div class="char">A</div>
    <input type="text" name="text" id="text" />
    <div class="buttons">
      <button v-on:click="stop()">Stop</button>
      <button>Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chars",
  methods: {
    stop() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.chars {
  flex-direction: column;
}

.char {
  font-weight: bold;
  font-size: 10rem;
  text-align: center;
}

input {
  border: 0;
  padding: 5px;
  margin: 5px;
  border-bottom: 2px solid red;
  text-align: center;
  font-size: 2rem;
}

input:focus {
  outline: none;
}
</style>
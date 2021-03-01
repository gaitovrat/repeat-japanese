<template>
  <div class="chars flex-center-container">
    <div class="char">{{ char }}</div>
    <input type="text" name="text" id="text" autocomplete="off" />
    <div class="buttons">
      <button v-on:click="stop()">Stop</button>
      <button v-on:click="setRandomChar()">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chars",
  data() {
    return {
      char: "",
    };
  },
  methods: {
    stop() {
      this.$emit("close");
    },
    getRandomChar() {
      return this.kana[Math.floor(Math.random() * this.kana.length)].kana;
    },
    setRandomChar() {
      this.char = this.getRandomChar();
    },
  },
  beforeMount() {
    this.setRandomChar()
  },
  props: {
    kana: Array,
  },
};
</script>

<style scoped>
.chars {
  flex-direction: column;
}

.char {
  font-weight: bold;
  font-size: 10rem;
  text-align: center;
}
</style>
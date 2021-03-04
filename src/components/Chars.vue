<template>
  <div class="chars">
    <div
      v-if="!showResult"
      class="flex-center-container"
      style="flex-direction: column"
    >
      <div class="char">{{ char }}</div>
      <input v-model="inputText" type="text" autocomplete="off" />
      <div class="buttons">
        <button v-on:click="stop()">Stop</button>
        <button v-on:click="next()">Next</button>
      </div>
    </div>
    <div v-else>
      <h1>Your results</h1>
      <h2 style="color: green">Correctly: {{ count.correct }}</h2>
      <h2 style="color: red">Wrong: {{ count.wrong }}</h2>
      <button v-on:click="stop()">ok</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chars',
  data() {
    return {
      char: '',
      inputText: '',
      count: {
        correct: 0,
        wrong: 0,
      },
      showResult: false,
    }
  },
  methods: {
    stop() {
      this.$emit('close')
    },
    getRandomChar() {
      return this.kana[Math.floor(Math.random() * this.kana.length)].kana
    },
    setRandomChar() {
      this.char = this.getRandomChar()
    },
    next() {
      const el = this.kana.filter((el) => el.kana === this.char)[0]

      el.romaji === this.inputText ? this.count.correct++ : this.count.wrong++
      alert(
        el.romaji === this.inputText
          ? 'Correctly'
          : `Wrong. It is "${el.romaji}"`
      )

      if (this.kana.length !== 1) {
        const index = this.kana.indexOf(el)
        if (index > -1) {
          this.kana.splice(index, 1)
        }

        this.setRandomChar()

        this.inputText = ''
      } else {
        this.showResult = true
      }
    },
  },
  beforeMount() {
    this.setRandomChar()
  },
  props: {
    kana: Array,
  },
}
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

<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
    }
}
</script>

<style scoped>
button {
  background-color: red;
  color: white;
  border-radius: 10px;
  border: 2px solid white;
  padding: 10px 10px;
  outline: none;
}

button:hover {
  background-color: white;
  color: black;
  border: 2px solid red;
  padding: 10px 10px;
}
</style>
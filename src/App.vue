<template>
  <div id="app">
    {{ hirogana.a }} {{ hirogana.i }}    
  </div>
</template>

<script>
import Data from './utils/data'

export default {
  name: 'App',
  data() {
    return {
      hirogana: Data.hirogana
    }
  }
}
</script>
import Vue from 'vue'
import Vuex from 'vuex'

import data from '../utils/data'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      hiragana: data.hiragana,
      katakana: data.katakana,
  },
})

export default store
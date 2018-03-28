import Vuex from 'vuex'
import Vue from 'vue'
// import Axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    questions: [{
      _id: 1,
      title: 'How to be a great man?',
      detail: 'How to be a very very great man'
    }, {
      _id: 2,
      title: 'How to be a great woman?',
      detail: 'How to be a very very great woman'
    }, {
      _id: 3,
      title: 'How to be a great boy?',
      detail: 'How to be a very very great boy'
    }],
    user: {
      name: 'Adhiarta'
    }
  },
  getters: {
    getData (state) {
      return state
    }
  },
  mutations: {
    question (state, payload) {
      state.question = payload
    }
  },
  actions: {
    // getQuestion (context) {
    //   let url = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
    //   Axios.get(url).then(({data}) => {
    //     context.commit('question', data)
    //   })
    // }
  }
})

export default store

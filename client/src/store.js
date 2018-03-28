import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios'
Vue.use(Vuex)

const questionUrl = 'http://localhost:3000/questions'
// const userUrl = 'http://localhost:3000/users'
const answerUrl = 'http://localhost:3000/answers'

const store = new Vuex.Store({
  state: {
    questions: null,
    user: null,
    answers: null,
    token: null
  },
  getters: {
    getData (state) {
      return state
    }
  },
  mutations: {
    question (state, payload) {
      state.questions = payload
    },
    answer (state, payload) {
      state.answers = payload
    },
    token (state, payload) {
      state.token = payload
    }
  },
  actions: {
    getQuestion (context) {
      Axios.get(questionUrl).then(({data}) => {
        console.log(data)
        context.commit('question', data.questions)
      })
    },
    getAnswer (context) {
      Axios.get(answerUrl).then(({data}) => {
        console.log(data)
        context.commit('answer', data.answers)
      })
    },
    signin: function (context, payload) {
      let url = 'http://localhost:3000/users/signin'
      Axios.post(url, {
        email: payload.email,
        password: payload.password
      })
        .then(({data}) => {
          console.log(data)
          context.commit('token', data)
        })
    }
  }
})

export default store

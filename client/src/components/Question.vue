<template>
  <div>
    <div class="card question" v-for='(question, index) in questionList.questions' :key=index>
      <div class="card-header" v-if='question.userId._id === userId'>
        Asked by you
      </div>
      <div class="card-header" v-else>
        Asked by: {{question.userId.name}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{question.title}}</h5>
        <p class="card-text">{{question.description}}</p>
        <router-link :to="{name: 'QuestionDetail', params:{id: question._id}}"> <button class="btn btn-primary">Detail</button></router-link>
        <button class="btn btn-info" v-if='question.userId._id === userId'>Update</button>
        <button class="btn btn-danger" v-if='question.userId._id === userId' @click="deleteQuestion(question._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Question',
  data () {
    return {
      questionList: null,
      userId: localStorage.getItem('userId')
    }
  },
  created () {
    this.getQuestion()
  },
  methods: {
    getQuestion () {
      this.questionList = this.$store.getters.getData
      this.$store.dispatch('getQuestion')
      return this.$store.getters.getData
    },
    deleteQuestion (id) {
      Axios({
        method: 'delete',
        url: `http://localhost:3000/questions/${id}`
      }).then(data => {
        // console.log(data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.card
{
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>

<template>
<div>
  <navbar></navbar>
  <h1>
    {{detailQuestion.title}}
  </h1>
    <div class="row" v-for='(answer, index) in answerList.answers' :key=index v-if="answer.questionId._id === $route.params.id">
      <div class="container py-4">
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-header">
                Votes
              </div>
              <div class="card-body">
                <div class="row vote-up">
                  <div class="col-sm-12">
                    <button class="btn btn-outline-success"><i class="far fa-thumbs-up"></i></button>
                  </div>
                </div>
                <div class="row votes">
                  <div class="col-sm-12">
                    <p>Votes</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 vote-down">
                    <button class="btn btn-outline-danger"><i class="far fa-thumbs-down"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="card question">
              <div class="card-header" v-if='userId === answer.userId._id'>
               Answer from you
              </div>
              <div class="card-header" v-else>
               Answer from {{answer.userId.name}}
              </div>
              <div class="card-body description">
                <p class="card-text">{{answer.answer}}</p>
                <small class="answer">{{answer.updatedAt}}</small>
              </div>
              <div class="card-footer" style="text-align:right!important">
                <button class="btn btn-info" v-if='userId === answer.userId._id'>edit</button>
                <button class="btn btn-danger" v-if='userId === answer.userId._id'>delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-header answer-title">
          Your Answer
        </div>
        <div class="card-body">
          <textarea name="answer" placeholder="Your Answer Here..." v-model='answer' id="" cols="80" rows="5"></textarea><br>
          <button class="btn btn-primary submit" @click="postAnswer">Submit</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Axios from 'axios'
export default {
  name: 'question_detail',
  components: {
    Navbar
  },
  data () {
    return {
      question: null,
      answerList: null,
      detailQuestion: '',
      answer: '',
      userId: localStorage.getItem('userId')
    }
  },
  created () {
    this.getDetailQuestion()
    this.getQuestion()
  },
  methods: {
    getQuestion () {
      this.answerList = this.$store.getters.getData
      this.$store.dispatch('getAnswer')
      return this.$store.getters.getData
    },
    getDetailQuestion () {
      Axios({
        method: 'get',
        url: `http://localhost:3000/questions/${this.$route.params.id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({data}) => {
        this.detailQuestion = data.question
      })
    },
    postAnswer () {
      Axios({
        method: 'post',
        url: `http://localhost:3000/answers/${this.$route.params.id}`,
        headers: {
          token: localStorage.getItem('token'),
          id: localStorage.getItem('userId')
        },
        data: {
          answer: this.answer
        }
      }).then(data => {
        this.$router.push('/')
        console.log(data)
      })
    }
  }
}
</script>

<style>
.answer-title
{
  text-align: left;
}
.description
{
  text-align: left;
}
.p
{
  margin-top: 1rem!important;
  margin-bottom: 1rem;
}
</style>

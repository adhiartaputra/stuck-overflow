<template>
<div>
  <navbar></navbar>
  <div class="container py-4">
    <div class="row">
      <div class="col-sm-4">
        <user-info></user-info>
        <!-- <div class="card">
          <div class="card-header">
            Welcome to Stuck-Overflow
          </div>
          <div class="card-body">
            <h5 class="card-title">Welcome to Stuck-Overflow</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div> -->
      </div>
      <div class="col-sm-8">
        <question></question>
        <!-- <div class="card question">
          <div class="card-header">
            Question Title
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'
import UserInfo from '@/components/UserInfo'

export default {
  name: 'Home',
  components: {
    Navbar,
    Question,
    UserInfo
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: '',
      input: ''
    }
  },
  created () {
    this.getQuestions()
    this.getData()
  },
  methods: {
    getData () {
      this.data = this.$store.state.questions
      // this.data = this.$store.getters.getData
      return this.$store.getters.getData
    },
    getQuestions () {
      this.$store.dispatch('getQuestion')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card-body
{
  text-align: left;
}
</style>

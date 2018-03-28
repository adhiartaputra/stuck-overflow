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
  name: 'HelloWorld',
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
    this.getData()
    this.getQuestions()
  },
  methods: {
    getData () {
      this.data = this.$store.getters.getData
      return this.$store.getters.getData
    },
    getAnswer () {
      this.$store.dispatch('getAnswer')
    },
    addCount () {
      this.$store.commit('increment')
    },
    postArticle () {
      this.$store.dispatch('postBlog', this.input)
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

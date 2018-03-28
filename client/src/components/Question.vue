<template>
  <div>
    <div class="card question" v-for='(question, index) in questions' :key=index>
      <div class="card-header">
        {{question.title}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{question._id}}</h5>
        <p class="card-text">{{question.detail}}</p>
        <router-link :to="{name: 'QuestionDetail', params:{id: question._id}}"> <button class="btn btn-primary">Detail</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data () {
    return {
      questions: null
    }
  },
  created () {
    this.getQuestion()
  },
  methods: {
    getQuestion () {
      this.questions = this.$store.state.questions
      return this.$store.getters.getData
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

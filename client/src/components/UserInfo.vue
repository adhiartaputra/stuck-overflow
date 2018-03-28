<template>
<div>
  <div class="card">
    <div class="card-header">
      User Info
    </div>
    <div class="card-body">
      <h5 class="card-title">Hello {{user.name}},</h5>
      <p class="card-text">Welcome to the place where you can find every answer for your question</p>
      <router-link :to="{name: 'postForm'}"> <button class="btn btn-primary">Ask Something?</button></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'user_info',
  data () {
    return {
      user: ''
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    getUser () {
      this.user = this.$store.state.user
      return this.$store.getters.getData
    }
  }
}
</script>

<style>

</style>

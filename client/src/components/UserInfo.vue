<template>
<div>
  <div class="card">
    <div class="card-header">
      User Info
    </div>
    <div class="card-body">
      <h5 class="card-title">Hey, {{user}}</h5>
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
      user: localStorage.getItem('name')
    }
  },
  created () {
  },
  methods: {}
}
</script>

<style>

</style>

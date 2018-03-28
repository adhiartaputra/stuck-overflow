<template>
  <div class="jumbotron">
      <h1>STUCK-OVERFLOW</h1><hr>
    <router-link to="Login"> <button class="btn btn-info">Login</button> </router-link> 
    <button class="btn btn-danger" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout: function () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>

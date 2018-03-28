<template>
  <div class="container login">
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
              <i class="fab fa-stack-overflow fa-5x"></i><hr>
              <h2>Welcome to STUCK-overflow</h2>
              <hr>
          </div>
      </div>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
              <div class="form-group has-danger">
                  <label class="sr-only" for="name">Name</label>
                  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div class="input-group-addon" style="width: 2.6rem"><i class="far fa-user"></i></div>
                      <input type="text" name="name" v-model='name' class="form-control" id="name" placeholder="name" required autofocus>
                  </div>
              </div>
          </div>
          <div class="col-md-3">
              <div class="form-control-feedback">
                <!-- error message if any -->
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
              <div class="form-group">
                  <label class="sr-only" for="email">Email Address</label>
                  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div class="input-group-addon" style="width: 2.6rem"><i class="far fa-envelope"></i></div>
                      <input type="email" name="email" v-model='email' class="form-control" id="email" placeholder="email" required>
                  </div>
              </div>
          </div>
          <div class="col-md-3">
              <div class="form-control-feedback">
                  <span class="text-danger align-middle">
                  <!-- Put password error message here -->    
                  </span>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
              <div class="form-group">
                  <label class="sr-only" for="password">Password</label>
                  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                      <input type="password" name="password" v-model='password' class="form-control" id="password" placeholder="password" required>
                  </div>
              </div>
          </div>
          <div class="col-md-3">
              <div class="form-control-feedback">
                  <span class="text-danger align-middle">
                  <!-- Put password error message here -->    
                  </span>
              </div>
          </div>
      </div>
      <div class="row" style="padding-top: 1rem">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <button type="submit" class="btn btn-info" @click='signup'>
            <i class="fas fa-sign-in-alt"></i>Register
          </button>
        </div>
      </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    signup: function () {
      let url = 'http://localhost:3000/users/signup'
      Axios.post(url, {
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then(data => {
          this.$router.push('/login')
          console.log(data)
        })
    }
  }
}
</script>

<style>
.login
{
  text-align: center;
  padding-top: 10rem;
  padding-bottom: 60px;
}
</style>

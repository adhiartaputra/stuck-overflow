<template>
<div>
  <navbar></navbar>
  <div class="container py-4">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            Need an answer?
          </div>
          <div class="card-body">
              <div class="form-group">
                <label for="title" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="title" v-model='title' required>
              </div>
              <div class="form-group">
                <label for="content" class="col-form-label">Description:</label>
                <textarea class="form-control" id="description" v-model='description' required></textarea>
              </div>
            <button class="btn btn-primary" @click="askQuestion">Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import axios from 'axios'
export default {
  name: 'post',
  components: {
    Navbar
  },
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    askQuestion: function () {
      let url = 'http://localhost:3000/questions/add'
      axios({
        method: 'post',
        url: url,
        data: {
          title: this.title,
          description: this.description
        },
        headers: {
          id: localStorage.getItem('userId')
        }
      }).then(data => {
        console.log(data)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
.card-body
{
  text-align: left;
}
</style>

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
            <form>
              <div class="form-group">
                <label for="title" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="title" v-model='title' required>
              </div>
              <div class="form-group">
                <label for="content" class="col-form-label">Description:</label>
                <textarea class="form-control" id="description" v-model='description' required></textarea>
              </div>
            </form>
            <button class="btn btn-primary">Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'post',
  components: {
    Navbar
  }
}
</script>

<style>

</style>

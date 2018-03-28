<template>
<div>
  <navbar></navbar>
  <h1>Question Detail</h1>
  <div class="row">
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
              <!-- <div class="row">
                <div class="col-sm-6">
                  <button class="btn btn-outline-danger"><i class="far fa-thumbs-down"></i></button>
                </div>
                <div class="col-sm-6 votes">
                  <p>Votes: </p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="card question">
            <div class="card-header">
              Answer from
            </div>
            <div class="card-body description">
              <p class="card-text">Answer Description</p>
              <small class="answer">Date</small>
            </div>
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
  name: 'question_detail',
  components: {
    Navbar
  }
}
</script>

<style>
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

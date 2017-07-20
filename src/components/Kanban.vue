<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column board card">
        <header class="card-header">
          <p class="card-header-title has-text-centered">
            Back Log
          </p>
        </header>
      </div>
      <div class="column board card">
        <header class="card-header">
          <p class="card-header-title has-text-centered">
            To Do
          </p>
        </header>
      </div>
      <div class="column board card">
        <header class="card-header">
          <p class="card-header-title has-text-centered">
            Doing
          </p>
        </header>
      </div>
      <div class="column board card">
        <header class="card-header">
          <p class="card-header-title has-text-centered">
            Done
          </p>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
import {firebaseApp} from '@/firebase'
export default {
  data () {
    return {
      backlogList: [],
      todoList: [],
      doingList: [],
      doneList: []
    }
  },
  methods: {
  },
  firebase: {
    backlogList: {
      source: firebaseApp.database().ref().child('backlogList')
    },
    todoList: {
      source: firebaseApp.database().ref().child('todoList')
    },
    doingList: {
      source: firebaseApp.database().ref().child('doingList')
    },
    doneList: {
      source: firebaseApp.database().ref().child('doneList')
    }
  }
}
</script>

<style lang="css">
  .board {
    margin-right: 1%;
    margin-left: 1%;
  }
</style>

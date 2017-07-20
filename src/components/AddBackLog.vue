<template lang="html">
  <section class="hero is-fullheight is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Add New Back Log
            </h1>
            <div class="box">
              <label class="label">Title</label>
              <p class="control">
                <input v-model='taskTitle' class="input" type="text" placeholder="Input task title here...">
              </p>
              <label class="label">Description</label>
              <p class="control">
                <input v-model='taskDesc' class="input" type="text" placeholder="Input task description here...">
              </p>
              <label class="label">Point</label>
              <p class="control">
                <input v-model='taskPoint' class="input" type="text" placeholder="Input task point here...">
              </p>
              <hr>
              <label class="label">Assignee</label>
              <p class="control">
                <input v-model='taskAssignee' class="input" type="text" placeholder="Input task assignee here...">
              </p>
              <hr>
              <p class="control">
                <button class="button is-primary">Add Back Log</button>
                <button class="button is-default"><router-link to="/">Cancel</router-link></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {firebaseApp} from '@/firebase'
export default {
  data () {
    return {
      taskTitle: '',
      taskDesc: '',
      taskPoint: 0,
      taskAssignee: ''
    }
  },
  methods: {
    addBackLog: function () {
      var self = this
      var taskKey = firebaseApp.database().ref().child('backlogList').push().key
      var taskData = {
        title: self.taskTitle,
        desc: self.taskDesc,
        point: self.taskPoint,
        assignee: self.taskAssignee
      }
      var taskLoc = {}
      taskLoc['/backlogList' + taskKey] = taskData
      firebaseApp.database().ref().update(updates)
    }
  }
}
</script>

<style lang="css">
</style>

<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter Name:</label>
          <input type="text" name="name" v-model="name">
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name:'Chat', params: { name: this.name} })
      } else {
        this.feedback = 'Must Enter Name to Join'
      }
    }}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome{
  max-width: 400px;
  margin-top: 80px;
}

.welcome h2{
  font-size: 3em;
}

.welcome button{
  margin: 30px auto;
}
</style>

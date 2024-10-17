<template>
  <h1>Job Details Page</h1>
  <div v-if="job">
<p> the job id is {{ id}}</p>
<p>{{job.title}}</p>
<p>{{job.details}}</p>
</div>
<div v-else>
    <p>Loading</p>
</div>
</template>

<script>
export default {
    props:["id"],
  data (){
    return{
        // id: this.$route.params.id,
        job: null
    }
  }
  ,
  mounted(){
        fetch('http://localhost:3000/jobs/' + this.id) 
        .then(res => res.json())
        .then(data=>this.job = data)
        .catch(err=>console.log(err))
    }
}
</script>

<style>

</style>
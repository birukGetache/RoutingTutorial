<template>
  <h1>Jobs</h1>

  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id">
        <RouterLink :to='{name:"JobDetails" , params:{id:job.id}}'>  <h2>{{ job.title }}</h2></RouterLink>
      </div>
  </div>
  <div v-else>
    <p>loading</p>
  </div>
  
</template>

<script>
export default {
data (){
   
    return{
        jobs:[
            
        ]
    }
  
},
mounted(){
        fetch('http://localhost:3000/jobs') 
        .then(res => res.json() )
        .then(data=>this.jobs = data)
        .catch(err=>console.log(err))
    }
    
}
</script>

<style>

</style>
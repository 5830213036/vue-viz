<template>
  <div class="index container  ">
    <div class="card hoverable" v-for="blog in blogs" :key="blog.id">
      <div class="card-content ">
        <i class="material-icons delete" @click="deleteBlog(blog.id)">delete</i>
        <h2 class="indigo-text">{{ blog.title }}</h2>
        <!-- from blogs => ingredients:[] -->
        <ul class="ingredients">
          <!-- blog from blog in blogs => blog.ingredients -->
          <li v-for="(ing , index) in blog.ingredients" :key="index">
            <span class="chip">{{ing}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return {
      blogs : [
      
      /* {
        title : 'Your a New Blog',
        description : 'Description',
        ingredients : ['blog1','blog2'],
        id:'1'
      },{
        title : 'Your a New Blog',
        description : 'Description',
        ingredients : ['blog3','blog4'],
        id:'2'
      }*/

      ]
    }
  },
  methods:{
    deleteBlog(id){
      //Delete doc from firestore
      db.collection('blogs').doc(id).delete()
      .then(() =>{
         this.blogs = this.blogs.filter(blog => {
        return blog.id != id 
        })
      })
      //console.log(id)
      
    }
  },
  created() {
    // fetch data from the firestore 
    db.collection('blogs').get()
      .then(snapshot =>{
          snapshot.forEach(doc => {
           // console.log(doc.data(), doc.id)
           let blog = doc.data()
           blog.id = doc.id
           this.blogs.push(blog)
          });
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid ;
  grid-template-columns: 1fr ;
  grid-gap: 10px;
  margin-top : 60px;
  max-width: 1000px;
  height: 500px;
}
.index h2 {
  font-size: 1.8em ;
  text-align: center ;
  margin-top: 0px;
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block ;
}
.index .delete{
  position: absolute ;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa ;
  font-size: 1.4em;
}
</style>

<template>
    <div v-if="blog" class="edit-blog container">
        <div class="card center ">
            <div class="card-content">
        <h2>Edit a Blog {{ blog.title }}
            <!--{{ this.$route.params.blog_slug }} -->
            </h2>
            <form @submit.prevent="Editblog">
            <div class="field title">
                <label for="title">Blog Title : </label>
                <input type="text" name="title" v-model="blog.title">
            </div>
            <div v-for="(ing, index) in blog.ingredients" :key="index" class="field">
                <label for="ingredient">ingredient:</label>
                <input type="text" name="ingredient" v-model="blog.ingredients[index]">
                <i class="material-icons delete" @click="deleteing(ing)">delete</i>
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="Adding" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{feedback}}</p>
                <button class="btn pink">Update Blog
                <i class="material-icons right">send</i>
                </button>
            </div>
        </form>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
name : 'Editblog',
data(){
    return{
        blog : null,
        another : null ,
        feedback: null
    }
},
methods:{
    Editblog(){
        //console.log(this.blog.title , this.blog.ingredients)
        if(this.blog.title){
               this.feedback = null
               //create a slug 
               this.blog.slug = slugify(this.blog.title,{
                   replacement: '-',
                   remove:/[$*_+~.()'"!\-:!@]/g,
                   lower: true
               })
              // console.log(this.slug)
               db.collection('blogs').doc(this.blog.id).update({
                  title : this.blog.title ,
                  ingredients : this.blog.ingredients,
                   slug: this.blog.slug
               }).then(() =>{
                   this.$router.push({name:'Index'})
               }).catch(err =>{
                   console.log(err)
               })
           }else {
               this.feedback = 'You must enter a Blog title'
           }
    },
    Adding(){
            if(this.another){
                this.blog.ingredients.push(this.another)
                //console.log(this.ingredients)
               this.another = null 
               this.feedback = null 
            }else{
                this.feedback = 'You must enter a value to add an ingredient'
            }
        },
        deleteing(ing){
            this.blog.ingredients = this.blog.ingredients.filter(ingredients =>{
                return ingredients != ing
            })
        }
    
},
created() {
    let ref = db.collection('blogs').where('slug','==' ,this.$route.params.blog_slug )
    ref.get().then(snapshot => {
        snapshot.forEach(doc => {
            //console.log(doc.data())
            this.blog = doc.data()
            this.blog.id = doc.id
        });
    })
    }
}
</script>

<style>
.edit-blog{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
    
}
.edit-blog h2{
    font-size: 2em;
    margin: 20px auto;
}
.edit-blog .field{
    margin: 20px auto ;
    position: relative;
}
.edit-blog .delete{
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa ;
    font-size: 1.4em ;
    cursor: pointer;
}

</style>

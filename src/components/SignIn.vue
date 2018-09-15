<template>
    <div class="row">
        <h2>Signin</h2>

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input id="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input id="password" v-model="formData.password" class="form-control" type="password" placeholder="password">
            <br>
            <button class="btn btn-success" @click="signIn()">Signin</button>
        </div>

    </div>
</template>

<script>
import firebase from '@/firebase/init'
    export default {
        name: 'SignIn',
        data () {
            return {
                formData:{
                    email:'',
                    password:''
                }
            }
        },
methods: {
            signIn(){
            firebase.auth().signInWithEmailAndPassword(this.formData.email,this.formData.password)
                .then((user)=>{
                  // Do Something After Sign in
                  this.$store.commit('signinState', true)
                  this.$router.replace('/')                  
                })
                .catch((e)=>{
                    alert(e.message)
                })
            },   
            // signOut(){
            //   firebase.auth().signOut().then(function() {
            //     //Do Something after Sign out
            //     this.$store.commit('signinState', false);
            //     console.log('signout');
            //     this.$router.replace('/sign-in');
            //   }).catch(function(error) {
            //     // An error happened.
            //   });
            // }        
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
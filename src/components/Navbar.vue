<template>
    <div class="navbar">
        <nav class="nav-extended teal lighten-2">
            <div class="nav-content">
                <router-link :to="{ name: 'Index' }">
                    <span class="nav-title">PTEI Visualization</span>
                </router-link>
                

                
                <router-link v-if="signinState == false" :to="{ path: '/sign-in' }" class="right hide-on-med-and-down">
                    <span v-if="signinState == false" class="nav-title">Sign In</span>
                </router-link>

                <router-link v-if="signinState == true" :to="{ path: '/' }" class="right hide-on-med-and-down">
                    <span @click="logout()" v-if="signinState == true" class="nav-title">Sign Out</span>
                </router-link>
                

                <a href="" class="btn-floating btn-large halfway-fab pink">
                    <router-link :to="{ name: 'Addblog' }">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>

  

            <!-- Search form -->
        
      
  

        <!-- imagae -->
          </div>
</template>

<script>
import firebase from "@/firebase/init";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  computed: {
    signinState: function() {
      var state = this.$store.state.signinState;
      return state;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          //Do Something after Sign out
          this.$store.commit("signinState", false);
          console.log("signout");
        })
        .catch(function(error) {
          // An error happened.
          console.log(error);
        });
    }
  }
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
.responsive-img {
  max-width: 100%;
  height: auto;
}

</style>

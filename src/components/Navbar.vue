<template>
    <div class="navbar">
        <nav class="nav-extended teal lighten-2">
            <div class="nav-content">
                <router-link :to="{ name: 'Index' }">
                    <span class="nav-title">PTEI Visualization</span>
                </router-link>
                <a href="" class="btn-floating btn-large halfway-fab pink">
                    <router-link :to="{ name: 'Addblog' }">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
        <!-- imagae -->
          </div>
</template>

<script>
export default {
    name:'Navbar',
    data(){
        return {

        }
    }
}
</script>

<style>
.navbar nav{
    padding: 0 20px;
}
.responsive-img{
    max-width: 100% ;
    height:auto ;
}
</style>

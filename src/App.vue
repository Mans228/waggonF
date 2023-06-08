

<template>
    <div id="app">
        
            <header><Nav></Nav></header>
        
        
        <body>
            <RouterView></RouterView>
            
                
            
        </body>
        
        
        
    </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
import Bremsprotokoll from "./components/Bremsprotokoll.vue"
import axios from 'axios'



</script>

<style>

</style>


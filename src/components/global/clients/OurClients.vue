<template>
  <div class="our-clients">
        <div class="container">
            <div class="row" >
                <Client 
                v-for="client in clients" 
                :key="client.id" 
                :client="client"/>
            </div>
        </div>
    </div>
</template>

<script>
import Client from './Client.vue';
export default {
    name:'our-clients',
    props:{
        clients:Array
    },
    components:{Client}
}
</script>

<style lang="scss" scoped>
    .row{
    }
</style>
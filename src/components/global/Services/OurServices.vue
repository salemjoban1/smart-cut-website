<template>
    <div id="our-services">
        <div class="container">
            <div class="row g-3 " >
                <service 
                v-for="service in services" 
                :key="service.id" 
                :service="service"/>
            </div>
        </div>
    </div>
</template>

<script>
import service from'./Service.vue'
export default {
    name:'our-services',
    props:{
        services:Object
    },
    components:{
        service
    }
}
</script>

<style lang="scss" scoped>
    .inner-content{
        background-color: rgb(153, 158, 161);
    }
</style>
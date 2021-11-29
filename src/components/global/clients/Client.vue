<template>
    <div class="client col-6 col-sm-5">
        <img :src="require(`../../../assets/clients/${client.imgsrc}`)" 
             :alt="client.altText" :title="client.name">
    </div>
</template>

<script>
export default {
    name:'client',
    props:{
        client:Object
    }
}
</script>

<style lang="scss" scoped>
    .client{
        display: flex;
        align-items: center;
        justify-content: center;
        padding:1rem;
        img{
            width:80%;
            
        }
    }

</style>
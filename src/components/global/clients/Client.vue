<template>
    <div class="client col-sm-6 col-lg-3">
        <img :src="require(`../../../assets/clients/${client.imgsrc}`)" alt="">
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
        padding:1.5rem 1rem;

        img{
            width:70px;
            height:70px;
        }
    }

</style>
<template>
    <div class="service col-sm-6 col-lg-3">
        <div class="inner-content">
            <img :src="require(`../../../assets/services/${service.imgsrc}`)" alt="">
            <h4>{{service.name}}</h4>
        </div>
    </div>

</template>

<script>
export default {
    name:'service',
    props:{
        service:Object
    }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
    .inner-content{
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        background-color: #12348a;
        padding:1.5rem 1rem;

        img{
            width:70px;
            height:70px;
        }
        h4{
            padding-top:1rem;
            color:#fff
        }
    }
</style>
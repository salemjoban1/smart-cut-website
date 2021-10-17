<template>
    <div class="service col-sm-6 col-md-4 col-lg-3">
        <div class="inner-content">
            <img :src="require(`../../../assets/services/${service.imgsrc}`)" alt="">
            <h4>{{service.name}}</h4>
        </div>
        <div class="details-dilog">
            <div class="close"></div>
            <p>{{'dffdsfdffdsfdffdsf'}}</p>
        </div>
    </div>

</template>

<script>
export default {
    name:'service',
    props:{
        service:Object
    },
    computed:{
        test:function(){
            // let test = document.getElementsByClassName('service');
            console.log('dobe');
            return this.service;
        }
        
    }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
    .service{
        position:relative;
        .inner-content{
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            background-color: $primeColor;
            padding:1.5rem 0;

            img{
                width:70px;
                height:70px;
            }
            h4{
                padding-top:1rem;
                color:#fff
            }
        }
        .details-dilog{
            position:absolute;
            display:flex;
            flex-wrap: wrap;
            // width:100%;
            // height:160px;
            right:0;
            bottom:-40px;
            z-index:3;
            background-color: #fff;
        }
    }
</style>
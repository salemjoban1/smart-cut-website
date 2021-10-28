<template>
    <div class="service col-6 col-md-3 col-lg-3">
        <div class="all-services-content">
            <div class="inner-content" :class="{show:service.showWindow}">
                <img :src="require(`../../../assets/services/${service.imgsrc}`)" alt="">
                <h4>{{service.name}}</h4>
            </div>
            <div v-if="service.showWindow" class="details-window" :style="{'width':ServiceDimensions.fullWidth}">
                <div class="top-part">
                    <div class="close-btn">
                        <span class="line"></span>
                    </div>
                </div>
                <p>{{service.description}}</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'service',
    props:{
        service:Object,
        ServiceDimensions:Object
    },
    computed:{
        // matchHeight:function(){
        //     let serviceContent = document.querySelector('.inner-content');
        //     console.log(serviceContent);
        //     return serviceContent;
        // },
    },
    mounted() {
            this.matchHeight;
        },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
    .service{
        padding:20px 0 0 20px;
        position:relative;
        .all-services-content{
            
            .inner-content{
                position: relative;
                display: flex;
                flex-direction:column;
                align-items: center;
                justify-content: center;
                border:solid 2px $primeColor;
                padding:1.5rem 0;
                cursor:pointer;
                &::after{
                    display:none;
                    content:'';
                    position: absolute;
                    width:0;
                    height:0;
                    bottom: -17px;
                    right:40%;
                    border-width:17px;
                    border-style:solid;
                    border-color:transparent transparent blue transparent;
                }
                &.show{
                    &::after{
                        display:inline-block;
                    }
                }
                &:hover{
                    box-shadow: -1px 6px 9px 2px #c1c2d6;
                }
                img{
                    width:70px;
                    height:70px;
                }
                h4{
                    padding-top:1rem;
                    color:$primeColor;
                    text-align: center;
                }
            }
            .details-window{
                position:absolute;
                display:flex;
                flex-direction: column;
                // width:680px;
                // height:196px;
                right:0;
                // replace with variable
                top:100%;
                margin-top:15px;
                z-index:3;
                background-color: #fff;
                border:2px solid blue;
                .top-part{
                    background-color: blue;
                    display: flex;
                    justify-content: flex-end;
                    padding:0 0 0.5rem 0.5rem;
                    .close-btn{
                        color:#fff;
                        cursor: pointer;
                        span{
                            position: relative;
                            display: inline-block;
                            width:15px;
                            height:2px;
                            background-color: #fff;
                            transform:rotate(45deg) ;
                            &::after{
                                content:'';
                                position: absolute;
                                top:5px;
                                right:0;
                                width:15px;
                                height:2px;
                                background-color: #fff;
                                transform:rotate(-90deg) translate(5px,0);
                            }
                        }
                    }
                    p{
                        
                    }
                }
                p{
                    margin:2rem;
                    word-spacing: 3px;
                }
            }
        }
        
    }
</style>
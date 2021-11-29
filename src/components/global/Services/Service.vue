<template>
    <!-- services.classType detrmine if its full page width(description window), or service box width  -->
    <div class="service"
        :class="service.classType"
        v-scrollanimation>
        <!-- has service main contents (img-title-border) -->
        <div class="content-box" v-if ="!service.descriptionWindow" >
            <!-- 'inner-content' wrap contents in a border box and 'show' class
                shows the arrow based on service arrow attribute value  -->
            <div class="inner-content"
                :class="{show:service.arrowVisible}">
                <img :src="require(`../../../assets/services/${service.imgSrc}`)"
                     :alt="service.altText">
                <h4>{{service.name}}</h4>
            </div>
        </div>
        <!-- has description window contents -->
        <!-- 'description-window' wrap contents in a border box and 'show' class
                shows the descreiption box based on service isopen attribute value  -->
        <div v-else-if ="service.descriptionWindow"
            class="description-window"
            :class="{show:service.isOpen}">
            <div class="top-part">
                <!-- when clicked emits event to parent component -->
                <div class="close-btn" @click="$emit('close-window')">
                    <span></span>
                </div>
            </div>
            <p>{{serviceDescription}}</p>
        </div>
    </div>

</template>

<script>
export default {
    name:'service',
    props:{
        //comes from our services component
        service:Object, 
        //comes from our services component changing whenever clicked to service box
        serviceDescription:String, 
    },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
    .service{
        // space between service boxes
        padding:0;
        // 'relative'to move arrow besed on this div
        position:relative;
        &.before-enter{
            transform: translateY(50px);
            opacity:0.5;
            }
        &.enter{
            transform:translateY(0px);
            opacity:1;
            @include transition-long;
        }
        .content-box{
            padding:7.5px;
            .inner-content{
                position: relative;
                display: flex;
                flex-direction:column;
                align-items: center;
                justify-content: center;
                border:solid 2px $primeColor;
                padding:1.5rem 0.5rem;
                cursor:pointer;
                // arrow style
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
                    border-color:transparent transparent rgb(0, 0, 255) transparent;
                    @include transition-ease;
                }
                &.show{
                    &::after{
                        display:inline-block;
                    }
                }
                &:hover{
                    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;;
                    -moz-box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;;
                    -ms-box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;;
                     box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                    
                }
                img{
                    width:70px;
                    height:70px;
                }
                h4{
                    padding-top:1rem;
                    color:rgb(66, 66, 66);
                    text-align: center;
                }
            }
        }
        .description-window{
            margin:7.5px; 
            position: relative;
            overflow: hidden;
            display:none;
            flex-direction: column;
            background-color: #fff;
            border:2px solid rgb(0, 0, 255);
            -webkit-animation-duration:1s;
            -moz-animation-duration:1s;
            -ms-animation-duration:1s;
            animation-duration:1s;
            -webkit-animation-name:ease-open-service;
            -moz-animation-name:ease-open-service;
            -ms-animation-name:ease-open-service;
            animation-name:ease-open-service;
            .top-part{
                margin:0;
                background-color: rgb(0, 0, 255);
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
                        -webkit-transform:rotate(45deg);
                        -moz-transform:rotate(45deg) ;
                        -ms-transform:rotate(45deg) ;
                        transform:rotate(45deg) ;
                        &::after{
                            content:'';
                            position: absolute;
                            top:5px;
                            right:0;
                            width:15px;
                            height:2px;
                            background-color: #fff;
                            -webkit-transform:rotate(-90deg) translate(5px,0);
                            -moz-transform:rotate(-90deg) translate(5px,0);
                            -ms-transform:rotate(-90deg) translate(5px,0);
                            transform:rotate(-90deg) translate(5px,0);
                        }
                    }
                }
            }
            p{
                margin:2rem;
                word-spacing: 0.3rem;
                font-size:1.2rem;
                font-weight: 500;
            }
            &.show{
                display:flex;
                -webkit-animation-duration:1s;
                -moz-animation-duration:1s;
                -ms-animation-duration:1s;
                animation-duration:1s;
                -webkit-animation-name:ease-open-service;
                -moz-animation-name:ease-open-service;
                -ms-animation-name:ease-open-service;
                animation-name:ease-open-service;
            }
        }
        
    }
    // animation
    @keyframes ease-open-service {
        0%{
            height: 0;
        }
        100%{
            height: 100%;
        }
    }
</style>
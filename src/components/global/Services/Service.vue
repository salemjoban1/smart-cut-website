<template>
    <div class="service"
        :class="service.classType">
        <div class="content-box" v-if ="!service.descriptionWindow" >
            <div class="inner-content"
                :class="{show:service.arrowVisible}">
                <img :src="require(`../../../assets/services/${service.imgSrc}`)"
                     :alt="service.altText">
                <h4>{{service.name}}</h4>
            </div>
        </div>
        <div v-else-if ="service.descriptionWindow"
            class="description-window"
            :class="{show:service.isOpen}">
            <div class="top-part">
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
        service:Object,
        serviceDescription:String,
    },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
    .service{
        padding:14px 0 0 18px;
        position:relative;
        .content-box{
            .inner-content{
                position: relative;
                display: flex;
                flex-direction:column;
                align-items: center;
                justify-content: center;
                border:solid 2px $primeColor;
                padding:1.5rem 0.5rem;
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
                    @include transition-ease;
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
                    color:rgb(66, 66, 66);
                    text-align: center;
                }
            }
        }
        .description-window{
            overflow: hidden;
            display:none;
            flex-direction: column;
            // replace with variable
            background-color: #fff;
            border:2px solid blue;
            animation-duration:1s;
            animation-name:ease-open-service;
            animation-fill-mode: forwards;
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
            }
            p{
                margin:2rem;
                word-spacing: 3px;
                font-weight: 500;
            }
            &.show{
                display:flex;
                animation-duration:1s;
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
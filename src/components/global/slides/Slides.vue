<template>
    <div class="slides">
        <!-- <div class="outer-width"> -->
            <div class="pagination">
                <span class="inner-width"  
                    v-for="(slide,index) in slides" 
                    :key="index"
                    @click="updateCurrentSlide(index)">
                    <span class="line" :class="{active:index+1 === currentSlide}"></span>
                </span>
            </div>
                <Slide v-for="(slide,index) in slides" :key="index">
                    <transition name="slide-move">
                        <div v-show=" currentSlide === index+1" class="slide-inner"
                        :style="{'background-image':'url(' + require(`../../../assets/slides/${slide.imgsrc}.png`) + ')'}">
                            <div class="content">
                                <h1 class="header">{{slide.header}}</h1>
                                <h3 class="subHeader">{{slide.subHeader}}</h3>
                                <div v-show="slide.hasBtn && index + 1 === currentSlide">
                                    <a href="#contact"><button class="btn-contact">{{slide.btn}}</button></a>
                                </div>
                            </div>
                        </div>
                    </transition>
                </Slide>
            
        <!-- </div> -->
    </div>
</template>

<script>
import Slide from './Slide.vue'
export default {
    name:'slides',
    props:{
        slides:Array
    },
    data(){
        return{
            slideLen:this.slides.length,
            currentSlide:1,
            lineActive:true,
            slideInterval:null
        }
        
    },
    components:{
        Slide
    },
    methods: {
        updateCurrentSlide:function(index){
            this.currentSlide = index + 1;
        },

    },
    mounted(){
        this.slideInterval = setInterval(() => {
            if (this.currentSlide < this.slideLen)
            {
                this.currentSlide++;
            }
            else
            {
                this.currentSlide = 1;
            }
        }, 4000);
    },
    beforeDestroy(){
        clearInterval(this.slideInterval);
    }

}
</script>

<style lang="scss">
@import '../../../scss/main.scss';   
    .slides{
        width:100vw;
        height: calc(100vh - #{$navHight});
        // min-height: 36rem;
        position:relative;
        overflow: hidden;
        .pagination{
            z-index:5;
            width:50px;
            position:absolute;
            right:3%;
            top:40%;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;       
            align-items:center;
            .inner-width{
                width:100%;
                height:18px;
                cursor:pointer;
                .line{
                    display:inline-block;
                    width:35px;
                    height: 2px;
                    background-color: #fff;
                    @include transition-ease;
                    &.active{
                        position: relative;
                        transform:translateX(-15px);
                        @include transition-ease;
                    }
                    &.active::before{
                        content:'';
                        position:absolute;
                        right:-15px;
                        top:-3px;
                        width:3px;
                        height: 8px;
                        background-color: #fff;
                        @include transition-ease;
                        // transform: translateX(-7px);
                    }       
                }
            }
        }
        .slide-inner{
            position:absolute;
            top:0;
            right:0;
            background-size:cover;
            background-position: center center;
            z-index: 3;
            height: 100%;
            width: 100%;
            // background-color: #000;
            
            .content{
                // transform: translateY(-50%);
                z-index:3;
                display:flex;
                flex-direction: column;
                padding:0 1rem;
                position:absolute;
                top:20%;
                // count the formula
                right:20%;
                width:70%;
                .header{
                    color:#fff;
                }
                .subHeader{
                    padding:25px 0;
                    color:#fff;
                    font-size:1.5rem;
                    font-weight: normal;
                }
                a{
                    width:10rem;
                }
                .btn-contact{
                    width:fit-content;
                    background: none;
                    color:$primeColor;
                    font-size: 1.2rem;
                    font-weight: bold;
                    align-self:flex-start;
                    border:none;
                    background-color:$secondColor;
                    padding:0.5rem 1.6rem;
                    cursor:pointer;
                    // position:relative;
                    // &::before{
                    //     content:'';
                    //     position:absolute;
                    //     width:3px;
                    //     left:0;
                    //     top:0;
                    //     height: 100%;
                    //     background-color: $secondColor;
                    // }
                    // &::after{
                    //     content:'';
                    //     position:absolute;
                    //     width:3px;
                    //     right:0;
                    //     top:0;
                    //     height: 100%;
                    //     background-color: $secondColor;

                    // }
                }
            }
            .filter{
                img{
                    // min-width:100%;
                    width:100%;
                    height: 100%;  
                    // object-fit: cover;          
                }
                &::after{
                    content:'';
                    position: absolute;
                    top:0;
                    right:0;
                    background-color:rgba(2, 62, 128, 0.534);
                    width: 100%;
                    height: 100%;
                }
            }
            
        }
        .slide-move-enter-active{
            transition: all 1s ease-in-out;
        }
        .slide-move-leave-active {
            transition: all 0.5s ease-in-out;
            transform:translateX(-50);
            }

        .slide-move-enter-from{
            transition: all 0.5s ease-in-out;
            transform:translateX(0);
        }
        .slide-move-leave-to {
            opacity: 0;
            transform:translateX(0);
         }
    }
    
</style>
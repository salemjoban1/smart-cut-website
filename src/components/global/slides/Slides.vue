<template>
    <div class="slides">
        <!-- <div class="outer-width"> -->
            <div class="pagination">
                <span class="inner-width"  
                    v-for="(slide,index) in slides" 
                    :key="index"
                    @click="switchToSlider(index + 1)">
                    <span class="line" :class="{active:index+1 === currentSlide}"></span>
                </span>
            </div>
                <Slide v-for="(slide,index) in slides" :key="index">
                    <transition name="slide" appear>
                        <div v-show=" currentSlide === index+1" class="slide-inner"
                        :style="{'background-image':'url(' + require(`../../../assets/slides/${slide.imgsrc}.png`) + ')'}">
                            <div class="content">
                                <h1 v-show="slide.hasText" class="header">{{slide.header}}</h1>
                                <h3 v-show="slide.hasText" class="subHeader">{{slide.subHeader}}</h3>
                                <div v-show="slide.hasBtn && index + 1 === currentSlide">
                                    <a href="#contact" v-show="slide.hasBtn">
                                        <button class="btn-contact" >
                                            {{slide.btn}}
                                        </button>
                                    </a>
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
        slides:Array,
    },
    data(){
        return{
            slideLen:this.slides.length,
            currentSlide:1,
            lineActive:true,
            slideInterval:null,
            timer:7000
        }
        
    },
    components:{
        Slide
    },
    methods: {
        updateCurrentSlide:function(index){
            this.currentSlide = index;
        },
        nextSlide:function(steps = 1){
            const index = this.currentSlide < this.slideLen ? this.currentSlide + steps:1;
            this.updateCurrentSlide(index);
            this.startSlideTimer();
        },
        previousSlide:function(steps = -1){
            const index = this.currentSlide > 1 ? this.currentSlide + steps:1;
            this.updateCurrentSlide(index);
            this.startSlideTimer();
        },
        switchToSlider:function(index){
            const steps = index - this.currentSlide;
            if (steps > 0){
                this.nextSlide(steps);
            }else{
                this.previousSlide(steps);

            }
        },
        startSlideTimer:function(){
            this.stopSlideTimer();
            this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.timer);
        },
        stopSlideTimer:function(){
            clearInterval(this.slideInterval);
        }
    },
    mounted(){
        this.startSlideTimer();
    },
    beforeDestroy(){
        this.stopSlideTimer();
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
            right:4vw;
            top: 28vh;
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
                        -webkit-transform:translateX(-15px);
                        -moz-transform:translateX(-15px);
                        -ms-transform:translateX(-15px);
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
            // min-height:300px;
            width: 100%;
            .content{
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
                    // name | duration | delay
                    -webkit-animation:cutTextDownFromTop 2s 0.5s;
                    -moz-animation:cutTextDownFromTop 2s 0.5s;
                    -ms-animation:cutTextDownFromTop 2s 0.5s;
                    animation:cutTextDownFromTop 2s 0.5s;
                }
                .subHeader{
                    padding:25px 0;
                    color:#fff;
                    font-size:1.5rem;
                    font-weight: normal;
                    -webkit-animation:cutTextDownFromTop 2s 0.5s;
                    -moz-animation:cutTextDownFromTop 2s 0.5s;
                    -ms-animation:cutTextDownFromTop 2s 0.5s;
                    animation:cutTextDownFromTop 2s 0.5s;
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
                    // // for future updating 
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
            // for future updating (readt filter applying to original picutres)
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
        .slide-enter-active,
        .slide-leave-active{
            transition: all 1.5s ease-in-out;
        }
        .slide-enter-from{
            transform:translateX(-100%);
        }
        .slide-leave-to {
            transform:translateX(0);
         }
        // .fade-enter-active,
        // .fade-leave-active{
        //     transition: all 1.5s ease-in-out;
        // }
        //  .fade-enter-from{
        //      opacity:0;
        //  }
        //  .fade-leave-to{
        //      opacity: 1;
        //  }
    }
    // animation
    @keyframes cutTextDownFromTop {
    from {
        -webkit-clip-path: inset(0 0 100% 0);
        -moz-clip-path: inset(0 0 100% 0);
        -ms-clip-path: inset(0 0 100% 0);
        clip-path: inset(0 0 100% 0);
    }
    to {
        -webkit-clip-path: inset(0 0 -30% 0);
        -moz-clip-path: inset(0 0 -30% 0);
        -ms-clip-path: inset(0 0 -30% 0);
        clip-path: inset(0 0 -30% 0);
        opacity: 1;
    }
}
    
</style>
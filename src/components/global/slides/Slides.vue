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
                <div v-show=" currentSlide === index+1" class="slide-inner"
                :style="{'background-image':'url(' + slide.imgsrc + ')'}">
                    <div class="content">
                        <h1 class="header">{{slide.header}}</h1>
                        <h3 class="subHeader">{{slide.subHeader}}</h3>
                        <a href="#contact"><button class="btn-contact">تواصل معنا</button></a>
                    </div>
                    <!-- <div class="filter"> -->
                        <!-- <img :src="require(`../../../assets/slides/${slide.imgsrc}`)" alt=""> -->
                    <!-- </div> -->
                </div>
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
            lineActive:true
        }
        
    },
    components:{
        Slide
    },
    methods: {
        updateCurrentSlide:function(index){
            this.currentSlide = index + 1;
        } 
    },

}
</script>

<style lang="scss">
@import '../../../scss/main.scss';   
    .slides{
        width:100vw;
        height: calc(100vh - #{$navHight});
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
                    &.active{
                        position: relative;
                        transform:translateX(-15px);
                    }
                    &.active::before{
                        content:'';
                        position:absolute;
                        right:-15px;
                        top:-3px;
                        width:3px;
                        height: 8px;
                        background-color: #fff;
                        // transform: translateX(-7px);
                    }       
                }
            }
        }
        .slide-inner{
            position:absolute;
            top:0;
            right:0;
            background-image:url("../../../assets/slides/01.png");
            background-size:cover;
            background-attachment: center center;
            z-index: 3;
            height: 100%;
            width: 100%;
            background-color: #000;
            .content{
                z-index:3;
                display:flex;
                flex-direction: column;
                padding:0 1rem;
                position:absolute;
                top:20%;
                // count the formula
                right:20%;
                width:60%;
                .header{
                    color:#fff;
                }
                .subHeader{
                    padding:25px 0;
                    color:#fff;
                    font-size:1.5rem;
                    font-weight: normal;
                }
                .btn-contact{
                    color:$primeColor;
                    font-size: 1.2rem;
                    font-weight: bold;
                    align-self:flex-start;
                    border:none;
                    background-color:$secondColor;
                    padding:8px 26px;
                    cursor:pointer;
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
    }
    
    
</style>
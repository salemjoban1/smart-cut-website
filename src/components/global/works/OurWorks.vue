<template>
  <div class="our-works">
        <!-- if not in mobile view -->
        <div v-if="!mobileView" class="container">
            <!-- loop in special array which has after 4 services one description box for them-->
            <div class="works-group row" 
            v-for="(worksGroup,parent_index) in worksDevided" 
            :key="parent_index"
            v-show="currentWorksGroup === parent_index +1">
                <!-- loop in each object of parent array to show each work div -->
                <Work class="col-md-6 col-lg-4" 
                v-for="(work,index) in worksGroup" 
                :key="index" :work="work"
                @click="playVideo(parent_index,index)"/> <!-- enter parent index and child index to find the specific element index-->
                <!-- youtube player window shows when clicks video poster -->
                <div class="video-player"
                    :class="{open:openPlayer}" @click="openPlayer=false,videoLink=null">
                    <div class="close-btn">
                        <span></span>
                    </div>
                    <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${videoLink}`" :title="videoTitle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div v-else-if="mobileView" class="container">
            <div class="works-group mobile row" 
                v-for="(work,index) in allWorks" 
                :key="index"
                v-show="mobileCurrentWorks === index +1">
                
                <div class="col-11">
                <!-- <iframe width="100%" height="250px" :src="`https://www.youtube.com/embed/${work.videoLink}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <AsyncYoutube :work="work" height="250px"/>
                </div>
                <!-- <div class="video-player"
                    :class="{openMobile:openPlayer}" @click="openPlayer=false,videoInfo=null">
                    <div class="close-btn">
                        <span></span>
                    </div>
                    <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${videoInfo}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> -->
            </div>
        </div>
        <div class="pagination">
            <div class="right-arrow" 
            :class="{hideArrowRight:hideArrowRight}"
            @click="moveToRight(),changeArrowsVisibility()">
                <span></span>
            </div>
            <div class="btns">
                <div v-if="!mobileView" class="condition">
                    <span v-for="(worksGroup,index) in worksDevided" 
                    :key="index"
                    @click="updateCurrentGroup(index),changeArrowsVisibility()"
                    :class="{active:currentWorksGroup === index + 1}"></span>
                </div>
            </div>
            <div class="left-arrow" 
            :class="{hideArrowLeft:hideArrowLeft}"
            @click="moveToLeft(),changeArrowsVisibility()">
                <span></span>
            </div>
        </div>
      
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import Work from './Work.vue';
const AsyncYoutube = defineAsyncComponent(() =>  import('@/components/global/works/Youtube.vue') /*webpackChunkName: "works" */ );

export default {
    name:'our-works',
    data(){
        return{
            currentWorksGroup:1,
            mobileCurrentWorks:1,
            hideArrowRight:true,
            hideArrowLeft:false,
            workGroupHeight:0,
            openPlayer:false,
            // store video link from clicked object
            videoLink:null,
            // store video title from clicked object
            videoTitle:null,
        }
    },
    props:{
        worksDevided:Array,
        allWorks:Array,
        mobileView:Boolean
        },
    components:{
        Work,
        AsyncYoutube
    },
    methods:{
        matchGroupsHeight:function(){
            let workGroups = document.getElementsByClassName('works-group');
            for(let i=0; i < workGroups.length; i++) 
            {
                if(workGroups[i].offsetHeight > this.workGroupHeight)
                {
                    console.log(i,workGroups[i].offsetHeight);
                    this.workGroupHeight = workGroups[i].offsetHeight; 
                }else{
                    console.log(i,workGroups[i].offsetHeight);
                }
                
            }
            for(let j = 0; j < workGroups.length; j++) 
            {
                workGroups[j].style.height = `${this.workGroupHeight}px`; 
            }
        },
        updateCurrentGroup:function(index){
            if(this.mobileView){
                this.mobileCurrentWorks = index + 1;
            }else{
                this.currentWorksGroup = index + 1;
            }
            
        },
        changeArrowsVisibility:function(){
            if ((this.currentWorksGroup === this.worksDevided.length)
                 && (!this.mobileView))
            {
                this.hideArrowLeft = true;
            }
            else if ((this.mobileCurrentWorks === this.allWorks.length) 
                    && (this.mobileView))
            {
                this.hideArrowLeft = true;
            }
            else
            {
                this.hideArrowLeft = false;
            }

            if ((this.currentWorksGroup === 1) && (!this.mobileView))
            {
                this.hideArrowRight = true;
            }
            else if ((this.mobileCurrentWorks === 1) && (this.mobileView))
            {
                this.hideArrowRight = true;
            }
            else
            {
                this.hideArrowRight = false;
            }
        },
        moveToLeft:function(){
            if(this.hideArrowLeft === true){
                return;
            }
            else if (!this.mobileView)
            {
                this.currentWorksGroup++;
            }
            else if (this.mobileView)
            {
                this.mobileCurrentWorks++;
            }
            
        },
        moveToRight:function(){
            if(this.hideArrowRight){
                return;
            }
            else if (!this.mobileView)
            {
                this.currentWorksGroup--;
            }
            else if (this.mobileView)
            {
                this.mobileCurrentWorks--;
            }
        },
        playVideo:function(parent_index,index){
            for(let i = 0; i < this.worksDevided.length; i++)
            {
                for (let j = 0; j < this.worksDevided[i].length; j++)
                {
                    if ((parent_index === i) && (index === j))
                    {
                        this.openPlayer = !this.openPlayer;
                        this.videoLink = this.worksDevided[i][j].videoLink;
                        this.videoTitle = this.worksDevided[i][j].title;
                    }
                }
            }
        }
    },
    watch:{
        mobileView:function(val){
            this.changeArrowsVisibility();
        }
    },
    mounted(){
        this.matchGroupsHeight(); 
    }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
    .our-works{
        .container{
            margin:0 auto;
        }
        .works-group{
            position:relative;
            @include transition-ease;
            &.mobile{
                justify-content:center;
            }
            
            .video-player{
                display:none;
                position:fixed;
                margin-top:0;
                top:0;
                right:0;
                width:100%;
                background-color:rgba(0, 0, 0, 0.644);
                height:100vh;
                z-index:201;
                padding:4.5rem 4rem;
                opacity: 1;
                &.open{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    -webkit-animation-duration: 0.8s;
                    -moz-animation-duration: 0.8s;
                    -ms-animation-duration: 0.8s;
                    animation-duration: 0.8s;
                    -webkit-animation-name:open-player;
                    -moz-animation-name:open-player;
                    -ms-animation-name:open-player;
                    animation-name:open-player;
                }
                &.openMobile{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    padding:25vh 2vh;
                   -webkit-animation-duration: 0.8s;
                    -moz-animation-duration: 0.8s;
                    -ms-animation-duration: 0.8s;
                    animation-duration: 0.8s;
                    -webkit-animation-name:open-player;
                    -moz-animation-name:open-player;
                    -ms-animation-name:open-player;
                    animation-name:open-player;
                }  
                .close-btn{
                    position: absolute;
                    top:1.5rem;
                    right:5rem;
                    color:#fff;
                    cursor: pointer;
                    span{
                        position: relative;
                        display: inline-block;
                        width:25px;
                        height:3px;
                        background-color: #fff;
                        -webkit-transform:rotate(45deg);
                        -moz-transform:rotate(45deg);
                        -ms-transform:rotate(45deg);
                        transform:rotate(45deg);
                        &::after{
                            content:'';
                            position: absolute;
                            top:5px;
                            right:0;
                            width:25px;
                            height:3px;
                            background-color: #fff;
                            -webkit-transform:rotate(-90deg) translate(5px,0);
                            -moz-transform:rotate(-90deg) translate(5px,0);
                            -ms-transform:rotate(-90deg) translate(5px,0);
                            transform:rotate(-90deg) translate(5px,0);
                        }
                    }
                }
            }
        }
        .pagination{
            width:100%;
            display: flex;
            // align-items:center;
            justify-content:center;
            padding-bottom:2rem;
            margin-top:1rem;
            @include transition-ease;
            .right-arrow{
                padding-left:1rem;
                width:1.5rem;
                height: 4rem;
                cursor: pointer;
                display:flex;
                justify-content: center;
                align-items: center;
                span{
                    width:0;
                    height: 0;
                    position: relative;
                    &::before{
                        content:'';
                        width:22px;
                        height:2.5px;
                        position:absolute;
                        // right:-5px;
                        // top:-7px;
                        // -webkit-transform:rotate(50deg);
                        // -moz-transform:rotate(50deg);
                        // -ms-transform:rotate(50deg);
                        // transform:rotate(50deg);
                        
                        right:-5px;
                        top:-7px;
                        -webkit-transform:rotate(-50deg);
                        -moz-transform:rotate(-50deg);
                        -ms-transform:rotate(-50deg);
                        transform:rotate(-50deg);
                        background-color: rgb(90, 89, 89);
                    }
                    &::after{
                        content:'';
                        width:22px;
                        height:2.5px;
                        position:absolute;
                        // right:-5px;
                        // top:9px;
                        // -webkit-transform:rotate(-50deg);
                        // -moz-transform:rotate(-50deg);
                        // -ms-transform:rotate(-50deg);
                        // transform:rotate(-50deg);
                        // background-color: rgb(90, 89, 89);
                        right:-5px;
                        top:9px;
                        -webkit-transform:rotate(50deg);
                        -moz-transform:rotate(50deg);
                        -ms-transform:rotate(50deg);
                        transform:rotate(50deg);
                        background-color: rgb(90, 89, 89);
                    }
                }
                &.hideArrowRight{
                    visibility:hidden;
                }
            }
            .btns{
                display:flex;
                justify-content: center;
                align-items:center;
                padding:0 4rem;
                @include transition-ease;
                .condition{
                    height:100%;
                    display: flex;
                    justify-content: center;
                    align-items:center;
                }
                span{
                    width:1.2rem;
                    height:0.6rem;
                    border-radius: 4px;
                    margin-left:0.6rem;
                    background-color:rgb(155, 155, 155);
                    cursor:pointer;
                    opacity:0.8;
                    @include transition-ease;
                }
                span.active{
                    opacity:1;
                    width:2.3rem;
                    border-radius: 4px;
                    margin-left:0.6rem;
                    background-color:$primeColor;
                    @include transition-ease;
                }
            }
            .left-arrow{
                // padding-right:1rem;
                width:1.5rem;
                height: 4rem;
                cursor: pointer;
                display:flex;
                justify-content: center;
                align-items: center;
                span{
                    width:0;
                    height: 0;
                    position: relative;
                    &::before{
                        content:'';
                        width:22px;
                        height:2.5px;
                        position:absolute;
                        // right:-5px;
                        // top:-7px;
                        // -webkit-transform:rotate(-50deg);
                        // -moz-transform:rotate(-50deg);
                        // -ms-transform:rotate(-50deg);
                        // transform:rotate(-50deg);
                        right:-5px;
                        top:-7px;
                        -webkit-transform:rotate(50deg);
                        -moz-transform:rotate(50deg);
                        -ms-transform:rotate(50deg);
                        transform:rotate(50deg);
                        background-color: rgb(90, 89, 89);
                    }
                    &::after{
                        content:'';
                        width:22px;
                        height:2.5px;
                        position:absolute;
                        // right:-5px;
                        // top:9px;
                        // -webkit-transform:rotate(50deg);
                        // -moz-transform:rotate(50deg);
                        // -ms-transform:rotate(50deg);
                        // transform:rotate(50deg);
                        right:-5px;
                        top:9px;
                        -webkit-transform:rotate(-50deg);
                        -moz-transform:rotate(-50deg);
                        -ms-transform:rotate(-50deg);
                        transform:rotate(-50deg);
                        background-color: rgb(90, 89, 89);
                        
                    }
                }

                &.hideArrowLeft{
                    visibility:hidden;
                }
            }
        }
    }

// animation
@keyframes open-player{
    0%{
        right:-100%;
        opacity: 0;
    }
    100%{
        right:0;
        opacity: 1;
    }
}
@keyframes close-player{
    0%{
        right:0
    }
    100%{
        right:-100%;
    }
}
</style>
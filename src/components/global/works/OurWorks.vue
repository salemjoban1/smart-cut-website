<template>
  <div class="our-works">
      <div class="container">
          <div v-if="!mobileView">
                <div class="works-group row justify-center g-3" 
                v-for="(worksGroup,index) in worksDevided" 
                :key="index"
                v-show="currentWorksGroup === index +1">
                    <Work class="col-md-6 col-lg-4" v-for="(work,index) in worksGroup" :key="index" :work="work"/>
                </div>
            </div>
            <div v-if="mobileView">
                <div class="works-group row justify-center g-3" 
                v-for="(work,index) in allWorks" 
                :key="index"
                v-show="currentWorksGroup === index +1">
                    <Work class="col-md-6 col-lg-4" :work="work"/>
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
                        :class="{active:currentWorksGroup === index + 1}" ></span>
                    </div>
                    <div v-else-if="mobileView" class="condition">
                        <span v-for="(work,index) in allWorks" 
                        :key="index"
                        @click="updateCurrentGroup(index),changeArrowsVisibility()"
                        :class="{active:currentWorksGroup === index + 1}" ></span>
                    </div>
              </div>
              <div class="left-arrow" 
              :class="{hideArrowLeft:hideArrowLeft}"
              @click="moveToLeft(),changeArrowsVisibility()">
                  <span></span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Work from './Work.vue'
export default {
    name:'our-works',
    data(){
        return{
            currentWorksGroup:2,
            hideArrowRight:false,
            hideArrowLeft:false,
            workGroupHeight:0
        }
    },
    props:{
        worksDevided:Array,
        allWorks:Array,
        mobileView:Boolean
        },
    components:{
        Work
    },
    computed:{
        
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
            this.currentWorksGroup = index + 1;
        },
        changeArrowsVisibility:function(){
            if ((this.currentWorksGroup === this.worksDevided.length) && (!this.mobileView)){
                this.hideArrowLeft = true;
            }
            else if ((this.currentWorksGroup === this.allWorks.length) && (this.mobileView)){
                this.hideArrowLeft = true;
            }
            else{
                this.hideArrowLeft = false;
            }
            if (this.currentWorksGroup === 1){
                this.hideArrowRight = true;
            }
            else{
                this.hideArrowRight = false;
            }
        },
        moveToLeft:function(){
            if(this.hideArrowLeft === true){
                return;
            }
            else
            {
                this.currentWorksGroup++;
            }
            
        },
        moveToRight:function(){
            if(this.hideArrowRight === true){
                return;
            }
            else
            {
                this.currentWorksGroup--;
            }
        },
    },
    mounted(){
        this.matchGroupsHeight();
    }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
    .our-works{
        .pagination{
            width:100%;
            display: flex;
            // align-items:center;
            justify-content:center;
            padding:2rem 0;
            margin-top:2rem;
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
                        right:-5px;
                        top:-7px;
                        transform:rotate(50deg);
                        background-color: rgb(90, 89, 89);
                    }
                    &::after{
                        content:'';
                        width:22px;
                        height:2.5px;
                        position:absolute;
                        right:-5px;
                        top:9px;
                        transform:rotate(-50deg);
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
                }
                span.active{
                    width:2.3rem;
                    border-radius: 4px;
                    margin-left:0.6rem;
                    background-color:$primeColor;
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
                        right:-5px;
                        top:-7px;
                        transform:rotate(-50deg);
                        background-color: rgb(90, 89, 89);
                    }
                    &::after{
                        content:'';
                        width:22px;
                        height:2.5px;
                        position:absolute;
                        right:-5px;
                        top:9px;
                        transform:rotate(50deg);
                        background-color: rgb(90, 89, 89);
                    }
                }

                &.hideArrowLeft{
                    visibility:hidden;
                }
            }
        }
    }

</style>
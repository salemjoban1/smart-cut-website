<template>
  <div class="our-works">
      <div class="container">
          <div class="works-group row">
              <Work class="col-md-6 col-lg-4" v-for="work in works" :key="work.id" :work="work"/>
          </div>
          <div class="pagination">
              <div class="right">
                  <span></span>
              </div>
              <div class="btns">
                  <span class="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <div class="left"></div>
          </div>
      </div>
  </div>
</template>

<script>
import Work from './Work.vue'
export default {
    name:'our-works',
    props:{
        works:Array
    },
    components:{
        Work
    }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
    .our-works{
        .pagination{
            display: flex;
            justify-content: center;
            align-items:center;
            padding-top:2rem;
            .right{
                display: inline-block;
                align-items:center;
                margin-left:1rem;
                width:7rem;
                // height:2rem;
                // background-color:rgb(155, 155, 155);
                span{
                    display:flex;
                    width:2.7rem;
                    height: 2px;
                    background-color: #000;
                    position: relative;
                    &::before{
                        content:'';
                        width:1.4rem;
                        height:2px;
                        position:absolute;
                        right:-3px;
                        top:-6px;
                        transform:rotate(35deg);
                        background-color: #000;
                    }
                    &::after{
                        content:'';
                        width:1.4rem;
                        height:2px;
                        position:absolute;
                        right:-3px;
                        top:6px;
                        transform:rotate(-35deg);
                        background-color: #000;
                    }
                }
                
            }
            .btns{
                display:flex;
                justify-content: center;
                align-items:center;
                margin:1rem;
                width:8rem;
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
                    cursor:pointer;
                }
            }
            .left{
                width:2rem;
                height:2rem;
                background-color:rgb(155, 155, 155);
            }
        }
    }

</style>
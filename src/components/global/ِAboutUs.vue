<template>
        <section class="about-us">
            <div class="container">
            <div class="row">
                <div class="description col-sm-12 col-md-6">
                    <h3>{{text}}</h3>
                </div>
                <div class="pictures col-sm-12 col-md-6 ">
                    <img class="big-right-side" src="../../assets/big-right-side.png">
                    <img class="up-left-side" src="../../assets/up-left-side.png">
                    <img class="down-left-side" src="../../assets/down-left-side.png">
                </div>
            </div>
              </div>
        </section>
  
</template>

<script>
export default {
    name:'about-us',
    props:['text'],
    data(){
        return{
            // text:"sdfda"
        }
    }
}
</script>

<style lang="scss" scoped>
    .about-us{
        // display:flex;
        // justify-content: space-between;
        // align-items:center;
        // padding:2rem 0;
        // width:1140px;
        // margin:0 auto;
        overflow: hidden;
        .description{
            // width:50%;
        h3{
            text-align: right;
            font-size:20px;
            line-height: 1.8;
            text-align: justify;
        }
        }
        .pictures{
            // width:45%;
            display:grid;
            grid-template-columns: 50% 50%;
            grid-template-rows:50% 50% ;
            gap:20px 20px;

            img{
                // width:100%;
                // height: 100%;
                
            }
            .big-right-side{
                grid-row:1/span2;
            }
        }
    }
</style>
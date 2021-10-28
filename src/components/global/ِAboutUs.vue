<template>
<!-- problems:
1->text formating
2->reverse order in mobile view
3->computd function issue 'read more'
4-> about-us height -->
        <section class="about-us">
            <div class="container">
                <div class="row justify-content-between">
                     <div class="pictures p-4 col-sm-12 col-md-5 ">
                         <div class="inner-border">
                            <img class="ceo-img" src="../../assets/personal-pic.png">
                            <div class="descrip">
                                <h3>عبد الرحمن جوبان</h3>
                                <h5>منتح وصانع أفلام</h5>
                            </div>
                        </div>
                    </div>
                    <div class="description p-4 col-sm-12 col-md-6 ">
                        <p>
                            {{text}}
                        </p>
                        <span class="read-more" @click="fitTextPlace()">انقر للمزيد</span>
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
            readMore:false
        }
    },
    methods:{
        // error
        // fitTextPlace:function(){
        //     let pictureHeight = document.querySelector('.about-us .pictures .inner-border').clientHeight;
        //     let descriptionHeight = document.querySelector('.about-us .description p');
        //     let container = null;
        //     if ((descriptionHeight.clientHeight > pictureHeight)&& (this.readMore === false)){
        //         container = descriptionHeight.style.height;
        //         descriptionHeight.style.height = `${pictureHeight}px`;
        //         console.log(`${pictureHeight}px`);
        //         this.readMore === !this.readMore;
        //     }
        //     else{
        //         descriptionHeight.style.height = container;
        //     }
        //     console.log(`${descriptionHeight}`);
        // }
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
    .about-us{
        .description{
            overflow:hidden;
            // height:350px;
            p{
                text-align: right;
                font-size:20px;
                line-height: 2;
                font-weight: 400;
                text-align: justify;
            }
            .read-more{
                align-self: flex-end;
                color:#012c97;
                font-size:1.2rem;
                font-weight: bold;
                cursor:pointer;
                background-color:#fff;
                display:inline-block;
                width:100%;
            }
            
        }
        .pictures{
            .inner-border{
                border:3px solid $primeColor;
                width:100%;
                .descrip{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width:100%;
                    padding:0.5rem 0;
                    background-color:$primeColor;
                    color:#FFF;
                    h5{
                        color:#fff;
                        padding-top:0.5rem;
                        font-size:1.2rem;
                    }
                }
                img{
                    width:100%;   
                }
            }
            
        }
    }
</style>
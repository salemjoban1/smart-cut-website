<template>
<!-- problems:
1->text formating
2->reverse order in mobile view
3->computd function issue 'read more'
4-> about-us hieght -->
        <section class="about-us">
            <div class="container">
                <div class="row justify-content-evenly">
                     <div class="pictures p-4 col-sm-12 col-md-6 ">
                         <div class="inner-border">
                            <img class="ceo-img" src="../../assets/personal-pic.png">
                            <div class="descrip">
                                <h3>عبد الرحمن جوبان</h3>
                                <p>منتح ومخرج</p>
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
            fit:false
        }
    },
    methods:{
        // error
        fitTextPlace:function(){
            let description = document.querySelector('.about-us .description');
            let fullHieght = description.style.clientHeight;
            console.log(fullHieght);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
    .about-us{
        .description{
            display:flex;
            flex-direction: column;
            p{
                text-align: right;
                font-size:20px;
                line-height: 1.8;
                text-align: justify;
            }
            .read-more{
                align-self: flex-end;
                color:#012c97;
                font-size:1.2rem;
                font-weight: bold;
            }
            
        }
        .pictures{
            
            padding:0;
            .inner-border{
                border:3px solid $primeColor;
                .descrip{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width:100%;
                    padding:0.5rem 0;
                    background-color:$primeColor;
                    color:#FFF;
                }
                img{
                width:100%;   
                }
            }
            
        }
    }
</style>
<template>
    <section class="about-us">
        <div class="container">
            <div v-if="!mobileView"
                 class="row big-screen">
                <div class="pictures col-12 col-md-4">
                    <!-- div to make border -->
                    <div class="inner-border" v-scrollanimation>
                        <img class="ceo-img" src="../../assets/personal-pic.png"
                             alt="ceo image">
                        <div class="descrip">
                            <h3>عبد الرحمن جوبان</h3>
                            <h5>منتج وصانع أفلام</h5>
                        </div>
                    </div>
                </div>
                <div class="description col-12 col-md-7">
                    <p v-scrollanimation>
                        <!-- main text always be shown -->
                        {{aboutText.mainText}}
                        <!-- read more btn to show or hide complement text and hide btn itself-->
                        <span class="read-btn more"
                            :class="{show:readMore}"
                            @click="readMore=!readMore,readLess=!readLess">عرض أكثر</span>
                        <!-- complement text -->
                        <span class="less" :class="{show:readLess}">
                            {{aboutText.textMore}}
                            <!-- less btn to show hide complement text and hide btn itself -->
                            <span class="read-btn less"
                            :class="{show:readLess}" 
                            @click="readMore=!readMore,readLess=!readLess">عرض أقل</span>
                        </span>
                    </p>
                </div>
            </div>
            <div v-else-if="mobileView"
                 class="row mobile-screen">
                <div class="description col-12 col-md-7">
                    <p>
                        <!-- main text always be shown -->
                        {{aboutText.mainText}}
                        <!-- read more btn to show or hide complement text and hide btn itself-->
                        <span class="read-btn more"
                            :class="{show:readMore}"
                            @click="readMore=!readMore,readLess=!readLess"> عرض أكثر</span>
                        <!-- complement text -->
                        <span class="less" :class="{show:readLess}">
                            {{aboutText.textMore}}
                            <!-- less btn to show hide complement text and hide btn itself -->
                            <span class="read-btn less"
                            :class="{show:readLess}" 
                            @click="readMore=!readMore,readLess=!readLess">عرض أقل</span>
                        </span>
                    </p>
                </div>
                 <div class="pictures col-12 col-md-4">
                    <!-- div to make border -->
                    <div class="inner-border">
                        <img class="ceo-img" src="../../assets/personal-pic.png"
                             alt="ceo image">
                        <div class="descrip">
                            <h3>عبد الرحمن جوبان</h3>
                            <h5>منتج وصانع أفلام</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
</template>

<script>
export default {
    name:'about-us',
    props:{
        aboutText:Object,
        mobileView:Boolean
    },
    data(){
        return{
            readMore:true,
            readLess:false
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
    .about-us{
        .big-screen{
            justify-content:space-between ;
        }
        .mobile-screen{
            justify-content:center ;
        }
        .description{
            overflow:hidden;
            padding:2rem 1rem;
            p{
                font-size:20px;
                line-height: 2;
                font-weight: 400;
                text-align: justify;
                white-space: break-spaces;

                &.before-enter{
                    transform: translateX(-100px);
                    opacity:0;
                    transition:all 1s ease-in-out;
                    // @include transition-ease
                    }
                &.enter{
                    transform:translateX(0px);
                    opacity:1;
                    transition:all 1s ease-in-out;
                    // @include transition-ease
                }
            }
            .read-btn{
                color:#012c97;
                font-size:1.2rem;
                font-weight: bold;
                cursor:pointer;
                @include transition-ease;
            }
            // read more btn style to show complement text
            .more{
                    display:none;
                    &.show{
                        display: inline;
                    }
                }
            // read less btn style to hide complement text
            .less{
                    display:none;
                    &.show{
                        display: inline;
                    }
                }   
        }
        .pictures{
            padding:2.5rem 1rem 0 1rem;
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
                    h3{
                        font-size:1.4rem;;
                    }
                    h5{
                        padding-top:0.5rem;
                        font-size:1.1rem;
                    }
                }
                img{
                    width:100%;
                    min-width:180px;   
                }
                &.before-enter{
                    transform: translateY(-30px);
                    opacity:0.5;
                    transition:all 1s ease-in-out;
                    // @include transition-ease
                    }
                &.enter{
                    transform:translateY(0px);
                    opacity:1;
                    transition:all 1s ease-in-out;
                    // @include transition-ease
                }
            }
            
        }
    }
</style>
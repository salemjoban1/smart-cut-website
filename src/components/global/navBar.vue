<template>
    <div class="navBar">
        <!-- justify the content of nav using inner-width div -->
        <div class="inner-width">
            <!-- menu-btn to show(in mobile)/hide(in disktop) nav menu -->
            <div class="menu-toggle d-md-none" :class="{active:isSelected}"             @click="isSelected=!isSelected">
                <!-- it has three lines apears when click the btn using class toggle 'active'-->
                <span :class="{active:isSelected}" ></span>
                <span :class="{active:isSelected}"></span>
                <span :class="{active:isSelected}"></span>
            </div>
            <!-- menu nav to navigate to any part of page, it shows in big screens -->
            <ul class="nav-menu d-md-flex" :class="{active:isSelected}">
                <li><a href="#" @click="hideOnClick">Home</a></li>
                <li><a href="#about-us" @click="hideOnClick">About Us</a></li>
                <li><a href="#services" @click="hideOnClick">Services</a></li>
                <li><a href="#works" @click="hideOnClick">Our Works</a></li>
                <li><a href="#clients" @click="hideOnClick">Our Clients</a></li>
                <li><a href="#contact" @click="hideOnClick">Contact Us</a></li>
            </ul>
            <!-- block contain logo pic with link to the main page -->
            <div class="logo">
                <a href="#">
                    <img :src="require(`../../assets/${logo.imgSrc}`)" 
                         :alt="logo.altText">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default({
    name:"navBar",
    data(){
        return{
            isSelected:false,
        }
    },
    props:{
        logo:Object
    },
    methods:{
        // to hide the menu window whenever clicked any menu tab
        hideOnClick:function(){
            if (this.isSelected){
                this.isSelected=!this.isSelected
            }
        }
    }
})
</script>
<style lang="scss" scoped >
@import '../../scss/main.scss';
    .navBar{
        position: fixed;
        top:0;
        z-index:200;//be the highest layer of page components
        background-color:#fff;
        -webkit-box-shadow: 2px 2px 5px rgb(209, 209, 208);
        -moz-box-shadow: 2px 2px 5px rgb(209, 209, 208);
        -ms-box-shadow: 2px 2px 5px rgb(209, 209, 208);
         box-shadow: 2px 2px 5px rgb(209, 209, 208);
        width:100%;
        padding:1rem;
        height:$navHight;
        .inner-width{
            display:flex;
            justify-content: flex-end; //making equal spaces between nav items
            align-items: center;
            .menu-toggle{
                z-index:4;
                display:block;
                position: absolute;
                top:35%;
                right: 1rem;
                width:28px;
                cursor: pointer;
                @include transition-ease;
                span{
                    display: flex;
                    height: 2px;
                    background-color: $primeColor;
                    margin-top:5px;
                    width:30px;
                    &:nth-child(1){
                        width:28px;
                        @include transition-ease;
                        &.active{
                            width:28px;
                            -webkit-transform:rotate(45deg) translate(4px,7px);
                            -moz-transform:rotate(45deg) translate(4px,7px);
                            -ms-transform:rotate(45deg) translate(4px,7px);
                            transform:rotate(45deg) translate(4px,7px);
                            @include transition-ease;
                        }
                    }    
                    &:nth-child(2){
                        width:20px;
                        @include transition-ease;
                        &.active{
                            width:28px;
                            background:transparent;
                            @include transition-ease;
                        }
                    }
                    &:nth-child(3){
                        width:28px;
                        @include transition-ease;
                        &.active{
                            width:28px;
                            -webkit-transform:rotate(-45deg) translate(3px,-7px);
                            -moz-transform:rotate(-45deg) translate(3px,-7px);
                            -ms-transform:rotate(-45deg) translate(3px,-7px);
                            transform:rotate(-45deg) translate(3px,-7px);
                            @include transition-ease;
                        }
                    }
                }    
            }
            .logo{
                padding-left:1rem;
                position: absolute;
                background-color:#fff;
                top:1rem;
                left: 1rem;
                img{
                    width:12rem;
                    // height: $navHight - 2rem;
                }
            }
        .nav-menu{
            //'none' until tablet screens become flex
            display: none;
            padding:1rem 2rem;
            li{
                //separate each nav tab
                margin-left:1.5rem;
                a{
                    color:$primeColor;
                    font-size:1.2rem;
                    @include transition-ease;
                   &:hover,&:active{
                        color:$secondColor;
                        @include transition-ease;
                    }
                }
            }
            &.active{
                animation-name:movmentIn;
                animation-duration: 0.5s;
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
                position: absolute;
                top:0;
                right:0;
                height: 100vh;
                width:100vw;
                background-color:#fff;
                opacity:0.9;
                transform:translateY(0);
                overflow: hidden;
                @include transition-ease;
                & li{
                    // reset margin left from it's main value
                    margin-left:0;
                    margin-bottom: 20px;
                }
            }
        }
        }
        
    }
// animation 
@keyframes movmentIn {
    0%{
        transform:translateY(-100vh);
    }
    100%{
        transform:translateY(0);
    }
}   
</style>

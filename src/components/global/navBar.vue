<template>
    <div class="navBar">
        <div class="inner-width">
            <div class="menu-toggle d-md-none" :class="{active:isSelected}"  @click="isSelected=!isSelected,isFullMenu=!isFullMenu">
                <span :class="{active:isSelected}" ></span>
                <span :class="{active:isSelected}"></span>
                <span :class="{active:isSelected}"></span>
            </div>
            <ul class="nav-menu d-md-flex" :class="{active:isSelected}">
                <li><a href="#" @click="hideOnClick">الرئيسية</a></li>
                <li><a href="#about-us" @click="hideOnClick">من نحن</a></li>
                <li><a href="#services" @click="hideOnClick">الخدمات</a></li>
                <li><a href="#works" @click="hideOnClick">أعمالنا</a></li>
                <li><a href="#clients" @click="hideOnClick">عملائنا</a></li>
                <li><a href="#contact" @click="hideOnClick">تواصل معنا</a></li>
                
            </ul>
            <div class="logo">
                <a href="#"><img src="../../assets/logo.png"></a>
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
            isHide:false,
            isFullMenu:false
        }
    },
    beforeUpdate() {
        if(window.innerWidth <= 768){
        this.isHide= true;
        }

    },
    methods:{
        hideOnClick:function(){
            if (this.isSelected === true){
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
        z-index:200;
        background-color:#fff;
        box-shadow: 2px 2px 5px rgb(209, 209, 208);
        width:100%;
        padding:1rem;
        height:$navHight;
        .inner-width{
            display:flex;
            justify-content: space-between;
            align-items: center;
            .menu-toggle{
                z-index:4;
                transform:rotate(360deg);
                display:block;
                position: absolute;
                top:32%;
                right: 1rem;
                width:28px;
                height:28px;
                cursor: pointer;
                @include transition-ease;
                // background-color: #000;
                span{
                    display: flex;
                    height: 3px;
                    background-color: $primeColor;
                    margin-top:5px;
                    width:30px;
                    &:nth-child(1){
                        width:28px;
                        @include transition-ease;
                    }    
                    &:nth-child(2){
                        width:20px;
                        @include transition-ease;
                    }
                    &:nth-child(3){
                        width:28px;
                        @include transition-ease;
                    }
                    &:nth-child(1).active{
                        width:28px;
                        transform:rotate(45deg) translate(5px,8px);
                        @include transition-ease;
                    }
                    &:nth-child(2).active{
                        width:28px;
                        background:transparent;
                        @include transition-ease;
                    }
                    &:nth-child(3).active{
                        width:28px;
                        transform:rotate(-45deg) translate(3px,-7px);
                        @include transition-ease;
                    }
                }
                &.active{
                    transform:rotate(360deg);
                    @include transition-ease;
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
                    height: $navHight - 2rem;
                }
            }
        .nav-menu{
            display: none;
            padding:1rem 2rem;
            li{
                margin-left:1.5rem;
                a{
                    color:$primeColor;
                    font-size:1.2rem;
                   &:hover,&:active{
                        color:$secondColor;
                        @include transition-ease;
                    }
                }
            }
            &.active{
                animation-name:movmentIn;
                animation-duration: 0.3s;
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
                position: absolute;
                top:$navHight;
                right:0;
                height: 100vh;
                width:100vw;
                background-color:#fff;
                opacity:0.89;
                transform:translateY(0);
                overflow: hidden;
                @include transition-ease;
                & li{
                    margin-bottom: 20px;
                    // animation-name:movmentItems;
                    // animation-delay:0.2s;
                    // animation-duration:0.5s;
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
        transform:translateY(0)
    }
}
@keyframes movmentItems {
    0%{
        transform:translateX(100vw);
        
    }
    100%{
        transform:translateX(0)
    }
}
    
</style>

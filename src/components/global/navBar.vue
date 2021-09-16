<template>
    <div class="navBar">
        <div class="inner-width">
            <div class="menu-toggle" :class="{active:isSelected}"  @click="isSelected=!isSelected">
                <span :class="{active:isSelected}" ></span>
                <span :class="{active:isSelected}"></span>
                <span :class="{active:isSelected}"></span>
            </div>
            <ul class="nav-menu" :class="{active:isSelected}">
                <li>الرئيسية</li>
                <li>من نحن</li>
                <li>الخدمات</li>
                <li>أعمالنا</li>
                <li>عملائنا</li>
                <li>تواصل معنا</li>
                
            </ul>
            <div class="logo"><img src="../../assets/logo.png"></div>
        </div>
    </div>
</template>
<script>
export default({
    name:"navBar",
    data(){
        return{
            isSelected:false,
            isHover:false
        }
    },
    components:{
        
    }
})
</script>
<style lang="scss" scoped >
@import '../../scss/main.scss';
    .navBar{
        position: fixed;
        top:0;
        z-index:10;
        background-color:#fff;
        box-shadow: 2px 2px 5px rgb(209, 209, 208);
        width:100%;
        padding:1rem;
        height:$navHight+2rem;
        .inner-width{
            display:flex;
            justify-content: space-between;
            align-items: center;
            .menu-toggle{
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
                    // position: relative;
                    // top:0;
                    // left:0;
                    height: 3px;
                    background-color: $primeColor;
                    margin-top:5px;
                    width:30px;
                    &:nth-child(1){
                        width:10px;
                    }    
                    &:nth-child(2){
                        width:28px;
                    }
                    &:nth-child(3){
                        width:10px;
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
        }
        .logo{
            padding-left:1rem;
            position: absolute;
            background-color:#fff;
            top:1rem;
            left: 1rem;
           img{
               width:12rem;
               height: $navHight;
           }
        }
        .nav-menu{
            display: none;
            // max-width:70%;
            padding:1rem 2rem;
            & li{
                display:inline-block;
                margin-left:1.5rem;
            }
            &.active{
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
                position: absolute;
                top:$navHight + 2rem;
                right:0;
                height: 100vh;
                width:100vw;
                background-color:#fff;
                opacity:0.89;
                overflow: hidden;
                @include transition-ease;
                & li{
                    margin-bottom: 20px;
                }
            }
        }
    }
    @media screen and (max-width:700px) {
        .menu-toggle{
                display:block;
        }
        .nav-menu{
            display: none;
        }
    }
</style>

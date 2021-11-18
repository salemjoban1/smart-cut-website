<template>
    <header class="main-headers">
                <h1 v-scrollanimation :style="{'color':title.color}">{{title.title}}</h1>
                <span v-scrollanimation class="under-line"></span>
    </header>
    
</template>

<script>
export default {
    name:"main-headers",
    props:{
        title:Object
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
    .main-headers{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding:1rem;

    h1{
        color: $primeColor;
        margin-bottom: 0.5rem;
        font-size: 40px;

        &.before-enter{
            transform: translateX(30%);
            opacity:0.5;
            transition:all 1s ease-in-out;
            // @include transition-ease
            }
        &.enter{
            transform:translateX(0);
            opacity:1;
            transition:all 1s ease-in-out;
            // @include transition-ease
        }
    }
    .under-line{
        width: 80px;
        height: 8px;
        background-color: $secondColor;

        &.before-enter{
            width: 40px;
            opacity:0.5;
            transition:all 1s ease-in-out;
            // @include transition-ease
            }
        &.enter{
            width: 80px;
            opacity:1;
            transition:all 1s ease-in-out;
            // @include transition-ease
        }
    }
    }
</style>
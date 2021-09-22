<template>
    <header class="main-headers">
                <h1 >{{header}}</h1>
                <span class="under-line"></span>
    </header>
</template>

<script>
export default {
    name:"main-headers",
    props:['header']
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
    .main-headers{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: $navHight;
        padding-top:1rem;

    h1{
        color: $primeColor;
        margin-bottom: 0.5rem;
        font-size: 40px;
    }
    .under-line{
        width: 80px;
        height: 8px;
        background-color: $secondColor;
    }
    }
</style>
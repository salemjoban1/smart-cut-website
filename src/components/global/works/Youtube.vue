<template>
    <iframe width="100%" :height="height" :src="`https://www.youtube.com/embed/${work.videoLink}`" :title="work.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
    props:{
        height:String,
        work:Object
    }
}
</script>

<style>

</style>
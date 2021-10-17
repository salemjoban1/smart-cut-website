<template>
  <div class="work">
      <img :src="require(`../../../assets/works/${work.imgsrc}`)" alt="">
  </div>
</template>

<script>
export default {
    name:'work',
    props:{
        work:Object
    }
}
</script>

<style lang="scss" scoped>
    .work{
        
        img{
            width:100%;
            
        }
    }

</style>
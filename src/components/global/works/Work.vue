<template>
  <div class="work">
      <div class="content">
        <img :src="require(`../../../assets/works/${work.imgsrc}.png`)" alt="">
        <div class="youtube-icon">
            <div class="inner-shape"></div>
        </div>
      </div>
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
        overflow:hidden;
        .content{
            position: relative;
            overflow:hidden;
            box-shadow: 0 2px 15px rgb(85, 83, 83);
            img{
                width:100%;
                transition: 0.5s ease-in-out;
            }
            .youtube-icon{
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                width:30%;
                height:25%;
                background-color:rgba(58, 56, 56, 0.774);
                border-radius: 10%;
                display:flex;
                justify-content: center;
                align-items: center;
                transition: 0.5s ease-in-out;
                .inner-shape{
                    width: 0;
                    height: 0;
                    border: 0.8rem solid transparent;
                    border-right: 0;
                    border-left: 1.6rem solid #fff;
                }
                // &:hover,&:active{
                //         background-color:red;
                //     }
            }
            &:hover img,&:active img{
                transform: scale(1.2,1.2);
                cursor: pointer;
                transition: 0.5s ease-in-out;
            }
            &:hover .youtube-icon,&:active .youtube-icon{
                background-color:red;
                cursor: pointer;
                transition: 0.5s ease-in-out;
            }
        }
        
    }

</style>
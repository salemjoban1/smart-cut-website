<template>
  <div class="work">
      <div class="content">
        <img :src="require(`../../../assets/works/${work.imgsrc}`)" :alt="work.altText">
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
@import '../../../scss/main.scss';
    .work{
        overflow:hidden;
        padding:0.7rem;
        .content{
            position: relative;
            overflow:hidden;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
            img{
                width:100%;
                min-width:200px;
                @include transition-ease;
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
                @include transition-ease;
                .inner-shape{
                    width: 0;
                    height: 0;
                    border: 0.8rem solid transparent;
                    border-right: 0;
                    border-left: 1.6rem solid #fff;
                }
            }
            &:hover img,&:active img{
                -webkit-transform: scale(1.2,1.2);
                -moz-transform: scale(1.2,1.2);
                -ms-transform: scale(1.2,1.2);
                transform: scale(1.2,1.2);
                cursor: pointer;
                @include transition-ease;
            }
            &:hover .youtube-icon,&:active .youtube-icon{
                background-color:red;
                cursor: pointer;
                @include transition-ease;
            }
        }
        
    }

</style>
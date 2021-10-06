<template>
  <div class="footer container-fluid">
      <div class="footer-content row">
        <div class="social-logo col">
          <ul>
            <li>tes1</li>
            <li>tes1</li>
            <li>tes1</li>
            <li>tes1</li>
          </ul>
          <div class="logo">
                <a href="#"><img src="../../assets/logo.png"></a>
          </div>
        </div>
        <div class="direct-contact col">
            <ul>
              <li>name.compony.com</li>
              <li> +967 771385262</li>
              <li>المكلا </li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'footer',
    props:{
      socialMedia:Array,
      directContact:Array
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
  .footer{
    &-content{
      display: flex;
      justify-content:space-evenly;
      align-items: center;
      .social-logo{
        ul{
          padding:1rem;
          li{
            display: inline-block;
            padding-left:1rem;
            color:#fff;
          }
        }
          .logo{
                background-color:$primeColor;
                img{
                    width:12rem;
                    height: $navHight - 2rem;
                }
            }
      }
      .direct-contact{
        ul{
          padding:1rem;
          li{
            color:#fff;
            padding-bottom: 1rem;
          }
        }
      }
    }
  }
</style>
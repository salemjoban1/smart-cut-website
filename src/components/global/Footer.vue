<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content row">
        <div class="social-logo col-md-6">
            <ul>
              <li><i class="fab fa-youtube"></i></li>
              <li><i class="fab fa-facebook"></i></li>
              <li><i class="fab fa-instagram"></i></li>
              <li><i class="fab fa-twitter"></i></li>
            </ul>
            <div class="logo">
                  <a href="#"><img src="../../assets/LogoSolidWhite.png"></a>
            </div>
        </div>
        <div class="direct-contact col-md-6 ">
            <ul>
              <li><i class="fas fa-envelope-open-text"></i><span>name.compony.com</span></li>
              <li><i class="fas fa-phone"></i> <span>771385262 967+</span></li>
              <li><i class="fas fa-map-marker-alt"></i><span>اليمن-حضرموت-المكلا </span> </li>
            </ul>
        </div>
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
      align-items:center;
      .social-logo{
        ul{
          padding:1rem;
          li{
            display: inline-block;
            padding-left:0.5rem;
            i{
              font-size:30px;
              color:#fff;
              cursor:pointer;
              @include transition-ease;
              &:hover{
                @include transition-ease;
                color:$secondColor;
              }
            }
          }
        }
          .logo{
                padding:1rem 0;
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
            i{
              font-size:20px;
              padding-left:0.5rem;
            }
          }
        }
      }
    }
  }
</style>
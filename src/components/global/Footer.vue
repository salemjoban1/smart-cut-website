<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content row">
        <div class="direct-contact col-md-6">
            <ul>
              <li><i class="fas fa-envelope-open-text"></i><span>name.compony.com</span></li>
              <li><i class="fas fa-phone"></i> <span>+967 771385262</span></li>
              <li><i class="fas fa-map-marker-alt"></i><span>اليمن-حضرموت-المكلا</span> </li>
            </ul>
        </div>
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
              &:hover{
                color:rgb(109, 107, 7)
              }
            }
          }
        }
          .logo{
                padding:0.5rem 0;
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
              padding:0.5rem;
            }
          }
        }
      }
    }
  }
</style>
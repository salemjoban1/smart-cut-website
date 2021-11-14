<template>
  <div class="footer-part">
    <div class="container">
      <div class="footer-content row">
        <!-- every part take have of the page -->
        <div class="social-logo col-md-6">
            <!-- 'col' to justify the inner content as tow parts -->
            <ul class="col ">
              <!-- take data from object ,and repeat as many items in the object -->
              <li v-for="tool in socialMedia" :key="tool.id">
                <a :href="tool.link" target="_blank">
                  <i :class="tool.iconClass"></i>
                </a>
              </li>
            </ul>
            <div class="logo col">
                  <a href="#">
                    <img :src="require(`../../assets/${logo.imgWhiteSrc}`)" 
                         :alt="logo.altText">
                  </a>
            </div>
        </div>
        <div class="direct-contact col-md-6 ">
            <ul>
              <!-- take data from object ,and repeat as many items in the object -->
              <li v-for="contact in directContact" :key="contact.id">
                <i :class="contact.iconClass"></i>
                <span>{{contact.content}}</span>
              </li>
            </ul>
        </div>
      </div>
      <!-- copy rights part take the whole width ,and centered  -->
      <div class="copyRight"> <p>Smart Cut - 2021 &copy;</p></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'footer-part',
    props:{
      // fetched from app component 
      socialMedia:Array,
      directContact:Array,
      logo:Object
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
  .container{
    margin:0 auto;
  }
  .footer{
    &-content{
      .social-logo{
        // to be centerd and as one above the other
        display: flex;
        flex-direction: column;
        align-items:center;
        ul{
          padding:1rem 0;
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
            padding:1rem;
            img{
                // width:12rem;
                // height is taking as the height of the logo at the top same as nav
                height: $navHight - 2rem;
            }
          }
      }
      .direct-contact{
        // to be centerd
        display: flex;
        justify-content: center;
        ul{
          display: inline-block;
          padding:1rem;
          li{
            color:#fff;
            padding-bottom: 1rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            i{
              font-size:20px;
              padding-left:0.8rem;
            }
          }
        }
      }
      
    }
  }
  .copyRight{
        display:flex;
        justify-content: center;
        width:100%;
        font-size:1.2rem;
        color:#fff;
      }
</style>
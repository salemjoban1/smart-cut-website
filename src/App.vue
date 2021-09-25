<template>
    <div id="app">
        <div id="nav">
          <!-- <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> -->
          <navBar/>
        </div>
          <div id="about-us">
              <sectionsHeader header="من نحن"/>
              <AboutUs :text="home"/>
          </div>
          <div id="our-services">
            <sectionsHeader header="خدماتنا"/>
            <OurServices/>
          </div>
        <!-- <router-view /> -->
      </div>
</template>
<script>
import  navBar  from '@/components/global/navBar.vue';
import sectionsHeader from'@/components/global/sectionsHeader.vue';
import AboutUs from'@/components/global/ِAboutUs.vue';
import OurServices from'@/components/global/Services/OurServices.vue'

export default({
  name:"app",
  data(){
    return{
      home:`الحياةُ لا تتوقفُ عن منحِ الفُرص، لكنّها لمن ينتهزها
      على امتدادِ رحلةٍ قاربتْ ١٥ عامًا في مجالِ الإعلان والإنتاجِ المرئي كوّنا تجربةً مردُّها حُبُّ المعرفة والاطِّلاع، وخبرةً منبعها العملُ في مُختلفِ البقاعِ والأصقاع. ثم وضعنا خُلاصةَ خبراتنا في مشروعٍ يُعبِّرُ عن كياننا وأهدافنافي العاشر من أكتوبر عام ٢٠١٩ ميلاديّة، أسسنا 'Smart Cut' في حضرموت اليمن، لتكونَ وِجهةً وواجهةً لعلاقاتٍ قويّة، وإنتاجاتٍ نوعيّة مع أكبرِ الشركات والمُؤسسات في المنطقة.جمعنا طاقمًا مُحترفًا طموحًا، فأرسينا دعائمَ الثقة مع عملائنا، واكتسبنا سُمعةً طيّبة لالتزامنا الجديّة، الاحترافيّة، المرونة في أشدِّ الضغوط، والدقّة في المواعيدِ وتسليمِ الأعمال.ولأنّ هدفنا مُنذُ البداية لم يرتبط بالوصولِ السريع، ولا بالإطراءاتِ العابرة، بل بالقدرةِ على الإلهامِ والتأثير، فإنّنا نستشرِفُ الفُرصَ المُستقبليّة للتوسّع، وتجاوز الحدودِ الجغرافيّة، والقوالبَ النمطيّة.مع كُلّ بصمةِ عمل ، ولبنةِ نجاح، نزدادُ يقينًا بأنّ شركتنا هي شراكاتنا التي لا تنحصرُ بمكانٍ وزمن ، ومكسبنا هو أعمالنا التي لا تُقدّرُ بثمن، ودافعنا للاستمرارِ هو إيماننا بما نُقدّم، وشغفنا فيما يُنمِّي الإنسانَ ويخدم.`
    }
  },
  components:{
    navBar,
    sectionsHeader,
    AboutUs,
    OurServices
  }
});
</script>

<style lang="scss">
@import 'scss/main.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1900px;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  
}
#about-us{
    background-color:#fff;
  }
</style>

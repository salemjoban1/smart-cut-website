<template>
    <div id="app">
        <div id="nav">
          <!-- <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> -->
          <navBar/>
        </div>
        <div id="slides">
            <Slides :slides="slides"/>
        </div>
          <div id="about-us">
              <sectionsHeader header="من نحن"/>
              <AboutUs :text="about"/>
          </div>
          <div id="services">
            <sectionsHeader header="خدماتنا"/>
            <ourServices :services="services"/>
          </div>
          <div id="works">
            <sectionsHeader header="أعمالنا"/>
            <OurWorks :works="works"/>
          </div>
          <div id="clients">
            <sectionsHeader header="عملائنا"/>
            <OurClients :clients="clients"/>
          </div>
          <div id="contact">
            <sections-header header="تواصل معنا"/>
            <contactUs/>
          </div>
          <div id="footer">
            <Footer/>
          </div>
        <!-- <router-view /> -->
      </div>
</template>
<script>
// importing all components to use here
import  navBar from '@/components/global/navBar.vue';
import Slides from '@/components/global/slides/Slides.vue';
import sectionsHeader from'@/components/global/sectionsHeader.vue';
import AboutUs from'@/components/global/ِAboutUs.vue';
import ourServices from'@/components/global/Services/OurServices.vue';
import OurWorks from '@/components/global/works/OurWorks.vue';
import OurClients from '@/components/global/clients/OurClients.vue';
import contactUs from'@/components/global/ContactUs.vue';
import Footer from'@/components/global/Footer.vue';

export default({
  name:"app",
  data(){
    return{
      slides:{},
      about:`الحياةُ لا تتوقفُ عن منحِ الفُرص، لكنّها لمن ينتهزها
      على امتدادِ رحلةٍ قاربتْ ١٥ عامًا في مجالِ الإعلان والإنتاجِ المرئي كوّنا تجربةً مردُّها حُبُّ المعرفة والاطِّلاع، وخبرةً منبعها العملُ في مُختلفِ البقاعِ والأصقاع. ثم وضعنا خُلاصةَ خبراتنا في مشروعٍ يُعبِّرُ عن كياننا وأهدافنافي العاشر من أكتوبر عام ٢٠١٩ ميلاديّة، أسسنا 'Smart Cut' في حضرموت اليمن، لتكونَ وِجهةً وواجهةً لعلاقاتٍ قويّة، وإنتاجاتٍ نوعيّة مع أكبرِ الشركات والمُؤسسات في المنطقة.جمعنا طاقمًا مُحترفًا طموحًا، فأرسينا دعائمَ الثقة مع عملائنا، واكتسبنا سُمعةً طيّبة لالتزامنا الجديّة، الاحترافيّة، المرونة في أشدِّ الضغوط، والدقّة في المواعيدِ وتسليمِ الأعمال.ولأنّ هدفنا مُنذُ البداية لم يرتبط بالوصولِ السريع، ولا بالإطراءاتِ العابرة، بل بالقدرةِ على الإلهامِ والتأثير، فإنّنا نستشرِفُ الفُرصَ المُستقبليّة للتوسّع، وتجاوز الحدودِ الجغرافيّة، والقوالبَ النمطيّة.مع كُلّ بصمةِ عمل ، ولبنةِ نجاح، نزدادُ يقينًا بأنّ شركتنا هي شراكاتنا التي لا تنحصرُ بمكانٍ وزمن ، ومكسبنا هو أعمالنا التي لا تُقدّرُ بثمن، ودافعنا للاستمرارِ هو إيماننا بما نُقدّم، وشغفنا فيما يُنمِّي الإنسانَ ويخدم.`,
      services:{},
      allWorks:{},
      workId:null,
      worksDevided:{},
      clients:{},
      socialMedia:{},
      directContact:{}
    }
  },
  // registering all components to start use in this app
  components:{
    navBar,
    Slides,
    sectionsHeader,
    AboutUs,
    ourServices,
    OurWorks,
    OurClients,
    contactUs,
    Footer
  },
  created(){
    this.slides=[
        {
          'id':'1',
          'imgsrc':'01.png',
          'header':`مرحبًا بك في شركة Smart Cut \n للإعلان والإنتاج الإعلامي`,
          'subHeader':`نُنتجُ أفضلَ الأعمال، بجودة وحرفيّة عالية`

        },
        {
          'id':'2',
          'imgsrc':'02.jpg',
          'header':`لن يطول بحثك أكثر`,
          'subHeader':`نقدم لك خدمات متكاملة في مجال الميديا بأفكارٍ حصريّة ومواصفاتٍ عالميّة`
        },
        {
          'id':'3',
          'imgsrc':'03.jpg',
          'header':`أعمالنا تُواكبُ تطلّعاتكم`,
          'subHeader':`كُلُّ عملٍ نُنتجهُ هو حصيلةُ خبرة متراكمة، وخطواتٍ طموحة، ورؤية فريدة`
        },
        {
          'id':'4',
          'imgsrc':'04.jpg',
          'header':`بانتظارِ تواصلك`,
          'subHeader':`فريقنا متواجدٌ للاطلاعِ على رسائلك واستفساراتك والردّ عليها، فلا تتردد في التواصل معنا`
        },
      ],
    this.services=[
      {
        id:1,
        name:"الأفلام الترويجية والتعريفية",
        imgsrc:'01.png'
      },
      // {
      //   id:2,
      //   name:"الأفلام الوثائقية",
      //   imgsrc:'02.png'
      // },
      // {
      //   id:3,
      //   name:"الفيديو كليب (فيديو غنائي)",
      //   imgsrc:'03.png'
      // },
      // {
      //   id:4,
      //   name:"توثيق الفعاليات",
      //   imgsrc:'04.png'
      // },
      // {
      //   id:5,
      //   name:"التصوير الفوتوغرافي",
      //   imgsrc:'05.png'
      // },
      // {
      //   id:6,
      //   name:"البرامج التلفزيونية",
      //   imgsrc:'06.png'
      // },
      // {
      //   id:7,
      //   name:"الإنتاج الصوتي",
      //   imgsrc:'07.png'
      // },
      // {
      //   id:8,
      //   name:"البصمة الصوتية والبصرية",
      //   imgsrc:'08.png'
      // },
      // {
      //   id:9,
      //   name:"الحملات الإعلانية ",
      //   imgsrc:'09.png'
      // },
      // {
      //   id:10,
      //   name:"الإعلانات التجارية",
      //   imgsrc:'10.png'
      // },
      // {
      //   id:11,
      //   name:"كتابة المحتوى",
      //   imgsrc:'11.png'
      // },
      // {
      //   id:12,
      //   name:"تصميم وتطوير المواقع",
      //   imgsrc:'12.png'
      // },
      // {
      //   id:13,
      //   name:"التصميم الجرافيكي",
      //   imgsrc:'13.png'
      // },
      // {
      //   id:14,
      //   name:"إدارة صفحات التواصل",
      //   imgsrc:'14.png'
      // },
    ],
    this.socialMedia=[
      {
        'id':1,
        'name':'youtube',
        'iconsrc':'youtube.font'
      },
      {
        'id':2,
        'name':'facebook',
        'iconsrc':'facebook.font'
      },
      {
        'id':3,
        'name':'instgram',
        'iconsrc':'instgram.font'
      },
      {
        'id':4,
        'name':'twitter',
        'iconsrc':'twitter.font'
      },
    ],
    this.directContact=[
        {
          'id':1,
          'name':'email',
          'iconsrc':'email.font',
          'content':'Name.company@gmail.com'
        },
        {
          'id':2,
          'name':'phone',
          'iconsrc':'phone.font',
          'content':'9677 77117788',
        },
        {
          'id':3,
          'name':'position',
          'iconsrc':'position.font',
          'content':'اليمن-حضرموت-المكلا'
        },
    ],
    this.clients=[
      {'id':1,
       'name':'n1',
       'imgsrc':'01.png'
       },
       {'id':2,
       'name':'n1',
       'imgsrc':'01.png'
       },
       {'id':3,
       'name':'n1',
       'imgsrc':'01.png'
       },
       {'id':4,
       'name':'n1',
       'imgsrc':'01.png'
       },
    ],
    this.allWorks=[
      {
        'id':1,
        'title':'pic1',
        'imgsrc':'02.jpg'
      },
      {
        'id':2,
        'title':'pic2',
        'imgsrc':'02.jpg'
      },
      {
        'id':3,
        'title':'pic3',
        'imgsrc':'02.jpg'
      },
      {
        'id':4,
        'title':'pic4',
        'imgsrc':'02.jpg'
      },
    ]
  }
});
</script>

<style lang="scss">
@import 'scss/main.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 1900px;
}
#slides{
  background-color:#fff;
  padding-top: $navHight;
  }
#about-us{
  background-color:#fff;
  padding-top: $navHight;
  }
#services{
  background-color:#fff;
  padding-top: $navHight;

}
#works{
  background-color:#fff;
  padding-top: $navHight;
}
#clients{
  background-color:#fff;
  padding-top: $navHight;
}
#contact{
  background-color:#fff;
  padding: $navHight 0;
}
#footer{
  padding-top:1rem;
  background-color:$primeColor;
}
</style>

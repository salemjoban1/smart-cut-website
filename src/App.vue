<template>
    <div id="app">
        <div id="nav">
          <navBar :logo="logo"/>
        </div>
        <div id="slides">
            <Slides :slides="slides"/>
        </div>
          <div id="about-us">
              <SectionsHeader :title="headers.about"/>
              <AboutUs :aboutText="aboutText" :mobileView="mobileView"/>
          </div>
          <div id="services">
            <SectionsHeader :title="headers.services"/>
            <ourServices :services="services"
                          :mobileView="mobileView"/>
          </div>
          <div id="works">
            <SectionsHeader :title="headers.works"/>
            <OurWorks :worksDevided="worksDevided"
                      :allWorks="allWorks" 
                      :mobileView="mobileView"/>
          </div>
          <div id="clients">
            <SectionsHeader :title="headers.clients"/>
            <OurClients :clients="clients"/>
          </div>
          <div id="contact">
            <SectionsHeader :title="headers.contact" 
                            :mobileView="mobileView"/>
            <contactUs/>
          </div>
          <div id="footer" >
            <Footer :socialMedia="socialMedia"
                    :directContact="directContact"
                    :logo="logo"/>
          </div>
      </div>
</template>

<script>
/*
//using this to lazy loading of component
import {defineAsyncComponent} from "vue";
const AsyncWorks = defineAsyncComponent(() =>  import('@/components/global/works/OurWorks.vue') /*webpackChunkName: "works" */ //) */
// importing all components to use here
import  navBar from '@/components/global/navBar.vue';
import Slides from '@/components/global/slides/Slides.vue';
import SectionsHeader from'@/components/global/sectionsHeader.vue';
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
      logo:{},
      headers:{},
      mobileView:false,
      slides:{},
      aboutText:{},
      services:{},
      allWorks:[],
      videoWidth:'100%',
      worksDevided:[],
      clients:{},
      socialMedia:{},
      directContact:{}
    }
  },
  // registering all components to start use in this app
  components:{
    navBar,
    Slides,
    SectionsHeader,
    AboutUs,
    ourServices,
    OurWorks,
    OurClients,
    contactUs,
    Footer
  },
  methods:{
    responsiveView:function(){
      if (window.innerWidth < 768){
        this.mobileView = true;
      }
      else
      {
        this.mobileView = false;
      }
    },
    //divied the whole list of works into nested array every 6 together
    devidedWorks:function(){
      let index = 0;
      let temp = 0;
      for(let i = 0;i < this.allWorks.length;  )
      {
          this.worksDevided.push([]);
          for(let j = 0; j < 6;j++){
            if(temp < this.allWorks.length ){
              this.worksDevided[index][j] = this.allWorks[temp];
              temp++;
            }else{
              break;
            }
          }
          index++;
          i = temp;
      }
    },

  },
  created(){
    this.logo={
      'id':1,
      'name':'شعار سمارت كت',
      'imgSrc':'logo.png',
      'imgWhiteSrc':'LogoSolidWhite.png',
      'altText':'شعار الشركة'
    }
    this.headers=
      {
        'about':{'title':'About us',
                'color':'$primeColor'},
        'services':{'title':'Services',
                'color':'$primeColor'},
        'works':{'title':'Our Work',
                'color':'$primeColor'},
        'clients':{'title':'Our Clients',
                'color':'$primeColor'},
        'contact':{'title':'Contact us',
                'color':'#fff'},
      },
    this.slides=[
        {
          'id':'1',
          'imgsrc':'01',
          'header':`Welcome To Smart Cut For Adversting & Markiting`,
          'subHeader':`We provide innovative media solution`,
          'hasBtn':true,
          'hasText':true,
          'btn':`Contact Us`
        },
        {
          'id':'2',
          'imgsrc':'02',
          'header':`لن يطول بحثك أكثر`,
          'subHeader':`نقدم لك خدمات متكاملة في مجال الميديا بأفكار حصريّة ومواصفات عالميّة`,
          'hasBtn':false,
          'hasText':false,
          'btn':`تواصل معنا`
        },
        {
          'id':'3',
          'imgsrc':'03',
          'header':`أعمالنا تواكب تطلعاتكم`,
          'subHeader':`كل عمل ننتجه هو حصيلة خبرة متراكمة، وخطوات طموحة، ورؤية فريدة`,
          'hasBtn':false,
          'hasText':false,
          'btn':`تواصل معنا`
        },
        {
          'id':'4',
          'imgsrc':'04',
          'header':`بانتظار تواصلك`,
          'subHeader':`فريقنا متواجد للاطلاع على رسائلك واستفساراتك والرد عليها، فلا تتردد في التواصل معنا`,
          'hasBtn':false,
          'hasText':false,
          'btn':`تواصل معنا`
        },
      ],
    this.aboutText=
      {
        mainText:`
Life never ceases granting opportunities to whomever takes advantage of them.
We have started the journey of media production work 17 years ago.
Throughout this journey, we have formed an experience based on passion for learning and exploration which sprang from working in a variety of countries. Then, we have placed the essence of our experience in projects that reflect our goals and visions.
We have gathered an ambitious professional team, established the foundations of trust with our clients, and gained a good reputation for our commitment, professionalism, flexibility under pressures, punctuality in projects delivery.
Right from the start, our goal focused on inspiration, influence, foreseeing future opportunities to expand, and transcending geographical borders. Therefore, we aspire to be a destination and interface for strong and unique relations with the largest companies and institutions.`,
      textMore:`
With every footprint we make, and every sign of success, we become more certain that our true company is our partnerships, which are not limited by time and place. Our profit is our priceless relationships and projects. Our faith and our passion for human development is what fuels our progress.`
    }
    this.services=[
      {
        'id':1,
        'classType':'col-6 col-md-3',
        'name':"Promotional and Corporate Films:",
        'imgSrc':'01.png',
        'altText':'Promotional and Corporate image',
        'description':`Whether you have (Trade Company, Real Estate, Oil and gas, Bank, Educational, Cultural, Health, or Tourist Facility etc.), we produce films that present your work and achievements at the highest levels of quality and professionality, to attract the widest range of your target clients, improve your brand awareness, and make your name always in the forefront.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':2,
        'classType':'col-6 col-md-3',
        'name':"Commercial Ads",
        'imgSrc':'10.png',
        'altText':'Commercial Ads image',
        'description': `No doubt that your clients’ first impression is the most important thing, for it gives a lasting effect in their minds and leads them to trust your services or products. Different companies compete to make unique and attractive ads. Therefore, whether the intended massage of your advertisement is promoting an idea, a product, a previous or new service, we guarantee delivering it with the most effective way to enhance your sale numbers and to consolidate your brand.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':3,
        'classType':'col-6 col-md-3',
        'name':"Graphic Design",
        'imgSrc':'13.png',
        'altText':'Graphic Design image',
        'description':`Creative and innovative designs enliven any project and makes it attractive. Therefore, we present to you the best services in visual identity, infographics, motion graphics, 3D, and animated design.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':4,
        'classType':'col-6 col-md-3',
        'name':"Documentary Films",
        'altText':'Documentary Films image',
        'imgSrc':'02.png',
        'description':`What makes a special moment valuable is its balanced steps and achievements. Whether you have an exceptional project that you would like to document its stages, or you would like to go back in time with a documentary that explores the history of your company and its achievements to be shown on the upcoming founding anniversary, or you want to highlight the inspiring success stories at your work environment, we will help you represent it all from the past till the future in the best way possible. `,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':5,
        'classType':'col-6 col-md-3',
        'name':"Photography",
        'imgSrc':'05.png',
        'altText':'Photography image',
        'description': `Eyes are the fastest and most sensitive in interaction with their surroundings. Thus, we pay great attention to photography, employ the most qualified photographers, and keep up with the latest equipment and technologies in this field; making every photo we take a visual joy, and a masterpiece.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':6,
        'classType':'col-6 col-md-3',
        'name':"Music Videos",
        'imgSrc':'03.png',
        'altText':'Music Videos image',
        'description':`     Music is the common language of nations, for no man nor child in any corner of the world who do not hum their favorite tunes. Therefore, when those are combined with charming words and dazzling scenes, music videos become the perfect way to convey purposeful messages and instill positive values. We produce video clips with the highest quality starting with the choice of effective lyrics to stages of production and direction to have a strong message delivered along with your imprint and identity.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':7,
        'classType':'col-6 col-md-3',
        'name':"Content Writing",
        'imgSrc':'11.png',
        'altText':'Content Writing image',
        'description': `Words are the pillars of decisions, and the forum for ideas.
        Our experts in content writing offer you a set of services and recommendations to express your ideas professionally: (professional drafting of your projects and business, writing your company profile or the annual report of your achievements, enriching the content of your activity’s social media platforms, creative writing in various fields and according to your vision).`,        
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':8,
        'classType':'col-6 col-md-3',
        'name':"TV and YouTube shows",
        'imgSrc':'06.png',
        'altText':'TV and YouTube shows image',
        'description': `We offer you exclusive program ideas in various fields (education/culture/health/art and entertainment/competitions) and then produce them for you with high proficiency to deliver your message and show your brand properly.`,        
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':9,
        'classType':'col-6 col-md-3',
        'name':"Sound and Visual Tag",
        'imgSrc':'08.png',
        'altText':'Sound and Visual Tag image',
        'description': `To enhance your logo and help you in getting into the world of innovation and competition, we present to you a logo animation service in an attractive way and producing a musical sound tag, which reflects your identity and your field of work to use it as an introduction for all your works and promotions.`,        
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':10,
        'classType':'col-6 col-md-3',
        'name':"Documentation of Events",
        'imgSrc':'04.png',
        'altText':'Documentation of Events: image',
        'description': `We accompany you in your important events such as conferences, seminars, and activities. We reassure you; we take care of documenting all the details and moments with photographs and videos, and with the utmost efficiency and professionalism.`,        
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':11,
        'classType':'col-6 col-md-3',
        'name':"Web Design and Development",
        'imgSrc':'12.png',
        'altText':'Web Design and Development image',
        'description': `Your website is your first interface, and your virtual workplace, which is why we are keen to design and present it in a modern way to simulate your efforts on the ground.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':12,
        'classType':'col-6 col-md-3',
        'name':"Social Media Management:",
        'imgSrc':'14.png',
        'altText':'رسم يدل على إدارة صفحات التواصل',
        'description':`We employ the popularity of the social media to your benefit. Our team of content writers, designers, and posts' specialists in social media, manage your page in a professional manner and present your projects and services in an attractive way. `,
        'descriptionWindow':false,
        'arrowVisible':false
      },
    ],
    this.socialMedia=[
      {
        'id':1,
        'name':'youtube',
        'iconClass':'fab fa-youtube',
        'link':'https://www.youtube.com/c/AbdulrahmanJoban'
      },
      {
        'id':2,
        'name':'facebook',
        'iconClass':'fab fa-facebook',
        'link':'https://www.facebook.com/abdulrahmanJoban'
      },
      {
        'id':3,
        'name':'instgram',
        'iconClass':'fab fa-instagram',
        'link':'https://instagram.com/smartcut_oman'
      },
      // {
      //   'id':4,
      //   'name':'twitter',
      //   'iconClass':'fab fa-twitter',
      //   'link':'https://www.twitter.com'
      // },
    ],
    this.directContact=[
        {
          'id':1,
          'name':'email',
          'iconClass':'fas fa-envelope-open-text',
          'content':'info@smacut.com'
        },
        {
          'id':2,
          'name':'phone',
          'iconClass':'fas fa-phone',
          'number1':` 92312378 968+`,
          'number2':` 771385262 967+ `,
          'number3':` 774854827 967+`,
        },
        {
          'id':3,
          'name':'position',
          'iconClass':'fas fa-map-marker-alt',
          // 'content':'Al-Baz Commercial Center, East Sultan Qaboos Masjid, Salalah'
          'content':`Al-Baz Commercial Center, East Sultan Qaboos Masjid,
          Salalah, Oman`
        },
        {
          'id':4,
          'name':'position',
          'iconClass':'fas fa-map-marker-alt',
          'content':'Nadhara Building, Near Ranad palace, Tarim, Hadhramaut'
        },
        {
          'id':5,
          'name':'commercial register',
          'iconClass':'CR',
          'content1':'1397623',
          'content2':'878'
        },
    ],
    this.clients=[
      {'id':1,
       'name':'Petro Masila Company',
       'imgsrc':'01.png',
       'altText':'Petro Masila logo'
       },
       {'id':2,
       'name':'Selah Foundation',
       'imgsrc':'03.png',
       'altText':'Selah logo'
       },
       {'id':3,
       'name':'Pesco Company',
       'imgsrc':'04.png',
       'altText':'Pesco logo'
       },
       {'id':5,
       'name':'Al Awn Foundation',
       'imgsrc':'02.png',
       'altText':'Al Awn logo'
       },
       {'id':6,
       'name':'Al Rasheed',
       'imgsrc':'05.png',
       'altText':'Al Rasheed logo'
       },
       {'id':6,
       'name':'Palgees Channel',
       'imgsrc':'06.png',
       'altText':'Palgess logo'
       },
       {'id':5,
       'name':'Al Andlas',
       'imgsrc':'07.png',
       'altText':'Al Andlas logo'
       },
    ],
    this.allWorks=[
      {
        'id':8,
        'title':'Aden Power plant Short Film',
        'imgsrc':'08.png',
        'altText':' النسخة القصيرة من فيلم انشاء محطة عدن الكهربائية ',
        'videoLink':'I4FI7tNs_HQ',
      },
      {
        'id':3,
        'title':'لقطات متنوعة من اعمال الرشيد',
        'imgsrc':'03.png',
        'altText':' صورة من فيديو للقطات متنوعة من اعمال مع شركة الرشيد ',
        'videoLink':'OOHPbejhFUM',
      },
      {
        'id':1,
        'title':'وهج الحضارة',
        'imgsrc':'01.png',
        'altText':'صورة غلاف معبرة لفلم وهج الحضارة',
        'videoLink':'Pfrjuri7SGE'
      },
      {
        'id':2,
        'title':'برومو برنامج نيل المعالي',
        'imgsrc':'02.png',
        'altText':'صورة غلاف معبرة لبرنامج نيل المعالي التعليمي',
        'videoLink':'SbX3ybEMduQ'
      },
      {
        'id':4,
        'title':'فلم تعريفي عن مؤسسة صلة',
        'imgsrc':'04.png',
        'altText':'صورة غلاف معبرة لفلم تعريفي عن مؤسسة صلة',
        'videoLink':'Ci0QYMxFaXc'
      },
      {
        'id':5,
        'title':'حكايات حضرمية | قصور تريم.. دهشة الطين',
        'imgsrc':'05.png',
        'altText':'صورة غلاف معبرة لحلقة حكايات حضرمية',
        'videoLink':'9Ww3TDtiKig'
      },
      {
        'id':6,
        'title':'كليب حنين',
        'imgsrc':'06.png',
        'altText':'صورة غلاف معبرة لكليب حنين الموسيقي ',
        'videoLink':'nBcDgi5R7mI'
      },
      {
        'id':7,
        'title':'كليب نيل المعالي',
        'imgsrc':'07.png',
        'altText':'صورة غلاف معبرة لكليب نيل المعالي',
        'videoLink':'LXXFNNKO_C4'
      },
    ]
  },
  mounted(){
    this.responsiveView();
    window.addEventListener("resize",this.responsiveView);
    this.devidedWorks();
  }
});
</script>

<style lang="scss">
@import 'scss/main.scss';
#app {
  font-family: Cairo, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  background-color:$primeColor;
  padding: $navHight 0;
}
#footer{
  border-top:3px solid #fff;
  background-color:$primeColor;
}
</style>

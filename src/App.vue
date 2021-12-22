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
        'about':{'title':'من نحن',
                'color':'$primeColor'},
        'services':{'title':'خدماتنا',
                'color':'$primeColor'},
        'works':{'title':'أعمالنا',
                'color':'$primeColor'},
        'clients':{'title':'عملاؤنا',
                'color':'$primeColor'},
        'contact':{'title':'تواصل معنا',
                'color':'#fff'},
      },
    this.slides=[
        {
          'id':'1',
          'imgsrc':'01',
          'header':`مرحبًا بك في شركة Smart Cut للإعلان والتسويق`,
          'subHeader':`ننتج أفضل الأعمال، بجودة وحرفيّة عالية`,
          'hasBtn':true,
          'hasText':true,
          'btn':`تواصل معنا`
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
            {mainText:`الحياة لا تتوقف عن منح الفرص، لكنها حتمًا لمن ينتهزها.
من سلطنةِ عُمان، أرض الخير والحضارة والفرص الواعدة، أسسنا نشاطنا التجاري في السابع عشر من سبتمبر عام ٢٠٢١م في مجال الترويج والإعلان، ليكون امتدادًا لرحلتنا التي قاربت ١٥ عامًا في مجال الإعلان والإنتاج الإعلامي.
خلال رحلتنا كوّنا تجربةً مردّها حب المعرفة والاطلاع، وخبرةً منبعها العمل في مختلف البقاع والأصقاع، ثم وضعنا خلاصة خبراتنا في مشاريع تعبّر عن رؤيتنا وأهدافنا.
في نوفمبر عام ٢٠١٣م انطلقنا بمشروعنا الأول في اليمن "شركة الرشيد الدوليّة" للإنتاج الإعلامي، لتليها بأعوامٍ قليلة انطلاقةُ شركتنا الخاصّة "Smart Cut" للإنتاج الفني في أغسطس عام ٢٠١٨م.
جمعنا فيها طاقمًا محترفًا طموحًا، فأرسينا دعائم الثقة مع عملائنا، واكتسبنا سمعة طيبة لالتزامنا الجديّة، الاحترافيّة، المرونة في أشد الضغوط، والدقّة في المواعيد وتسليم الأعمال. `,
                 textMore:`ولأنّ هدفنا منذ البداية كان منصبّاً على الإلهام والتأثير، واستشراف الفرص المستقبليّة للتوسّع، وتجاوز الحدود الجغرافيّة، ها نحنُ نجدّد انطلاقتنا في بلدنا الثاني عُمان، ونطمح أن تكون وجهةً وواجهةً لعلاقات قويّة ونوعيّة مع أكبر الشركات والمؤسسات.
مع كل بصمة عمل، ولبنة نجاح، نزداد يقينًا بأن شركتنا هي شراكاتنا التي لا تنحصر بمكان وزمن، ومكسبنا هو علاقاتنا وأعمالنا التي لا تقدر بثمن، ودافعنا للاستمرار هو إيماننا بما نقدّم، وشغفنا فيما ينمّي الإنسان ويخدم. `
                }
    this.services=[
      {
        'id':1,
        'classType':'col-6 col-md-3',
        'name':"الأفلام الترويجية والتعريفية",
        'imgSrc':'01.png',
        'altText':'رسم يدل على مشاهدةالافلام التعريفية',
        'description':`سواءً كانت لديك (شركة تجاريّة/ مشاريع عقاريّة/ بنوك/ مرافق تعليميّة، ثقافيّة، صحيّة، سياحيّة) نُنتج لكَ أفلامًا تستعرضُ أعمالك وإنجازاتك بأعلى مستويات الجودة والاحترافيّة، لتستقطب شريحةً أكبر من المستهدفين، وتحسّن صورتك الذهنية لديهم، وتجعل اسمك دائمًا في الصدارة.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':10,
        'classType':'col-6 col-md-3',
        'name':"الإعلانات التجارية",
        'imgSrc':'10.png',
        'altText':'رسم يدل على الإعلانات التجارية',
        'description':`لاشك وأنّ الانطباع الأول لدى عميلك هو الأهم، فهو ما يبقى في ذهنه مطوّلاً، ويمنحه الثقة بمنتجك أو خدمتك، ولهذا تتنافس الجهات لجعل إعلاناتها فريدةً وجذّابة. أياً تكن رسالتك الإعلانيّة (تسويق فكرة/ منتج/ خدمة جديدة أو سابقة) نضمن لك إيصالها بطرق فعّالة، وقوالب مختلفة وشيّقة لنضاعف أرقام مبيعاتك، ونرسّخ علامتك التجاريّة. `,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':9,
        'classType':'col-6 col-md-3',
        'name':"الحملات الإعلانية ",
        'imgSrc':'09.png',
        'altText':'رسم يدل على الحملات الإعلانية',
        'description':`يقوم خبراء التسويق في فريقنا بإعداد الخطط التسويقيّة لحملاتك الإعلانيّة المموّلة، واستخراج التقارير الكاملة عنها، مع إمكانيّة استهداف عملاء في مناطق جغرافيّة محددة أو جنسيات محددة.
فضلاً عن تقديم الاستشارات الإعلانية عن الحملات الإعلانيّة الجاذبة للعملاء، لتوسيع رقعة نشاطك، واستقطاب عملائك، وزيادة مبيعاتك.  `,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':13,
        'classType':'col-6 col-md-3',
        'name':"التصميم الجرافيكي",
        'imgSrc':'13.png',
        'altText':'رسم يدل على التصميم الجرافيكي',
        'description':`لأنّ التصاميم المبتكرة تضفي الروح والجاذبيّة لأي عمل، فإننا نقدم الخدمات الأفضل في: الهوية البصرية، الانفوجرافيك، الموشن جرافيك، التصميم ثلاثي الأبعاد والمتحرك.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':2,
        'classType':'col-6 col-md-3',
        'name':"الأفلام الوثائقية",
        'altText':'رسم يدل على الافلام الوثائقية',
        'imgSrc':'02.png',
        'description':`ما يصنع قيمة اللحظات المميزة، هو رصيدها من الخطوات والإنجازات.
سواءً كان لديك مشروع استثنائي تود توثيق مراحله، أو تود العودة بالزمن في مسار فيلم يستعرض تاريخ شركتك، ونجاحاتها لتعرضه في ذكرى التأسيس القادمة، أو ترغب في تسليط الضوء على قصص نجاح ملهمة في بيئة عملك. سنكون معك لنظهر ذلك بأفضل ما يكون، من الماضي إلى المستقبل. `,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':5,
        'classType':'col-6 col-md-3',
        'name':"التصوير الفوتوغرافي",
        'imgSrc':'05.png',
        'altText':'رسم يدل على التصوير',
        'description':`لأنّ العين هي أسرع الحواس تأثرًا وتفاعلاً مع محيطها، فإننا نولي التصوير اهتمامًا بالغًا، ونوظّف أقدر المصورين وأكفأهم، كما نواكب أحدث المعدّات والتقنيات في مجال التصوير. لنجعل من كل صورة نلتقطها متعة بصرية، وتحفة فنية.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':15,
        'classType':'col-6 col-md-3',
        'name':"تصميم الشاشات",
        'imgSrc':'15.png',
        'altText':'رسم يدل على تصميم الشاشات',
        'description':`لشاشات العرض أهميّة كبرى في الشركات، فهي الوسيلة الأولى وربما الأقوى في التأثير على الزوّار والعملاء المحتملين والتفاعل البصريّ معهم.
ولهذا فإننا نُوليها اهتمامًا في خدماتنا؛ إذ ننتج لك أعمالاً متكاملة وجذّابة في تفاصيلها من كتابة المحتوى إلى التصميم والتصوير والصوت والإخراج، لتعرضها بثقة على الشاشات في مقر شركتك وفروعها، فضلاً عن إمكانيّة عرضها على شاشات الإعلانات في الشوارع، وعلى وسائل التواصل الاجتماعي، والقنوات الفضائيّة.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':3,
        'classType':'col-6 col-md-3',
        'name':"الفيديو كليب (فيديو غنائي)",
        'imgSrc':'03.png',
        'altText':'رسم يدل على عمل الفيديو كليب',
        'description':`الموسيقى لغة الشعوب المشتركة، فلا تجد طفلاً ولا بالغًا -في أي بقعة من العالم- إلا وهو يدندن نغمته المفضلة بانسجام. وحين تُدمج بالكلمات الساحرة، والمشاهد الباهرة، تصبح الكليبات الغنائيّة الوسيلة الأمثل لإيصال الرسائل الهادفة، وغرس القيم الإيجابيّة. ننتج لك كليبات غنائيّة بأعلى مستويات الاحترافيّة، بدءًا من اختيار الكلمات المؤثرة، مرورًا بمراحل الإنتاج والإخراج، لتصل رسالتك قوية، ويُصبح لأعمالك بصمة وهويّة.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':11,
        'classType':'col-6 col-md-3',
        'name':"كتابة المحتوى",
        'imgSrc':'11.png',
        'altText':'رسم يدل على كتابة المحتوى',
        'description':`الكلمة هي عماد القرار، وملتقى الأفكار.
يقدم لك خبراؤنا في كتابة المحتوى جملةً من الخدمات والاقتراحات للتعبير عن أفكارك بشكل احترافي: (الصياغة المهنيّة لمشاريعك وأعمالك، كتابة البروفايل التعريفي لشركتك أو التقرير السنوي لإنجازاتك، إثراء محتوى منصات السوشل ميديا الخاصة بنشاطك، الكتابة الإبداعيّة في مختلف المجالات وبحسب ما تقتضيه رؤيتك).`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':6,
        'classType':'col-6 col-md-3',
        'name':"برامج التلفزيون واليوتيوب",
        'imgSrc':'06.png',
        'altText':'رسم يدل على شكل البامج التفزيونية',
        'description':`نقدم لك أفكارًا برامجيّة حصريّة في مختلف المجالات (التعليم/ الثقافة/ الصحة/ الفن والترفيه/ المسابقات) ثم ننتجها لك خصيصًا بحرفيّة عالية لتصل رسالتك وتظهر علامتك التجارية بشكل لائق.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':7,
        'classType':'col-6 col-md-3',
        'name':"الإنتاج الصوتي",
        'imgSrc':'07.png',
        'altText':'رسم يدل على عمل الإنتاج الصوتي',
        'description':`في حالة كنت مُهتمًا بالإنتاجات الصوتية كالإعلانات الإذاعيّة أو البرامج الإذاعيّة أو البرودكاست أو الموسيقى التصويريّة، فإننا نقدم لك أفضل الأفكار والإنتاجات من خلال شبكة علاقاتنا باستديوهات الإنتاج الصوتي والمهندسين المحترفين.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':8,
        'classType':'col-6 col-md-3',
        'name':"البصمة الصوتية والبصرية",
        'imgSrc':'08.png',
        'altText':'رسم يدل على البصمة الصوتية',
        'description':`لتعزيز علامتك التجاريّة، ودخولك عالم الابتكار والمنافسة، نقدم لك خدمة تحريك شعارك بشكل جذاب، وإنتاج بصمة صوتيّة موسيقيّة تعكس هويتك ومجالك لتستخدمها كمقدمة في جميع أعمالك الترويجيّة. `,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':4,
        'classType':'col-6 col-md-3',
        'name':"توثيق الفعاليات",
        'imgSrc':'04.png',
        'altText':'رسم يدل على الفعاليات',
        'description':`نرافقك في مناسباتك الهامة من مؤتمرات وندوات وفعاليات، ونجعل بالك مطمئنًا، إذ نتكفّل بتوثيق كافة التفاصيل واللحظات بالصور الفوتوغراف، والفيديو، بمنتهى الكفاءة والاحترافيّة.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':12,
        'classType':'col-6 col-md-3',
        'name':"تصميم وتطوير المواقع",
        'imgSrc':'12.png',
        'altText':'رسم يدل على تصميم وتطوير المواقع',
        'description':`موقعك الإلكتروني هو واجهتك الأولى، ومقر عملك الافتراضي، ولهذا فإننا نحرص على تصميمه وإظهاره بشكل عصري ليحاكي جهودك على أرض الواقع.`,
        'descriptionWindow':false,
        'arrowVisible':false
      },
      {
        'id':14,
        'classType':'col-6 col-md-3',
        'name':"إدارة صفحات التواصل",
        'imgSrc':'14.png',
        'altText':'رسم يدل على إدارة صفحات التواصل',
        'description':`نوظّف الإقبال الجماهيري على منصات التواصل الاجتماعي لصالحك، إذ يقوم فريقنا من كاتبي المحتوى ومصممي المنشورات ومختصي النشر وأدوات السوشل ميديا بإدارة صفحاتك الرقميّة بكفاءة، وعرض مشاريعك وخدماتك بطابع جذّاب وشيّق. `,
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
      {
        'id':4,
        'name':'twitter',
        'iconClass':'fab fa-twitter',
        'link':'https://www.twitter.com'
      },
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
       'name':'شركة بترومسيلة',
       'imgsrc':'01.png',
       'altText':'شعار شركة بترومسيلة'
       },
       {'id':2,
       'name':'مؤسسة صلة',
       'imgsrc':'03.png',
       'altText':'شعار مؤسسة صلة'
       },
       {'id':3,
       'name':'شركة بيسكو',
       'imgsrc':'04.png',
       'altText':'شعار شركة بيسكو'
       },
       {'id':5,
       'name':'مؤسسة العون',
       'imgsrc':'02.png',
       'altText':'شعار مؤسسة العون'
       },
       {'id':6,
       'name':'شركة الرشيد',
       'imgsrc':'05.png',
       'altText':'شعار شركة الرشيد'
       },
       {'id':6,
       'name':'قناة بلقيس',
       'imgsrc':'06.png',
       'altText':'شعار قناة بلقيس'
       },
       {'id':5,
       'name':'جامعة الأندلس',
       'imgsrc':'07.png',
       'altText':'شعار جامعة الأندلس'
       },
    ],
    this.allWorks=[
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

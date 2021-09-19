<template>
    <section class="about-us">
        <div class="description">
            <h3>
                الحياةُ لا تتوقفُ عن منحِ الفُرص، لكنّها لمن ينتهزها.
على امتدادِ رحلةٍ قاربتْ ١٥ عامًا في مجالِ الإعلان والإنتاجِ المرئي كوّنا تجربةً مردُّها حُبُّ المعرفة والاطِّلاع، وخبرةً منبعها العملُ في مُختلفِ البقاعِ والأصقاع.
ثم وضعنا خُلاصةَ خبراتنا في مشروعٍ يُعبِّرُ عن كياننا وأهدافنا.
في العاشر من أكتوبر عام ٢٠١٩ ميلاديّة، أسسنا "Smart Cut" في حضرموت اليمن، لتكونَ وِجهةً وواجهةً لعلاقاتٍ قويّة، وإنتاجاتٍ نوعيّة مع أكبرِ الشركات والمُؤسسات في المنطقة.
جمعنا طاقمًا مُحترفًا طموحًا، فأرسينا دعائمَ الثقة مع عملائنا، واكتسبنا سُمعةً طيّبة لالتزامنا الجديّة، الاحترافيّة، المرونة في أشدِّ الضغوط، والدقّة في المواعيدِ وتسليمِ الأعمال.
ولأنّ هدفنا مُنذُ البداية لم يرتبط بالوصولِ السريع، ولا بالإطراءاتِ العابرة، بل بالقدرةِ على الإلهامِ والتأثير، فإنّنا
نستشرِفُ الفُرصَ المُستقبليّة للتوسّع، وتجاوز الحدودِ الجغرافيّة، والقوالبَ النمطيّة.
مع كُلّ بصمةِ عمل ، ولبنةِ نجاح، نزدادُ يقينًا بأنّ شركتنا هي شراكاتنا التي لا تنحصرُ بمكانٍ وزمن ، ومكسبنا هو أعمالنا التي لا تُقدّرُ بثمن، ودافعنا للاستمرارِ هو إيماننا بما نُقدّم، وشغفنا فيما يُنمِّي الإنسانَ ويخدم.
</h3>
        </div>
        <div class="pictures">
            <img class="big-right-side" src="../../assets/big-right-side.png">
            <img class="up-left-side" src="../../assets/up-left-side.png">
            <img class="down-left-side" src="../../assets/down-left-side.png">
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .about-us{
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding:2rem 0;
        width:1140px;
        margin:0 auto;
        overflow: hidden;
        .description{
            width:50%;
        h3{
            text-align: right;
            font-size:20px;
            line-height: 1.8;
            text-align: justify;
        }
        }
        .pictures{
            width:45%;
            display:grid;
            grid-template-columns: 50% 50%;
            grid-template-rows:50% 50% ;
            gap:20px 20px;

            img{
                // width:100%;
                // height: 100%;
                
            }
            .big-right-side{
                grid-row:1/span2;
            }
        }
    }
</style>
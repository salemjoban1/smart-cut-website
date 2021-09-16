<template>
    <section class="about-us">
        <div class="description">
            <h3>حن في "مجموعة الطاير" نؤمن أن النجاح يقاس بمعايير تتعدى مجرد نسب المبيعات
إن كل خطوة نقوم بها نابعة من شغفنا بتحقيق التميز. ومن خلال كل شركة من شركاتنا، فإننا نرسي أفضل الممارسات والمعايير التي يحتذي بها الآخرون. ونحن نؤمن بالعلاقات التجارية طويلة الأمد والقائمة على الثقة المتبادلة، والممارسات التجارية الأخلاقية، والسعي المشترك إلى تقديم كل ما هو متميز</h3>
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
        // align-items:flex-start;
        // height: 100vh;
        padding:2rem 2rem;
        
        // display:grid;

        .description{
            width:40%;
        }
        .pictures{
            width:60%;
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
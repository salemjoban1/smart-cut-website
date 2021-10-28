<template>
    <div class="contact-us container">
        <form action="" class="form-group row">
                <input type="text" class="person-name col-md-5" placeholder="الأسم">
                <input type="tel" class="mobile col-md-5" placeholder="رقم الجوال">
                <input type="text" class="comp-name col-md-5" placeholder="اسم الشركة">
                <input type="email" class="email col-md-5"  placeholder="عنوان الإيميل">
                <textarea name="type" class="desc col-md-10" cols="" rows="" placeholder="اكتب طلبك..."></textarea>
                <!-- <div class="empty col-md-2"></div> -->
                <!-- error => how to make item take full page with flex  -->
                <input type="submit" value="ارسال" class="submit col-md-12">
        </form>
    </div>
</template>

<script>
export default {
    name:'contact-us'
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
    .contact-us{
        .form-group{
            padding:1.2rem;
            justify-content: center;
            input,textarea{
                padding:0.7rem 0.5rem;
                border:0;
                outline:0;
                
                // margin:0.5rem;
            }
            .person-name,.mobile,.comp-name,.email{
                background-color: #fff;
                margin:0.5rem;
            }
            textarea{
                margin:0.5rem;
            }
            input{
                 
            }
            input:focus{
                border-bottom: 2px solid $primeColor;
                
            }
            .desc{
                // width:85%;
            }
        }
        .submit{
            width:fit-content;
            border:0;
            display:block;
            background-color:$secondColor;
            padding:0.2rem 1.4rem;
            float:right;
            align-self: flex-start;
        }
    }
    
</style>
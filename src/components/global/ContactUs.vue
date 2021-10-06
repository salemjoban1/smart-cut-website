<template>
    <div class="contact-us container">
        <form action="">
            <div class="form-group row g-3 justify-content-center">
                <input type="text" class="person-name sm-3 col-md-5" placeholder="الأسم">
                <input type="tel" class="mobile col-md-5" placeholder="رقم الجوال">
                <input type="text" class="comp-name sm-3 col-md-5" placeholder="اسم الشركة">
                <input type="email" class="email col-md-5"  placeholder="عنوان الإيميل">
                <textarea name="type" class="desc col-md-10" cols="" rows="" placeholder="اكتب طلبك..."></textarea>
                <!-- <div class="empty col-md-2"></div> -->
                <!-- error => how to make item take full page with flex  -->
             </div>
             <input type="submit" value="ارسال" class="submit">
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
            padding-top:1.2rem;
            input,textarea{
                padding:0.7rem 0.5rem;
                border:0;
                outline:0;
                background-color: rgb(196, 196, 196);
                
            }
            input{
                 margin-left:0.5rem;
            }
            input:focus{
                border-bottom: 2px solid $primeColor;
                
            }
        }
        .submit{
            border:0;
            display:block;
            background-color:$primeColor;
            padding:0.2rem 1.4rem;
        }
    }
    
</style>
<template>
    <div class="contact-us container">
        <form class="form-group row" @submit.prevent="sendEmail">
            <input type="text" class="person-name col-12 col-md-6" placeholder="الاسم" v-model="fromName" name="fromName">

            <input type="tel" class="mobile col-12 col-md-6" placeholder="رقم الجوال" v-model="mobile" name="mobile">

            <input type="text" class="comp-name col-12 col-md-6" placeholder="اسم الشركة" v-model="companyName" name="companyName">

            <input type="email" class="email col-12 col-md-6"  placeholder="عنوان الإيميل" v-model="email" name="email">

            <textarea type="textarea" class="desc col-md-12" cols="" rows="" placeholder="اكتب طلبك..." v-model="message" name="message">
            </textarea>

            <input type="submit" value="إرسال" class="submit col-2">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    name:'contact-us',
    props:{
        mobileView:Boolean
    },
    date(){
        return{
            fromName:'',
            mobile:'',
            companyName:'',
            email:'',
            message:''

        }
    },
    methods: {
        sendEmail: (e) => {
            emailjs.sendForm('service_cgpwymg', 'template_57jj36i', e.target, 'user_ddH7gTHbjRghV9BCnUqpc')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });
                
        },
        formValidation:function(){

        },
        resetFields:function(e){
            this.sendEmail(e);
            this.fromName = ' ';
            this.mobile = ' ';
            this.companyName = ' ';
            this.email = ' ';
            this.message = ' ';
        }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
    .contact-us{
        margin:0 auto;
        .form-group{
            padding:1.2rem;
            input,textarea{
                padding:0.7rem 0.5rem;
                margin-top:0.8rem;
                border:0;
                outline:0;
                @include transition-ease;
            }
            .person-name,.mobile,.comp-name,.email{
                background-color: #fff;
                border-left:solid 0.8rem $primeColor;
            }
            textarea{
                border-left:solid 0.8rem $primeColor;
            }
            input:focus{
                @include transition-ease;
            }
            .submit{
                width:fit-content !important;
                border:0;
                background-color:$secondColor;
                padding:0.2rem 1.4rem;
                align-self: flex-start;
            }
        }
        
    }
    
</style>
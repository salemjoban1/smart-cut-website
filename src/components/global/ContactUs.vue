<template>
    <div class="contact-us container">
        <form class="form-group row" @submit.prevent="sendEmail">
            <input type="text" class="person-name col-12 col-md-6" placeholder="name" v-model="fromName" name="fromName" required>

            <input type="tel" class="mobile col-12 col-md-6" placeholder="Phone Number (optional)" v-model="mobile" name="mobile">

            <input type="email" class="email col-12 col-md-6"  placeholder="Email Address" v-model="email" name="email" required>
            
            <input type="text" class="comp-name col-12 col-md-6" placeholder="Company Name (optional)" v-model="companyName" name="companyName">

            <textarea type="textarea" class="desc col-md-12" cols="" rows="4" placeholder=" Write Your Request..." v-model="message" name="message" required>
            </textarea>

            <input type="submit" value="Send"
                   class="submit col-2"
                   :class="{loading:isLoading}"
                   id="submitBtn">
            <!-- message box showing whene click in submit btn -->
            <div v-show="showMessage" class="send-message col-8">
                <!-- success message showing when message seneded successufly -->
                <div class="success" v-show="sended">
                    <i class="far fa-check-circle"></i>
                    <h3>Your Request Has Been Received, We Will Contact With You soon</h3>
                </div>
                <!-- falied message showing when message did not seneded successufly -->
                <div class="failed" v-show="!sended">
                    <i class="far fa-times-circle"></i>
                    <h3>Error While Sending, Please Try Again</h3>
                </div>
            </div>
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
    data(){
        return{
            fromName:'',
            mobile:'',
            companyName:'',
            email:'',
            message:'',
            isLoading:false,
            sended:false,
            showMessage:false

        }
    },
    methods: {
        sendEmail(e) {
            this.isLoading = true;
            this.sended = false;
            this.showMessage = false;
            try {
                emailjs.sendForm('service_1efp16h', 'template_x0kkfjd', e.target,
                'user_PgzY5Zzyu339JbOgZh8VC', {
                fromName: this.name,
                email:this.email,
                message:this.message,
                mobile: this.mobile,
                companyName: this.companyName
                })
                console.log("sucess sending");
                this.sended = true;
                this.isLoading = false;
                this.showMessage = true;
                this.disableSubmit();
            } catch(error) {
                console.log({error})
                this.showMessage = true;
                this.isLoading = false;
            }
            // Reset form field
                this.fromName = ''
                this.email = ''
                this.message = ''
                this.mobile = ''
                this.companyName = ''
            },
        disableSubmit: function(){
            let btn = document.getElementById('submitBtn');
            btn.disabled = true;
        },
        // sendEmail: (e) => {
        //     emailjs.sendForm('service_1efp16h', 'template_x0kkfjd', e.target,        'user_PgzY5Zzyu339JbOgZh8VC')
        //         .then((result) => {
        //             console.log('SUCCESS!', result.status, result.text);
        //             sended = true;
        //             this.isLoading = false;
        //             this.showMessage = true;
        //         },(error) => {
        //             console.log('FAILED...', error);
        //             this.showMessage = true;
        //             this.isLoading = false;
        //         });
        //         // Reset form field
        //         this.name = '';
        //         this.email = '';
        //         this.message = '';
        //         this.mobile = '';
        //         this.companyName = '';
        // },  
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';
    .contact-us{
        margin:0 auto;
        .form-group{
            padding:1.2rem;
            display:flex;
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
                margin-left:0.8rem;
                border:0;
                background-color:$secondColor;
                padding:0.3rem 1.5rem;
                align-self: flex-start;
                font-size:1.1rem;
                &.loading{
                    opacity:0.8;
                    cursor:no-drop;
                }
            }
            .send-message{
                width:fit-content !important;
                background-color:#fff ;
                margin-top:0.8rem;
                padding:0.3rem 1.2rem;
                justify-self: center;
                @include transition-ease;
                -webkit-animation-duration: 0.8s;
                -moz-animation-duration: 0.8s;
                -ms-animation-duration: 0.8s;
                animation-duration: 0.8s;
                -webkit-animation-name:fade;
                -moz-animation-name:fade;
                -ms-animation-name:fade;
                animation-name:fade;
                .success{
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    i{
                        padding-left: 0.5rem;
                        color:rgb(41, 179, 37);
                        font-size:1.5rem;
                    }
                }
                .failed{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    i{
                        padding-left: 0.5rem;
                        color:rgb(255, 0, 0);
                        font-size:1.5rem;
                    }
                }
                h3{
                    color:$primeColor;
                    font-size:1.2rem;
                    
                }
            }
        }
        @keyframes fade{
            0%{
                opacity:0;
            }
            100%{
                opacity:0.8;
            }
        }
    }
    
</style>
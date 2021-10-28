<template>
    <div class="our-services">
        <div class="container" id="container-service">
            <div class="row gx-0" id="full-content">
                <service
                v-for="service in services" 
                :key="service.id" 
                :service="service"
                :ServiceDimensions="ServiceDimensions"/>
            </div>
        </div>
    </div>
</template>

<script>
import service from'./Service.vue'
export default {
    name:'our-services',
    data(){
        return{  
            containerWidth:null,
            ServiceDimensions: {'maxHeight':0,'fullWidth':0}
        }
    },
    props:{
        services:Object
    },
    components:{
        service
    },
    methods:{
        matchServicesHeight:function(){
            let itemChildern = document.getElementsByClassName("inner-content");
            for(let i=0; i < itemChildern.length; i++) 
            {
                if(itemChildern[i].offsetHeight > this.ServiceDimensions.maxHeight)
                {
                    this.ServiceDimensions.maxHeight = itemChildern[i].offsetHeight; 
                }
                
            }
            for(let j = 0; j < itemChildern.length; j++) 
            {
                itemChildern[j].style.height = `${this.ServiceDimensions.maxHeight}px`; 
            }
            
        },
        getContainerWidth:function(){
            let container = document.getElementById("full-content");
            console.log(container.offsetWidth);
            this.ServiceDimensions.fullWidth = `${container.offsetWidth - 20}px`;
        }
    },
    watch:{
    },
    beforeMount() {
        // this.getChlidern;
        
    },
    mounted(){
        this.getContainerWidth();
        this.matchServicesHeight();
    },
    updated(){
        
    }
}
</script>

<style lang="scss" scoped>
    .row{
        margin:0 !important
    }
</style>
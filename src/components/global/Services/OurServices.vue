<template>
    <div class="our-services">
        <div class="container" id="container-service">
            <div v-if="!mobileView" class="row g-0" id="full-content">
                <service
                v-for="(service,index) in servicesWithDescription" 
                :key="index" 
                :service="service"
                :serviceDescription="serviceDescription"
                @click="toggleDescriptionWindow(service),this.test()"/>
            </div>
            <div v-if="mobileView" class="row g-0" id="full-content">
                <service
                v-for="(service,index) in servicesWithDescriptionMobile" 
                :key="index" 
                :service="service"
                :serviceDescription="serviceDescription"
                @click="toggleDescriptionWindow(service)"/>
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
            servicesWithDescription:[],
            servicesWithDescriptionMobile:[],
            openedServiceIndex:null,
            openedWindowIndex:null,
            servicesTemp:[],
            groupIdList:[],
            serviceDescription:'',
            containerWidth:null,
            ServiceMaxHeight: 0
        }
    },
    props:{
        services:Object,
        mobileView:Boolean
    },
    components:{
        service
    },
    methods:{
        matchServicesHeight:function(){
            let itemChildern = document.getElementsByClassName("inner-content");
            for(let i=0; i < itemChildern.length; i++) 
            {
                if(itemChildern[i].offsetHeight > this.ServiceMaxHeight)
                {
                    this.ServiceMaxHeight = itemChildern[i].offsetHeight; 
                }  
            }
            for(let j = 0; j < itemChildern.length; j++) 
            {
                itemChildern[j].style.height = `${this.ServiceMaxHeight}px`; 
            }
        },
        getContainerWidth:function(){
            let container = document.getElementById("full-content");
            console.log(container.offsetWidth);
            this.ServiceDimensions.fullWidth = `${container.offsetWidth - 20}px`;
        },
        makeServicesLayout:function(){
            this.servicesTemp = [...this.services];
            let count = 1;
            for (let i = 0;i < this.services.length;i++)
            {
                this.servicesWithDescription.push(this.services[i]);
                this.groupIdList.push(this.services[i].id);
                this.servicesTemp.pop();
                if (this.groupIdList.length === 4)
                {
                    this.servicesWithDescription.push({'id':null,'classType':'col-12',
                    'descriptionWindow':true,
                    'isOpen':false});
                    this.servicesWithDescription[count].id = this.groupIdList;
                    this.groupIdList = [];
                    count = count + 2;
                }
                else if ((this.groupIdList.length < 4) && (this.servicesTemp.length == 0))
                {
                    this.servicesWithDescription.push({'id':null,'classType':'col-12',
                    'descriptionWindow':true,
                    'isOpen':false});
                    this.servicesWithDescription[count].id = this.groupIdList;
                    this.groupIdList = [];
                }
                else
                {
                    count = count + 1;
                }
            }
        },
        makeServicesMobileLayout:function(){
            this.servicesTemp = [...this.services];
            let count = 1;
            for (let i = 0;i < this.services.length;i++)
            {
                this.servicesWithDescriptionMobile.push(this.services[i]);
                this.groupIdList.push(this.services[i].id);
                this.servicesTemp.pop();
                if (this.groupIdList.length === 2)
                {
                    this.servicesWithDescriptionMobile.push({'id':null,'classType':'col-12',
                    'descriptionWindow':true,
                    'isOpen':false});
                    this.servicesWithDescriptionMobile[count].id = this.groupIdList;
                    this.groupIdList = [];
                    count = count + 2;
                }
                else if ((this.groupIdList.length < 2) && (this.servicesTemp.length == 0))
                {
                    this.servicesWithDescriptionMobile.push({'id':null,'classType':'col-12',
                    'descriptionWindow':true,
                    'isOpen':false});
                    this.servicesWithDescriptionMobile[count].id = this.groupIdList;
                    this.groupIdList = [];
                }
                else
                {
                    count = count + 1;
                }
            }
        },
        toggleDescriptionWindow:function(service){
            if (!service.descriptionWindow){
                if (!this.mobileView){
                    for(let i = 0; i < this.servicesWithDescription.length;i++)
                    {
                        if (Array.isArray(this.servicesWithDescription[i].id))
                        {
                            this.servicesWithDescription[i].isOpen = false;
                            if ((this.servicesWithDescription[i].id).includes(service.id))
                            {
                                this.serviceDescription = service.description;
                                this.servicesWithDescription[i].isOpen = true; 
                                this.openedWindowIndex = i;
                            }
                        }
                        else if (this.servicesWithDescription[i].id === service.id)
                        {
                            this.servicesWithDescription[i].arrowVisible = true;
                            this.openedServiceIndex = i;
                        }
                        else{
                            this.servicesWithDescription[i].arrowVisible = false;
                        }
                    }
                }
                else
                {
                    for(let i = 0; i < this.servicesWithDescriptionMobile.length;i++)
                    {
                        if (Array.isArray(this.servicesWithDescriptionMobile[i].id))
                        {
                            this.servicesWithDescriptionMobile[i].isOpen = false;
                            if ((this.servicesWithDescriptionMobile[i].id).includes(service.id))
                            {
                                this.serviceDescription = service.description;
                                this.servicesWithDescriptionMobile[i].isOpen = true; 
                            }
                        }
                        else if (this.servicesWithDescriptionMobile[i].id === service.id)
                        {
                            this.servicesWithDescriptionMobile[i].arrowVisible = true;
                        }
                        else{
                            this.servicesWithDescriptionMobile[i].arrowVisible = false;
                        }
                    }
                }
                
            }
        },
        closeService:function(){
            this.servicesWithDescription[this.openedServiceIndex].arrowVisible = false;
            this.servicesWithDescription[this.openedWindowIndex].isOpen = false;
        },
        test:function(){
            console.log(this.openedServiceIndex);
            console.log(this.openedWindowIndex);
            
        }
    },
    created(){
        this.makeServicesLayout();
        this.makeServicesMobileLayout();
    },
    mounted(){
        this.matchServicesHeight();
    },
    updated(){
        this.matchServicesHeight();
    }
}
</script>

<style lang="scss" scoped>
    .row{
        margin:0 !important
    }
</style>
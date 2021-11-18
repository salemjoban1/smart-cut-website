<template>
    <div class="our-services">
        <div class="container">
            <div v-if="!mobileView" class="row">
                <service
                v-for="(service,index) in servicesWithDescription" 
                :key="index" 
                :service="service"
                :serviceDescription="serviceDescription"
                @click="toggleDescriptionWindow(service)"
                @close-window ="closeService()"/>
            </div>
            <div v-else-if="mobileView" class="row">
                <service
                v-for="(service,index) in servicesWithDescriptionMobile" 
                :key="index" 
                :service="service"
                :serviceDescription="serviceDescription"
                @click="toggleDescriptionWindow(service)"
                @close-window ="closeService()"/>
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
            // saving data from services array for pc layout  
            servicesWithDescription:[],
            // saving data from services array for mobile layout
            servicesWithDescriptionMobile:[],
            // saving opened service index by pc layout
            openedServiceIndex:0,
            // saving opened description window index by pc layout
            openedWindowIndex:0,
            // saving opened service index by mobile layout
            openedServiceIndexMobile:0,
            // saving opened description window index by mobile layout
            openedWindowIndexMobile:0,
            servicesTemp:[],
            servicesLen:0,
            // saving service ids that description window can show their's data
            groupIdList:[],
            // saving description text of clicked service
            serviceDescription:'',
            // saving max height of services to fit them all
            ServiceMaxHeight: 0
        }
    },
    emits:['close-window'],
    props:{
        services:Object,
        mobileView:Boolean
    },
    components:{
        service
    },
    methods:{
        matchServicesHeight:function(){
            // take the inner box for services to array 
            let itemChildern = document.getElementsByClassName("inner-content");
            // loop to find the max height of service
            for(let i=0; i < itemChildern.length; i++) 
            {
                if(itemChildern[i].offsetHeight > this.ServiceMaxHeight)
                {
                    this.ServiceMaxHeight = itemChildern[i].offsetHeight; 
                }  
            }
            // set the max height founded to all boxes (to be same in height)
            for(let j = 0; j < itemChildern.length; j++) 
            {
                itemChildern[j].style.height = `${this.ServiceMaxHeight}px`; 
            }
        },
        makeServicesLayout:function(){
            // saving length of service to var
            this.servicesLen = this.services.length;
            // uisng as index to moving to servicesWithDescription array
            let count = 1;
            for (let i = 0;i < this.services.length;i++)
            {
                // moving from services to new array 4 services without action
                this.servicesWithDescription.push(this.services[i]);
                // save the the ids for 4 services
                this.groupIdList.push(this.services[i].id);
                // decrease len to know whene it has less than 4 services at the end
                this.servicesLen --;
                // when 4 services saved in the main array and it's ids registered 
                if (this.groupIdList.length === 4)
                {
                    // add Object for discription window
                    this.servicesWithDescription.push({'id':null,'classType':'col-12',
                    'descriptionWindow':true,
                    'isOpen':false});
                    // add the id list for last 4services to the description id to descreiption object 
                    this.servicesWithDescription[count].id = this.groupIdList;
                    // empty the ids list
                    this.groupIdList = [];4
                    // increase by tow to jump the discription window added recently
                    count = count + 2;
                }
                // whene there are less then 4 services remainder from all services
                else if ((this.groupIdList.length < 4) && (this.servicesLen == 0))
                {
                    // add Object for discription window
                    this.servicesWithDescription.push({'id':null,'classType':'col-12',
                    'descriptionWindow':true,
                    'isOpen':false});
                    // save the the ids for 4 services to descreiption object
                    this.servicesWithDescription[count].id = this.groupIdList;
                    // empty the ids list
                    this.groupIdList = [];
                }
                else
                {
                    // increase by one when service pushed to servicesWithDescription and not discription object added
                    count = count + 1;
                }
            }
        },
        makeServicesMobileLayout:function(){
            // saving length of service to var
            this.servicesLen = this.services.length;
            // uisng as index to moving to servicesWithDescriptionMobile array
            let count = 1;
            for (let i = 0;i < this.services.length;i++)
            {
                // moving from services to new array 2 services without action
                this.servicesWithDescriptionMobile.push(this.services[i]);
                // save the the ids for 2 services
                this.groupIdList.push(this.services[i].id);
                // decrease len to know whene it has less than 4 services at the end
                this.servicesLen --;
                // when 2 services saved in the main array and it's ids registered
                if (this.groupIdList.length === 2)
                {
                    // add Object for discription window
                    this.servicesWithDescriptionMobile.push({'id':null,'classType':'col-12',
                    'descriptionWindow':true,
                    'isOpen':false});
                    // add the id list for last 2 services to the description id to descreiption object 
                    this.servicesWithDescriptionMobile[count].id = this.groupIdList;
                    // empty the ids list
                    this.groupIdList = [];
                    // increase by tow to jump the discription window added recently
                    count = count + 2;
                }
                // whene there are less then 4 services remainder from all services
                else if ((this.groupIdList.length < 2) && (this.servicesLen == 0))
                {
                    // add Object for discription window
                    this.servicesWithDescriptionMobile.push({'id':null,'classType':'col-12',
                    'descriptionWindow':true,
                    'isOpen':false});
                    // add the id list for last 2 services to the description id to descreiption object 
                    this.servicesWithDescriptionMobile[count].id = this.groupIdList;
                    // empty the ids list
                    this.groupIdList = [];
                }
                else
                {
                    // increase by one when service pushed to servicesWithDescriptionMobile and not discription object added
                    count = count + 1;
                }
            }
        },
        toggleDescriptionWindow:function(service){
            // if service inputed is service box (not description window)
            if (!service.descriptionWindow){
                // if in pc layout
                if (!this.mobileView){
                    for(let i = 0; i < this.servicesWithDescription.length;i++)
                    {
                        // if the item object has id value array of ids (that mean it's description window object)  
                        if (Array.isArray(this.servicesWithDescription[i].id))
                        {
                            // to reset all unopened window descriptions
                            this.servicesWithDescription[i].isOpen = false;
                            // if id for inputed service value is stored in ids of disscription window Object
                            if ((this.servicesWithDescription[i].id).includes(service.id))
                            {
                                // update the service description var with clicked service description
                                this.serviceDescription = service.description;
                                // open this window discription 
                                this.servicesWithDescription[i].isOpen = true; 
                                // store the index of window opened to close it later
                                this.openedWindowIndex = i;
                            }
                        }
                        // if it's found as same id as reserved  
                        else if (this.servicesWithDescription[i].id === service.id)
                        {
                            // show arrow for clicked service
                            this.servicesWithDescription[i].arrowVisible = true;
                            // store index of service cliced to hide arrow on close later
                            this.openedServiceIndex = i;
                        }
                        else{
                            // reset hide any service arrow but the clicked
                            this.servicesWithDescription[i].arrowVisible = false;
                        }
                    }
                }
                // if in mobile layout
                else
                {
                    for(let i = 0; i < this.servicesWithDescriptionMobile.length;i++)
                    {
                        // if the item object has id value array of ids (that mean it's description window object) 
                        if (Array.isArray(this.servicesWithDescriptionMobile[i].id))
                        {
                            // to reset all unopened window descriptions
                            this.servicesWithDescriptionMobile[i].isOpen = false;
                            // if id for inputed service value is stored in ids of disscription window Object
                            if ((this.servicesWithDescriptionMobile[i].id).includes(service.id))
                            {
                                // update the service description var with clicked service description
                                this.serviceDescription = service.description;
                                // open this window discription 
                                this.servicesWithDescriptionMobile[i].isOpen = true;
                                // store the index of window opened to close it later
                                this.openedWindowIndexMobile = i; 
                            }
                        }
                        else if (this.servicesWithDescriptionMobile[i].id === service.id)
                        {
                            // show arrow for clicked service
                            this.servicesWithDescriptionMobile[i].arrowVisible = true;
                             // store index of service cliced to hide arrow on close later
                            this.openedServiceIndexMobile = i;
                        }
                        else
                        {
                             // reset hide any service arrow but the clicked
                            this.servicesWithDescriptionMobile[i].arrowVisible = false;
                        }
                    }
                }
                
            }
        },
        closeService:function(){
            // close openining description window and hide service arrow by using registered index of clicked service for pc layout
            this.servicesWithDescription[this.openedServiceIndex].arrowVisible = false;
            this.servicesWithDescription[this.openedWindowIndex].isOpen = false;
            // close openining description window and hide service arrow by using registered index of clicked service for mobile layout
            this.servicesWithDescriptionMobile[this.openedServiceIndexMobile].arrowVisible = false;
           this.servicesWithDescriptionMobile[this.openedWindowIndexMobile].isOpen = false;
        }
    },
    watch:{
        // close opened windows whenever screen resize
        mobileView:function(val){
            this.closeService();
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

<style lang="scss">
@import '../../../scss/main.scss';
    
</style>
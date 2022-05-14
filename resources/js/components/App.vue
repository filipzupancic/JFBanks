<template>
<div>
        <router-view> </router-view>
</div>
<div>
        <bottom-chat></bottom-chat>
</div>
</template>
 
<script>
import { defineComponent } from "vue";
import BottomChat from './BottomChat'
    export default defineComponent({
        data(){
            return{
                
            }
        },
        components:{
            "bottom-chat":BottomChat,
        },
        setup(){
            return{

                
            }
        }

    })
</script>
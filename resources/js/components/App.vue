<template>
<div>
<Header style="z-index: 100;"></Header>
</div>
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
import Header from "./Header";

    export default defineComponent({
        data(){
            return{
                
            }
        },
        components:{
            "bottom-chat":BottomChat,
            Header,
        },
        setup(){
            return{

                
            }
        }

    })
</script>
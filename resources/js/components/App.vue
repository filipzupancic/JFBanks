<template>
<div>
<Header v-if="!modalsActive" style="z-index: 100;"></Header>
</div>
<div>
        <router-view @modalsChange="modalsChange"> </router-view>
</div>
<div id="modals"></div>
<div>
        <bottom-chat  v-if="!modalsActive"></bottom-chat>
</div>
</template>
 
<script>
import { defineComponent, ref } from "vue";
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
            var modalsActive=ref(false);

            const modalsChange=(active)=>{
                modalsActive.value=active;
            }
            return{
            modalsChange,
            modalsActive
            }
        }
    })
</script>
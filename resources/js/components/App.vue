<template>
    <div>
        <Header v-if="!modalsActive" style="z-index: 100"></Header>
    </div>
    <div>
        <router-view @modalsChange="modalsChange"> </router-view>
    </div>
    <div id="modals"></div>
    <div>
        <bottom-chat v-if="!modalsActive" style="z-index: 100"></bottom-chat>
    </div>
    <div>
        <Footer v-if="!modalsActive" style="z-index: 100"></Footer>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import BottomChat from "./BottomChat";
import Header from "./Header";
import Footer from "./Footer";

export default defineComponent({
    data() {
        return {
            isLoggedIn: false,
        };
    },
    created() {
        if (window.Laravel.isLoggedin) {
            this.isLoggedIn = true;
        }
    },
    components: {
        "bottom-chat": BottomChat,
        Header,
        Footer,
    },
    setup() {
        var modalsActive = ref(false);

        const modalsChange = (active) => {
            modalsActive.value = active;
        };
        return {
            modalsChange,
            modalsActive,
        };
    },
    methods: {
        logout(e) {
            console.log("ss");
            e.preventDefault();
            this.$axios.get("/sanctum/csrf-cookie").then((response) => {
                this.$axios
                    .post("/api/logout")
                    .then((response) => {
                        if (response.data.success) {
                            window.location.href = "/";
                        } else {
                            console.log(response);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            });
        },
    },
});
</script>

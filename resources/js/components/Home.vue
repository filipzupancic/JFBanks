<template>
    <div class="max-w-7xl mx-auto pt-16 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="text-center radial-progress">
            <p
                class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
                finbit
            </p>
            <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                finance in kredit
            </p>
            <!-- <button @click="showModal" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Customize
            </button> -->
        </div>
    </div>

    <div class="w-full my-8 mx-4">
        <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-200" />
            </div>
        </div>
    </div>
    <!-- <div class="lg:grid lg:grid-cols-2 py-16 lg:gap-x-6 xl:gap-x-8">
            <div class="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
                <div class="max-w-sm mx-auto text-center">
                    <h3 class="font-semibold text-lg text-gray-900">
                        Tvoja sredstva
                    </h3>
                    <p class="mt-6 text-2xl text-emerald-500">2,000,000,00 €</p>
                </div>
            </div>

            <div
                class="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0"
            >
                <div class="absolute inset-0 rounded-lg overflow-hidden">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                        alt=""
                        class="w-full h-full filter saturate-0 object-center object-cover"
                    />
                    <div class="absolute inset-0 bg-blue-600 bg-opacity-90" />
                </div>
                <div class="relative max-w-sm mx-auto text-center">
                    <h3
                        class="text-2xl font-extrabold tracking-tight text-white"
                    >
                        Finance na enem mestu
                    </h3>
                    <p class="mt-2 text-gray-200">
                        Preprosto poveži svoje račune in ostalo prepusti nam.
                        <a
                            href="/denarnica"
                            class="font-bold text-white whitespace-nowrap hover:text-gray-200"
                            >Poveži račune.<span aria-hidden="true">
                                &rarr;</span
                            ></a
                        >
                    </p>
                </div>
            </div>
        </div> -->

    <div
        v-if="firstTimeVisitor"
        class="relative bg-white py-16 sm:py-12 lg:py-16"
    >
        <div
            class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <div class="mt-12">
                <div
                    class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div class="-mt-6">
                            <div>
                                <span
                                    class="inline-flex items-center justify-center rounded-md bg-yellow-500 p-3 shadow-lg"
                                >
                                    <component
                                        :is="CashIcon"
                                        class="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                            <h3
                                class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                            >
                                STROŠKI
                            </h3>
                            <n-space vertical>
                                <n-slider
                                    v-model:value="stroskiValue"
                                    :marks="stroski"
                                    step="mark"
                                />
                            </n-space>
                        </div>
                    </div>

                    <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div class="-mt-6">
                            <div>
                                <span
                                    class="inline-flex items-center justify-center rounded-md bg-emerald-500 p-3 shadow-lg"
                                >
                                    <component
                                        :is="GlobeIcon"
                                        class="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                            <h3
                                class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                            >
                                EKO
                            </h3>
                            <n-space vertical>
                                <n-slider
                                    v-model:value="ekoValue"
                                    :marks="eko"
                                    step="mark"
                                />
                            </n-space>
                        </div>
                    </div>

                    <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                        <div class="-mt-6">
                            <div>
                                <span
                                    class="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg"
                                >
                                    <component
                                        :is="BadgeCheckIcon"
                                        class="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                            <h3
                                class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                            >
                                INVESTICIJE
                            </h3>
                            <n-space vertical>
                                <n-slider
                                    v-model:value="investValue"
                                    :marks="invest"
                                    step="mark"
                                />
                            </n-space>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="content-center"
            style="align-items: center; text-align: center"
        >
            <button
                @click="saveSlider"
                type="button"
                class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save
            </button>
        </div>
    </div>

    <ul role="list" class="space-y-3">
        <li
            v-for="(comp, idx) in selectedComponents"
            :key="idx"
            style="align-items: center; text-align: center"
            class="bg-white shadow overflow-hidden rounded-md px-6 py-4"
        >
            <component :is="comp"></component>
        </li>
    </ul>

    <div class="flex content-center justify-center">
        <button
            @click="showModal"
            type="button"
            class="inline-flex items-center px-4 py-2 my-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            Uredi aplikacijo po svoje
        </button>
    </div>

    <Modal
        v-model="isShow"
        :close="closeModal"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @after-leave="afterLeave"
    >
        <div class="modal">
            <dragable-page v-model:list="selectedComponents"></dragable-page>
            <button
                @click="closeModal"
                class="inline-flex items-center px-4 py-2 my-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                SHRANI
            </button>
        </div>
    </Modal>
</template>

<script>
import { ref, reactive, defineComponent, onMounted, onBeforeMount } from "vue";
import Investicije from "./homepage/Investicije";
import Kredit from "./homepage/Kredit";
import Eko from "./homepage/Eko";
import Stroski from "./homepage/Stroski";
import DragablePage from "./homepage/DragablePage";
import { NSpace, NSlider } from "naive-ui";
import {
    BadgeCheckIcon,
    CashIcon,
    ClockIcon,
    UsersIcon,
    GlobeIcon,
    DocumentTextIcon,
} from "@heroicons/vue/outline";

const actions = [
    {
        title: "Hitro in ugodno do kredita.",
        content:
            "finbit te pelje čez celoten proces pridobivanja stanovanjskega posojila, od izračuna kreditne sposobnosti in pridobivanja najboljše obrestne mere, do podpisa pogodbe.",
        href: "/kredit",
        icon: ClockIcon,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
    },
    {
        title: "Stroški pod nadzorom.",
        content:
            "Beleženje porabe, uporabni nasveti za znižanje in avtomatizirano plačevanje preko aplikacije. Optimiziraj svojo porabo, brez da za to porabiš nekaj ur na teden.",
        href: "/stroski",
        icon: CashIcon,
        iconForeground: "text-rose-700",
        iconBackground: "bg-rose-50",
    },
    {
        title: "Investiraj v prihodnost.",
        content: "Uresniči svoje sanje s pametnimi naložbami.",
        href: "/nalozbe",
        icon: BadgeCheckIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
    },
    {
        title: "Eko se splača.",
        content:
            "Skrb za naš planet ni več zgolj dobrodelnost, ampak se dejansko splača. finbit ti pomaga razumeti tvoj ogljični odtis in svetuje, kako ga lahko zmanjšaš in hkrati prihraniš.",
        href: "/eko",
        icon: GlobeIcon,
        iconForeground: "text-emerald-700",
        iconBackground: "bg-emerald-50",
    },
    {
        title: "Digitalna denarnica.",
        content:
            "finbit ti omogoča, da preprosto povežeš vse bančne račune in digitalno denarnico na enem mestu.",
        href: "/denarnica",
        icon: DocumentTextIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
    },
    {
        title: "Osebni svetovalec vedno pri roki",
        content:
            "finbit je vedno na voljo za vprašanja na temo financ, lahko pa te tudi hitro poveže z bančnih uslužbencem.",
        href: "/obvestila",
        icon: UsersIcon,
        iconForeground: "text-sky-700",
        iconBackground: "bg-sky-50",
    },
];

export default defineComponent({
    data() {
        return {};
    },
    emits: ["modalsChange"],
    methods: {},
    components: {
        NSpace,
        Investicije,
        Eko,
        Kredit,
        Stroski,
        NSlider,
        CashIcon,
        GlobeIcon,
        BadgeCheckIcon,
        "dragable-page": DragablePage,
    },
    setup(props, { emit }) {
        var stroskiValue = ref(0);
        var ekoValue = ref(0);

        var investValue = ref(0);

        const completedSteps = ref(0);
        const totalSteps = ref(10);
        var selectedComponents = ref([
            "Kredit",
            "Eko",
            "Investicije",
            "Stroski",
        ]);
        var firstTimeVisitor = ref(true);
        onBeforeMount(() => {
            if (localStorage.getItem("SelectedComponents") !== null) {
                selectedComponents.value = JSON.parse(
                    localStorage.getItem("SelectedComponents")
                );
            }else {
                localStorage.setItem(
                    "SelectedComponents",
                    JSON.stringify(selectedComponents.value)
                );
            }
            if (localStorage.getItem("FirstTimeVisitor") !== null) {
                firstTimeVisitor.value =localStorage.getItem("FirstTimeVisitor") === "true";
            }

            if (localStorage.getItem("LoggedIn") !== null) {

            }else{
                localStorage.setItem("LoggedIn",false);
            }
        });
        const saveSlider = () => {
            firstTimeVisitor.value = false;
            localStorage.setItem("FirstTimeVisitor", false);
            localStorage.setItem("Stroski", JSON.stringify(stroskiValue.value));
            localStorage.setItem("Eko", JSON.stringify(ekoValue.value));
            localStorage.setItem("Invest", JSON.stringify(investValue.value));
        };

        const isShow = ref(false);

        function showModal() {
            isShow.value = true;
            console.log(isShow.value);
        }

        function closeModal() {
            isShow.value = false;
        }

        function beforeEnter() {
            console.log("before enter");
            emit("modalsChange", true);
        }

        function afterEnter() {
            console.log("after enter");
        }

        function beforeLeave() {
            console.log("before leave");
            emit("modalsChange", false);
        }

        function afterLeave() {
            console.log("after leave");
            localStorage.setItem(
                "SelectedComponents",
                JSON.stringify(selectedComponents.value)
            );
        }

        return {
            isShow,
            showModal,
            closeModal,
            beforeEnter,
            afterEnter,
            beforeLeave,
            afterLeave,
            stroskiValue,
            ekoValue,
            investValue,
            saveSlider,
            firstTimeVisitor,
            localStorage,
            completedSteps,
            selectedComponents,
            totalSteps,
            actions,
            refstroski: ref(0),
            refeko: ref(0),
            refinvest: ref(0),
            stroski: {
                0: "ne šparam",
                50: "neki vmes",
                100: "ful šparam",
            },
            eko: {
                0: "don't care",
                50: "neki vmes",
                100: "eko frik",
            },
            invest: {
                0: "safe side",
                50: "neki vmes",
                100: "risky",
            },
        };
    },
});
</script>

<style scoped>
.radial-progress {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.modal {
    width: 50vw;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 20px;
    text-align: center;
}
</style>

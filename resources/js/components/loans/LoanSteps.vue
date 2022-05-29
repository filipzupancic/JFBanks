<template>
    <div class="items-center text-center">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div>
                <nav
                    class="flex items-center place-content-center pt-4 pb-8"
                    aria-label="Breadcrumb"
                >
                    <ol
                        role="list"
                        class="flex items-center place-content-center space-x-4"
                    >
                        <li>
                            <div>
                                <router-link
                                    to="/"
                                    class="text-gray-400 hover:text-gray-500"
                                >
                                    <HomeIcon
                                        class="flex-shrink-0 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    <span class="sr-only">Home</span>
                                </router-link>
                            </div>
                        </li>
                    </ol>
                </nav>
                <nav aria-label="Progress">
                    <ol
                        role="list"
                        class="flex items-center place-content-center"
                    >
                        <li
                            v-for="(step, stepIdx) in steps"
                            :key="step.name"
                            :class="[
                                stepIdx !== steps.length - 1
                                    ? 'pr-8 sm:pr-20'
                                    : '',
                                'relative',
                            ]"
                        >
                            <template v-if="step.status === 'complete'">
                                <div
                                    class="absolute inset-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <div class="h-0.5 w-full bg-emerald-600" />
                                </div>
                                <div
                                    @click="clickedCircleStep(step)"
                                    class="relative w-8 h-8 flex items-center justify-center bg-emerald-600 rounded-full hover:bg-emerald-900"
                                >
                                    <CheckIcon
                                        class="w-5 h-5 text-white"
                                        aria-hidden="true"
                                    />
                                    <span class="sr-only">{{ step.name }}</span>
                                </div>
                            </template>
                            <template
                                v-else-if="
                                    step.status === 'current' ||
                                    step.status === 'current_complete'
                                "
                            >
                                <div
                                    class="absolute inset-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <div class="h-0.5 w-full bg-gray-200" />
                                </div>
                                <div
                                    class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-emerald-600 rounded-full"
                                    aria-current="step"
                                >
                                    <span
                                        class="h-2.5 w-2.5 bg-emerald-600 rounded-full"
                                        aria-hidden="true"
                                    />
                                    <span class="sr-only">{{ step.name }}</span>
                                </div>
                            </template>
                            <template v-else>
                                <div
                                    class="absolute inset-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <div class="h-0.5 w-full bg-gray-200" />
                                </div>
                                <div
                                    class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                                >
                                    <span
                                        class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                                        aria-hidden="true"
                                    />
                                    <span class="sr-only">{{ step.name }}</span>
                                </div>
                            </template>
                        </li>
                    </ol>
                </nav>
                <div class="bg-white">
                    <div
                        class="flex align-center justify-center max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
                    >
                        <div class="text-center">
                            <h2
                                class="text-base font-semibold text-gray-900 tracking-wide uppercase"
                            >
                                <keep-alive>
                                    <component
                                        @finishedStatusEvent="finishedStatusClicked"
                                        @openTheModal="showModal"
                                        :is="currentComponent"
                                        :key="currentStep"
                                    />
                                </keep-alive>
                            </h2>
                        </div>
                    </div>
                    <div
                        v-if="currentStep != steps.length - 1"
                        style="float: right"
                    >
                        <button
                            @click="nextClickedCheck"
                            type="button"
                            class="button_green"
                        >
                            Naslednji korak
                        </button>
                    </div>
                    <div v-else style="float: right">
                        <router-link
                            to='/'
                            type="button"
                            class="button_green"
                            @click="nextClicked"
                        >
                            Zaključi
                        </router-link>
                    </div>
                    <div v-if="currentStep != 0" style="float: left">
                        <button
                            @click="prevClicked"
                            type="button"
                            class="button_green"
                        >
                            Prejšnji korak
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
        <div as="div" class="relative z-10">
            <div class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">           
                <div class="mt-3 text-center sm:mt-5">
                    <div as="h3" class="text-lg leading-6 font-medium text-gray-900"> Naložite dokument </div>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm" @click="closeModal">Naprava</button>
                    <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm" @click="closeModal">Kamera</button>
                </div>
            </div>
        </div>
        </div>
    </Modal>
</template>

<script>
import { onMounted, ref, defineComponent, defineAsyncComponent } from "vue";
import {useRouter} from "vue-router"
import { CheckIcon } from "@heroicons/vue/solid";
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/solid";
import Offers from "./Offers";
import Connect from "./Connect.vue";
import Calculator from "./Calculator";
import Signature from "./Signature";
import LoanDocuments from "./LoanDocuments";
const pages = [
    { name: "kredit", href: "/kredit", current: false },
    { name: "peti korak", href: "/kredit", current: true },
];

export default defineComponent({
    data() {
        return {};
    },
    methods: {},
    components: {
        CheckIcon,
        ChevronRightIcon,
        HomeIcon,
    },
    setup(props,{emit}) {

        const router=useRouter()
        var steps = ref([
            {
                idx: 0,
                name: "Step 1",
                component: Calculator,
                status: "current",
                finished: false,
            },
            {
                idx: 1,
                name: "Step 2",
                component: Offers,
                status: "upcoming",
                finished: false,
            },
            {
                idx: 2,
                name: "Step 3",
                component: LoanDocuments,
                status: "upcoming",
                finished: false,
            },
            {
                idx: 3,
                name: "Step 4",
                component: Connect,
                status: "upcoming",
                finished: false,
            },
            {
                idx: 4,
                name: "Step 5",
                component: Signature,
                status: "upcoming",
                finished: false,
            },
        ]);
        var loggedIn=false
        onMounted(() => {
            if (localStorage.getItem("LoanStep") !== null) {
                currentStep.value = JSON.parse(localStorage.getItem("LoanStep"));
                currentComponent.value=steps.value[currentStep.value].component
                updateCircles();
            }
                if (localStorage.getItem("LoggedIn") !== null) {
                loggedIn = JSON.parse(localStorage.getItem("LoggedIn"));
                updateCircles();
            }
        });
        var currentComponent = ref(Calculator); //PREVERI ZAKAJ VRZE ERROR PRI CALCULATOR REACTIVE
        var currentStep = ref(0);
        function updateCircles() {
            console.log(currentStep.value);
            for (var i = 0; i < steps.value.length; i++) {
                if (i < currentStep.value) {
                    steps.value[i].status = "complete";
                } else if (i == currentStep.value) {
                    if (steps.value[i].status == "complete") {
                        steps.value[i].status = "current_complete";
                    } else {
                        steps.value[i].status = "current";
                    }
                } else {
                    if (
                        steps.value[i].status == "complete" ||
                        steps.value[i].status == "current_complete"
                    ) {
                        steps.value[i].status = "complete";
                    } else {
                        steps.value[i].status = "upcoming";
                    }
                }
            }
        }
        const clickedCircleStep = (step) => {
            currentStep.value = step.idx;
            currentComponent.value = step.component;
            updateCircles();
            console.log(step);
            console.log(steps.value);
        };

        const nextClickedCheck = () => {
            if((!loggedIn) && (currentStep.value>=1))
             { router.push('/login')} else{ nextClicked()}
        };

        const nextClicked = () => {
            currentStep.value += 1;
            if (currentStep.value>4) currentStep.value=4;
            localStorage.setItem("LoanStep", currentStep.value);
            var step = steps.value[currentStep.value];
            currentComponent.value = step.component;
            updateCircles();
            console.log(step);
            console.log(steps.value);
        };

        const prevClicked = () => {
            currentStep.value -= 1;
            if (currentStep.value<0) currentStep.value=0;
            localStorage.setItem("LoanStep", currentStep.value);
            var step = steps.value[currentStep.value];
            currentComponent.value = step.component;
            updateCircles();
            console.log(step);
            console.log(steps.value);
        };

        const finishedStatusClicked = (status) => {
            console.log(status);
            steps.value[currentStep.value].finished = true;
        };

        const isShow = ref(false);

        function showModal() {
            isShow.value = true;
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

        }




        return {
            isShow,
            showModal,
            closeModal,
            beforeEnter,
            beforeLeave,
            afterLeave,
            steps,
            pages,
            clickedCircleStep,
            currentComponent,
            currentStep,
            finishedStatusClicked,
            nextClicked,
            nextClickedCheck,
            prevClicked,
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
.draw_circle {
    width: 140px;
    height: 140px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    background: red;
}
.button_green {
    background-color: #4caf54; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.button_green:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.button_green:disabled {
    background-color: #808080; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>

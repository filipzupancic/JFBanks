<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div @click="clickKredit">
        <div>
            <div
                class="max-w-7xl mx-auto text-center py-4 px-4 sm:px-6 lg:py-4 lg:px-4"
            >
                <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    <span class="block">Kredit</span>
                </h2>
            </div>
        </div>
   <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
            <div :class="['rounded-tl-lg rounded-tr-lg sm:rounded-tr-none','relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500']">
                        <div class="app__content">
                            <div class="content__radial">
                                <GradientProgress
                                    :diameter="diameter"
                                    :total-steps="totalSteps"
                                    :completed-steps="completedSteps+1"
                                    :animate-speed="animateSpeed"
                                    :stroke-width="strokeWidth"
                                    :inner-stroke-width="innerStrokeWidth"
                                    :stroke-linecap="round"
                                    :start-color="startColor"
                                    :stop-color="stopColor"
                                    :inner-stroke-color="innerStrokeColor"
                                    :timing-func="timingFunc"
                                    :is-clockwise="isClockwise"
                                >
                                    <div>
                                        <small>Stanje pridobivanja kredita </small>
                                        <span>{{ completedSteps+1 }} / {{ totalSteps }}</span>
                                    </div>
                                </GradientProgress>
                            </div>
                        </div>
            </div>
            
            <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                <div>
                    <span
                        :class="[
                            'text-yellow-50',
                            'text-yellow-700',
                            'rounded-lg inline-flex p-3 ring-4 ring-white',
                        ]"
                    >
                        <component
                            :is="CashIcon"
                            class="h-6 w-6"
                            aria-hidden="true"
                        />
                    </span>
                </div>
                <div class="mt-8">

                        <div class="rounded-lg p-6 flex items-center sm:p-10">
                            <div class="max-w-sm mx-auto text-center">
                                <p v-if="completedSteps==0" class="mt-6 text-2xl text-gray-500">V prvem koraku izračunajte kreditno sposobnost<div class="text-emerald-500">Kalkulator</div></p>
                                <p v-else-if="completedSteps==1" class="mt-6 text-2xl text-gray-500">Izberite tip obrestne mere in ponudbe<div class="text-emerald-500">Fiksna ali variabilna</div></p>
                                <p v-else-if="completedSteps==2" class="mt-6 text-2xl text-gray-500">Naložite manjkajoče dokumente: <div class="text-orange-500">Izpisek plač</div><div class="text-orange-500">Dokument 4</div></p>                                
                                <component v-else-if="completedSteps==3" is="Connect" key="abcde"> </component>
                                <p v-else class="mt-6 text-2xl text-gray-500">Čestitke, kredit je vaš:<div class="text-emerald-500">Naslednji koraki</div></p>
                            </div>
                        </div>
                
                </div>
            </div>    
        </div>
            </div>
</template>

<script>
import GradientProgress from "vue3-radial-progress";
import { useRouter } from "vue-router";
import {defineComponent, ref, onMounted} from "vue"
import Connect from "../loans/Connect.vue"
export default defineComponent({

    data() {
        return {
            totalSteps: 5,
            animateSpeed: 1000,
            diameter: 300,
            strokeWidth: 10,
            innerStrokeWidth: 10,
            strokeLinecap: "round",
            startColor: "#00C58E",
            stopColor: "#00E0A1",
            innerStrokeColor: "#2F495E",
            timingFunc: "linear",
            isClockwise: true,
        };
    },
    methods: {
    },
    components: {
        GradientProgress,
        Connect,
    },
setup(){
          const percentageRef = ref(0);
          var completedSteps=ref(0);

        const router = useRouter();

        const add = () => {
            percentageRef.value += 10;
            if (percentageRef.value > 100) {
                percentageRef.value = 0;
            }
        };

        const minus = () => {
            percentageRef.value -= 10;
            if (percentageRef.value < 0) {
                percentageRef.value = 100;
            }
        };

        function clickKredit() {
            router.push('/kredit')
        }

        onMounted(()=>{
  if (localStorage.getItem("LoanStep") !== null) {
            completedSteps.value=JSON.parse(localStorage.getItem("LoanStep"));
        }

          
        })
        return {
            clickKredit,
            percentage: percentageRef,
            add,
            minus,
            completedSteps,
        };
}



});
</script>

<style scoped>

.app__content {
    padding: 1.5rem 2rem;
    border-radius: 7px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--shadow);
}

.content__radial {
    color: black;
}

.content__radial div:first-child {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.content__radial div small {
    font-size: 1.3rem;
    margin-right: 5px;
}

.content__radial div span {
    font-size: 2rem;
}
</style>
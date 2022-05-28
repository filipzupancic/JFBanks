<!-- This example requires Tailwind CSS v2.0+ -->
<template>
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
                <router-link to="/kredit/prvi-korak" style="align-items: center;text-align:center;" >
                        <div class="app__content">
                            <div class="content__radial">
                                <GradientProgress
                                    :diameter="diameter"
                                    :total-steps="totalSteps"
                                    :completed-steps="completedSteps"
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
                                        <span>{{ completedSteps }} / {{ totalSteps }}</span>
                                    </div>
                                </GradientProgress>
                            </div>
                        </div>
                    </router-link>
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
                    <router-link to="/kredit/prvi-korak">
                        <div class="rounded-lg p-6 flex items-center sm:p-10">
                            <div class="max-w-sm mx-auto text-center">
                                <h3 class="font-semibold text-lg text-gray-900">Naslednji korak:</h3>
                                <p v-if="completedSteps==0" class="mt-6 text-2xl text-gray-500">V prvem koraku izračunajte kreditno sposobnost<div class="text-emerald-500">Kalkulator</div></p>
                                <p v-else-if="completedSteps==1" class="mt-6 text-2xl text-gray-500">Izberite tip obrestne mere<div class="text-emerald-500">Fiksna ali variabilna</div></p>
                                <p v-else-if="completedSteps==2" class="mt-6 text-2xl text-gray-500">Izberite dodatno zavarovanje<div class="text-emerald-500">Stanovanjsko zavarovanje</div></p>
                                <p v-else-if="completedSteps==3" class="mt-6 text-2xl text-gray-500">Naložite manjkajoče dokumente: <div class="text-red-500">Energetska izkaznica</div></p>
                                <p v-else-if="completedSteps==4" class="mt-6 text-2xl text-gray-500">Status<div class="text-emerald-500">Preverjanje dokumentacije</div></p>
                                <p v-else class="mt-6 text-2xl text-gray-500">Naložite dokument: <div class="text-emerald-500">Čestitke, kredit je vaš</div></p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>    
        </div>
</template>

<script>
import GradientProgress from "vue3-radial-progress";
import {defineComponent, ref, onMounted} from "vue"
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
    },
setup(){
          const percentageRef = ref(0);
          var completedSteps=ref(0);

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
        onMounted(()=>{
  if (localStorage.getItem("LoanStep") !== null) {
            completedSteps.value=JSON.parse(localStorage.getItem("LoanStep"));
        }

          
        })
        return {
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
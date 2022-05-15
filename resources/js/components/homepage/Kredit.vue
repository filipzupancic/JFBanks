<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="rounded-lg p-6 flex items-center sm:p-10" >
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
                        <small>Loan Process </small>
                        <span>{{ completedSteps }} / {{ totalSteps }}</span>
                    </div>
                </GradientProgress>
            </div>
        </div>
                   </router-link>
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
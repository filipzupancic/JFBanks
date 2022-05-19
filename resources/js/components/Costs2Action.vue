<template>
    <div class="bg-white">
        <div>
            <div
                class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
            >
                <div class="py-12 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center">
                            <p
                                class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                            >
                                Prihrani s finbit-om.
                            </p>
                            <p
                                class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                            >
                                Glede na to, kako pomembno ti je, da si znižaš
                                stroške, bo finbit prilagodil nasvete, kje in
                                kako lahko prihraniš.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mt-8 flex justify-center">
                    <div class="inline-flex rounded-md shadow">
                        <a
                            href="/stroski"
                            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Poraba
                        </a>
                    </div>
                    <div class="ml-3 inline-flex">
                        <a
                            href="/nizji-stroski"
                            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                        >
                            Znižaj stroške
                        </a>
                    </div>
                </div>
            </div>
        </div>

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
                        <small>Šparam: </small>
                        <span>{{ completedSteps }} / {{ totalSteps }}</span>
                    </div>
                </GradientProgress>
                <div class="content__controls">
                    <button
                        :disabled="completedSteps <= 0"
                        @click.prevent="completedSteps--"
                    >
                        Prev
                    </button>
                    <button
                        :disabled="completedSteps >= totalSteps"
                        @click.prevent="completedSteps++"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import GradientProgress from "vue3-radial-progress";

export default defineComponent({
    data() {
        return {
            completedSteps: 1,
            totalSteps: 3,
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
    setup() {
        const percentageRef = ref(0);

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
        return {
            percentage: percentageRef,
            add,
            minus,
        };
    },
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

.content__controls {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
}

.content__controls button {
    outline: none;
    border: none;
    padding: 0.4rem 2rem;
    font-size: 1.3rem;
    background: var(--green-2);
    border-radius: 2px;
    color: black;
    cursor: pointer;
    transition: transform ease-in 0.14s;
}

.content__controls button:hover:not(:disabled) {
    transform: scale(1.09);
}

.content__controls button:disabled {
    background: rgb(131, 131, 131);
}
</style>

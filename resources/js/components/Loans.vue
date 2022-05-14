<template>
    <div>
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="text-center radial-progress">
                <p
                    class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
                >
                    Hej, Bobi
                </p>
                <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                    Do kredita v 5 preprostih korakih.
                </p>
            </div>
        </div>

        <div
            class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
        >
            <div
                v-for="(action, actionIdx) in actions"
                :key="action.title"
                :class="[
                    actionIdx === 0
                        ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                        : '',
                    actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                    actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                    actionIdx === actions.length - 1
                        ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                        : '',
                    'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500',
                ]"
            >
                <div>
                    <span
                        :class="[
                            action.iconBackground,
                            action.iconForeground,
                            'rounded-lg inline-flex p-3 ring-4 ring-white',
                        ]"
                    >
                        <component
                            :is="action.icon"
                            class="h-6 w-6"
                            aria-hidden="true"
                        />
                    </span>
                </div>
                <div class="mt-8">
                    <h3 class="text-lg font-medium">
                        <router-link :to="action.href" class="focus:outline-none">
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true" />
                            {{ action.title }}
                        </router-link>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                        finbit ti pomaga do najbolj ugodnega kredita hitro in preprosto.
                    </p>
                </div>
                <span
                    class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                    aria-hidden="true"
                >
                    <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                        />
                    </svg>
                </span>
            </div>
        </div>

   
    </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { CheckIcon } from "@heroicons/vue/solid";
import { AcademicCapIcon, CashIcon, HomeIcon, GlobeIcon } from "@heroicons/vue/outline";

const actions = [
    {
        title: "Stanovanjski kredit",
        href: "/kredit/prvi-korak",
        icon: HomeIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
    },
    {
        title: "EKO kredit",
        href: "/kredit/prvi-korak",
        icon: GlobeIcon,
        iconForeground: "text-emerald-700",
        iconBackground: "bg-emerald-50",
    },
    {
        title: "Študentski kredit",
        href: "/kredit/prvi-korak",
        icon: AcademicCapIcon,
        iconForeground: "text-blue-700",
        iconBackground: "bg-blue-50",
    },
    {
        title: "Osebni kredit",
        href: "/kredit/prvi-korak",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
    },
];

export default defineComponent({
    data() {
        return {
            
        };
    },
    methods: {
       
    },
    components: {
        CheckIcon,
        HomeIcon,
        GlobeIcon,
        CashIcon,
        AcademicCapIcon,
        
    },
    setup() {
        const completedSteps = ref(0);
        const totalSteps = ref(10);

        return {
            completedSteps,
            totalSteps,
            actions,
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
</style>

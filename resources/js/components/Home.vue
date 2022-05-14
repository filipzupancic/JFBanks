<template>
    <div>
        <div class="max-w-7xl mx-auto pt-16 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div class="text-center radial-progress">
                <p
                    class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
                >
                    finbit
                </p>
                <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                    finance in kredit.
                </p>
            </div>
        </div>
        <div class="lg:grid lg:grid-cols-2 py-16 lg:gap-x-6 xl:gap-x-8">
            <div class="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
                <div class="max-w-sm mx-auto text-center">
                    <h3 class="font-semibold text-lg text-gray-900">Tvoja sredstva</h3>
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
        </div>
        <div class="relative bg-white py-16 sm:py-12 lg:py-16 border-solid border-2 border-blue-600">
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
                                        v-model:value="value"
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
                                        v-model:value="value"
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
                                        v-model:value="value"
                                        :marks="invest"
                                        step="mark"
                                    />
                                </n-space>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px my-16"
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
                        <a :href="action.href" class="focus:outline-none">
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true" />
                            {{ action.title }}
                        </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                        {{ action.content }}
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
            "Finbit te pelje čez celoten proces pridobivanja stanovanjskega posojila, od izračuna kreditne sposobnosti in pridobivanja najboljše obrestne mere, do podpisa pogodbe.",
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
            "Finbit ti omogoča, da preprosto povežeš vse bančne račune in digitalno denarnico na enem mestu.",
        href: "/denarnica",
        icon: DocumentTextIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
    },
    {
        title: "Osebni svetovalec vedno pri roki",
        content:
            "Finbit je vedno na voljo za vprašanja na temo financ, lahko pa te tudi hitro poveže z bančnih uslužbencem.",
        href: "/obvestila",
        icon: UsersIcon,
        iconForeground: "text-sky-700",
        iconBackground: "bg-sky-50",
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
        NSpace,
        NSlider,
        CashIcon,
        GlobeIcon,
        BadgeCheckIcon,
    },
    setup() {
        const completedSteps = ref(0);
        const totalSteps = ref(10);

        return {
            completedSteps,
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
</style>

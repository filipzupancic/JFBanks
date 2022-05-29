<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Popover class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div
                class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
            >
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                        <span class="sr-only">Workflow</span>
                        <img
                            class="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                            alt=""
                        />
                    </a>
                </div>
                <div class="-mr-2 -my-2">
                    <PopoverButton
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <span class="sr-only">Open menu</span>
                        <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                </div>
            </div>
        </div>

        <!-- <div class="py-4 flex flex-wrap justify-center space-x-6 lg-hidden">
        <a href="/kredit" class="text-base font-medium text-blue-500 hover:text-blue-50">
          LOANS
        </a>
        <a href="/stroki" class="text-base font-medium text-blue-500 hover:text-blue-50">
          COSTS
        </a>
        <a href="/nalozbe" class="text-base font-medium text-blue-500 hover:text-blue-50">
          INVESTMENTS
        </a>
        <a href="/eko" class="text-base font-medium text-blue-500 hover:text-blue-50">
          PLANET
        </a>
      </div> -->

        <transition
            enter-active-class="duration-200 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <PopoverPanel
                focus
                class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right"
            >
                <div
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
                >
                    <div class="pt-5 pb-6 px-5">
                        <div class="flex items-center justify-between">
                            <div>
                                <img
                                    class="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div class="-mr-2">
                                <PopoverButton
                                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                >
                                    <span class="sr-only">Close menu</span>
                                    <XIcon class="h-6 w-6" aria-hidden="true" />
                                </PopoverButton>
                            </div>
                        </div>
                        <div class="mt-6">
                            <nav class="grid gap-y-8">
                                <a
                                    v-for="item in solutions"
                                    :key="item.name"
                                    :href="item.href"
                                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                >
                                    <component
                                        :is="item.icon"
                                        class="flex-shrink-0 h-6 w-6 text-blue-600"
                                        aria-hidden="true"
                                    />
                                    <span
                                        class="ml-3 text-base font-medium text-gray-900"
                                    >
                                        {{ item.name }}
                                    </span>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div class="py-6 px-5 space-y-6">
                        <!-- <div>
              <a href="/" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"> Home </a>
            </div> -->
                        <!-- for logged-in user-->
                        <div v-if="isLoggedIn">
                            <div class="pt-4 pb-3 border-t border-gray-200">
                                <div class="flex items-center px-4">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-8 w-auto"
                                            src="https://storage.googleapis.com/coworking-images/project/cato.jpg"
                                            alt="User image"
                                        />
                                    </div>
                                    <div class="ml-3">
                                        <div
                                            class="text-base font-medium text-gray-800"
                                        >
                                            {{ user_name }}
                                        </div>
                                        <div
                                            class="text-sm font-medium text-gray-500"
                                        >
                                            {{ user_email }}
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 space-y-1">
                                    <DisclosureButton
                                        as="a"
                                        href="/admin"
                                        class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                        ><router-link :to="{ name: 'admin' }"
                                            >Nadzorna plošča</router-link
                                        ></DisclosureButton
                                    >
                                    <DisclosureButton
                                        as="a"
                                        class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                        ><a @click="logout"
                                            >Odjava</a
                                        ></DisclosureButton
                                    >
                                </div>
                            </div>
                        </div>
                        <!-- for guests -->
                        <div v-else>
                            <div>
                                <a
                                    href="/login"
                                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Registracija
                                </a>
                                <p
                                    class="mt-6 text-center text-base font-medium text-gray-500"
                                >
                                    Obstoječi uporabnik?
                                    {{ " " }}
                                    <a
                                        href="/login"
                                        class="text-blue-600 hover:text-blue-500"
                                    >
                                        Prijava
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script>
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/vue";
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    CogIcon,
    GlobeIcon,
    ChartPieIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
    CashIcon,
    XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
    {
        name: "Kredit",
        description:
            "Connect with third-party tools that you're already using.",
        href: "/kredit",
        icon: CurrencyDollarIcon,
    },
    {
        name: "Planet",
        description: "Your customers' data will be safe and secure.",
        href: "/eko",
        icon: GlobeIcon,
    },
    {
        name: "Stroški",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "/stroski",
        icon: ChartPieIcon,
    },
    {
        name: "Investicije",
        description:
            "Speak directly to your customers in a more meaningful way.",
        href: "/nalozbe",
        icon: ChartPieIcon,
    },
    {
        name: "Koledar",
        description:
            "Build strategic funnels that will drive your customers to convert",
        href: "/koledar",
        icon: CalendarIcon,
    },
    {
        name: "Denarnica",
        description:
            "Build strategic funnels that will drive your customers to convert",
        href: "/denarnica",
        icon: CashIcon,
    },
    {
        name: "Prilagodi",
        description:
            "Build strategic funnels that will drive your customers to convert",
        href: "/profil",
        icon: UserCircleIcon,
    },
];
const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: SupportIcon,
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkAltIcon,
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: CalendarIcon,
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: ShieldCheckIcon,
    },
];
const recentPosts = [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    {
        id: 2,
        name: "How to use search engine optimization to drive traffic to your site",
        href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
];

export default {
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
    setup() {
        return {
            recentPosts,
            solutions,
            resources,
            callsToAction,
        };
    },
    components: {
        BookmarkAltIcon,
        CalendarIcon,
        ChartBarIcon,
        CursorClickIcon,
        MenuIcon,
        PhoneIcon,
        PlayIcon,
        RefreshIcon,
        ShieldCheckIcon,
        SupportIcon,
        ViewGridIcon,
        CogIcon,
        GlobeIcon,
        ChartPieIcon,
        CurrencyDollarIcon,
        UserCircleIcon,
        CashIcon,
        XIcon,
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
        ChevronDownIcon,
    },
};
</script>

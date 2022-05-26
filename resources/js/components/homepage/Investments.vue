<template>
    <div class="bg-white">
        <div>
            <div
                class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
            >
                <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    <span class="block">Zavarovanje in skladi</span>
                </h2>
            </div>
        </div>
        <div
            class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
        >
            <div
                :class="[
                    'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none',
                    'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500',
                ]"
            >
                <div>
                    <span
                        :class="[
                            'bg-emerald-50',
                            'text-emerald-700',
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
                    <h3 class="text-lg font-medium">
                        <div class="focus:outline-none">
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true" />
                            <div id="chart">
                                <apexchart
                                    type="bar"
                                    height="350"
                                    :options="chartOptionsBar"
                                    :series="seriesBar"
                                ></apexchart>
                            </div>
                        </div>
                    </h3>
                </div>
            </div>
            <div
                class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500"
            >
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
                    <router-link to="/nalozbe">
<div class="rounded-lg p-6 flex items-center sm:p-10">
                <div class="max-w-sm mx-auto text-center">
                    <h3 class="font-semibold text-lg text-gray-900">Skladi</h3>
                    <p class="mt-6 text-2xl text-gray-500">Sredstva v skladih: 34312€ <div class="text-emerald-500">+6%</div></p>
                </div>
            </div>
</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import monthly_costs from "../data/monthly_costs.json";
import { CashIcon } from "@heroicons/vue/outline";
import { NAlert } from "naive-ui";

const actions = [
    {
        title: "Portfolio",
        href: "#",
        icon: CashIcon,
        iconForeground: "text-emerald-700",
        iconBackground: "bg-emerald-50",
    },
    {
        title: "Poraba po kategorijah",
        href: "#",
        icon: CashIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
    },
];

export default defineComponent({
    data() {
        return {
            seriesBar: [
                {
                    data: [1400, 1580, 1000, 1470, 1540, 1280, 1690, 550],
                },
            ],
            chartOptionsBar: {
                chart: {
                    type: "bar",
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: [
                        "Okt 21",
                        "Nov 21",
                        "Dec 21",
                        "Jan 22",
                        "Feb 22",
                        "Marec 22",
                        "April 22",
                        "Maj 22",
                    ],
                },
            },
            series: [44, 55, 41, 17, 15],
            chartOptions: {
                chart: {
                    type: "donut",
                },
                labels: [
                    "Crypto",
                    "Funds",
                    "Real estate",
                    "Stocks",
                    "Ostalo",
                ],
                theme: {
                    monochrome: {
                        enabled: true,
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
            monthly_costs: monthly_costs.map((d) => new Date(d)),
            prettify: function (ts) {
                return new Date(ts).toLocaleDateString("en", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                });
            },
        };
    },
    methods: {
        sendMessage(text) {
            if (text.length > 0) {
                this.newMessagesCount = this.isChatOpen
                    ? this.newMessagesCount
                    : this.newMessagesCount + 1;
                this.onMessageWasSent({
                    author: "kipo",
                    type: "text",
                    data: { text },
                });
            }
        },
        onMessageWasSent(message) {
            // called when the user sends a message
            this.messageList = [...this.messageList, message];
        },
        openChat() {
            // called when the user clicks on the fab button to open the chat
            this.isChatOpen = true;
            this.newMessagesCount = 0;
        },
        closeChat() {
            // called when the user clicks on the botton to close the chat
            this.isChatOpen = false;
        },
        handleScrollToTop() {
            // called when the user scrolls message list to top
            // leverage pagination for loading another page of messages
        },
        handleOnType() {
            console.log("Emit typing event");
        },
        editMessage(message) {
            const m = this.messageList.find((m) => m.id === message.id);
            m.isEdited = true;
            m.data.text = message.data.text;
        },
    },
    components: {
        CashIcon,
        NAlert,
    },
    setup() {},
});
</script>

<style scoped></style>

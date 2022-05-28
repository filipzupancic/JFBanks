<template>
    <div class="bg-white">
        <div>
            <div
                class="max-w-7xl mx-auto text-center py-4 px-4 sm:px-6 lg:py-4 lg:px-4"
            >
                <h3
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    <span class="block">Investicije</span>
                </h3>
            </div>
        </div>
        <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          
            <div :class="['rounded-tl-lg rounded-tr-lg sm:rounded-tr-none','relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500']">
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
                <div class="mt-2">
                    <h3 class="text-lg font-medium">
                        <div class="focus:outline-none">
                            <div id="chart">
                                <apexchart
                                    :options="chartOptions"
                                    :series="series"
                                ></apexchart>
                            </div>
                        </div>
                    </h3>
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
                    <router-link to="/nalozbe">
                        <div class="rounded-lg p-6 flex items-center sm:p-10">
                            <div class="max-w-sm mx-auto text-center">
                                <h3 class="font-semibold text-lg text-gray-900">Skladi</h3>
                                <p class="mt-6 text-2xl text-gray-500">13922,21€<div class="text-emerald-500">+6%</div></p>
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
        series: [{
            name: "Investicija",
            data: [10000, 10320, 10900,11400, 12042, 12900, 13002, 13400, 13920]
        }],
    chartOptions: {
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        toolbar:{
            show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Stanje investicije',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
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

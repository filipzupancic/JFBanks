<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">All-in-one platform</h2>
        <p class="mt-4 text-lg text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
      </div>
      <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <CheckIcon class="absolute h-6 w-6 text-green-500" aria-hidden="true" />
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { CheckIcon } from "@heroicons/vue/solid";
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/solid'

const pages = [
  { name: 'kredit', href: '/kredit', current: false },
  { name: 'prvi korak', href: '/kredit/prvi-korak', current: true },
];

const steps = [
    { name: "Step 1", href: "/kredit/prvi-korak", status: "current" },
    { name: "Step 2", href: "/kredit/drugi-korak", status: "upcoming" },
    { name: "Step 3", href: "/kredit/tretji-korak", status: "upcoming" },
    { name: "Step 4", href: "/kredit/cetrti-korak", status: "upcoming" },
    { name: "Step 5", href: "/kredit/peti-korak", status: "upcoming" },
];

const features = [
  {
    name: 'Open the new bank account',
    description: 'Most of the banks require you to open a bank account.',
  },
  {
    name: 'Take care of the insurance',
    description: 'Life insurance, real-estate insurance. We can help you.',
  },
  {
    name: 'Invest in a mutual fund and secure your future',
    description: 'Invest in a mutual fund and secure your future.',
  },
  {
    name: 'Follow the process.',
    description: 'The process usually takes from 7 days to 1 months.',
  },
]

export default defineComponent({
    data() {
        return {
            participants: [
                {
                    id: "user1",
                    name: "AI JFBanks",
                    imageUrl:
                        "https://www.dropbox.com/s/6ggs6yqmcwcx4i6/JFBanks-logo.jpeg?raw=1",
                },
            ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
            titleImageUrl:
                "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
            messageList: [
                {
                    type: "text",
                    author: `user1`,
                    data: {
                        text: `Hej Mojca, kako ti lahko pomagam?`,
                    },
                },
                {
                    type: "text",
                    author: `me`,
                    data: {
                        text: `Živjo, potrebujem pomoč pri pridobivanju ponudb za stanovanjska posojila.`,
                    },
                },
                {
                    type: "text",
                    author: `user1`,
                    data: {
                        text: `Ni problema, tvoje zanimanje bomo posredovali izbranim bankam in v kratkem boš dobila odgovor.`,
                    },
                },
            ], // the list of the messages to show, can be paginated and adjusted dynamically
            newMessagesCount: 0,
            isChatOpen: false, // to determine whether the chat window should be open or closed
            showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
            colors: {
                header: {
                    bg: "#4e8cff",
                    text: "#ffffff",
                },
                launcher: {
                    bg: "#4e8cff",
                },
                messageList: {
                    bg: "#ffffff",
                },
                sentMessage: {
                    bg: "#4e8cff",
                    text: "#ffffff",
                },
                receivedMessage: {
                    bg: "#eaeaea",
                    text: "#222222",
                },
                userInput: {
                    bg: "#f4f7f9",
                    text: "#565867",
                },
            }, // specifies the color scheme for the component
            alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
            messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
            percentage: 50,
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
        CheckIcon,
        ChevronRightIcon,
        HomeIcon,
    },
    setup() {
        const completedSteps = ref(0);
        const totalSteps = ref(10);

        return {
            completedSteps,
            totalSteps,
            steps,
            pages,
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

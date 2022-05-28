<template>
    <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
    <main class="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse">
        <h1 class="sr-only">Povej svoja pričakovanja</h1>

        <!-- Mobile order summary -->

        <!-- Checkout form -->
        <section
            aria-labelledby="payment-heading"
            class="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
        >
            <h2 id="payment-heading" class="sr-only">Podrobnosti</h2>

            <div class="max-w-lg mx-auto">
                <!-- <button type="button" class="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
          <span class="sr-only">Pay with Apple Pay</span>
          <svg class="h-5 w-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20">
            <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
          </svg>
        </button> -->

                <div class="relative mt-8 md:mt-0">
                    <div
                        class="absolute inset-0 flex items-center"
                        aria-hidden="true"
                    >
                        <div class="w-full border-t border-gray-200" />
                    </div>
                    <div class="relative flex justify-center">
                        <span
                            class="px-4 bg-white text-sm font-medium text-gray-500"
                        >
                            Povej svoja pričakovanja
                        </span>
                    </div>
                </div>

                <form class="mt-6">
                    <div class="grid grid-cols-12 gap-y-6 gap-x-4">
                        <div class="col-span-full">
                            <label
                                for="email-address"
                                class="block text-sm font-medium text-gray-700"
                                >Email address</label
                            >
                            <div class="mt-1">
                                <input
                                    type="email"
                                    id="email-address"
                                    name="email-address"
                                    autocomplete="email"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label
                                for="name-on-card"
                                class="block text-sm font-medium text-gray-700"
                                >Name on card</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    id="name-on-card"
                                    name="name-on-card"
                                    autocomplete="cc-name"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label
                                for="card-number"
                                class="block text-sm font-medium text-gray-700"
                                >Card number</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    id="card-number"
                                    name="card-number"
                                    autocomplete="cc-number"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="col-span-8 sm:col-span-9">
                            <label
                                for="expiration-date"
                                class="block text-sm font-medium text-gray-700"
                                >Expiration date (MM/YY)</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    name="expiration-date"
                                    id="expiration-date"
                                    autocomplete="cc-exp"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="col-span-4 sm:col-span-3">
                            <label
                                for="cvc"
                                class="block text-sm font-medium text-gray-700"
                                >CVC</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    name="cvc"
                                    id="cvc"
                                    autocomplete="csc"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label
                                for="address"
                                class="block text-sm font-medium text-gray-700"
                                >Address</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    autocomplete="street-address"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="col-span-full sm:col-span-4">
                            <label
                                for="city"
                                class="block text-sm font-medium text-gray-700"
                                >City</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    autocomplete="address-level2"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="col-span-full sm:col-span-4">
                            <label
                                for="regino"
                                class="block text-sm font-medium text-gray-700"
                                >State / Province</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    id="regino"
                                    name="regino"
                                    autocomplete="address-level1"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div class="col-span-full sm:col-span-4">
                            <label
                                for="postal-code"
                                class="block text-sm font-medium text-gray-700"
                                >Postal code</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    id="postal-code"
                                    name="postal-code"
                                    autocomplete="postal-code"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex space-x-2">
                        <div class="flex items-center h-5">
                            <input
                                id="same-as-shipping"
                                name="same-as-shipping"
                                type="checkbox"
                                checked=""
                                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                        </div>
                        <!-- <label for="same-as-shipping" class="text-sm font-medium text-gray-900">Billing address is the same as shipping address</label> -->
                    </div>

                    <button
                        type="submit"
                        class="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Izračunaj kreditno sposobnost
                    </button>

                    <!-- <p class="flex justify-center text-sm font-medium text-gray-500 mt-6">
            <LockClosedIcon class="w-5 h-5 text-gray-400 mr-1.5" aria-hidden="true" />
            Payment details stored in plain text
          </p> -->
                </form>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, defineComponent } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
    LockClosedIcon,
    CheckIcon,
    ChevronRightIcon,
    HomeIcon,
} from "@heroicons/vue/solid";
import { NSpace, NSlider, NInputNumber } from "naive-ui";

const subtotal = "$108.00";
const discount = { code: "CHEAPSKATE", amount: "$16.00" };
const taxes = "$9.92";
const shipping = "$8.00";
const total = "$141.92";
const value = ref([50, 70]);
const marks = {
    0: "0$",
    100: "1M$",
};

const products = [
    {
        id: 1,
        name: "Mountain Mist Artwork Tee",
        href: "#",
        price: "$36.00",
        color: "Birch",
        size: "L",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg",
        imageAlt:
            "Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.",
    },
    // More products...
];
</script>

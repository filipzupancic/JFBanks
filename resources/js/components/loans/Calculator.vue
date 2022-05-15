<template>
    <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5 text-center">
        <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                <strong>Based on your preferences we'll help you get the best interest
                rate on the market.</strong>
            </h3>
        </div>
        <div class="space-y-6 sm:space-y-5 text-center">
            <p class="text-center py-8">How much money you need?</p>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
                <n-space vertical>
                    <n-slider
                        v-model:value="value"
                        range
                        :marks="marks"
                    />
                </n-space>
            </div>

            <p class="text-center py-8">How much money you need?</p>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
                <n-space vertical>
                    <n-slider
                        v-model:value="value"
                        range
                        :marks="marks"
                    />
                </n-space>
            </div>

            <div
                class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
                <label
                    for="country"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                    What do you want to buy?
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    >
                        <option>House</option>
                        <option>Appartment</option>
                        <option>Land</option>
                        <option>Car</option>
                        <option>Solar panels</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { CheckIcon } from "@heroicons/vue/solid";
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/solid";
import { NSpace, NSlider, NInputNumber } from "naive-ui";

export default({
    data() {
        return {};
    },
    components: {
        NSpace,
        NSlider,
        NInputNumber,
    },
    setup () {
    return {
      value: ref([50, 70]),
      marks: {
        0: '0$',
        100: '1M$',
      }
    }
  }
});
</script>

<template>
  <div class="max-w-md mx-auto sm:max-w-3xl">
    <div>
      <div class="text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <h2 class="mt-2 text-lg font-medium text-gray-900">Do the finance your own way.</h2>
      </div>
    </div>
    <div class="mt-10">
      <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Modify your home screen</h3>
      <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li v-for="(person, personIdx) in people" :key="personIdx">
          <button @click="selectedClick(person)" v-bind:style=" { backgroundColor : (selectedComponents.includes(person.id) ? '#89CFF0' :'white') } " type="button" class="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="min-w-0 flex-1 flex items-center space-x-3">
              <span class="block flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
              </span>
              <span class="block min-w-0 flex-1">
                <span class="block text-sm font-medium text-gray-900 truncate">{{ person.name }}</span>
                <span class="block text-sm font-medium text-gray-500 truncate">{{ person.role }}</span>
              </span>
            </span>
            <span class="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center">
              <PlusIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            </span>
            <span class="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center hidden">
              <MinusIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>

   <div  class="relative bg-white py-16 sm:py-12 lg:py-16">
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
                                        v-model:value="stroskiValue"
                                        :marks="stroski"
                                        step="mark"
                                    />
                                </n-space>
                            </div>
                        </div>

                        <div  class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
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
                                        v-model:value="ekoValue"
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
                                        v-model:value="investValue"
                                        :marks="invest"
                                        step="mark"
                                    />
                                </n-space>
                            </div>
                        </div>

      
                    </div>
                </div>
            </div>
                <div class="content-center">
                    <button @click="saveSlider;" type="button" class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
        </div>
</template>

<script>

import { NSpace, NSlider } from "naive-ui";
import { PlusIcon, MinusIcon,    BadgeCheckIcon,
    CashIcon,
    ClockIcon,
    UsersIcon,
    GlobeIcon,
    DocumentTextIcon } from '@heroicons/vue/solid'
import {onMounted, ref,reactive,defineComponent} from "vue"
export default defineComponent({

components:{
  NSpace,
  NSlider,
},
setup(){

 var stroskiValue= ref(0)
var ekoValue= ref(0)

var investValue=ref(0)

var selectedComponents=ref([])
const selectedClick=(person)=>{
console.log(selectedComponents.value)
if (selectedComponents.value.includes(person.id)){
selectedComponents.value = selectedComponents.value.filter(e => e !== person.id);
} else{
selectedComponents.value.push(person.id);
}
localStorage.setItem("SelectedComponents", JSON.stringify(selectedComponents.value));
}
onMounted(()=>{
  if (localStorage.getItem("SelectedComponents") !== null) {
            selectedComponents.value=JSON.parse(localStorage.getItem("SelectedComponents"));
        }
   if (localStorage.getItem("Stroski") !== null) {
            stroskiValue.value=JSON.parse(localStorage.getItem("Stroski"));
        }
     if (localStorage.getItem("Eko") !== null) {
            ekoValue.value=JSON.parse(localStorage.getItem("Eko"));
        }
           if (localStorage.getItem("Invest") !== null) {
            investValue.value=JSON.parse(localStorage.getItem("Invest"));
        }

})

const saveSlider=()=>{
localStorage.setItem("Stroski", JSON.stringify(stroskiValue.value));
localStorage.setItem("Eko", JSON.stringify(ekoValue.value));
localStorage.setItem("Invest", JSON.stringify(investValue.value));


}
const people = [
  {
    name: 'Costs',
    id:"Costs",
    role: 'Take control of your spendings.',
    imageUrl:
      'https://storage.googleapis.com/coworking_images/JFBank/profits.png',
  },
  {
    name: 'Investments',
    id:"Investments",
    role: 'Take care of your future.',
    imageUrl:
      'https://storage.googleapis.com/coworking_images/JFBank/profits.png',
  },
  {
    name: 'Planet',
    id:"Eko",
    role: 'Save the Earth.',
    imageUrl:
      'https://storage.googleapis.com/coworking_images/JFBank/profits.png',
  },
  {
    name: 'Loans',
    id:"Kredit",
    role: 'Get the money you need.',
    imageUrl:
      'https://storage.googleapis.com/coworking_images/JFBank/profits.png',
  },
]

return{
  selectedComponents,
  selectedClick,
  saveSlider,
  localStorage,
  people,
  stroskiValue,
  ekoValue,
  investValue,
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

}

}
})
</script>
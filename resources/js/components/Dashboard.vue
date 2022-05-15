<template>
  <div class="max-w-md mx-auto sm:max-w-3xl py-12">
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
          <button type="button" class="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
    <div class="content-center">
      <button type="button" class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon, MinusIcon } from '@heroicons/vue/solid'

const people = [
  {
    name: 'Costs',
    role: 'Take control of your spendings.',
    imageUrl:
      'https://storage.googleapis.com/coworking_images/JFBank/profits.png',
  },
  {
    name: 'Investments',
    role: 'Take care of your future.',
    imageUrl:
      'https://storage.googleapis.com/coworking_images/JFBank/profits.png',
  },
  {
    name: 'Planet',
    role: 'Save the Earth.',
    imageUrl:
      'https://storage.googleapis.com/coworking_images/JFBank/profits.png',
  },
  {
    name: 'Loans',
    role: 'Get the money you need.',
    imageUrl:
      'https://storage.googleapis.com/coworking_images/JFBank/profits.png',
  },
];

</script>
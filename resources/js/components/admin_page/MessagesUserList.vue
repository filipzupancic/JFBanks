
<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
<h1 class="text-xl font-semibold text-gray-900">Sporočila</h1>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">Ime in priimek</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Zadnje sporočilo</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8">Možnost</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="person in people" :key="person.email" class='hover:bg-gray-300' >
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">{{ person.name }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.message}}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Odgovori<span class="sr-only"></span></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function clickMsg(){
  console.log("oy")
}
const people = [
  { name: 'Bogdan', message:'Pozdravljeni, kako lahko pridobim kred...' ,email: 'pehta@example.com'},
  { name: 'Živa', message:'Kje lahko pridobim potrdilo o nepre...' ,email: 'kekec@example.com'},
  // More people...
]
</script>

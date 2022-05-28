<template>
  <div class="relative bg-white py-8 sm:py-12 lg:py-8">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- <h2 class="text-base font-semibold uppercase tracking-wider text-blue-600">Deploy faster</h2> -->
      <!-- <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Dodaj dokumente</p> -->
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Spodaj je seznam vseh potrebnih dokumentov, ki jih morate oddati pred začetkom postopka.</p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span :class="feature.color" class="inline-flex items-center justify-center rounded-md p-3 shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CloudUploadIcon,
  ClockIcon,
  CheckIcon,
  XIcon,
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Energetska izkaznica',
    description: 'Dokument je sprejet in potrjen.',
    icon: CheckIcon,
    color: 'bg-emerald-500'
  },
  {
    name: 'Uporabno dovoljenje',
    description: 'Dokument je v obdelavi. Preverite stanje s klikom na ikono nad imenom.',
    icon: ClockIcon,
    color: 'bg-yellow-300'
  },
  {
    name: 'Izpisek plač',
    description: 'Dokument morate še dodati. To storite s klikom na ikono nad imenom.',
    icon: CloudUploadIcon,
    color: 'bg-blue-500'
  },
  {
    name: 'Dokument 4',
    description: 'Dokument je zavrnjen. Preverite razlog s klikom na ikono nad imenom.',
    icon: XIcon,
    color: 'bg-red-500'
  },
  {
    name: 'Dokument 5',
    description: 'Dokument je sprejet in potrjen.',
    icon: CheckIcon,
    color: 'bg-emerald-500'
  },
  {
    name: 'Dokument 6',
    description: 'Dokument je v obdelavi. Preverite stanje s klikom na ikono nad imenom.',
    icon: ClockIcon,
    color: 'bg-yellow-300'
  },
]
</script>
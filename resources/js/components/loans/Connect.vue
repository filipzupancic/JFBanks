<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <li v-for="(event, eventIdx) in timeline" :key="event.id">
        <div class="relative pb-8">
          <span v-if="eventIdx !== timeline.length - 1" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex space-x-3">
            <div>
              <span :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
                <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div>
                <p class="text-sm text-gray-500">
                  {{ event.content }} 
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { CheckIcon,ClockIcon,DotsVerticalIcon   } from '@heroicons/vue/solid'

const timeline = [
  {
    id: 1,
    content: 'Preverjanje vseh dokumentov',
    date: 'Sep 20',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 2,
    content: 'Ocena nepremičnine',
    date: 'Sep 23',
    icon: ClockIcon,
    iconBackground: 'bg-yellow-500',
  },
  {
    id: 3,
    content: 'Obisk notarja',
    date: '',
    icon: DotsVerticalIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 4,
    content:'Podpis pogodbe',
    date:'',
    icon: DotsVerticalIcon,
    iconBackground: 'bg-gray-400',
  },
]
</script>
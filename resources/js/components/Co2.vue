<template>
    <div class="bg-white">
        <div>
            <div
                class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
            >
                <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    <span class="block">ZEMLJA</span>
                </h2>
                <div class="mt-8 flex justify-center">
                    <div class="inline-flex rounded-md shadow">
                        <a
                            href="/eko"
                            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                        >
                            Ogljični odtis
                        </a>
                    </div>
                    <div class="ml-3 inline-flex">
                        <a
                            href="/eko-akcija"
                            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200"
                        >
                            Stopi v akcijo
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-8">
            <apexchart
                type="area"
                height="350"
                :options="chartOptions"
                :series="series"
            ></apexchart>
        </div>
        <div>
  <h3 class="text-lg leading-6 font-medium text-gray-900">600 kg emisij je enako:</h3>

  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div class="relative bg-white py-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div class="absolute bg-emerald-100 rounded-md p-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </dt>
      <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">10 požaganih dreves</p>
      </dd>
    </div>

    <div class="relative bg-white py-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div class="absolute bg-emerald-100 rounded-md p-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </dt>
      <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">500 prevoženih kilometrov</p>
      </dd>
    </div>

    <div class="relative bg-white py-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        <div class="absolute bg-emerald-100 rounded-md p-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </dt>
      <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
        <p class="text-2xl font-semibold text-gray-900">1 polet z letalom</p>
      </dd>
    </div>
  </dl>
</div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            series: [
                {
                    name: "Hiša",
                    data: this.generateDayWiseTimeSeries(
                        new Date("1 Jan 2020 GMT").getTime(),
                        50,
                        {
                            min: 10,
                            max: 60,
                        }
                    ),
                },
                {
                    name: "Avto",
                    data: this.generateDayWiseTimeSeries(
                        new Date("1 Jan 2020 GMT").getTime(),
                        50,
                        {
                            min: 10,
                            max: 60,
                        }
                    ),
                },
                {
                    name: "Živila",
                    data: this.generateDayWiseTimeSeries(
                        new Date("1 Jan 2020 GMT").getTime(),
                        50,
                        {
                            min: 10,
                            max: 60,
                        }
                    ),
                },
                {
                    name: "Ostalo",
                    data: this.generateDayWiseTimeSeries(
                        new Date("1 Jan 2020 GMT").getTime(),
                        50,
                        {
                            min: 10,
                            max: 60,
                        }
                    ),
                },
            ],
            chartOptions: {
                chart: {
                    type: "area",
                    height: 350,
                    stacked: true,
                    events: {
                        selection: function (chart, e) {
                            console.log(new Date(e.xaxis.min));
                        },
                    },
                },
                colors: ["#008FFB", "#00E396", "#FEB019", "#CED4DC"],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    },
                },
                legend: {
                    // position: "top",
                    // horizontalAlign: "left",
                },
                title: {
                    text: "Emisije v tCO2",
                    align: "left",
                },
                xaxis: {
                    type: "datetime",
                },
            },
            
        };
    },
    methods: {
        generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = baseval;
                var y =
                    Math.floor(Math.random() * (yrange.max - yrange.min + 1));

                series.push([x, y]);
                baseval += 864000000;
                i++;
            }
            return series;
        },
       
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>

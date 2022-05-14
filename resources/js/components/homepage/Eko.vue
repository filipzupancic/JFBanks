<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="bg-blue-100 rounded-lg p-6 flex items-center sm:p-10">
                <div class="max-w-sm mx-auto text-center">
                    <h3 class="font-semibold text-lg text-gray-900">Eko</h3>
                       <div class="py-8">
                        <apexchart
                          type="area"
                          height="100"
                          :options="chartOptions"
                          :series="series"
                      ></apexchart>
                      </div>
                </div>
            </div>
</template>

<script>
import {defineComponent} from "vue"
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
                    height: 100,
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
                    text: "",
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
setup(){
    return{
        
    }
}



});
</script>
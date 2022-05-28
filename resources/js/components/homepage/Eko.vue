<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<router-link to="/eko">
        <div>
            <div
                class="max-w-7xl mx-auto text-center py-4 px-4 sm:px-6 lg:py-4 lg:px-4"
            >
                <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    <span class="block">Ogljični odtis</span>
                </h2>
            </div>
        </div>
                    <div style="align-items: center;text-align:center;">
                    <h2 class="text-lg text-gray-600">Danes si proizvedel/a <div class="text-red-500">1,4 Kg</div>  Co2</h2>
                    </div>
                       <div class="py-4">
                        <apexchart
                          type="area"
                          height="350"
                          :options="chartOptions"
                          :series="series"
                      ></apexchart>
                      </div>
</router-link>
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
                    height: 300,
                    stacked: true,
                    toolbar: {
                        show: false,
                        tools: {}
                        },
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
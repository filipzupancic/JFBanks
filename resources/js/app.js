require('./bootstrap');

require('alpinejs');

import { h, createApp, Vue } from "vue"
import App from './components/App'
import Chat from "vue3-beautiful-chat"
import RadialProgressBar from "vue3-radial-progress"
import VueApexCharts from "vue3-apexcharts"
import router from './router'
import Loans from './components/Loans'
import Costs from './components/Costs'
import Costs2Action from './components/Costs2Action'
import Co2 from './components/Co2'
import Co2Action from './components/Co2Action'
import Investments from './components/Investments'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Notifications from './components/Notifications'
import Documents from './components/Documents'
import Calendar from './components/Calendar'
import Wallet from './components/Wallet'
import HistogramSlider from "vue3-histogram-slider";
import LoanSteps from "./components/loans/LoanSteps"
import "vue3-histogram-slider/dist/histogram-slider.css";
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'


createApp({
    render: () => (
      h(App)
    ),
    components: {
        Loans,
        LoanSteps,
        Costs,
        Co2, 
        Investments,
        Dashboard,
        Home,
        Notifications,
        Documents,
        Co2Action,
        Costs2Action,
        Calendar,
        Wallet,
    },
})
.use(router)
.use(Chat)
.use(VueUniversalModal,{teleportTarget:"#modals"})
.use(RadialProgressBar)
.use(VueApexCharts)
.component(HistogramSlider.name, HistogramSlider)
.mount('#app')

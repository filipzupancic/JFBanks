<template>
<div>
<section class="hero is-info">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Compound Interest Calculator / Loan Payment Calculator // VueJS
      </h1>
    </div>
  </div>
</section>

  <div class="container">
    <p class="ins">
    Enter your values to see your monthly payment, and grand total, and interest paid.
    </p>

      <div class="columns">
  
    <div class="column">    
      <label>Principal Loan Amount</label>
      <input class="input" type="number" v-on:blur="calc" v-model.number="loan.principal">
    </div>
    <div class="column">    
      <label>Interest Rate</label>
      <input class="input" type="text" v-on:blur="calc" v-model.number="loan.interest">
    </div>
    <div class="column">    
      <label>Time in Years</label>
      <input class="input" type="number" v-on:blur="calc" v-model.number="loan.timeYears">
    </div>
    <div class="column">    
      <label>Compounded (months)</label>
      <input class="input" type="number" v-on:blur="calc" v-model.number="loan.compoundingEvery">
    </div>
  </div>
<button class="button is-info" v-on:click="calc">Compute</button>

    <div class="columns">
      <div class="column">
        <div class="notification is-success">
          <h3>Monthly Payment</h3>
          <p>${{ formatPrice(loan.payment) }}</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-warning">
        <h3>Grand Total</h3>
        <p>${{ formatPrice(loan.total) }}</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-danger">

        <h3>Total Interest</h3>
        <p>${{ formatPrice(loan.totalInterest) }}</p>
        </div>
        </div>
      </div>
    </div>
</div>

</template>

<script>
import { ref, defineComponent } from "vue";
import { CheckIcon } from "@heroicons/vue/solid";
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/solid'

export default defineComponent({
   emits: ["finishedStatusEvent"],
  data() {
    return{
    loan: {
      principal: 300000,
      interest: .0299,
      compoundingEvery: 12,
      timeYears: 15,
      payment: 0,
      total: 0,
      totalInterest: 0,
      l: 0,
      r: 0
    },


    }
  },
  methods: {
    calc: function () {
      this.loan.l =  this.loan.principal*((1+ (this.loan.interest/this.loan.compoundingEvery))**(this.loan.compoundingEvery*this.loan.timeYears));
      this.loan.r = (((1+ (this.loan.interest/this.loan.compoundingEvery))**(this.loan.compoundingEvery*this.loan.timeYears))-1)/(this.loan.interest/this.loan.compoundingEvery);
      this.loan.payment = Math.round(this.loan.l / this.loan.r * 100) /100 ;
      this.loan.total = Math.round(this.loan.payment * this.loan.compoundingEvery*this.loan.timeYears  * 100) /100 ;
      this.loan.totalInterest = Math.round((this.loan.total - this.loan.principal )  * 100) /100 ;    
      this.$emit('finishedStatusEvent', true)
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2);
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
    components: {
        CheckIcon,
        ChevronRightIcon,
        HomeIcon,
    },

});
</script>

<style>
label {
  color: #aaa;
}
input, button, label, p {
  margin-bottom: .5em;
}
.columns p {
  font-weight: bold;
  line-height: 40px;
}
.columns{
  margin-top: 1em;
}
.ins {
  margin-top: 2em;
}
.hero {
  padding-top: 5vh;
}
</style>

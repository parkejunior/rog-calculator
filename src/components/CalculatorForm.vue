<template>
  <form @submit.prevent="calculate">
    <div>
      <label>Valor</label>
      <input type="number" v-model="amount">
    </div>
    <div>
      <label>Quantidade de ciclos</label>
      <input type="number" v-model="loops">
    </div>
    <div>
      <label>Quantidade de dias</label>
      <input type="number" v-model="days">
    </div>

    <button type="submit">Calcular</button>
  </form>
</template>

<script setup lang="ts">
import { Calculator, type Day } from "@/tools/calculator";
import { ref, watchEffect, type Ref } from "vue";

const amount: Ref<number> = ref(0)
const loops: Ref<number> = ref(1)
const days: Ref<number> = ref(1)

const calculator = new Calculator

watchEffect(() => {
  calculator.loops = loops.value;
  calculator.days = days.value;
})

const emit = defineEmits(['calculated'])

const calculate = () => {
  const result = calculator.calculate(amount.value)

  emit('calculated', result)
}
</script>

<style>

</style>
<template>
  <table>
    <thead>
      <tr>
        <th>Data</th>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>D</th>
        <th>Final</th>
        <th>Final do Dia</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="day in days">
        <tr v-for="(line, index) in day.lines">
          <td v-if="index == 0" :rowspan="day.lines.length">{{ day.date }}</td>
          <td>
            {{ line.a.result }}
            {{ line.a.remainder }}
          </td>
          <td>
            {{ line.b.result }}
            {{ line.b.remainder }}
          </td>
          <td>
            {{ line.c.result }}
            {{ line.c.remainder }}
          </td>
          <td>
            {{ line.c.result }}
            {{ line.c.remainder }}
          </td>
          <td>{{ line.final }}</td>
          <td v-if="index == 0" :rowspan="day.lines.length">{{ day.final }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Day } from '@/tools/calculator';

defineProps<{
  days: Day[]
}>()
</script>

<style>
table, th, td {
  border: 1px solid;
}
</style>
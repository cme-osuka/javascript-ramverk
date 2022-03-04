<script setup>
import { ref } from "vue"

const orderName = ref("")
const orderPrice = ref(0)
const orders = ref([
  { title: "En Gård", price: 200, complete: false },
  { title: "En Gård", price: 200, complete: false },
])

function addOrder() {
  orders.value.push({
    title: orderName.value,
    price: orderPrice.value,
    complete: false
  })

  orderName.value = ""
  orderPrice.value = 0
}

function markAsDone(orderIndex) {
  orders.value.forEach((order, index) => {
    if (index === orderIndex) {
      order.complete = !order.complete
    }
  })
}

</script>

<template>
  <h1>Orres Orders</h1>

  <div>
    <input v-model="orderName" />
    <input v-model="orderPrice" />
    <button @click="addOrder">Lägg till</button>
  </div>

  <ul>
    <li v-for="(order, index) in orders" :key="index">
      <span :class="{ completed: order.complete }" >{{ order.title }} - {{ order.price }}kr</span>
      <button @click="markAsDone(index)">Klar</button>
    </li>
  </ul>
</template>


<style>
.completed {
  color: purple;
  font-weight: bold;
}
</style>
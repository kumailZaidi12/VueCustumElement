<template>
  <tbody>
    <tr>
      <td>{{ name }}</td>
      <td>{{ price }}</td>
      <td>
        <button id="decrementButton" @click="decrementCount">-</button
        >{{ itemCount
        }}<button id="incrementButton" @click="incrementCount">+</button>
      </td>
      <td>{{ itemSubTotal }}</td>
    </tr>
  </tbody>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    name: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0.0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      itemCount: this.count,
    };
  },
  methods: {
    decrementCount() {
      this.itemCount--;
    },
    incrementCount() {
      this.itemCount++;
    },
  },
  computed: {
    itemSubTotal: function () {
      return this.price * this.itemCount;
    },
  },
};
</script>

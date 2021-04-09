<template>
  <ul>
    <li v-for="item in items" :key="item.name">
      <Hello-World
        v-bind:name="item.name"
        v-bind:price="item.price"
        v-bind:count="item.count"
      />
    </li>
  </ul>
</template>


<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      items: [
        { id: 1, name: "item1", price: 10.1, count: 2 },
        { id: 2, name: "item2", price: 20.2, count: 1 },
        { id: 3, name: "item3", price: 30.3, count: 3 },
      ],
    };
  },
};
</script>

<template>
  <div>
    <worker-header />
    <router-view></router-view>
  </div>
</template>
<script>
import WorkerHeader from "../../components/Worker/Header.vue";
export default {
  name: "Worker",
  components: {
    WorkerHeader
  }
};
</script>
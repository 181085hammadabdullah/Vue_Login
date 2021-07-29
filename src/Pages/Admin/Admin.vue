<template>
  <div>
    <admin-header />
    <router-view></router-view>
  </div>
</template>
<script>
import AdminHeader from "../../components/Admin/Header.vue";
export default {
  name: "Admin",
  components: {
    AdminHeader
  }
};
</script>
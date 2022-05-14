<template>
  <div class="home">
    <NavbarComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
  },
};
</script>

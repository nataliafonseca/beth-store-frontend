<template>
  <div class="categories-view">
    <navbar-component />
    <b-table :data="data" :columns="columns"></b-table>
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  components: { NavbarComponent },
  name: "CategoriesView",
  data() {
    return {
      data: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
        },
        {
          field: "description",
          label: "Descrição",
        },
        {
          field: "sector",
          label: "Setor",
        },
      ],
    };
  },
  created() {
    fetch(
      "https://my-json-server.typicode.com/nataliafonseca/beth-store/categories"
    )
      .then((response) => response.json)
      .then((json) => {
        this.data = json;
      });
  },
};
</script>

<template>
  <div class="categories-view">
    <navbar-component />
    <b-button type="is-primary" tag="a" href="add-category">Adicionar</b-button>

    <b-table :data="tableData" :columns="columns"></b-table>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import api from "@/services/api";

export default {
  components: { NavbarComponent },
  name: "CategoriesView",
  data() {
    return {
      tableData: [],
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
  async created() {
    const response = await api.get("/categories");
    this.tableData = response.data;
  },
};
</script>

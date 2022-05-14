<template>
  <div>
    <navbar-component></navbar-component>
    <form>
      <b-field label="Descrição">
        <b-input v-model="category.description"></b-input>
      </b-field>
      <b-field label="Seção">
        <b-select
          placeholder="Select a name"
          expanded
          v-model="category.section"
        >
          <option
            v-for="option in sectionOptions"
            :value="option"
            :key="option"
          >
            {{ option }}
          </option>
        </b-select>
      </b-field>
      <b-button type="is-primary" @click="addCategory" expanded
        >Submit</b-button
      >
    </form>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import api from "@/services/api";

export default {
  name: "AddCategoryView",
  components: { NavbarComponent },
  data() {
    return {
      category: {
        description: null,
        section: null,
      },
      sectionOptions: [
        "Cama, mesa e banho",
        "Vestuário",
        "Decoração",
        "Beleza",
      ],
    };
  },
  methods: {
    async addCategory() {
      await api.post("/categories", this.category);
      this.$router.push("/categories");
    },
  },
};
</script>

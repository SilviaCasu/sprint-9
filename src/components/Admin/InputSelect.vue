<template>
  <div class="inputSelect">
    <div class="row mb-1">
      <div class="col-10">
        <div class="input-group">
          <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="selectedCategory" @change="saveCategory" multiple>
            <option value="" disabled>Selezionare le categorie</option>
            <option value="Entrante">Entrante</option>
            <option value="Pasta">Pasta</option>
            <option value="Carne">Carne</option>
            <option value="Verdura">Verdura</option>
            <option value="Postre">Postre</option>
          </select>
        
        </div>
      </div>
      <div class="col-2">
        <button class="btn btn-danger" @click="resetCategories" :disabled="selectedCategories.length === 0">Reset</button>
      </div>
    </div>
    <div v-if="selectedCategories.length > 0">
      Categorias selecionadas:
      <ul>
        <li v-for="category in selectedCategories" :key="category">{{ category }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inputselect",
  props: {
    selectedCategories: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      selectedCategory: [],
      lastSelectedCategory: ''
    };
  },
  methods: {
    saveCategory() {
      this.selectedCategories.push(...this.selectedCategory);
      this.lastSelectedCategory = this.selectedCategory[this.selectedCategory.length - 1];
    },
    resetCategories() {
  this.selectedCategories.pop();
  this.selectedCategory = this.selectedCategories.slice();
},
  },
};
</script>

<style></style>

<template>
  <div class="inputList">
    <div class="row mb-1">
      <div class="col-10">
        <textarea v-model="ingredient" class="form-control" id="exampleFormControlInput1"
          @keydown.enter.prevent="addIngredient"></textarea>
      </div>
      <div class="col-2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addIngredient"
          :disabled="!ingredient.trim()">
          Añadir
        </button>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="deleteLastIngredient"
          :disabled="ingredients.length === 0">
          Cancelar
        </button>
      </div>
    </div>
    <ul>
      <li v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}</li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: "InputList",
  props: {
    value: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      ingredient: "",
      ingredients: [],
    };
  },
  watch: {
    value(newVal) {
      this.ingredients = newVal;
    },
  },
  methods: {
    addIngredient() {
      if (this.ingredient.trim()) {
        this.ingredients.push(this.ingredient);
        this.ingredient = '';
        console.log('ingredients:', this.ingredients); // Mostrar ingredients en la consola
        this.$emit('update-ingredientes', this.ingredients);
      }
    },
    deleteLastIngredient() {
      this.ingredients.pop();
      console.log('ingredients:', this.ingredients); // Mostrar ingredients en la consola
      this.$emit('update-ingredientes', this.ingredients);
    }
  }


};

</script>
  
<style></style>
  
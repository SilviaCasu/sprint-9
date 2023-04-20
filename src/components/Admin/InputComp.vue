


<template>
  <div class="inputTag">
    <div class="tags">
      <div class="row mb-1">
        <div class="col-10">
          <textarea v-model="value" class="form-control" id="exampleFormControlInput1"></textarea>
        </div>
        <div class="col-2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addTag"
            :disabled="!value.trim()">
           Añadir
          </button>
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="deleteLastTag"
            :disabled="tags.length === 0">
            Cancelar
          </button>
        </div>
      </div>
      <div class="tag" v-for="(tag, index) in tags" :key="index">
        {{ tag }}
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "InputComp",
  props: {
    value: String,
  },
  data() {
    return {
      value: "",
      tags: [],
    };
  },
  methods: {
    addTag() {
      if (this.value.trim()) {
        this.tags.push(this.value.trim());
        this.$emit("update:value", this.value)
        this.value = "";
      }
    },
    deleteLastTag() {
      this.tags.pop();

      this.$emit("update:value", this.value);
      this.value = '';
    },
  },
};
</script>

  
 
  
<style></style>
  
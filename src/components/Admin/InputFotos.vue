<template>
  <div>
    <label class="form-label">{{ label }}</label>
    <input type="file" @change="handleFileSelect" />
    <button @click="cancelar">Cancelar</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    onImagenSeleccionada: {
      type: Function,
      required: true,
    },
    onCancelar: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleFileSelect(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.onImagenSeleccionada(file);
      }
    },
    cancelar() {
      this.onCancelar();
    },
  },
};
</script>

<style scoped>
/* Agrega aquí tus estilos */
</style>

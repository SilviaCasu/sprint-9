<template>
  <div id="container" class="container-fluid justify-content-center">
    <div class="admin">
      <div class="cabecera">
        <Cabecera />
      </div>
      <div class="row">
        <div class="col-md-1 "> </div>
        <div class="col-md-10  min-height-100 p-3">
     
      <div class="row mt-5 mb-3 ">
        <div class="inputTitle text-start">
          <label class="form-label text-start"> Insertar titulo</label>
          <InputComp v-model:value="titulo" />
        </div>
      </div>
      <div class="row mb-3 ">
        <div class="inputText text-start ">
          <label class="form-label"> Insertar texto</label>
          <InputComp v-model:value="texto" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="inputList text-start">
          <label class="form-label"> Ingredientes</label>
          <InputList v-model="ingredientes" @update-ingredientes="ingredientes = $event" />
        </div>
      </div>
      <div class="row mb-3">
  <div class="inputText text-start ">
    <label class="form-label">Procedimiento</label>
    <InputComp v-model:value="procedimiento" />
  </div>
</div>
      <div class="row mb-3 ">
        <div class="inputCat text-start ">
          <label class="form-label"> Elegir categoria</label>
          <InputSelect class="rows-4 col-5" v-model="selectedCategories" :selectedCategories="selectedCategories" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="inputFile text-start">
          <label class="form-label">Seleccionar imagen</label><br>
          <input type="file" @change="handleFileSelect($event)" />
        </div>
      </div></div></div>
      <button @click="guardarRecetas()" class="btn btn-success " type="button">Guardar recetas</button>
      <button @click="resetForm ()" class="btn btn-danger">Reset</button>
    </div>
    <div class="col-md-1 mt-3"> </div>
    <div class="row">
      <div class="col-12 bg-dark min-height-100 text-white"> ESGLURP - TEMPTING FOOD</div>
    </div>
  </div>
</template>

<script>
import Cabecera from '@/components/Cabecera.vue'
import InputComp from '@/components/Admin/InputComp.vue'
import InputSelect from '@/components/Admin/InputSelect.vue'
import Login from '@/components/Login.vue'
import InputList from '@/components/Admin/InputList.vue'
import 'firebase/compat/storage'
import { db, storage } from '@/main.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

export default {
  name: 'Admin',
  components: {
    Cabecera,
    InputComp,
    InputSelect,
    InputList,
    Login
  },
  data() {
    return {
      titulo: '',
      texto: '',
      ingredientes: [],
      procedimiento: '',
      categoria: '',
      selectedCategories: [],
      images: []
    }
  },
  methods: {
    async guardarRecetas() {
  try {
    if (!this.titulo || !this.texto || !this.ingredientes.length || !this.selectedCategories.length) {
      throw new Error('Todos los campos son requeridos');
    }

    // Upload image to Firebase Storage and get download URL
    const downloadURLs = await Promise.all(this.images.map(image => this.uploadImage(image)));
    const nuevaReceta = {
      titulo: this.titulo,
      texto: this.texto,
      procedimiento: this.procedimiento,
      ingredientes: this.ingredientes, 
      categoria: this.selectedCategories || '',
      images: downloadURLs
    };
    
    console.log('nuevaReceta:', nuevaReceta); 

    const docRef = await db.collection('recetas').add(nuevaReceta);
    console.log('Receta guardada con ID: ', docRef.id);
  } catch (error) {
    console.error('Error al guardar la receta: ', error.message);
    // Mostrar mensaje de error al usuario
    alert(error.message);
  }
},


    handleFileSelect(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.images.push(file);
      }
    },
    async uploadImage(file) {
      const storageRef = storage.ref();
      console.log('storageRef:', storageRef);
      const imageRef = storageRef.child(`recetas/${file.name}`);
      console.log('imageRef:', imageRef);

      // Load the file into a blob
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      await new Promise(resolve => { reader.onload = resolve; });
      const buffer = reader.result;
      const blob = new Blob([buffer]);

      // Upload the blob to Storage
      await imageRef.put(blob);
      const downloadURL = await imageRef.getDownloadURL();
      console.log('downloadURL:', downloadURL);
      return downloadURL;
    },
    
resetForm() {
    this.titulo = '';
    this.texto = '';
    this.ingredientes = [];
    this.selectedCategories = [];
    this.images = [];
  }

    

  }
}
</script>

<style scoped>


body {
  font-family: Tahoma, sans-serif;
}


</style>
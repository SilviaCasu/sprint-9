<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Cabecera />
      </div>
    </div>
    <div class="row">
      <div class="col-md-1 ">
        <!-- col sinistra -->
      </div>
      <div class="col-md-10  min-height-100 p-3">

        <div class="row  p-3">
          <div class="col-md-3 p-3 border">
            <!-- col destra-->
            <div v-if="weatherData">

              <h3>Temperatura en {{ weatherData.name }} {{ weatherData.main.temp }} °C</h3>
            </div>
            <div v-else>
            </div>

            <h2> Quis autem vel </h2>
            <p class="testo">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
            esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
         </p>
          </div>

          <div class="col-md-6 p-3 border">
            <h2>Nuestra última receta sin gluten </h2> <br>
            <div v-if="ultimaReceta">
              <h3>{{ ultimaReceta.titulo }}</h3>
              <p>{{ ultimaReceta.texto }}</p>
              <img :src="ultimaReceta.images" alt="Ultima ricetta" class="img-responsive">
            </div>
          </div>

          <div class="col-md-3 p-3 border">

            <!-- col destra--> 
            <h3>Últimas noticias</h3>
            <p class="testo">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
            esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
         </p> </div>

        </div>

      </div>

      <div class="col-md-1">
     
      </div>
    </div>
    <div class="row">
      <div class="col-12 bg-dark min-height-100 text-white"> ESGLURP - TEMPTING FOOD</div>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { mapGetters } from 'vuex';
import Cabecera from '@/components/Cabecera.vue';
import Recetas from '@/views/Recetas.vue';
export default {
  name: 'Home',
  components: {
    Cabecera,
    Recetas,
  },
  data() {
    return {
      recetas: {},
      ultimaReceta: {},
    };
  },
  computed: {
    ...mapGetters(['getWeatherData']),
    weatherData() {
      return this.getWeatherData;
    },
  },


  async created() {
    this.$store.dispatch('getWeatherData', 'Barcelona');
    const recetasCollection = firebase.firestore().collection('recetas')
    const recetasSnapshot = await recetasCollection.get()
    const recetas = []

    for (const doc of recetasSnapshot.docs) {
      recetas.push({
        id: doc.id,
        ...doc.data()
      })
    }

    this.recetas = recetas

    this.ultimaReceta = recetas[recetas.length - 1]
  }
}



</script>

<style>
body {
  font-family: Tahoma, sans-serif;
}


h3 {
  font-family: Tahoma, sans-serif;
  font-size: 1em;
  color: #dc3545;
  padding-bottom: 10px;

}

h2 {
  font-family: Tahoma, sans-serif;
  font-size: 0.9em;
  color: #0c0a0a;


}

.min-height-200 {
  min-height: 200px;
}

.min-height-100 {
  min-height: 100px;
}


.col-md-6 img {
  max-width: 100%;
  height: auto;
}
.testo{
  text-align: left;
}
</style>

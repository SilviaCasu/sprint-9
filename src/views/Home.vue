<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Cabecera />
      </div>
    </div>
    <div class="row">
      <div class="col-md-1 ">

      </div>
      <div class="col-md-10  min-height-100 p-3">

        <div class="row  p-3">
          <div class="col-md-3 p-3 ">
            <!-- col destra-->
            <div v-if="weatherData">

              <h3>Temperatura en {{ weatherData.name }} {{ weatherData.main.temp }} °C</h3>
            </div>
            <div v-else>
            </div>
            <div class="row border border-success mt-3 mb-3"></div>

            <h4> Noticias </h4>
            <p class="testo">La Federación de Asociaciones de Celiacos de España (FACE) y las asociaciones de celiacos
              trabajan para crear estrategias que permitan mejorar el diagnóstico precoz en la atención primaria,
              desarrollando para ello herramientas que amplíen el conocimiento sobre esta enfermedad.<br>
              Puedes leer el articulo en la web oficial de 
              <a href="https://celiacos.org/face-distribuye-carteles-en-centros-de-salud-para-potenciar-el-diagnostico-precoz-de-la-enfermedad-celiaca/" target="_blank">FACE</a>
            </p>
            <div class="row border border-success mt-3 mb-3"></div>

          </div>

          <div class="col-md-6 p-3 border-start border-end">
            <h2>Si aún no lo has hecho, registrate para ver todas las recetas sin gluten </h2> <br>
            <div v-if="ultimaReceta">
              <h3>{{ ultimaReceta.titulo }}</h3>
              <p>{{ ultimaReceta.texto }}</p>
              <img :src="ultimaReceta.images" alt="Ultima ricetta" class="img-responsive">
            </div>
          </div>

          <div class="col-md-3 p-3">

            <!-- col destra-->
            <h3>Todavia no hay ayuda ecomonica para los celiacos</h3>
            <p class="testo">En 2021, el Ministerio de Consumo de España anunció un proyecto de ley para garantizar la
              seguridad alimentaria de las personas con alergias e intolerancias alimentarias, que incluye a las personas
              con enfermedad celíaca. <br>La ley establece medidas para mejorar la información y la formación de los
              profesionales de la alimentación, así como para garantizar el acceso a alimentos seguros y sin gluten.<br>
              Pero aún no se habla del derecho a las ayudas publicas para comprar alimentos básicos sin gluten, de momento
              la única terapia existente.
            </p>
          </div>

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
h4 {
  font-family: Tahoma, sans-serif;
  font-size: 1em;
  color: #10b67e;
  padding-bottom: 10px;
  font-weight: bold;

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

.testo {
  text-align: left;
}

a {
  color: #dc3545;
}

a:hover {
  color: rgb(7, 151, 50);
}
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
a:active {
  color: rgb(7, 151, 50);
  
  text-decoration: none;
}

</style>

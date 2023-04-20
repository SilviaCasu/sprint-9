<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Cabecera -->
      <div class="col-12">
        <Cabecera />
      </div>
    </div>
    <div class="row">
      <!-- Columna izquierda -->
      <div class="col-sm-3 col-lg-3">
        <div class="row">
          <div class="col-12 min-height-200"></div>
          <div class="col-12 min-height-200"></div>
          <div class="col-12 min-height-200"></div>
        </div>
      </div>
      <!-- Columna central -->
      <div class="col-sm-6 col-lg-6">
        <div class="row">
          <div class="col-12 min-height-200 pt-5">
            <h4> Unos datos para contextualizar </h4> <h5>Los celiacos en el mundo </h5>
            <p class="testo">  1% - 1.3 % Población mundial
              - 6% Marrueco - (población Saharawy ).
              - 2 de cada 3 celiacos diagnosticados son mujeres. <br>
              En Catalunya con una población de 7,566 millones hay 75.000 celíacos + 450.000 sensibles al gluten, un total de 7%, 
              de estos, más del 25% tiene entre 10 y 16 años. </p>

          </div>
        </div>
      </div>
      <!-- Columna derecha -->
      <div class="col-sm-3 col-lg-3">
        <div class="row">
          <div class="col-12 min-height-200"></div>
          <div class="col-12 min-height-200"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Footer -->
      <div class="col-12 bg-dark min-height-100 text-white"> ESGLURP - TEMPTING FOOD</div>
    </div>
  </div>
</template>
<script>
import Cabecera from '@/components/Cabecera.vue'


export default {
  name: 'Informaciones',
  components: {
    Cabecera,

  }
}

</script>

<style>
.testo {
  text-align: left;
}


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

h5 {
  font-family: Tahoma, sans-serif;
  font-size: 1em;
  color: #dc3545;
  padding-bottom: 10px;
  

}
</style>
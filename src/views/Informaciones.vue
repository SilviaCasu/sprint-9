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
            <h3> Quis autem vel </h3>
           <p class="testo"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."</p>

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
.testo{
  text-align: left;
}
</style>
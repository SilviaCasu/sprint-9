

<template>
 <div class="row bg-dark mb-3" style="height:30px"></div>
   <div class="cabecera d-flex flex-column align-items-center">
 
  <img alt="Esglurp logo" src="../assets/logo.png">
  <div class="row d-flex flex-column align-items-center mt-3 mb-3">
    <h2>GLUTEN FREE</h2>
    <h3>Esglurp-Tempting Food</h3>
  </div></div>
  <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <nav class="navbar navbar-white bg-transparent mb-1">
                    <MenuPrincipal />
                </nav>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <img alt="Esglurp-foto" src="../assets/img-cab.jpg" class="img-fluid">
            </div>
        </div>
        <div class="col-1"></div>
    
</template>


<script>
import MenuPrincipal from '@/components/MenuPrincipal.vue'

export default {
    name: 'Cabecera',
    components: {
        MenuPrincipal,

    }

}
</script>



  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    font-family: Tahoma, sans-serif;
   
}

h2 {
    font-family: serif;
    font-size: 2em;

}
h3 {
    
    font-size: 1em;
    color: #db0f5e;
    
}
</style>
  
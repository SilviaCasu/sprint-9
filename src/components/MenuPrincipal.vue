<template>
  <div class="menu_principal">
    <nav class="navbar navbar-expand-lg navbar-light bg-body">
      <div class="container-fluid ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav text-start">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home |</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recetas" class="nav-link active" aria-current="page">Recetas sin gluten |</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/informaciones" class="nav-link active" aria-current="page">Informaciones útiles  |</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/celiaquia" class="nav-link active" aria-current="page">Celiaquía y gluten  |</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'login' }" class="nav-link active" aria-current="page">
                Área de Administración
              </router-link>
            </li>
        
           
          </ul>
        </div>
      </div>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: 'MenuPrincipal',
};
</script>

<style scoped>



</style>

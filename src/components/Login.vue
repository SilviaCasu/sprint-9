<template>
  <div class="container-fluid">
    <div class="row mt-5 mb-3 ">
      <div class="container">
        <div class="cabecera">
          <Cabecera />
        </div>
        <div class="row mb-3 ">
          <div class="col-3"></div>
          <div class="col-6">
            <h3 class="mb-5">Login</h3>
            <!-- Mostrar el saludo al usuario solo después del inicio de sesión -->
            <div v-if="user" class="mt-3 alert alert-success" role="alert">
            
              <nav class="nav justify-content-center">
                <div class="nav-item">
                  <button class="btn btn-success m-2" @click="gotoAdminOrUserPage">ENTRAR</button>
                </div>
              </nav>
            </div>
            <div v-else>
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" v-model="username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <button type="submit" class="btn btn-success">Login</button>
              </form>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 bg-dark min-height-100 text-white"> ESGLURP - TEMPTING FOOD</div>
    </div>
  </div>
</template>
<script>
import Cabecera from '@/components/Cabecera.vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export default {
  name: 'Login',
  components: {
    Cabecera
  },
  data() {
    return {
      user: null,
      username: '',
      password: ''
    }
  },
  mounted() {
    // Inicializa Firebase con la configuración
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // El usuario ha iniciado sesión correctamente
        console.log(user.email);
        this.user = user;
      } else {
        // Ningún usuario ha iniciado sesión o la sesión ha sido cerrada
        console.log('Ningún usuario ha iniciado sesión');
        this.user = null;
      }
    });
  },
  methods: {
    login() {
      // Inicio de sesión del usuario con el nombre de usuario y la contraseña proporcionados por el usuario
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then((user) => {
        // Inicio de sesión correcto
        console.log('Inicio de sesión 1', user);
        this.user = user;

        // Verificar el rol del usuario y redirigir a la página adecuada
        if (this.username === 'test@gmail.com') {
        console.log(this.user + "2");
          // Si el usuario ha iniciado sesión y es el usuario administrador
          this.$router.push('/admin'); // Redirigir al área de administración
        } else {
          console.log(this.username + "3");
          // En otro caso, redirigir a la página recetas.vue
          this.$router.push('/recetas');
        }
      }).catch((error) => {
        // Error de inicio de sesión
        console.error(error);
        alert('Credenciales no válidas'); // Mensaje de error para el usuario
      });
    },
    gotoAdminOrUserPage() {
  if (this.user && this.user.email === 'test@gmail.com') {
    // Si el usuario es el usuario administrador
    this.$router.push('/admin');
  } else if (this.user) {
    // Si el usuario ha iniciado sesión pero no es el usuario administrador
    alert('No tienes autorización para entrar en esta sesión');
  } else {
    // Si el usuario no ha iniciado sesión
    this.$router.push('/login'); // Redirigir a la página de inicio de sesión
  }
},

  }
}
</script>


   
   
<style scoped>
body {
  font-family: Tahoma, sans-serif;
  color: #444444;
}

h3 {
  font-family: Tahoma, sans-serif;
  font-size: 1.5em;
  color: #dc3545;
  text-align: center;
}

h5 {
  font-family: Tahoma, sans-serif;
  font-size: 1em;
  color: #dc3545;

}

.container-fluid {
  padding: 10px;
  overflow: hidden;
}

.procedimiento {
  text-align: left;
}

.min-height-100 {
  min-height: 100px;
}

.border {
  border: 1px solid #dc3545;
}
</style>
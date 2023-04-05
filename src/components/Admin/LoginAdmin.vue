<template>
  <div class="container-fluid">
    <div class="row mt-5 mb-3 ">

    <div class="container">
      <h2>Login Admin</h2>

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
      <div v-if="user" class="mt-3 alert alert-success" role="alert">
          Benvenuto, {{ user.email }}!
        </div>


      <nav class="nav justify-content-center">
   
    <div v-if="user" class="nav-item ">
      <button class="btn btn-success m-2" @click="gotoAdminPage">Vai alla pagina Admin</button>
      <button class="btn btn-dark m-2" @click="logout">Logout</button>
    </div>
  </nav>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export default {
  name: 'LoginAdmin',
  components: {},
  data() {
    return {
      user: null,
      username: '',
      password: ''
    }
  },
  mounted() {
    // Inicializar Firebase con la configuración

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Se ha iniciado sesión correctamente
        console.log(user);
        this.user = user;
      } else {
        // No se ha iniciado sesión o ha cerrado sesión
        console.log('No se ha iniciado sesión');
        this.user = null;
      }
    });
  },
  methods: {
    login() {
      // Log in dell'utente con l'username e la password forniti
      if (this.username === 'test@gmail.com' && this.password === '123456') {
        firebase.auth().signInWithEmailAndPassword(this.username, this.password).then((user) => {
          // Login successful
          console.log('Login successful', user);
          this.user = user.user;
        }).catch((error) => {
          // Login error
          console.error(error);
        });
      } else {
        console.log('Invalid username or password');
      }
    },
    gotoAdminPage() {
      // Reindirizza l'utente alla pagina Admin.vue solo se è loggato
      if (this.user) {
        this.$router.push({ name: 'admin' });
      } else {
        console.log('Devi effettuare il login per accedere alla pagina Admin');
      }
    },
    async logout() {
  try {
    await firebase.auth().signOut()
    this.$router.push({ name: 'home' })
  } catch (error) {
    console.error(error)
    // restituisci un messaggio di errore all'utente
  }
}
  }}
</script>
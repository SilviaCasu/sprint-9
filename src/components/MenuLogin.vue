<template>
    <div>
        <p v-if="user">Hola {{ user.email }}!</p>
        <div class="d-flex align-items-center justify-content-end">
            <button class="btn btn-success btn-sm flex-grow-1" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false">
                {{ user ? 'Logout' : 'Login' }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li v-show="!user">
                    <router-link :to="{ name: 'login' }" class="dropdown-item">Login</router-link>
                </li>
                <li v-show="!user">
                    <router-link :to="{ name: 'register' }" class="dropdown-item">Registro</router-link>
                </li>
                <li v-if="user">
                    <a class="dropdown-item" @click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</template>
  
  
  
  
  
<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export default {
    name: 'MenuLogin',
    data() {
        return {
            user: null
        }
    },
    mounted() {
        firebase.auth().onAuthStateChanged((user) => {
            this.user = user
        })
    },
    methods: {
        async logout() {
            if (this.user) {
                console.log('Logout effettuato con successo');
                try {
                    await firebase.auth().signOut();
                    console.log('Logout effettuato con successo');
                    this.$router.push({ name: 'home' });
                    this.user = null; // <-- resetta la variabile user
                } catch (error) {
                    console.error(error);
                    this.$router.push({ name: 'home' });
                    alert('Errore durante il logout');
                    this.user = null; // <-- resetta la variabile user anche in caso di errore
                }
            } else {
                this.$router.push({ name: 'login' });
            }
        }
    }
}

</script>
  
<style scoped></style>
  
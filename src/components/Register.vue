<template>
   <div class="container-fluid">
        <div class="row  mb-3 ">

            <div class="container">
                <div class="cabecera">
                    <Cabecera />
                </div>
                <div class="row mb-3 ">
                <div class="col-3"></div>
                <div class="col-6">
                <h3 class="mb-5"> Registro</h3>

                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="email" v-model="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" required>
                    </div>
                    <div class="mb-3">
                        <label for="confirm-password" class="form-label">Conferma tu password</label>
                        <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword"
                            required>
                    </div>
                    <button type="submit" class="btn btn-success">Efectúa el registro</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div></div></div>
    </div>
</template>
  
<script>
import Cabecera from '@/components/Cabecera.vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export default {
    components:{
        Cabecera
    },
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        register() {
            // Verifica che le password siano uguali
            if (this.password !== this.confirmPassword) {
                console.error('Las contraseñas no corresponden')
                alert( "Las contraseñas no corresponden")
                return
            }

            // Registra utente
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
                // Registrazione avvenuta
                console.log('Registro correcto', user)
                alert("Hola" +"" + this.email + ""+ "ya estás registrado")
                this.$router.push({ name: 'login' })
            }).catch((error) => {
                // Error
                console.error(error)
             // messaggio di errore 
             alert("La contraseña tiene que ser minimo de 6 caracteres")
            })
        },
    },
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
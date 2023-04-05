import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createStore } from 'vuex';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'


import 'firebase/compat/firestore'
import vuefire from 'vuefire'

const firebaseConfig = {
  apiKey: "AIzaSyB3vDLM6fjTa82rApgo8TjeQ9Q82yQsW_Y",
  authDomain: "db-esglurp.firebaseapp.com",
  projectId: "db-esglurp",
  storageBucket: "db-esglurp.appspot.com",
  messagingSenderId: "280465278983",
  appId: "1:280465278983:web:153c656f8fa7c92dca42a2"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export default firebase.firestore();
export const storage = firebase.storage();
const auth = firebase.auth();

createApp(App).use(store).use(router).use(vuefire).mount('#app')





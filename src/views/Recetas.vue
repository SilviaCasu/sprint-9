<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Cabecera />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-1 ">
        <!--  columna izquierda -->
      </div>
      <div class="col-md-8  min-height-100 p-3 m-3 mx-auto">
        <h3> Todas las recetas</h3>
        <div class="row">

          <div class="col-md-12">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4" v-for="receta in recetas" :key="receta.id">
                <div class="card shadow-sm h-100">
                  <img :src="receta.images[0]" class="card-img-top responsive-img" alt="Imagen de la receta">
                  <div class="card-body">
                    <h3 class="card-title">{{ receta.titulo }}</h3>
                    <p class="card-text">{{ receta.texto }}</p>
                    <p class="card-text">{{ receta.categoria }}</p>
                    <router-link :to="{ name: 'detalleReceta', params: { id: receta.id } }" class="btn btn-success">Ver
                      receta</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-1 ">
        <!-- columna derecha -->
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
import Cabecera from '@/components/Cabecera.vue'

const storage = firebase.storage()
const storageRef = storage.ref()

export default {
  components: { Cabecera },
  name: 'Recetas',
  data() {
    return {
      recetas: [],
      ultimaReceta: null
    }
  },
  async created() {
    try {
      const recetasCollection = firebase.firestore().collection('recetas')
      const recetasSnapshot = await recetasCollection.get()

      const recetas = []
      for (const doc of recetasSnapshot.docs) {
        const receta = doc.data()

        if (receta.foto) {
          const imagenRef = storageRef.child(`recetas/${receta.foto}`)

          try {
            const imagenUrl = await imagenRef.getDownloadURL()
            receta.imagenUrl = imagenUrl
          } catch (error) {
            console.error(`No se pudo obtener la URL de la imagen "${receta.foto}":`, error)
          }
        }

        recetas.push({
          id: doc.id,
          ...receta
        })
      }

      // Ordina le ricette dalla più recente alla meno recente
      recetas.sort((a, b) => b.dataCreazione - a.dataCreazione)

      this.recetas = recetas

      if (recetas.length > 0) {
        this.ultimaReceta = recetas[0]
      }
    } catch (error) {
      console.error('Error al cargar las recetas:', error)
    }

  }
  ,
  methods: {
    async guardarReceta() {
      try {
        const recetasCollection = firebase.firestore().collection('recetas')
        const receta = {
          nombre: this.nombre,
          descripcion: this.descripcion,
          ingredientes: this.ingredientes,
          procedimiento: this.procedimiento,
          dataCreazione: firebase.firestore.FieldValue.serverTimestamp()
        }
        const docRef = await recetasCollection.add(receta)
        const id = docRef.id // guardar el ID

        this.guardarFotos(id)
      } catch (error) {
        console.error('Error al guardar la receta:', error)
      }
    },
    async guardarFotos(idReceta) {
      if (this.fotos && this.fotos.length > 0) {
        for (let i = 0; i < this.fotos.length; i++) {
          const foto = this.fotos[i]
          const storageRef = firebase.storage().ref(`recetas/${idReceta}/${foto.name}`)
          try {
            const snapshot = await storageRef.put(foto)
            console.log(`Imagen "${foto.name}" guardada en ${snapshot.ref.fullPath}`)
          } catch (error) {
            console.error(`Error al guardar la imagen "${foto.name}":`, error)
          }
        }
      }
    },

  }
}
</script>
<style scoped>
.card-img-top {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
}

.card {
  max-width: 100%;

}

.card-title {
  font-family: Tahoma, sans-serif;
  font-size: 1em;
  color: #dc3545;
}

.card-text {
  font-family: Tahoma, sans-serif;
  font-size: 1em;
  color: #181717;
}


h3 {
  font-family: Tahoma, sans-serif;
  font-size: 1em;
  color: #dc3545;
  padding-bottom: 15px;

}
</style>
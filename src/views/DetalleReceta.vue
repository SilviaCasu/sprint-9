
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <Cabecera />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-1"></div>
            <div class="col-md-8  p-3 m-3 mx-auto">
                <h3 class="text-center mb-4">{{ receta.titulo }}</h3>
                <p class="card-text">{{ receta.texto }}</p>
                <img :src="receta.images" class="card-img-top " alt="Imagen de la receta" width="500" />
                <div class="card-body">

                    <p class="card-text">{{ receta.categoria }}</p>

                </div>

                <div class="mb-4">
                    <h5>Ingredientes</h5>
                    <ul>
                        <li v-for="ingrediente in receta.ingredientes" :key="ingrediente">{{ ingrediente }}</li>
                    </ul>
                    <h5>Como se hace</h5>
                    <p class="procedimiento">{{ receta.procedimiento }}</p>

                    <button class="btn btn-success" @click="$router.push('/recetas')">Volver a todas las recetas</button>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>

        <div class="row">
            <div class="col-12 bg-dark min-height-100 text-white"> ESGLURP - TEMPTING FOOD</div>
        </div>
    </div>
</template>
  
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import Cabecera from "@/components/Cabecera.vue";

const storage = firebase.storage();
const storageRef = storage.ref();

export default {
    components: { Cabecera },
    name: "DetalleReceta",
    data() {
        return {
            receta: {},
        };
    },
    async created() {
        try {
            const recetaCollection = firebase.firestore().collection("recetas");
            const recetaDoc = await recetaCollection.doc(this.$route.params.id).get();

            const recetaData = recetaDoc.data();

            if (recetaData.foto) {
                const imagenRef = storageRef.child(`recetas/${recetaData.foto}`);

                try {
                    const imagenUrl = await imagenRef.getDownloadURL();
                    recetaData.imagenUrl = imagenUrl;



                } catch (error) {
                    console.error(
                        `No se pudo obtener la URL de la imagen "${recetaData.image}":`,
                        error
                    );
                }
            }

            this.receta = {
                id: recetaDoc.id,
                ...recetaData,
            };
        } catch (error) {
            console.error("Error al cargar la receta:", error);
        }
    },
};
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
    text-align: left;
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

.bg-dark {
    background-color: #343a40;
}

.card-img-top {


    max-width: 100%;

    margin: 10px;
    height: 250px;
    object-fit: cover;

}

.card {
    max-width: 100%;
}

.card-body {
    text-align: justify;
}

ul {
    list-style-type: disc;
}

li {
    margin-bottom: 5px;
}

@media (min-width: 768px) {
    .container-fluid {
        padding: 0;
    }

    .col-md-1 {
        padding: 0 10px;
    }

    .col-md-8 {
        padding: 10px;
    }
}

ul {
    list-style-type: none;
    padding-left: 0;
}

li {
    margin-bottom: 5px;
}
</style>
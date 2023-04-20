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
                        <h3> ¿Que es la Celiaquía?</h3>
                        <p class="testo"> La enfermedad celiaca es una enfermedad autoinmune crónica del intestino delgado
                            que se produce en personas que son genéticamente susceptibles y que se activa por la ingesta de
                            gluten, una proteína que se encuentra en el trigo, la cebada, el centeno y otros cereales.<br><br>

                            Cuando una persona con enfermedad celiaca consume gluten, el sistema inmunológico del cuerpo
                            reacciona de manera anormal y ataca el revestimiento del intestino delgado, causando inflamación
                            y daño en las vellosidades intestinales.<br> Esto puede interferir en la absorción de nutrientes y
                            provocar diversos síntomas gastrointestinales como diarrea, dolor abdominal, hinchazón,
                            estreñimiento, náuseas, vómitos, pérdida de peso y deficiencias nutricionales.<br><br>

                            La enfermedad celiaca no tiene cura y el único tratamiento eficaz es seguir una dieta estricta y
                            permanente sin gluten.<br> La eliminación del gluten de la dieta permite que el intestino delgado se
                            recupere y se resuelvan los síntomas, pero puede ser un desafío ya que el gluten se encuentra en
                            muchos alimentos procesados y en productos que no son obviamente de trigo, como salsas,
                            aderezos, cervezas, medicamentos y suplementos vitamínicos.<br><br>

                            Es importante diagnosticar y tratar la enfermedad celiaca adecuadamente para evitar
                            complicaciones a largo plazo, como osteoporosis, anemia, problemas de fertilidad, abortos
                            espontáneos, enfermedades autoinmunitarias y cáncer de intestino.</p>

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
    name: 'celiaquia',
    components: {
        Cabecera,

    }
}

</script>
  
<style scoped>

body {
  font-family: Tahoma, sans-serif;
}


h3 {
  font-family: Tahoma, sans-serif;
  font-size: 1em;
  color: #dc3545;
  font-weight: bold;
  padding-bottom: 10px;

}

h2 {
  font-family: Tahoma, sans-serif;
  font-size: 0.9em;
  color: #0c0a0a;


}
.testo {
    text-align: left;
}</style>
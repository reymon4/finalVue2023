<template>
  <div class="container">
    <div class="tabla">
      <label for="">Token</label>
      <input type="text" v-model="token" placeholder="Ingrese su token" />
      <label for="">Nombre</label>
      <input type="text" v-model="nombre" placeholder="Ingrese el nombre" />
      <label for="">Apellido</label>
      <input type="text" v-model="apellido" placeholder="Ingrese el apellido" />
      <label for="">Cédula</label>
      <input type="text" v-model="cedula" placeholder="Ingrese la cedula" />
      <button @click="guardar">Guardar</button>
    </div>
  </div>
</template>

<script>
import { saveFacade } from "../helpers/clienteEstudiante.js"

export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
      token: null
    };
  },

  methods: {
    async guardar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };
      await saveFacade(estuBody, this.token);

      console.log("Se ingreso el estudiante!");
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 600px;
}
input:focus {
  outline: none;
}
input {
  border-radius: 10px;
  width: 300px;
  height: 30px;
  text-align: center;
  font-size: 25px;
  font-style: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #0acef1;
  background: #c9d7f8;
}
.tabla {
  display: grid;
  grid-template-rows: repeat(18, 50px);
  width: 300px;
  height: 100%;
  /*   grid-gap:1px; */
  margin-top: 15px;
  margin-bottom: 30px;
  align-items: center;
}
.formTable {
  display: grid;
  grid-template-rows: repeat(18, 50px);
  width: 300px;
  height: 100%;
  /*   grid-gap:1px; */
  margin-bottom: 30px;
  align-items: center;
}
label {
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: oblique;
  font-size: 20px;
  background: #7fd9e9;
  border-radius: 15px;
  height: 40px;
  line-height: 40px;
}
button {
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 25px;
  cursor: pointer;
  margin-top: 15px;
  background: #bb7fe9;
  border-radius: 8px;
  height: 100%;
}
p {
  font-size: 25px;
  font-style: bold;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 15px;
  /* background: #9055d8; */
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
  color: #9055d8;
}
</style>

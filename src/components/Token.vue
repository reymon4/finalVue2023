<template>
  <div class="container">
    <div class="tabla">
      <label for="">Semilla</label>
      <input
        type="text"
        v-model="semilla"
        id="semilla"
        placeholder="Ingrese su semilla "
      />
      <label for="">Tiempo de vigencia</label>
      <input
        type="number"
        v-model="tiempo"
        id="tiempo"
        placeholder="Ingrese el tiempo en milisegundos"
      />
      <label for="">Token</label>

      <input class= "token" type="text" v-model="token" id="token" placeholder="Su token"
       />
      
      <button @click="generar">Generar</button>
    </div>
  </div>
</template>

<script>
import { generarTokenFachada } from "../helpers/clienteToken.js";

export default {
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: null,
      autoAdjustHeight: "auto",
    };
  },

  methods: {
  
    async generar() {
      const tokenBody = {
        jwtSemilla: this.semilla,
        jwtExpirationMs: this.tiempo,
      };
      this.token = await generarTokenFachada(tokenBody);
      console.log("Se creo el token!",this.token);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
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
   background: #C9D7F8;
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
  margin-top: 380px;
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
.token {
  
  height: 200px;
  border: 2px solid black;
  background: #fff;
  padding: 5px;
  margin-top: 200px;
  word-wrap: break-word;
  box-sizing: border-box;
  background: #C9D7F8;
}
</style>

<template>
    <div>
      <router-link to="/generate_token">Generar Token</router-link>
      <router-link to="/save_estudiante">Guardar Estudiante</router-link>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  /* Para todos los elementos de a que estan en un div */
  div a{
      color:blueviolet;
      margin:0px 10px;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      border:solid;
      padding: 10px 10px;
      border-radius: 10px;
  }
  .router-link-exact-active{
      background-color:rgba(137, 43, 226, 0.324);
  }
  </style>
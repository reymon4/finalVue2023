<template>
    <div>
      <div class="container">
        <div class="tabla">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>CÉDULA</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(estudiante, index) in lista" :key="index">
                <td class="id">{{ index + 1 }}</td>
                <td>{{ estudiante.nombre }}</td>
                <td>{{ estudiante.apellido }}</td>
                <td>{{ estudiante.cedula }}</td>
                <td><button @click="editarEstudiante(index)">Editar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lista: [],
        nombre: undefined,
        apellido: undefined,
        cedula: undefined
      };
    },
    methods: {
      agregarEstudiante() {
        console.log('Agregando Estudiante...');
        const nuevoEstudiante = { nombre: this.nombre, apellido: this.apellido, cedula: this.cedula };
        this.lista.push(nuevoEstudiante);
        console.log(nuevoEstudiante);
      },
      editarEstudiante(index) {
        console.log(`Editando Estudiante en el índice ${index}`);
        // Implementa la lógica de edición según tus necesidades
      }
    },
  };
  </script>
  
  <style>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

td,th{
    background: skyblue;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
}





  </style>
  
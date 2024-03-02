<template>
  <div class="container">
  <EstudianteC1Vue></EstudianteC1Vue>
 <EstudianteC2Vue>  </EstudianteC2Vue>
</div>
  </template>
  
  <script>
import EstudianteC2Vue from '@/components/EstudianteC2.vue';
import EstudianteC1Vue from '@/components/EstudianteC1.vue';
  export default {

  components: {
   EstudianteC1Vue,
   EstudianteC2Vue
  },
};
  </script>
  
  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
 
  </style>
  
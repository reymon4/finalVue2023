import axios from "axios";

const save = async (body, token) => {
    const data = axios
      .post(`http://localhost:8082/API/v1.0/Inscripcion/estudiantes`, body,
      {headers:{
        'Authorization': `Bearer${token}`
      }})
      .then((r) => r.data);
    console.log(data);

  };
  const searchEstudiante = async (id) => {
      const data = axios
      .get(`http://localhost:8082/API/v1.0/Inscripcion/estudiantes/${id}`)
      .then((r) => r.data);
    console.log(data);
    return data;
  };

  export const searchEstudianteFacade = async (id) => {
    return await searchEstudiante(id);
  };
  
  export const saveFacade = async (body, token) => {
    await save(body, token);
  };
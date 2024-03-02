import axios from "axios";

const generarToken = async (body) => {
    const data = axios
      .post(`http://localhost:8081/API/v1.0/Seguridad/autorizaciones/jwt`,body)
      .then((r) => r.data);
      //Retorno el valor para que se muestre en la vista
    console.log(data);
    return data;
  };

  export const generarTokenFachada = async (body) => {
    return await generarToken(body);
  };

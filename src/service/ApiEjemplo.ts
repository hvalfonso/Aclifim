import { ActualizarAsociadoProps, Asociado, AsociadoProps, DinamicListParam} from "../types/asociados";
import axiosEjemplo from "./axiosEjemplo";


// Endpoint: GET /asociado
// Modificar la función getAsociado para tipar correctamente la respuesta
export const getAsociados = async (
  page_id: number,
  page_size: number
): Promise<Asociado[]> => {
  // Creamos el query string esperado: "page_id=1&page_size=5"
  const response = await axiosEjemplo.get('/asociados', {
    params: {page_id, page_size}
  })
  return response.data
}


//Endpoint: Post /asociado/dinamic
export const getAsociadosDinamic = async (
  params: DinamicListParam
): Promise<Asociado[]> => {
  const response = await axiosEjemplo.post('/asociados/dinamic', params)
  return response.data
}

  // Endpoint Post /asociado
  // Para crear un nuevo asociado
export const createAsociado = async (nuevoAsociado: AsociadoProps): Promise<Asociado> => {
    const response = await axiosEjemplo.post("/asociado", nuevoAsociado);
    return response.data;
};


// Endpoint Put/asociado
// para actualizar un asociado, la respuesta  es un string
export const updateAsociado = async (asociado: ActualizarAsociadoProps): Promise<string> => {
  const response = await axiosEjemplo.put('/asociados', asociado)
  return response.data
};

// Endpoint Get /asociado/{id}
export const getAsociadoByID = async (id: number): Promise<Asociado> => {
  const response = await axiosEjemplo.get(`/asociados/${id}`)
  return response.data
}


// Endpoint Delete /asociado/{id}
export const deleteAsociado = async (id: number): Promise<string> => {
  const response = await axiosEjemplo.delete(`/asociado/${id}`)
  return response.data
};


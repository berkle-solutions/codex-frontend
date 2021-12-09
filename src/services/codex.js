import apiService from "./";

export const authUser = async (credentials) => {
  try {
    const { data } = await apiService.post("/autenticacao/token", credentials);
    return data;
  } catch (e) {
    throw new Error("AuthService error: ", e);
  }
};

export const getEncomendas = async () => {
  try {
    const { data } = await apiService.get("/encomenda/lista");
    return data;
  } catch (e) {
    throw new Error("EncomendasService error: ", e);
  }
};

export const getEncomendaById = async (encomendaId) => {
  try {
    const { data } = await apiService.get(`/encomenda/detalhe/${encomendaId}`);
    return data;
  } catch (e) {
    throw new Error("EncomendaByIdService error: ", e);
  }
};

export const rescueEncomenda = async ({ pessoaId, codigoResgate }) => {
  try {
    await apiService.post("/encomenda/resgate", {
      pessoa: pessoaId,
      codigo_resgate: codigoResgate,
    });
  } catch (e) {
    throw new Error("RescueEncomendaService error: ", e);
  }
};

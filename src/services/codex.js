import apiService from "./";

export const authUser = async (credentials) => {
  try {
    const { data } = await apiService.post("/autenticacao/token", credentials);
    return data;
  } catch (e) {
    throw new Error("AuthService error: ", e);
  }
};

export const createUser = async (newUser) => {
  try {
    const { data } = await apiService.post("/pessoa/salvar", newUser);
    return data;
  } catch (e) {
    throw new Error("UserService error: ", e);
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

export const RegisterEncomenda = async ({ descricao, unidade, pessoa }) => {
  try {
    await apiService.post("/encomenda/salvar", {
      descricao,
      unidade,
      pessoa,
    });
  } catch (e) {
    throw new Error("EncomendaRegister error: ", e);
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

export const getAllCompartimentosDisponiveis = async (armarioId) => {
  try {
    const { data } = await apiService.get(
      `compartimento/lista-por-armario/${armarioId}`
    );
    return data;
  } catch (e) {
    throw new Error("CompartimentosService error: ", e);
  }
};

export const saveEncomendaEstoque = async ({
  encomendaId,
  compartimentoId,
}) => {
  try {
    await apiService.post("encomenda/estoque", {
      encomenda: encomendaId,
      compartimento: parseInt(compartimentoId),
    });
  } catch (e) {
    throw new Error("EncomendaEstoqueService error: ", e);
  }
};

export const saveEncomendaCompartimento = async ({ id, ...compartimento }) => {
  try {
    await apiService.put(`compartimento/atualizar/${id}`, {
      ...compartimento,
    });
  } catch (e) {
    throw new Error("EncomendaCompartimentoService error: ", e);
  }
};

export const getLocalizacoes = async ({ bloco, andar }) => {
  try {
    const { data } = await apiService.post("/localizacao/lista", {
      bloco,
      andar,
    });
    return data;
  } catch (e) {
    throw new Error("LocalizacoesService error: ", e);
  }
};

export const validateSMS = async ({ pinId, pinCode }) => {
  try {
    await apiService.post("/pessoa/verificar/pin", {
      pinId,
      pinCode,
    });
  } catch (e) {
    throw new Error("ValidateSMS error: ", e);
  }
};

export const resendTokenPIN = async (pinId) => {
  try {
    await apiService.post("/pessoa/verificar/pin/resend", {
      pin_id: pinId,
    });
  } catch (e) {
    throw new Error("ResendTokenService error: ", e);
  }
};

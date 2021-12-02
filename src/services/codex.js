import apiService from "./";

export const authUser = async (credentials) => {
  try {
    const { data } = await apiService.post("/autenticacao/token", credentials);
    return data;
  } catch (e) {
    throw new Error("AuthService error: ", e);
  }
};

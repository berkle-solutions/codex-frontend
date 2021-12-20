export const userTypes = {
  ADMIN: "admin",
  PORTEIRO: "porteiro",
  ESTOQUISTA: "estoquista",
};

export const userRoutesAccess = {
  [userTypes.ADMIN]: [
    "dashboard",
    "cadastro",
    "encomenda",
    "encomenda_detalhe",
    "resgate",
    "triagem",
    "pessoas",
    "pessoas_detalhe",
  ],
  [userTypes.PORTEIRO]: [
    "dashboard",
    "triagem",
    "encomenda",
    "encomenda_detalhe",
  ],
  [userTypes.ESTOQUISTA]: [
    "dashboard",
    "triagem",
    "resgate",
    "encomenda_detalhe",
  ],
};

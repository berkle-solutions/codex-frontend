export const userTypes = {
  ADMIN: "admin",
  PORTEIRO: "porteiro",
  ESTOQUISTA: "estoquista",
};

export const userRoutesAccess = {
  [userTypes.ADMIN]: [
    "dashboard",
    "cadastro",
    "armario",
    "encomenda",
    "encomenda_detalhe",
    "resgate",
    "triagem",
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
    "armario",
  ],
};

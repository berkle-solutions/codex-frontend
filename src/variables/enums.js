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
    "triagem",
  ],
  [userTypes.PORTEIRO]: [
    "dashboard",
    "triagem",
    "encomenda",
    "encomenda_detalhe",
    "cadastro",
  ],
  [userTypes.ESTOQUISTA]: ["dashboard", "triagem", "estoque", "armario"],
};

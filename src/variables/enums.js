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
    "estoque",
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
    "cadastro",
  ],
  [userTypes.ESTOQUISTA]: ["dashboard", "triagem", "estoque", "armario"],
};

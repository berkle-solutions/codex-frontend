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
    "triagem",
  ],
  [userTypes.PORTEIRO]: ["dashboard", "triagem", "encomenda"],
  [userTypes.ESTOQUISTA]: ["dashboard", "triagem", "estoque", "armario"],
};

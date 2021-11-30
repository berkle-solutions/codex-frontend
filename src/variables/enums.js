export const userTypes = {
  ADMIN: "admin",
  PORTEIRO: "porteiro",
  ESTOQUISTA: "estoquista",
};

export const userRoutesAccess = {
  [userTypes.ADMIN]: ["cadastro", "armario", "encomenda", "triagem"],
  [userTypes.PORTEIRO]: ["triagem", "encomenda"],
  [userTypes.ESTOQUISTA]: ["triagem", "armario"],
};

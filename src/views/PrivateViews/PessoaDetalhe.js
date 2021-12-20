import React, { useState, useEffect } from "react";

import {
  Button,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Form,
} from "reactstrap";
import { getUsuario, updateUsuarios, listaPerfis } from "../../services/codex";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { useHistory, useParams } from "react-router-dom";

export default function PessoaDetalhe() {
  const [pessoa, setPessoa] = useState({});
  const [perfis, setPerfis] = useState([]);
  const history = useHistory();

  const { id: pessoaId } = useParams();

  useEffect(() => {
    retornaDadosPessoa();
    retornaPerfis();
  }, []);

  const retornaDadosPessoa = async () => {
    try {
      const response = await getUsuario(pessoaId);
      setPessoa(response);
    } catch (e) {
      console.error(e);
    }
  };

  const retornaPerfis = async () => {
    try {
      const response = await listaPerfis();
      setPerfis(response);
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdatePessoaData = (e) => {
    setPessoa((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const atualizarUsuario = (e) => {
    e.preventDefault();
    const data_nascimento_convertido = new Date(
      format(new Date(pessoa?.data_nascimento), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    ).toISOString();
    const updatePessoa = {
      ...pessoa,
      data_nascimento: data_nascimento_convertido,
    };

    delete updatePessoa.senha;
    delete updatePessoa.perfil;

    toast
      .promise(updateUsuarios(updatePessoa), {
        pending: "Processando informações",
        success: "Usuário atualizado com sucesso",
        error: "Falha ao atualizar usuário",
      })
      .then(() => history.push("/admin/pessoas"))
      .catch((e) => console.error(e));
  };

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardBody>
            <Form>
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label>Nome</Label>
                  <Input
                    type="text"
                    name="nome"
                    value={pessoa?.nome}
                    onChange={handleUpdatePessoaData}
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>E-mail</Label>
                  <Input
                    type="text"
                    name="email"
                    value={pessoa?.email}
                    onChange={handleUpdatePessoaData}
                  />
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Celular</Label>
                  <Input
                    type="number"
                    name="celular"
                    value={pessoa?.celular}
                    onChange={handleUpdatePessoaData}
                  />
                </FormGroup>
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Telefone</Label>
                  <Input
                    type="number"
                    name="telefone"
                    value={pessoa?.telefone}
                    onChange={handleUpdatePessoaData}
                  />
                </FormGroup>
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Data de nascimento</Label>
                  <Input
                    type="date"
                    name="data_nascimento"
                    value={
                      pessoa?.data_nascimento &&
                      format(new Date(pessoa?.data_nascimento), "yyyy-MM-dd")
                    }
                    onChange={handleUpdatePessoaData}
                  />
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Perfil</Label>
                  <Input
                    type="text"
                    name="perfil"
                    disabled
                    value={pessoa?.perfil?.descricao}
                  >
                    {perfis?.map((perfil) => (
                      <option value={perfil?.descricao}>
                        {perfil?.descricao}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </div>
              <Button
                color="primary"
                type="submit"
                className="btn-round"
                onClick={atualizarUsuario}
              >
                Atualizar
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

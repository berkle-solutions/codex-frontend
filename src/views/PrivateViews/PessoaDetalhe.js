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
import { getUsuario, listaPerfis } from "../../services/codex";
import { toast } from "react-toastify";
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

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardBody>
            <Form>
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label>Nome</Label>
                  <Input type="text" name="nome" value={pessoa?.nome} />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label>E-mail</Label>
                  <Input type="text" name="email" value={pessoa?.email} />
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Celular</Label>
                  <Input type="number" name="celular" value={pessoa?.celular} />
                </FormGroup>
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Telefone</Label>
                  <Input
                    type="number"
                    name="Telefone"
                    value={pessoa?.telefone}
                  />
                </FormGroup>
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Data de nascimento</Label>
                  <Input
                    type="text"
                    name="data_nascimento"
                    value={pessoa?.data_nascimento}
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
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

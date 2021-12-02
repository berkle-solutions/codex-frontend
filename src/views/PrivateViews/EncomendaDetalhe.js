import React, { useState, useEffect } from "react";
import apiService from "../../services/";

import {
  Button,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
} from "reactstrap";

import { useHistory, useParams } from "react-router-dom";

export default function EncomendaDetalhe() {
  const [codigoResgate, setCodigoResgate] = useState(null);
  const [encomenda, setEncomenda] = useState({
    morador: {
      id: "",
      bloco: "",
      andar: "",
      unidade: "",
      nome: "",
      celular: "",
    },
    encomenda: {
      descricao: "",
      unidade: "",
      codigo_resgate: "",
    },
  });

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const retornaEncomendaDetalhe = async () => {
      try {
        const { data } = await apiService.get(`/encomenda/detalhe/${id}`);
        console.log(data);
        setEncomenda({
          morador: {
            id: data.pessoa.id,
            nome: data.pessoa.nome,
            celular: data.pessoa.celular,
            cpf: data.pessoa.celular,
          },
          encomenda: {
            descricao: data.descricao,
            unidade: data.unidade,
            codigo_resgate: data.codigo_resgate,
          },
        });
      } catch (e) {
        console.error(e);
      }
    };
    retornaEncomendaDetalhe();
  }, []);

  const resgatarEncomenda = async (e) => {
    e.preventDefault();
    try {
      await apiService.post("/encomenda/resgate", {
        pessoa: encomenda.morador.id,
        codigo_resgate: encomenda.encomenda.codigo_resgate,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Entrada da Encomenda (Triagem)</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="form-row">
                <FormGroup className="col-md-3">
                  <Label>Nome Morador Titular</Label>
                  <Input
                    type="text"
                    disabled
                    name="nomeMorador"
                    value={encomenda.morador.nome}
                  />
                </FormGroup>
                <FormGroup className="col-md-3">
                  <Label>Celular Condômino</Label>
                  <Input
                    type="text"
                    disabled
                    name="celularMorador"
                    value={encomenda.morador.celular}
                  />
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label>Descrição da Encomenda</Label>
                  <Input
                    type="textarea"
                    name="descricaoEncomenda"
                    value={encomenda.encomenda.descricao}
                    disabled
                  />
                </FormGroup>
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Qtd. Unidades</Label>
                  <Input
                    type="select"
                    name="unidade"
                    placeholder="Unidades"
                    value={encomenda.encomenda.unidade}
                    disabled
                  >
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Input>
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Código de Resgate</Label>
                  <Input
                    type="text"
                    name="descricaoEncomenda"
                    value={codigoResgate}
                    onChange={(e) => setCodigoResgate(e.target.value)}
                  />
                </FormGroup>
              </div>
              <Button
                color="primary"
                type="submit"
                className="btn-round"
                onClick={resgatarEncomenda}
              >
                Efetuar Resgate
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

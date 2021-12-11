import React, { useState, useEffect } from "react";

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
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { RegisterEncomenda, getLocalizacoes } from "../../services/codex";

export default function Encomenda() {
  const [filter, setFilter] = useState({
    bloco: null,
    andar: null,
  });

  const [moradores, setMoradores] = useState([]);
  const [moradorSelecionado, setMoradorSelecionado] = useState(null);
  const [dadosEncomenda, setDadosEncomenda] = useState({
    descricao: null,
    unidade: null,
  });

  const history = useHistory();

  const handleFilter = (e) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const buscarMoradoresPorBlocoAndar = async () => {
      try {
        const response = await getLocalizacoes(filter);
        setMoradores(response);
      } catch (e) {
        console.error(e);
      }
    };

    filter?.bloco && filter?.andar && buscarMoradoresPorBlocoAndar();
  }, [filter]);

  const handleMoradorSelecionado = (e) => {
    if (e.target.value) setMoradorSelecionado(JSON.parse(e.target.value));
  };

  const cadastrarEncomenda = async (e) => {
    e.preventDefault();

    const encomendaData = {
      descricao: dadosEncomenda.descricao,
      unidade: dadosEncomenda.unidade,
      pessoa: moradorSelecionado?.pessoa?.id,
    };

    toast
      .promise(RegisterEncomenda(encomendaData), {
        pending: "Processando informações",
        success: "Encomenda cadastrada com sucesso",
        error: "Falha ao cadastrar encomenda",
      })
      .then(() => {
        history.push("/admin/triagem");
      });
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
                <FormGroup className="col-md-4">
                  <Label>Bloco</Label>
                  <Input
                    type="select"
                    onChange={handleFilter}
                    name="bloco"
                    placeholder="Bloco"
                  >
                    <option></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </Input>
                </FormGroup>
                <FormGroup className="col-md-4">
                  <Label>Andar</Label>
                  <Input
                    type="select"
                    onChange={handleFilter}
                    name="andar"
                    placeholder="Andar"
                  >
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </Input>
                </FormGroup>
                <FormGroup className="col-md-4">
                  <Label>Morador</Label>
                  <Input
                    type="select"
                    onChange={handleMoradorSelecionado}
                    name="unidade"
                    placeholder="Morador"
                  >
                    <option></option>
                    {moradores?.map((morador) => (
                      <option key={morador.id} value={JSON.stringify(morador)}>
                        {morador?.pessoa?.nome}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-3">
                  <Label>Nome Morador Titular</Label>
                  <Input
                    type="text"
                    disabled
                    name="nomeMorador"
                    value={moradorSelecionado?.pessoa?.nome}
                  />
                </FormGroup>
                <FormGroup className="col-md-3">
                  <Label>Celular Condômino</Label>
                  <Input
                    type="text"
                    disabled
                    name="celularMorador"
                    value={moradorSelecionado?.pessoa?.celular}
                  />
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label>Descrição da Encomenda</Label>
                  <Input
                    type="textarea"
                    onChange={(e) => {
                      setDadosEncomenda((prev) => ({
                        ...prev,
                        descricao: e.target.value,
                      }));
                    }}
                    name="descricaoEncomenda"
                  />
                </FormGroup>
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Qtd. Unidades</Label>
                  <Input
                    type="select"
                    onChange={(e) => {
                      setDadosEncomenda((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                    name="unidade"
                    placeholder="Unidades"
                  >
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Input>
                </FormGroup>
              </div>
              <Button
                color="primary"
                type="submit"
                className="btn-round"
                onClick={cadastrarEncomenda}
              >
                Cadastrar
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

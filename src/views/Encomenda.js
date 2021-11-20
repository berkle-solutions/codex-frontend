import React, { useState, useEffect } from "react";
import axios from "axios";

// reactstrap components
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

export default function Encomenda() {
  const [filter, setFilter] = useState({
    bloco: null,
    andar: null,
  });

  const [moradores, setMoradores] = useState([]);
  const [moradorSelecionado, setMoradorSelecionado] = useState(null);

  const handleFilter = (e) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const buscarMoradoresPorBlocoAndar = async () => {
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/localizacao/lista",
          filter
        );
        setMoradores(data);
      } catch (e) {
        console.log(e);
      }
    };

    filter?.bloco && filter?.andar && buscarMoradoresPorBlocoAndar();
  }, [filter]);

  const handleMoradorSelecionado = (e) => {
    if (e.target.value) setMoradorSelecionado(JSON.parse(e.target.value));
  };

  console.log(moradorSelecionado);

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Cadastro de Encomenda</CardTitle>
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
                  <Label>Nº Apartamento</Label>
                  <Input
                    type="select"
                    onChange={handleMoradorSelecionado}
                    name="unidade"
                    placeholder="Nº Apartamento"
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
                    // onChange={handleField}
                    name="descricaoEncomenda"
                  />
                </FormGroup>
              </div>
              <Button
                color="primary"
                type="submit"
                className="btn-round"
                // onClick={enviarDadosParaAPI}
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

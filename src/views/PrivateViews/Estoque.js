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

export default function Estoque() {
  const [filter, setFilter] = useState({
    bloco: null,
    andar: null,
  });

  const [moradores, setMoradores] = useState([]);
  const [moradorSelecionado, setMoradorSelecionado] = useState(null);
  const [dadosEncomenda, setDadosEncomenda] = useState({
    descricao: null,
  });

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

  const cadastrarEncomenda = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/encomenda/salvar", {
        descricao: dadosEncomenda,
        pessoa: moradorSelecionado?.id,
      });
    } catch (e) {
      console.log(e);
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
                  <Label>N?? Apartamento</Label>
                  <Input
                    type="select"
                    onChange={handleMoradorSelecionado}
                    name="unidade"
                    placeholder="N?? Apartamento"
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
                  <Label>Celular Cond??mino</Label>
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
                  <Label>Descri????o da Encomenda</Label>
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
              </div>
            </Form>
          </CardBody>
          <CardHeader>
            <CardTitle tag="h5">Cadastro no Estoque (Armazenamento)</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="form-row">
                <FormGroup className="col-md-3">
                  <Label>Estoque - Arm??rio</Label>
                  <Input
                    type="text"
                    disabled
                    name="estoqueArmario"
                    value={moradorSelecionado?.pessoa?.celular}
                  />
                </FormGroup>
                <FormGroup className="col-md-3">
                  <Label>Arm??rio - Compartimento</Label>
                  <Input
                    type="text"
                    disabled
                    name="armarioCompartimento"
                    value={moradorSelecionado?.pessoa?.celular}
                  />
                </FormGroup>
              </div>
            </Form>
          </CardBody>
          <CardHeader>
            <CardTitle tag="h5">Entrega da Encomenda (Retirada)</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="form-row">
                <FormGroup className="col-md-3">
                  <Label>C??digo de Resgate</Label>
                  <Input
                    type="text"
                    disabled
                    name="codigoresgate"
                    value={moradorSelecionado?.pessoa?.celular}
                  />
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

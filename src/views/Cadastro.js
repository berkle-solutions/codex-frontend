import React, { useState } from "react";
import axios from "axios";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

// alterar nome exemplo para o nome da tela, exemplo: CadastroX
export default function Cadastro() {
  const [data, setData] = useState({});

  const handleField = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const enviarDadosParaAPI = async (e) => {
    e.preventDefault();
    try {
      const newData = { ...data };
      newData.senha = "1234";
      newData.data_nascimento = "2012-09-04 06:00:00.000000-08:00";
      newData.perfil = 6;
      newData.ativo = 1;

      const response = await axios.post(
        "http://127.0.0.1:8000/api/pessoa/salvar",
        newData
      );

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Cadastro de Pessoas</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="11">
                      {/* exemplo de select */}
                      <FormGroup>
                        <Label for="perfil">Perfil</Label>
                        <Input
                          id="perfil"
                          name="perfil"
                          type="select"
                          // onChange={handleField}
                        >
                          <option></option>
                          <option value="1">Administrador</option>
                          <option value="2">Porteiro</option>
                          <option value="3">Estoquista</option>
                          <option value="4">Morador</option>
                        </Input>
                      </FormGroup>
                      {/* exemplo de select */}
                    </Col>
                    <Col className="pr-1" md="11">
                      <FormGroup>
                        <label>Nome Completo</label>
                        <Input type="text" onChange={handleField} name="nome" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>CPF</label>
                        <Input
                          placeholder="000.000.000-00"
                          type="number"
                          onChange={handleField}
                          name="cpf"
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                    <Col className="pl-1" md="8">
                      <FormGroup>
                        <label htmlFor="InputEmail1">Email</label>
                        <Input
                          placeholder="Email"
                          type="email"
                          onChange={handleField}
                          name="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Chet"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                    {/* <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Endereço</label>
                        <Input
                          placeholder="Bloco, Torre, Apartamento"
                          type="text"
                          // onChange={handleField}
                          name="endereco"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Data de Nasc.</label>
                        <Input
                          type="date"
                          onChange={handleField}
                          name="data_nascimento"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Telefone</label>
                        <Input
                          placeholder="(11)2222-2222"
                          type="tel"
                          name="telefone"
                          onChange={handleField}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Celular</label>
                        <Input
                          placeholder="(11)99999-9999 "
                          type="tel"
                          onChange={handleField}
                          name="celular"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Observações</label>
                        <Input
                          type="textarea"
                          defaultValue=""
                          onChange={handleField}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={enviarDadosParaAPI}
                      >
                        Cadastrar
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

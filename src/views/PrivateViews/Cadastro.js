import React, { useState } from "react";

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
import { createUser } from "../../services/codex";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Cadastro() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState({});
  const [ehPorteiro, setEhPorteiro] = useState(false);

  const history = useHistory();

  const handleField = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegistrarLocalizacao = (e) => {
    setLocation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const checarSeEhMorador = (e) => {
    if (e.target.value === "4") {
      setEhPorteiro(true);
    } else {
      setEhPorteiro(false);
    }
  };

  const enviarDadosParaAPI = async (e) => {
    e.preventDefault();

    let newData = { ...data };

    const dataFormatada = new Date(
      format(new Date(newData?.data_nascimento), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    ).toISOString();

    newData.perfil = parseInt(data.perfil);
    newData.data_nascimento = dataFormatada;

    if (newData.perfil === 4) {
      newData = { ...newData, localizacao: { ...location } };
    }

    toast
      .promise(createUser(newData), {
        pending: "Processando informações",
        success: "Usuário criado com sucesso",
        error: "Falha ao criar usuário",
      })
      .then(() => {
        history.push("tables");
      });
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
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Nome Completo</label>
                        <Input type="text" onChange={handleField} name="nome" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
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
                    <Col className="pl-1" md="8">
                      <FormGroup>
                        <label htmlFor="InputEmail1">E-mail</label>
                        <Input
                          placeholder="email@email.com.br"
                          type="email"
                          onChange={handleField}
                          name="email"
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
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <Label for="perfil">Perfil</Label>
                        <Input
                          id="perfil"
                          name="perfil"
                          type="select"
                          onChange={(e) => {
                            handleField(e);
                            checarSeEhMorador(e);
                          }}
                        >
                          <option></option>
                          <option value="1">Administrador</option>
                          <option value="2">Porteiro</option>
                          <option value="3">Estoquista</option>
                          <option value="4">Morador</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr />
                  {ehPorteiro && (
                    <Row>
                      <FormGroup className="col-md-4">
                        <Label>Bloco</Label>
                        <Input
                          type="text"
                          onChange={handleRegistrarLocalizacao}
                          name="bloco"
                          placeholder="A"
                          required
                        />
                      </FormGroup>
                      <FormGroup className="col-md-4">
                        <Label>Andar</Label>
                        <Input
                          type="text"
                          onChange={handleRegistrarLocalizacao}
                          name="andar"
                          placeholder="10"
                          required
                        />
                      </FormGroup>
                      <FormGroup className="col-md-4">
                        <Label>Nº Apartamento</Label>
                        <Input
                          type="text"
                          onChange={handleRegistrarLocalizacao}
                          name="unidade"
                          placeholder="315"
                          required
                        />
                      </FormGroup>
                    </Row>
                  )}
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

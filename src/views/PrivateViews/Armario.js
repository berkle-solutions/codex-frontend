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
  Input,
  Row,
  Col,
} from "reactstrap";


// alterar nome exemplo para o nome da tela, exemplo: CadastroX
export default function Armario() {
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
        "http://127.0.0.1:8000/api/armario/salvar",
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
                <CardTitle tag="h5">Cadastro de Armário</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Identificação</label>
                        <Input
                          placeholder="Nome do Armário"
                          type="text"
                          name="nomeArmario"
                          onChange={handleField}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Nº Armário</label>
                        <Input
                          placeholder="Nº Armário"
                          type="text"
                          name="nArmario"
                          onChange={handleField}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                 <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Descrição</label>
                        <Input
                          type="textarea"
                          placeholder="Detalhes do Armário"
                          name="descricaoArmario"
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
                        onClick={enviarDadosParaAPI}>
                        Atualiza Cadastro
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

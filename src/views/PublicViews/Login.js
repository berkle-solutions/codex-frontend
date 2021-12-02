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
export default function Login() {
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
        "http://127.0.0.1:8000/api/encomenda/salvar",
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
                <CardTitle tag="h5">Login</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                  <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Usuário</label>
                        <Input
                          type="text"
                          name="usuario"
                          onChange={handleField}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Senha</label>
                        <Input
                          type="password"
                          name="senha"
                          onChange={handleField}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        onClick={enviarDadosParaAPI}
                        color="primary"
                        type="submit"
                      >
                        Entrar
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

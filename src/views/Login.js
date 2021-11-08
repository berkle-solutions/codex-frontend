import React from "react";

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
export default function Cadastro() {
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
                  <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Usuário</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Senha</label>
                        <Input
                          type="password"
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

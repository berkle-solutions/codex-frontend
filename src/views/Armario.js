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
export default function Armario() {
  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Cadastro do Armário</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Identificação</label>
                        <Input
                          placeholder="Nome do Armario"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Quantidade</label>
                        <Input
                          placeholder="No Compartimentos"
                          type="text"
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
                          defaultValue="Detalhes do Armário"
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

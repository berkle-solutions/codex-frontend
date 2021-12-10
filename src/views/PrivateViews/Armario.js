import React, { useState } from "react";
import { toast } from "react-toastify";
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
import { registerArmario } from "../../services/codex";
import { useHistory } from "react-router-dom";

export default function Armario() {
  const [data, setData] = useState({});
  const history = useHistory();

  const handleField = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const enviarDadosParaAPI = async (e) => {
    e.preventDefault();

    toast
      .promise(registerArmario(data), {
        pending: "Processando informações",
        success: "Armario cadastrado com sucesso",
        error: "Falha ao cadastrar armario",
      })
      .then(() => history.push("/admin/triagem"))
      .catch((e) => console.error(e));
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
                        onClick={enviarDadosParaAPI}
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

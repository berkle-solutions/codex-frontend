import React, { useState } from "react";

import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import { authUser } from "../../services/codex";
import { useMainContext } from "../../store/MainContext";

import { toast } from "react-toastify";

export default function Login() {
  const [credentials, setCredentials] = useState({});
  const { setState } = useMainContext();

  const handleCredentialsFields = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    toast
      .promise(authUser(credentials), {
        pending: "Processando informações",
        success: "Usuário autenticado com sucesso",
        error: "Falha na autenticação",
      })
      .then(({ user, authToken }) => {
        setState((prev) => ({
          ...prev,
          user,
          token: authToken.access,
          refreshToken: authToken.refresh,
        }));
      })
      .catch(() => {});
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5" style={{ textAlign: "center" }}>
                Codex
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                Gestão de encomendas
              </CardSubtitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row style={{ justifyContent: "center" }}>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Usuário</label>
                      <Input
                        type="text"
                        name="email"
                        onChange={handleCredentialsFields}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Senha</label>
                      <Input
                        type="password"
                        name="senha"
                        onChange={handleCredentialsFields}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button
                      className="btn-round"
                      onClick={submitForm}
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
    </Container>
  );
}

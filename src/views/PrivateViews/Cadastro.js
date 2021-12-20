import React, { useState, useRef } from "react";

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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { createUser, validateSMS, resendTokenPIN } from "../../services/codex";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Cadastro() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState({});
  const [ehPorteiro, setEhPorteiro] = useState(false);
  const [modalProps, setModalProps] = useState({
    open: false,
  });
  const [pinCode, setPinCode] = useState(null);

  const history = useHistory();
  const modalRef = useRef();

  const handleToggleModal = () =>
    setModalProps((props) => ({ ...props, open: !props.open }));

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

  const validarSMS = async () =>
    toast
      .promise(validateSMS({ pinCode, pinId: data?.pinId }), {
        pending: "Processando informações",
        success: "Código validado com sucesso",
        error: "Falha ao validar usuário",
      })
      .then(() => {
        history.push("/admin/triagem");
      })
      .catch((e) => console.error(e));

  const reenviarSMS = () =>
    toast
      .promise(resendTokenPIN(data?.pinId), {
        pending: "Processando informações",
        success: "SMS Reenviado com sucesso",
        error: "Falha ao reenviar token",
      })
      .catch((e) => console.error(e));

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
      .then(({ pinId }) => {
        setData((prev) => ({
          ...prev,
          pinId,
        }));
        handleToggleModal();
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <Modal
        ref={modalRef}
        toggle={handleToggleModal}
        isOpen={modalProps?.open}
      >
        <ModalHeader toggle={handleToggleModal}>Validação</ModalHeader>
        <ModalBody>
          Enviamos um código <strong>sms</strong> para o número {data?.celular},
          assim que receber, por favor digite abaixo:
          <br />
          <br />
          <FormGroup>
            <Input
              placeholder="Digite o código"
              type="text"
              onChange={(e) => setPinCode(e.target.value)}
              name="codigo"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={reenviarSMS}>
            Reenviar
          </Button>
          <Button color="primary" onClick={validarSMS}>
            Validar
          </Button>{" "}
          <Button onClick={handleToggleModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
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
                            setEhPorteiro(e.target.value === "4");
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
                          type="select"
                          onChange={handleRegistrarLocalizacao}
                          name="bloco"
                          placeholder="A"
                          required
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
                          onChange={handleRegistrarLocalizacao}
                          name="andar"
                          placeholder="10"
                          required
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
                          type="number"
                          onChange={handleRegistrarLocalizacao}
                          name="unidade"
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

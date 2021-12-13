import React, { useState, useEffect } from "react";

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
import {
  getEncomendaById,
  getAllCompartimentosDisponiveis,
  saveEncomendaEstoque,
  saveEncomendaCompartimento,
  notificarMoradorMessage,
} from "../../services/codex";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

export default function EncomendaDetalhe() {
  const [armario, setArmario] = useState(null);
  const [compartimentos, setCompartimentos] = useState([]);
  const [compartimentoSelecionado, setCompartimentoSelecionado] =
    useState(null);

  const [encomenda, setEncomenda] = useState({
    morador: {
      id: "",
      bloco: "",
      andar: "",
      unidade: "",
      nome: "",
      celular: "",
    },
    encomenda: {
      id: "",
      descricao: "",
      unidade: "",
      codigo_resgate: "",
    },
    compartimento: false,
  });

  const history = useHistory();

  const { id: encomendaId } = useParams();

  useEffect(() => {
    retornaEncomendaDetalhe();
  }, []);

  useEffect(() => {
    armario && retornaArmarioDisponiveis(armario);
  }, [armario]);

  const retornaArmarioDisponiveis = async (armarioId) => {
    try {
      const response = await getAllCompartimentosDisponiveis(armarioId);
      setCompartimentos(response);
    } catch (e) {
      console.error(e);
    }
  };

  const retornaEncomendaDetalhe = async () => {
    try {
      const response = await getEncomendaById(encomendaId);

      setEncomenda({
        morador: {
          id: response.pessoa.id,
          nome: response.pessoa.nome,
          celular: response.pessoa.celular,
          cpf: response.pessoa.celular,
        },
        encomenda: {
          id: response?.encomenda?.id,
          descricao: response?.encomenda?.descricao,
          unidade: response?.encomenda?.unidade,
          codigo_resgate: response?.encomenda?.codigo_resgate,
        },
        ...(response?.compartimento && {
          compartimento: {
            id: response?.compartimento?.id,
            descricao: response?.compartimento?.descricao,
            ocupado: response?.compartimento?.ocupado,
            armario: response?.compartimento?.armario,
          },
        }),
        ...(response?.status_fila && {
          status_fila: {
            descricao: response?.status_fila?.descricao,
          },
        }),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const salvarEncomendaCompartimento = async (e) => {
    e.preventDefault();
    try {
      const encomendaEstoqueData = {
        encomendaId: encomenda?.encomenda?.id,
        compartimentoId: compartimentoSelecionado,
      };

      const encomendaCompartimentoData = {
        ...compartimentos[compartimentoSelecionado - 1],
        ocupado: true,
      };

      toast
        .promise(
          Promise.all([
            saveEncomendaEstoque(encomendaEstoqueData),
            saveEncomendaCompartimento(encomendaCompartimentoData),
          ]),
          {
            pending: "Processando informações",
            success: "Registro em estoque com sucesso",
            error: "Falha ao registar no estoque",
          }
        )
        .then(() => {
          history.push("/admin/triagem");
        });
    } catch (e) {
      console.error(e);
    }
  };

  const notificarMoradorWpp = async (e) => {
    e.preventDefault();
    toast
      .promise(notificarMoradorMessage(encomenda?.morador?.celular), {
        pending: "Processando informações",
        success: "Morador Notificado com sucesso",
        error: "Falha notificar morador",
      })
      .catch((e) => console.error(e));
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
                <FormGroup className="col-md-3">
                  <Label>Nome Morador Titular</Label>
                  <Input
                    type="text"
                    disabled
                    name="nomeMorador"
                    value={encomenda.morador.nome}
                  />
                </FormGroup>
                <FormGroup className="col-md-3">
                  <Label>Celular Condômino</Label>
                  <Input
                    type="text"
                    disabled
                    name="celularMorador"
                    value={encomenda.morador.celular}
                  />
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label>Descrição da Encomenda</Label>
                  <Input
                    type="textarea"
                    name="descricaoEncomenda"
                    value={encomenda.encomenda.descricao}
                    disabled
                  />
                </FormGroup>
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Qtd. Unidades</Label>
                  <Input
                    type="select"
                    name="unidade"
                    placeholder="Unidades"
                    value={encomenda.encomenda.unidade}
                    disabled
                  >
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Input>
                </FormGroup>
              </div>
            </Form>
          </CardBody>
          {encomenda?.compartimento && (
            <>
              <hr />
              <div
                style={{
                  padding: "15px 15px 10px 15px",
                }}
              >
                <div className="form-row">
                  <p
                    style={{
                      fontSize: "1.0rem",
                      marginBottom: 5,
                      color: "#9A9A9A",
                      paddingRight: 10,
                    }}
                  >
                    Armario:
                  </p>
                  {"  "}
                  <strong>{encomenda?.compartimento?.armario}</strong>
                </div>
                <div className="form-row">
                  <p
                    style={{
                      fontSize: "1.0rem",
                      marginBottom: 5,
                      color: "#9A9A9A",
                      paddingRight: 10,
                    }}
                  >
                    Compartimento:{" "}
                  </p>
                  {"  "}
                  <strong>{encomenda?.compartimento?.descricao}</strong>
                </div>
              </div>
            </>
          )}
          {!(encomenda?.status_fila?.descricao === "Retirado") && (
            <>
              <hr />
              <CardBody>
                <Form>
                  <div className="form-row">
                    <FormGroup className="col-md-3">
                      <Label>Estoque - Armário</Label>
                      <Input
                        type="select"
                        name="armario"
                        placeholder="Armarios"
                        value={armario}
                        onChange={(e) => setArmario(e.target.value)}
                      >
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup className="col-md-3">
                      <Label>Armário - Compartimento</Label>
                      <Input
                        type="select"
                        name="compartimento"
                        placeholder="Compartimentos"
                        value={compartimentoSelecionado}
                        onChange={(e) =>
                          setCompartimentoSelecionado(e.target.value)
                        }
                      >
                        <option></option>
                        {compartimentos?.map((compartimento) => {
                          return (
                            !compartimento?.ocupado && (
                              <option
                                key={compartimento.id}
                                value={compartimento.id}
                              >
                                {compartimento.descricao}
                              </option>
                            )
                          );
                        })}
                      </Input>
                    </FormGroup>
                  </div>
                  <div
                    className="form-row"
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      color="primary"
                      type="submit"
                      className="btn-round"
                      onClick={salvarEncomendaCompartimento}
                    >
                      Registrar Compartimento
                    </Button>
                    <Button
                      color="warning"
                      type="submit"
                      className="btn-round"
                      onClick={notificarMoradorWpp}
                    >
                      Notificar Morador
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </>
          )}
        </Card>
      </div>
    </>
  );
}

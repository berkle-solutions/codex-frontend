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
  rescueEncomenda,
  getAllCompartimentosDisponiveis,
  saveEncomendaEstoque,
  saveEncomendaCompartimento,
} from "../../services/codex";
import { useHistory, useParams } from "react-router-dom";

export default function EncomendaDetalhe() {
  const [codigoResgate, setCodigoResgate] = useState(null);
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

      await saveEncomendaEstoque(encomendaEstoqueData);
      await saveEncomendaCompartimento(encomendaCompartimentoData);
    } catch (e) {
      console.error(e);
    }
  };

  const resgatarEncomenda = async (e) => {
    e.preventDefault();
    try {
      const dadosEncomenda = {
        pessoa: encomenda.morador.id,
        codigo_resgate: encomenda.encomenda.codigo_resgate,
      };
      await rescueEncomenda(dadosEncomenda);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(encomenda);

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
              {/* <div className="form-row">
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Código de Resgate</Label>
                  <Input
                    type="text"
                    name="descricaoEncomenda"
                    value={codigoResgate}
                    onChange={(e) => setCodigoResgate(e.target.value)}
                  />
                </FormGroup>
              </div> */}
            </Form>
          </CardBody>
          <hr />
          {encomenda?.compartimento && (
            <>
              <p>
                compartimento - armario: {encomenda?.compartimento?.armario}
              </p>
              <p>
                compartimento - compartimento:{" "}
                {encomenda?.compartimento?.descricao}
              </p>
            </>
          )}
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
              <div className="form-row">
                <Button
                  color="primary"
                  type="submit"
                  className="btn-round"
                  onClick={salvarEncomendaCompartimento}
                >
                  Registrar Compartimento
                </Button>
              </div>

              {/* <div className="form-row">
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Código de Resgate</Label>
                  <Input
                    type="text"
                    name="descricaoEncomenda"
                    value={codigoResgate}
                    onChange={(e) => setCodigoResgate(e.target.value)}
                  />
                </FormGroup>
              </div> */}
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

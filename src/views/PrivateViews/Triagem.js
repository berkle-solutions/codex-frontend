import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import { getEncomendas } from "../../services/codex";

import { useHistory } from "react-router-dom";

const STATUS_FILA_TYPES = {
  Triagem: "yellow",
  "Em Estoque": "orange",
  Retirado: "green",
  "Em Atraso": "red",
};

function Triagem() {
  const [encomendas, setEncomendas] = useState([]);

  const history = useHistory();

  useEffect(() => {
    retornaListaDeEncomendas();
  }, []);

  const retornaListaDeEncomendas = async () => {
    try {
      const response = await getEncomendas();
      setEncomendas(response);
    } catch (e) {
      console.log(e);
    }
  };

  const goToEncomendaDetail = (id) => {
    // TODO: modify to encomenda detail
    history.push(`/admin/encomenda/detalhe/${id}`);
  };

  console.log(encomendas);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Listagem de Encomendas</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Unidade</th>
                      <th>Descrição</th>
                      <th>Morador</th>
                      <th>Status</th>
                      <th className="text-right">Detalhe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {encomendas?.map((encomenda) => (
                      <tr key={encomenda?.encomenda?.id}>
                        <td>{encomenda?.encomenda?.unidade}</td>
                        <td>{encomenda?.encomenda?.descricao}</td>
                        <td>{encomenda?.pessoa?.nome}</td>
                        <td
                          style={{
                            color:
                              STATUS_FILA_TYPES[
                                encomenda?.status_fila?.descricao
                              ],
                            fontWeight: "bold",
                          }}
                        >
                          {encomenda?.status_fila?.descricao}
                        </td>
                        <td className="text-right">
                          <Button
                            color="primary"
                            onClick={() => goToEncomendaDetail(encomenda?.id)}
                          >
                            Ver mais
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Triagem;

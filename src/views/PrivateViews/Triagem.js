import React, { useEffect, useState } from "react";

// reactstrap components
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

import axios from "axios";

import { useHistory } from "react-router-dom";

function Triagem() {
  const [encomendas, setEncomendas] = useState([]);

  const history = useHistory();

  useEffect(() => {
    retornaListaDeEncomendas();
  }, []);

  const retornaListaDeEncomendas = async () => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/encomenda/lista"
      );
      setEncomendas(data);
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
                      <tr key={encomenda?.id}>
                        <td>{encomenda?.unidade}</td>
                        <td>{encomenda?.descricao}</td>
                        <td>{encomenda?.pessoa?.nome}</td>
                        <td
                          style={{
                            color: "green",
                            fontWeight: "bold",
                          }}
                        >
                          Retirado
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

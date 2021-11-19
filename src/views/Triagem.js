/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

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

function Triagem() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">View de Encomendas em Triagem</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Entrada (dia/horario)</th>
                      <th>Descrição</th>
                      <th>Morador</th>
                      <th className="text-right">Detalhe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Armario X - compartimento Y</td>
                      <td>Miojo</td>
                      <td>Leandro A.</td>
                      <td
                        style={{
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                      </td>
                      <td className="text-right">
                        <Button color="primary">Detalhes</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Armario X - compartimento Y</td>
                      <td>Miojo</td>
                      <td>Leandro A.</td>
                      <td
                        style={{
                          color: "orange",
                          fontWeight: "bold",
                        }}
                      >
                      </td>
                      <td className="text-right">
                        <Button color="primary">Detalhes</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Armario X - compartimento Y</td>
                      <td>Miojo</td>
                      <td>Leandro A.</td>
                      <td
                        style={{
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                      </td>
                      <td className="text-right">
                        <Button color="primary">Detalhes</Button>
                      </td>
                    </tr>
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

import React, { useState, useEffect } from "react";
// reactstrap components
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
// services
import { getEncomendas } from "../../services/codex";

function Dashboard() {
  const [encomendas, setEncomendas] = useState([]);
  const [bigNumbers, setBigNumbers] = useState({
    triagem: 0,
    estoque: 0,
    retirado: 0,
    atrasado: 0,
  });

  const retornaDadosBigNumbers = (encomendas) => {
    let triagem = 0;
    let estoque = 0;
    let retirado = 0;
    let atrasado = 0;

    encomendas?.forEach((encomenda) => {
      if (encomenda?.status_fila?.descricao === "Triagem") {
        triagem = triagem + 1;
      }
      if (encomenda?.status_fila?.descricao === "Em Estoque") {
        estoque = estoque + 1;
      }
      if (encomenda?.status_fila?.descricao === "Retirado") {
        retirado = retirado + 1;
      }
      if (encomenda?.status_fila?.descricao === "Em Atraso") {
        atrasado = atrasado + 1;
      }
    });

    setBigNumbers({
      triagem,
      estoque,
      retirado,
      atrasado,
    });
  };

  const retornaListaDeEncomendas = async () => {
    try {
      const response = await getEncomendas();
      setEncomendas(response);
      retornaDadosBigNumbers(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    retornaListaDeEncomendas();
  }, []);

  console.log(encomendas);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-app text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Triagem</p>
                      <CardTitle tag="p">{bigNumbers.triagem}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-box-2 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Estoque</p>
                      <CardTitle tag="p">{bigNumbers.estoque}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Retirado</p>
                      <CardTitle tag="p">{bigNumbers.retirado}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-time-alarm text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Atraso</p>
                      <CardTitle tag="p">{bigNumbers.atrasado}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

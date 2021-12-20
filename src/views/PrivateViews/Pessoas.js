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
import { getUsuarios } from "../../services/codex";
import { useHistory } from "react-router-dom";

function Triagem() {
  const [usuarios, setUsuarios] = useState([]);
  const history = useHistory();

  useEffect(() => {
    retornaListaDeUsuarios();
  }, []);

  const retornaListaDeUsuarios = async () => {
    try {
      const response = await getUsuarios();
      setUsuarios(response);
    } catch (e) {
      console.error(e);
    }
  };

  const goToPessoaDetalhe = (id) => {
    history.push(`/admin/pessoas/detalhe/${id}`);
  };

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
                      <th>Nome</th>
                      <th>E-mail</th>
                      <th>Celular</th>
                      <th>Perfil</th>
                      <th className="text-right">Detalhe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios?.map((usuario) => (
                      <tr key={usuario?.id}>
                        <td>{usuario?.nome}</td>
                        <td>{usuario?.email}</td>
                        <td>{usuario?.celular}</td>
                        <td>{usuario?.perfil?.descricao}</td>
                        <td className="text-right">
                          <Button
                            color="primary"
                            onClick={() => goToPessoaDetalhe(usuario?.id)}
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

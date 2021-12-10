import React, { useState } from "react";

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
import { rescueEncomenda } from "../../services/codex";
import { useHistory, useParams } from "react-router-dom";

export default function Resgate() {
  const [codigoResgate, setCodigoResgate] = useState(null);

  //   const history = useHistory();

  const { id: pessoaId } = useParams();

  const resgatarEncomenda = async (e) => {
    e.preventDefault();
    try {
      const dadosEncomenda = {
        pessoaId,
        codigoResgate,
      };
      await rescueEncomenda(dadosEncomenda);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Resgate Encomenda</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="form-row">
                <FormGroup className="col-md-3 col-sm-12">
                  <Label>Código de Resgate</Label>
                  <Input
                    type="text"
                    name="descricaoEncomenda"
                    value={codigoResgate}
                    onChange={(e) => setCodigoResgate(e.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="form-row">
                <Button
                  color="primary"
                  type="submit"
                  className="btn-round"
                  onClick={resgatarEncomenda}
                >
                  Resgatar Encomenda
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

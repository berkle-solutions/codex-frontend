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
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Form
} from "reactstrap";

function Encomenda() {
    return (
        <>
            <div className="content">
                <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Cadastro de Encomenda</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                <div className="form-row">
                                <FormGroup className="col-md-4">
                                    <Label for="cpfCondomino">CPF Condômino</Label>
                                    <Input type="text" id="cpfCondomino" placeholder="Informe o CPF do Condômino" />
                                </FormGroup>
                            </div>
                            <div className="form-row">
                                <FormGroup className="col-md-3">
                                    <Label for="nomeCondomino">Nome Condômino</Label>
                                    <Input type="text" disabled id="nomeCondomino" />
                                </FormGroup>
                                <FormGroup className="col-md-3">
                                    <Label for="celularCondomino">Celular Condômino</Label>
                                    <Input type="text" disabled id="celularCondomino" />
                                </FormGroup>
                            </div>
                            <div className="form-row">
                                <FormGroup className="col-md-3">
                                    <Label for="blocoCondomino">Bloco</Label>
                                    <Input type="text" disabled id="blocoCondomino" />
                                </FormGroup>
                                <FormGroup className="col-md-3">
                                    <Label for="unidadeCondomino">Unidade</Label>
                                    <Input type="text" disabled id="unidadeCondomino" />
                                </FormGroup>
                                <FormGroup className="col-md-3">
                                    <Label for="andarCondomino">Andar</Label>
                                    <Input type="text" disabled id="andarCondomino" />
                                </FormGroup>
                            </div>
                            <div className="form-row">
                                <FormGroup className="col-md-6">
                                    <Label for="cpfCondomino">Descrição da Encomenda</Label>
                                    <Input type="textarea" name="text" id="descricaoEncomenda" />
                                </FormGroup>
                            </div>
                            <Button color="primary" type="submit">
                                Enviar
                            </Button>
                </Form>
                </CardBody>
                </Card>
            </div>
        </>
    );
}

export default Encomenda;

import React, { useState } from "react";
import axios from "axios";

// reactstrap components
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

export default function Encomenda() {
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
                  <Label>Bloco</Label>
                  <Input
                    type="select"
                    // onChange={handleField}
                    name="bloco"
                    placeholder="Bloco"
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
                    // onChange={handleField}
                    name="andar"
                    placeholder="Andar"
                  >
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                </FormGroup>
                {/* <FormGroup className="col-md-4">
                  <Label>Nº Apartamento</Label>
                  <Input
                    type="select"
                    // onChange={handleField}
                    name="apto"
                    placeholder="Nº Apartamento"
                  >
                    <option></option>
                    <option value="300">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                </FormGroup> */}
              </div>
              <div className="form-row">
                <FormGroup className="col-md-3">
                  <Label>Nome Morador Titular</Label>
                  <Input type="text" disabled name="nomeMorador" />
                </FormGroup>
                <FormGroup className="col-md-3">
                  <Label>Celular Condômino</Label>
                  <Input type="text" disabled name="celularMorador" />
                </FormGroup>
              </div>
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label>Descrição da Encomenda</Label>
                  <Input
                    type="textarea"
                    // onChange={handleField}
                    name="descricaoEncomenda"
                  />
                </FormGroup>
              </div>
              <Button
                color="primary"
                type="submit"
                className="btn-round"
                // onClick={enviarDadosParaAPI}
              >
                Cadastrar
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

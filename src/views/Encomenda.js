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
    Form
} from "reactstrap";

export default function Encomenda() {
    const [data, setData] = useState({});

    const handleField = (e) => {
      setData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const enviarDadosParaAPI = async (e) => {
      e.preventDefault();
      try {
        const newData = { ...data };
        newData.senha = "1234";
        newData.data_nascimento = "2012-09-04 06:00:00.000000-08:00";
        newData.perfil = 6;
        newData.ativo = 1;
  
        const response = await axios.post(
          "http://127.0.0.1:8000/api/encomenda/salvar",
          newData
        );
  
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    
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
                                    <Input type="text" onChange={handleField} name="bloco" placeholder="Bloco" />
                                </FormGroup>
                                <FormGroup className='col-md-4'>
                                    <Label>Andar</Label>
                                    <Input type="text" onChange={handleField} name="andar" placeholder="Andar" />
                                </FormGroup>
                                <FormGroup className='col-md-4'>
                                    <Label>Nº Apartamento</Label>
                                        <Input type="text" onChange={handleField} name="apto" placeholder="Nº Apartamento" />
                                </FormGroup>
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
                                    <Input type="textarea" onChange={handleField} name="descricaoEncomenda"/>
                                </FormGroup>
                            </div>
                            <Button color="primary" type="submit" className="btn-round" onClick={enviarDadosParaAPI}>
                                Cadastrar
                            </Button>
                </Form>
                </CardBody>
                </Card>
            </div>
        </>
    );
}


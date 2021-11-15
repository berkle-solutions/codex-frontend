  import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// alterar nome exemplo para o nome da tela, exemplo: CadastroX
export default function Cadastro() {
  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Cadastro de Pessoas</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Nome Completo</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>CPF</label>
                        <Input
                          placeholder="000.000.000-00"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                    <Col className="pl-1" md="8">
                      <FormGroup>
                        <label htmlFor="InputEmail1">
                          Email
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Chet"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                    {/* <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Endereço</label>
                        <Input
                          placeholder="Bloco, Torre, Apartamento"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Data de Nasc.</label>
                        <Input
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Telefone</label>
                        <Input
                          placeholder="(11)2222-2222"
                          type= "tel"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Celular</label>
                        <Input 
                        placeholder="(11)99999-9999 "
                        type = "tel"/>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Perfil</label>
                        {/* <Input
                          type="text"
                        /> */}
                        <Dropdown toggle={function noRefCheck(){}}>
                          <DropdownToggle caret>
                            Dropdown
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>
                              Header
                            </DropdownItem>
                            <DropdownItem>
                              Action
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Usuário</label>
                        <Input
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Senha</label>
                        <Input
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Observações</label>
                        <Input
                          type="textarea"
                          defaultValue=""
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Cadastrar
                      </Button>
                    </div>
                    <Dropdown toggle={function noRefCheck(){}}>
                      <DropdownToggle caret>
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>
                          Header
                        </DropdownItem>
                        <DropdownItem>
                          Action
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

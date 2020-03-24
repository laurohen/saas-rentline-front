/*!

=========================================================
* Paper Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample11
} from "variables/charts.jsx";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class Dashboard extends React.Component {
  render() {
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
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Prev. Receita mes atual</p>
                        <CardTitle tag="p">R$ 30.000</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar-o" />
                    Atualizado 1 minuto
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Prev. Despesa mes atual</p>
                        <CardTitle tag="p">R$ 17.000</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar-o" />
                    Atualizado 1 minuto
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Ativ / Alug / Dispon</p>
                        <CardTitle tag="p">500 / 420 / 80</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" />
                    Atualizado 1 minuto
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Clientes Cadastrados</p>
                        <CardTitle tag="p">600</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" />
                    Atualizado agora
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          
          <Row>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Pagamentos confirmados</CardTitle>
                  <p className="card-category">Total referente mes atual</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample5.data}
                    options={chartExample5.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Baixados - OK
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" />
                    Total : 350
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Pagamentos com vencimento proximo</CardTitle>
                  <p className="card-category">Total referente mes atual</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample6.data}
                    options={chartExample6.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-warning" />
                    Vencimento proximo
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-check" />
                    Total : 100
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Pagamentos atrasados</CardTitle>
                  <p className="card-category">Total referente mes atual</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample7.data}
                    options={chartExample7.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-danger" />
                    Em atraso
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" />
                    Total : 50
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuicao de Linhas Por Operadora</CardTitle>
                  <p className="card-category">Atualizacao realtime</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={chartExample11.data}
                    options={chartExample11.options}
                    width={456}
                    height={300}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Vivo
                    <i className="fa fa-circle text-info" />
                    Claro
                    <i className="fa fa-circle text-info" />
                    Tim
                    <i className="fa fa-circle text-info" />
                    Oi
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" />
                    Total Linhas : 500
                  </div>
                </CardFooter>
              </Card>
            </Col>
            

            <Col md="3">
              {/* <Card>
                <CardHeader>
                  <CardTitle>Subscriptions</CardTitle>
                  <p className="card-category">Our Users</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample8.data}
                    options={chartExample8.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-secondary" />
                    Ended
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" />
                    Total users
                  </div>
                </CardFooter>
              </Card> */}
            </Col>
          </Row>
          
          
          
          
          
          {/* <Row>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">$34,657</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="success" pill>
                          +18%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    total earnings in last ten quarters
                  </h6>
                  <Line
                    data={chartExample1.data}
                    options={chartExample1.options}
                    height={380}
                    width={826}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">Financial Statistics</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          size="sm"
                        >
                          <i className="nc-icon nc-simple-add" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">169</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="danger" pill>
                          -14%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    total subscriptions in last 7 days
                  </h6>
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                    height={380}
                    width={828}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">View all members</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="danger"
                          size="sm"
                        >
                          <i className="nc-icon nc-button-play" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">8,960</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="warning" pill>
                          ~51%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">total downloads in last 6 years</h6>
                  <Line
                    data={chartExample3.data}
                    options={chartExample3.options}
                    height={380}
                    width={826}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">View more details</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="warning"
                          size="sm"
                        >
                          <i className="nc-icon nc-alert-circle-i" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}


          {/* <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Global Sales by Top Locations</CardTitle>
                  <p className="card-category">
                    All products that were shipped
                  </p>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                            <td className="text-right">53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                            <td className="text-right">20.43%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                            <td className="text-right">10.35%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                            <td className="text-right">7.87%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                            <td className="text-right">5.94%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/BR.png")}
                                />
                              </div>
                            </td>
                            <td>Brasil</td>
                            <td className="text-right">550</td>
                            <td className="text-right">4.34%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col className="ml-auto mr-auto" md="6">
                      <VectorMap
                        map={"world_mill"}
                        backgroundColor="transparent"
                        zoomOnScroll={false}
                        containerStyle={{
                          height: "300px"
                        }}
                        containerClassName="map"
                        regionStyle={{
                          initial: {
                            fill: "#e4e4e4",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                          }
                        }}
                        series={{
                          regions: [
                            {
                              values: mapData,
                              scale: ["#AAAAAA", "#444444"],
                              normalizeFunction: "polynomial"
                            }
                          ]
                        }}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row> */}


          <Row>
            <Col md="6">
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Tarefas na Fila - Migracoes / Bloqueios / Ativacoes / Faturas</CardTitle>
                  <h5 className="card-category">Atualizado a cada 5 min.</h5>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Sign contract for "What are conference organizers
                            afraid of?"
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip42906017"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip42906017"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip570363224"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip570363224"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/erik-lucatero-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip584875601"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip584875601"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip517629613"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip517629613"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/kaci-baum-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Using dummy content or fake information in the Web
                            design process can result in products with
                            unrealistic
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip792337830"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip792337830"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip731952378"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip731952378"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/joe-gardner-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip825783733"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip825783733"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip285089652"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip285089652"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh spin" />
                    Buscando informacoes
                  </div>
                </CardFooter>
              </Card>
            </Col>
            {/*<Col md="6">
               <Card>
                <CardHeader>
                  <CardTitle tag="h4">2018 Sales</CardTitle>
                  <p className="card-category">All products including Taxes</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Tesla Model S <i className="fa fa-circle text-danger" />
                    BMW 5 Series
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-check" />
                    Data information certified
                  </div>
                </CardFooter>
              </Card> 
            </Col> */}
          

            <Col md="6">
            <Card>
                <CardHeader>
                  <CardTitle tag="h4">Movimentacao dos ultimos boletos</CardTitle>
                </CardHeader>
                <CardBody className="table-full-width table-hover">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Numero Contrato</th>
                        <th>Data Vencimento</th>
                        <th>Status</th>
                        <th className="text-right">Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-success">
                        <td>Joao Paulo</td>
                        <td>216457897</td>
                        <td>20/02/2020</td>
                        <td>PAGO</td>
                        <td className="text-right">R$360,00</td>
                      </tr>
                      <tr>
                        <td>Mariana Souza</td>
                        <td>785967897</td>
                        <td>20/02/2020</td>
                        <td>PAGO</td>
                        <td className="text-right">R$10060,00</td>
                      </tr>
                      <tr className="table-info">
                        <td>Maria Paula</td>
                        <td>123457897</td>
                        <td>20/02/2020</td>
                        <td>PAGO</td>
                        <td className="text-right">R$2050,00</td>
                      </tr>
                      <tr>
                        <td>Fabio </td>
                        <td>487557897</td>
                        <td>25/02/2020</td>
                        <td>AGUARDANDO BAIXA</td>
                        <td className="text-right">R$1520,00</td>
                      </tr>
                      <tr className="table-danger">
                        <td>Erico da Tim</td>
                        <td>216457897</td>
                        <td>20/02/2020</td>
                        <td>ATRASADO</td>
                        <td className="text-right">R$500,00</td>
                      </tr>
                      <tr>
                        <td>O Buda</td>
                        <td>458596897</td>
                        <td>18/02/2020</td>
                        <td>AGUARDANDO BAIXA</td>
                        <td className="text-right">R$60,00</td>
                      </tr>
                      {/* <tr className="table-warning">
                        <td>Joao Paulo</td>
                        <td>216457897</td>
                        <td>20/02/2020</td>
                        <td>PAGO</td>
                        <td className="text-right">R$360,00</td>
                      </tr> */}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="fa fa-refresh spin" />
                    Atualizacao a cada 30 min.
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          
        </div>
      </>
    );
  }
}

export default Dashboard;

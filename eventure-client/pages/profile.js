import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      firstName: '',
      lastName: '',
      type: '',
      country: '',
      education: '',
      workplace: '',
      about: '',  
    };
  }
  
  componentDidMount() {
    axios.get('http://localhost:8000/users')
    .then(res => {
      this.setState({ email: res.data[5].email });
      this.setState({ firstName: res.data[5].firstName });
      this.setState({ lastName: res.data[5].lastName });
      this.setState({ type: res.data[5].type });
      this.setState({ country: res.data[5].country });
      this.setState({ education: res.data[5].education });
      this.setState({ workplace: res.data[5].workplace });
      this.setState({ about: res.data[5].about });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Your profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Organization</label>
                          <Input
                            defaultValue="None"
                            disabled
                            placeholder="Organization"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input defaultValue={this.state.email} placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue={this.state.firstName}
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue={this.state.lastName}
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Type</label>
                          <Input
                            defaultValue={this.state.type}
                            placeholder="Type"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue={this.state.country}
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Education</label>
                          <Input
                            defaultValue={this.state.education}
                            placeholder="Education"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Workplace</label>
                          <Input
                            defaultValue={this.state.workplace}
                            placeholder="Workplace"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            defaultValue={this.state.about}
                            placeholder="Say something about you here :)"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <div> 
                      <img src = "https://softuni.bg/users/profile/showavatar/6ee3c3c3-d7dc-41fa-8c07-9d72fdc0af11" width="256" height="256"/>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Profile;
/*import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import DataTable from '../components/DataTable';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

export default class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = { userData: [] };
  }
  
  componentDidMount() {
    axios.get('http://localhost:8000/users')
    .then(res => {
      this.setState({ userData: res.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  dataTable() {
    return this.state.userData.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  }

  render()  {
    return (
      <div className="wrapper-users">
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>Email</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Type</td>
                <td>Country</td>
                <td>Education</td>
                <td>Workplace</td>
                <td>About</td>
              </tr>
            </thead>
            <tbody>
              {this.dataTable()[5]}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
*/
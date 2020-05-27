import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Router from 'next/router';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Formik } from 'formik';

export default class SignInPage extends Component {
    state = {
        id: '',
        email: '',
        password: '',
        role: '',
    };

    onEmailChanged = user => {
        this.setState({email: user.target.value})
    }

    onPasswordChanged = user => {
        this.setState({password: user.target.value})
    }

<<<<<<< HEAD
  handleSubmit = user => {
    user.preventDefault();
    
    const email = this.state.email;
    const password = this.state.password;

    if(email.includes("@")) {
      axios.get('http://localhost:8080/users?param=' + email)
      .then(res => {
        this.setState({ role: res.data.role });
        this.setState({ id: res.data._id });
        if(email === res.data.email) {
          if(password === res.data.password) {
            localStorage.setItem('id', JSON.stringify(this.state.id));
            localStorage.setItem('email', JSON.stringify(this.state.email));
            localStorage.setItem('role', JSON.stringify(this.state.role));
            Router.push('/home');
          } 
        } 
      });
    } else {
      const name = this.state.email;
      axios.get('http://localhost:8080/organizations?name=' + name)
      .then(res => {
        this.setState({ role: res.data.role });
        this.setState({ id: res.data._id });
        if(name === res.data.name) {
          if(password === res.data.password) {
            localStorage.setItem('id', JSON.stringify(this.state.id));
            localStorage.setItem('role', JSON.stringify(this.state.role));
            Router.push('/home');
          } 
        } 
      });
=======
    handleSubmit = user => {
        user.preventDefault();

        const email = this.state.email;
        const password = this.state.password;

        if (email.includes("@")) {
            axios.post('http://localhost:8080/auth/login', {email, password})
                .then(res => {
                    this.setState({role: res.data.user.role});
                    this.setState({id: res.data.user._id});
                    localStorage.setItem('id', JSON.stringify(this.state.id));
                    localStorage.setItem('email', JSON.stringify(this.state.email));
                    localStorage.setItem('role', JSON.stringify(this.state.role));
                    Router.push('/home');
                    console.log(res.data.tokens.accessToken);
                    console.log(res.data.tokens.refreshToken);
                });
        } else {
            const name = this.state.email;
            axios.get('http://localhost:8080/organizations?name=' + name)
                .then(res => {
                    this.setState({role: res.data.role});
                    this.setState({id: res.data._id});
                    if (name === res.data.name) {
                        if (password === res.data.password) {
                            localStorage.setItem('id', JSON.stringify(this.state.id));
                            localStorage.setItem('role', JSON.stringify(this.state.role));
                            Router.push('/home');
                        }
                    }
                });
        }
>>>>>>> 58b2c240654a6b8fba3fc6e1e119c1d78d17cfd3
    }

    render() {
        return (
            <Formik
                onSubmit={async data => {
                    console.log(data);
                }}
                initialValues={{
                    email: this.state.email,
                    password: this.state.password,
                }}>

<<<<<<< HEAD
        {({ handleSubmit }) => (
          <div className = "col-md-12" align = "center">
          <br/>
          <div className = "col-md-6">
            <Container className = "App">
                  <h2>Sign In</h2>
                  <Form className = "form" onSubmit = {this.handleSubmit}>
                        <FormGroup>
                          <Label>Email or Organization name</Label>
                          <Input type="text" className = "form-control" placeholder="Email or Organization name" value = {this.state.email} 
                    onChange = {this.onEmailChanged}/>
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input type="password" className = "form-control" placeholder="Password" value = {this.state.password} 
                    onChange = {this.onPasswordChanged}/>
                        </FormGroup>
                    <Button type="submit" className="btn btn-primary btn-block">Sign In</Button>
                      <p className="forgot-password text-center">
                          Don't have an account yet? <Link href="signUp">Sign up</Link>
                      </p>
                      <p className="forgot-password text-center">
                  Or create an organization <Link href="/organizations/addOrganization"> here </Link> 
                  </p>          
                  </Form>
                </Container>
          </div>
          </div>
        )}

      </Formik>
    );
  }
}
=======
                {({handleSubmit}) => (
                    <div className="col-md-12" align="center">
                        <br/>
                        <div className="col-md-6">
                            <Container className="App">
                                <h2>Sign In</h2>
                                <Form className="form" onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label>Email or Organization name</Label>
                                        <Input type="text" className="form-control"
                                               placeholder="Email or Organization name" value={this.state.email}
                                               onChange={this.onEmailChanged}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input type="password" className="form-control" placeholder="Password"
                                               value={this.state.password}
                                               onChange={this.onPasswordChanged}/>
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-primary btn-block">Sign In</Button>
                                    <p className="forgot-password text-center">
                                        Don't have an account yet? <Link href="signUp">Sign up</Link>
                                    </p>
                                    <p className="forgot-password text-center">
                                        Or create an organization <Link
                                        href="/organizations/addOrganization"> here </Link>
                                    </p>
                                </Form>
                            </Container>
                        </div>
                    </div>
                )}

            </Formik>
        );
    }
}
>>>>>>> 58b2c240654a6b8fba3fc6e1e119c1d78d17cfd3

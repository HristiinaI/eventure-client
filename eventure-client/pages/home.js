import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Form, NavDropdown, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';

import { Input } from 'reactstrap';
 
export default class Home extends Component {
  state = {
    //id: '',  
    item: '',
    role: '',
    isReqDone: '',
<<<<<<< HEAD
    findOrg: '',
    findUser: '',
    findEvent: '',
    hasUser: '',
    hasOrg: '',
    hasEvent: '',
    loading: false,
    allEvents: new Array()
=======
    findOrg: false,
    findUser: false,
    hasUser: false,
    hasOrg: false,
    usrRole: '',
>>>>>>> bbd91eff221685fe16e541d31a364074dfb66525
  };

  onSearch = user => {
    this.setState({item: user.target.value});
  }

  handleClick = user => {
    user.preventDefault();
    if(JSON.parse(localStorage.getItem('role')) == "Organization") {
      Router.push('/organizations/myOrganization');
    } else {
      Router.push('/users/profile');
    }
  }

  componentDidMount() {
    //this.setState({ usrRole: localStorage.getItem('role')});
    const role = localStorage.getItem('role');

    this.setState({ usrRole: role });
  }

  handleSubmit = user => {
    user.preventDefault();
    this.setState({loading: true});
    const item = this.state.item;
    if(item) {
      if(this.state.findOrg == "true") {
        axios.get('http://localhost:8080/organizations?name=' + item)
            .then(res => {
              this.setState({ item: res.data.name });
              //this.setState({ id: res.data._id });
              this.setState({ role: "Organization" });
              this.setState({ hasOrg: "true" });
              localStorage.setItem('avatar', JSON.stringify(this.state.item));
              Router.push('/organizations/orgAvatar');
              Router.reload('/organizations/orgAvatar');
              this.setState({loading: false});
            });
      } else if(this.state.findUser == "true") {   
        axios.get('http://localhost:8080/users?email=' + item)
            .then(res => {
              this.setState({ item: res.data.email });
              //this.setState({ id: res.data._id });
              this.setState({ role: "User" });
              localStorage.setItem('avatar', JSON.stringify(this.state.item));
              this.setState({ hasUser: "true" });
              Router.push('/users/userAvatar');
              Router.reload('/users/userAvatar');
              this.setState({loading: false});
          });
      } else if(this.state.findEvent == "true"){
        let events = [];
        let _this = this; 
        axios.get('http://localhost:8080/events?name=' + item)
          .then(res => {
            events = res.data;
            _this.setState({allEvents: events});
            this.setState({loading: false});
          })
          .catch(function (error) {
              console.log(error);
          });

      }
    }
    this.setState({ findUser: ''});
    this.setState({ findOrg: ''});
    this.setState({ findEvent: ''});
    this.setState({ hasUser: ''});
    this.setState({ hasOrg: ''});
    this.setState({ hasEvent: ''});

  };

  hanleLogOut = user => {
    localStorage.clear();
    Router.push('/');
  }
    
  deleteProfile() {
    const id = localStorage.getItem('id');
    axios.delete('http://localhost:8080/users/' + id);
    localStorage.clear();
    Router.push('/');
  }

  findUser = user => {
    const tmp = "true";
    this.setState({ findUser: tmp });
  }

  findOrg = user => {
    const tmp = "true";
    this.setState({ findOrg: tmp });
  }
  findEvent = () => {
    const tmp = "true";
    this.setState({ findEvent: tmp });
  }


  listEvents(){ 
    if(this.state.allEvents.length){  
        return(
            <>
            <h2>Your Events: </h2>
            <ul>
                {this.state.allEvents.map(event => {   
                    return ( 
                        <li key={event._id} >
                             <Link href="/event/dashboard/[id]" 
                                as={`/event/dashboard/${event._id}`} >
                                <a>{event.name}</a>
                             </Link>
                        </li>
                    ); 
                   
                })
                }
            </ul>
            </>    
        );
    }else if(this.state.loading){
        return(
            <>
            <h2>Your Events: </h2>
            Loading...
            </>    
        );
    }
  }

  render() {
      return (
        <div>
         <Navbar bg="light" variant="light">
           <Navbar.Brand href="/home">Home</Navbar.Brand>
             <Nav className="mr-auto">
             <Nav.Link href = "/events/createEvent">Create event</Nav.Link>
<<<<<<< HEAD
             <Nav.Link href = '/events/allEvents'>All events</Nav.Link>
               <Nav.Link href="/organizations/addOrganization">Create organization</Nav.Link>            
=======
             <Nav.Link href = "/events/allEvents">All events</Nav.Link>
             <Nav.Link hidden={this.state.usrRole === "User" ? false: true} href = "#"> My organizations </Nav.Link>
>>>>>>> bbd91eff221685fe16e541d31a364074dfb66525
               <NavDropdown title="Settings" id="collasible-nav-dropdown">
                 <NavDropdown.Item onClick={this.handleClick} >My profile</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="/users/changePassword">Change password</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item onClick = {this.deleteProfile} href="#">Delete profile</NavDropdown.Item>
               </NavDropdown>
             </Nav>
             
             <NavDropdown title="Find" id="collasible-nav-dropdown">
                  <NavDropdown.Item  onClick={this.findOrg}>Organization</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.findUser} >User</NavDropdown.Item>
                  <NavDropdown.Item onClick={this.findEvent} >Event</NavDropdown.Item>
              </NavDropdown>
             
             <Form onSubmit = {this.handleSubmit} inline>
               <Input value = {this.state.item} onChange = {this.onSearch} 
               type="text" placeholder="Search" className="mr-sm-2" />
               <Button  type = "submit" variant="outline-primary">Search</Button>
             </Form>
             <Form inline onSubmit = {this.hanleLogOut}>
               <Button  type = "log out" variant="outline-primary">Log Out</Button>
             </Form>
         </Navbar>
         <br/>

         {this.listEvents()}
        </div>
       );
    } 
}
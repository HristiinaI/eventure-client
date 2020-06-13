import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Form, NavDropdown, Button} from 'react-bootstrap';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';

import { Input } from 'reactstrap';
 
export default class Home extends Component {
  state = {
    item: '',
    role: '',
    isReqDone: '',
    findOrg: '',
    findUser: '',
    findEvent: '',
    hasUser: '',
    hasOrg: '',
    hasEvent: '',
    loading: false,
    allEvents: new Array()
  };

  onSearch = user => {
    this.setState({item: user.target.value});
  }

  handleClick = user => {
    user.preventDefault();
    if(JSON.parse(localStorage.getItem('role')) === "Organization") {
      Router.push('/organizations/myOrganization');
    } else {
      Router.push('/users/profile');
    }
  }

  componentDidMount() {
    const role = JSON.parse(localStorage.getItem('role'));
    this.setState({ role: role });
  }

  handleSubmit = user => {
    user.preventDefault();
    this.setState({loading: true});
    const item = this.state.item;
    if(item) {
      if(this.state.findOrg === "true") {
        axios.get('http://localhost:8080/organizations?name=' + item)
            .then(res => {
              this.setState({ item: res.data.name });
              this.setState({ role: "Organization" });
              this.setState({ hasOrg: "true" });
              localStorage.setItem('avatar', JSON.stringify(this.state.item));
              Router.push('/organizations/orgAvatar');
              Router.reload('/organizations/orgAvatar');
              this.setState({loading: false});
            });
      } else if(this.state.findUser === "true") {
        axios.get('http://localhost:8080/users?param=' + item)
            .then(res => {
              this.setState({ item: res.data.email });
              this.setState({ role: "User" });
              this.setState({ hasUser: "true" });
              localStorage.setItem('avatar', JSON.stringify(this.state.item));
              Router.push('/users/userAvatar');
              Router.reload('/users/userAvatar');
              this.setState({loading: false});
          });
      } else if(this.state.findEvent === "true"){
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
            <h2>Public events you search: </h2>
            <ul>
                {this.state.allEvents.map(event => {
                  if(event.type === "public"){   
                    return ( 
                        <li key={event._id} >
                             <Link href="/event/dashboard/[id]" 
                                as={`/event/dashboard/${event._id}`} >
                                <a>{event.name}</a>
                             </Link>
                              {' '} 
                              <a>{event.type}</a>
                        </li>
                    );
                  }  
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
      const check = this.state.role === "User" ? 1:0;
      return (
        <div>
         <Navbar bg="light" variant="light">
           <Navbar.Brand href="/home">Home</Navbar.Brand>
             <Nav className="mr-auto">
             <Nav.Link href = "/events/createEvent">Create event</Nav.Link>

             <Nav.Link href = '/events/allEvents'>All events</Nav.Link>
                 <Nav.Link href = '/chat/allChats' >All chats</Nav.Link>
               <NavDropdown title="Settings" id="collasible-nav-dropdown">
                 <NavDropdown.Item onClick={this.handleClick} >My profile</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Divider hidden={check !== 0}/>
                 <NavDropdown.Item onClick = {this.deleteProfile} href="#">Delete profile</NavDropdown.Item>
             </NavDropdown >
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

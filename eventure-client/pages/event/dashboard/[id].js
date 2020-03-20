import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import DatePicker from 'react-datepicker';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Input,
    Row,
    Col,
    Form,
    Button
} from "reactstrap";
import Home from '../../home';
import Router from "next/router";

class Event extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allUsers: new Array(),
            addUsers: new Array(),
            user: '',
            added: [],
        }
        this.handleKanban = this.handleKanban.bind(this);
        this.handleSubmmitUsers = this.handleSubmmitUsers.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
    }
    handleKanban = () =>{
        let name = this.props.event.name;
        let eventId = this.props.event._id;
        let counter = 0;

        console.log("eventId" + eventId);
        if(counter < 1){
            axios.post('http://localhost:8080/board',{name, eventId}
                .then(res => {
                    counter++;
                })
                .catch(function (error) {
                    console.log(error);
                })
            );
        }else{
            Router.push('event/kanban/[id]');
        }

    }

    handleAddInput = user => {
        this.setState({ user: user.target.value });
    }
    
    
    handleAddUser = () => {
        let users = [];
        let _this = this;
        // console.log("User:" + this.state.user);
        axios.get('http://localhost:8080/users/')
        .then(function(results){
            for(let i = 0;i < results.data.length;i++){
                users.push(results.data[i].email);
                // console.log("Email:" + users)
            }
            _this.setState({allUsers: users});
            // console.log("allUsers:" + _this.state.allUsers);

        })
        .catch(function (error) {
            console.log(error);
        })
        console.log("User:" + this.state.user);       
        this.state.added.push(this.state.user);
        console.log("Added:" + this.state.added);
        this.setState({addUsers: this.state.added});
        // console.log("AddUsers:" + this.state.addUsers);

    }

    handleSubmmitUsers = () => {
        let members = this.state.addUsers;
        let eventId = this.props.event._id;
        
            axios.put('http://localhost:8080/events/' + eventId, {members})
            .then(res => {

            })
            .catch(function (error) {
                console.log(error);
            })

    }
    
    
    render(){
    return(
        <div>
        <Home />
        <h1>{this.props.event.name}</h1>
        <Row>
            <Col md="8">
                <Card>
                    <CardHeader>
                        <h5 className="title">{this.props.event.name} </h5>
                    </CardHeader>
                    <CardBody>
                        <Form >
                            <Row>
                                <Col className="pr-md-1" md="6">
                                    <FormGroup>
                                        <label>Event Name</label>
                                        <Input
                                            defaultValue={this.props.event.name} 
                                            // onChange = {this.handleChange("name")}
                                            placeholder="Event Name"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-md-1" md="6">
                                    <FormGroup>
                                        <label>Event Date</label>
                                        <DatePicker
                                            defaultValue={this.props.event.date}
                                            // onChange={ this.handleDateChange }
                                            name="date"
                                            dateFormat="MM/dd/yyyy"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-md-1" md="6">
                                    <FormGroup>
                                        <label>Location</label>
                                        <Input
                                            defaultValue={this.props.event.location}
                                            // onChange = {this.handleChange("location")}
                                            placeholder="Location"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="pr-md-1" md="6">
                                    <FormGroup>
                                        <Button color="primary" type="submit"
                                         onClick = {this.handleKanban}>
                                             {this.props.event.name} Kanban
                                         </Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-md-1" md="6">
                                    <FormGroup>
                                        <label>Add your friend by email:</label>
                                        <Input
                                            defaultValue = {this.state.user} 
                                            onChange = {this.handleAddInput}
                                            placeholder="Enter your friend email"
                                            type="email"
                                            name="email"
                                        />
                                        <Button color = "primary" onClick = {this.handleAddUser}>
                                            Add Friend
                                        </Button>
                                        <Button color = "primary" onClick = {this.handleSubmmitUsers}>
                                            Submit Friends
                                        </Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button className="btn-fill" color="primary" type="submit"
                        // onClick = {this.handleSubmit}
                        >
                            Save
                        </Button>
                    </CardFooter>
                </Card>
            </Col>
            <Col md="4">
                <Card className="card-user">
                    <CardBody>
                        <div >
                            <img src = "https://ezadtech.com/wp-content/uploads/2019/03/chilled-cool-whatsapp-dp.jpg" width="256" height="256"/>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </div>
    )}
};

Event.getInitialProps = async function (context) {
  const { id } = context.query;
  let event = {};

  await axios.get(`http://localhost:8080/events/${id}`)
  .then(res => {
      event = res.data;

  })
  .catch(function (error) {
      console.log(error);
  })

  return {event};
}

export default Event;
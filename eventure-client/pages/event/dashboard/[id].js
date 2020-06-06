import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "../../../styles/deleteButton.css";

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
import Link from 'next/link';

import DateInput from '../../../components/DateInput';


class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: new Array(),
            addUsers: new Array(),
            user: '',
            added: [],
            newEventName: '',
            newEventLocation: '',
            newEventDate: new Date(),
            localStorageUserId: '',
            successDate: false,

        }
        this.handleSubmmitUsers = this.handleSubmmitUsers.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    handleAddInput = user => {
        this.setState({user: user.target.value});
    }
    handleAddUser = () => {
        let users = [];
        let _this = this;
        axios.get('http://localhost:8080/users/')
            .then(function (results) {
                for (let i = 0; i < results.data.length; i++) {
                    users.push(results.data[i].email);
                }
                _this.setState({allUsers: users});

            })
            .catch(function (error) {
                console.log(error);
            })
        this.state.added.push(this.state.user);
        this.setState({addUsers: this.state.added});
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
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    handleDateChange = date => {
        this.setState({
            newEventDate: date
        });
    }

    handleSubmit = () => {
        const name = this.state.newEventName;
        // const type = this.state.type;
        const date = this.state.newEventDate;
        const location = this.state.newEventLocation;
        let eventId = this.props.event._id;


        axios.put('http://localhost:8080/events/' + eventId, {name, date, location})
            .then(res => {

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleDelete = eventId => {
        axios.delete('http://localhost:8080/events/' + eventId);
        Router.push('/events/allEvents');
    }

    componentDidMount = () => {
        this.setState({localStorageUserId: JSON.parse(localStorage.getItem("id"))});
        this.setState({newEventName: this.props.event.name});
        this.setState({newEventDate: this.props.event.date});
        this.setState({newEventLocation: this.props.event.location});

    }

    render() {

        if (this.state.localStorageUserId === this.props.event.creator) {
            return (
                <div>
                    <Home/>
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h3 className="title">{this.state.newEventName} -{this.props.event.type} </h3>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Event Name</label>
                                                    <Input
                                                        defaultValue={this.state.newEventName}
                                                        onChange={this.handleChange('newEventName')}
                                                        placeholder="Event Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <label>Event Date</label>
                                                    <DateInput
                                                        defaultValue={this.state.newEventDate}
                                                        onChange={this.handleDateChange}
                                                        successDate={this.state.successDate}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Location</label>
                                                    <Input
                                                        defaultValue={this.state.newEventLocation}
                                                        onChange={this.handleChange('newEventLocation')}
                                                        placeholder="Location"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <Link href="/event/kanban/[id]"
                                                          as={`/event/kanban/${this.props.event.boardId}`}>
                                                        <Button>
                                                            {this.state.newEventName} Kanban
                                                        </Button>
                                                    </Link>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Add your friend by email:</label>
                                                    <Input
                                                        defaultValue={this.state.user}
                                                        onChange={this.handleAddInput}
                                                        placeholder="Enter your friend email"
                                                        type="email"
                                                        name="email"
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Button color="primary" onClick={this.handleAddUser}>
                                                        Add Friend
                                                    </Button>
                                                    {' '}
                                                    <Button color="primary" onClick={this.handleSubmmitUsers}>
                                                        Submit Friends
                                                    </Button>
                                                </FormGroup>

                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill" color="primary" type="submit"
                                            onClick={this.handleSubmit}>
                                        Save
                                    </Button>
                                    {' '}
                                    <Button className="btnDelete" onClick={() => {
                                        if (window.confirm('Are you sure you wish to delete this event ?'))
                                            this.handleDelete(this.props.event._id)
                                    }}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                        Delete
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody>
                                    <div>
                                        <img
                                            src="https://ezadtech.com/wp-content/uploads/2019/03/chilled-cool-whatsapp-dp.jpg"
                                            width="256" height="256"/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            );
        } else {
            return (
                <div>
                    <Home/>
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h3 className="title">{this.state.newEventName} -{this.props.event.type} </h3>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Event Name</label>
                                                    <Input
                                                        disabled
                                                        defaultValue={this.state.newEventName}
                                                        placeholder="Event Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <label>Event Date</label>
                                                    <DateInput
                                                        defaultValue={this.state.newEventDate}
                                                        onChange={this.handleDateChange}
                                                        successDate={this.state.successDate}
                                                    ></DateInput>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Location</label>
                                                    <Input
                                                        disabled
                                                        defaultValue={this.state.newEventLocation}
                                                        placeholder="Location"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody>
                                    <div>
                                        <img
                                            src="https://ezadtech.com/wp-content/uploads/2019/03/chilled-cool-whatsapp-dp.jpg"
                                            width="256" height="256"/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            );
        }

    };
}

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

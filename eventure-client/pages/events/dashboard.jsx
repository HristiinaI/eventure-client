import * as React from 'react';
import Home from '../home';


import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
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
import {useRouter} from "next/router";


class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            eventName: '',
            type: '',
            date: new Date(),
            location: '',
        }
    }

    router = useRouter();

    componentDidMount() {
        const name = localStorage.getItem('eventName');

        console.log(name);

        axios.get('http://localhost:8080/events/' + name)
            .then(res => {
                this.setState({ id: res.data._id });
                console.log(this.state.id);
                this.setState({ name: res.data.name });
                // localStorage.setItem('eventName', res.data.name);
                this.setState({ type: res.data.type });
                this.setState({ date: res.data.date });
                this.setState({ location: res.data.location });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    handleDateChange = date => e => {
        this.setState({[date]: e});
    };

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state.eventName);

        const id = this.state.id;
        const name = this.state.eventName;
        const type = this.state.type;
        const date = this.state.startDate;
        const location = this.state.location;
        console.log(name);

      //  localStorage.setItem('eventName', name);

        //console.log(id);
        console.log(name);
        axios.put('http://localhost:8080/events/' + id, { name, type, date, location})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="content">
                <Home />
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">{this.state.name} </h5>
                            </CardHeader>
                            <CardBody>
                                <Form >
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Event Name</label>
                                                <Input
                                                    defaultValue={this.state.name} onChange = {this.handleChange("name")}
                                                    placeholder="First Name"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="6">
                                            <FormGroup>
                                                <label>Event Date</label>
                                                <DatePicker
                                                    defaultValue={this.state.date}
                                                    onChange={ this.handleDateChange }
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
                                                    defaultValue={this.state.location} onChange = {this.handleChange("location")}
                                                    placeholder="Location"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        {/*<Col md="8">*/}
                                        {/*    <FormGroup>*/}
                                        {/*        <label>About Me</label>*/}
                                        {/*        <Input*/}
                                        {/*            cols="80"*/}
                                        {/*            // defaultValue={this.state.about}*/}
                                        {/*            // onChange = {this.onAboutChanged}*/}
                                        {/*            placeholder="Say something about you here :)"*/}
                                        {/*            rows="4"*/}
                                        {/*            type="textarea"*/}
                                        {/*        />*/}
                                        {/*    </FormGroup>*/}
                                        {/*</Col>*/}
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color="primary" type="submit" onClick = {this.handleSubmit}>
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
        );
    }
}

export default Dashboard;

import { useRouter } from 'next/router'
import Header from '../../../components/events/Header'
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

const Event = props => (
    <div>
    <Home />
    <h1>{props.event.name}</h1>
    <Row>
        <Col md="8">
            <Card>
                <CardHeader>
                    <h5 className="title">{props.event.name} </h5>
                </CardHeader>
                <CardBody>
                    <Form >
                        <Row>
                            <Col className="pr-md-1" md="6">
                                <FormGroup>
                                    <label>Event Name</label>
                                    <Input
                                        defaultValue={props.event.name} 
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
                                        defaultValue={props.event.date}
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
                                        defaultValue={props.event.location}
                                        // onChange = {this.handleChange("location")}
                                        placeholder="Location"
                                        type="text"
                                    />
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
);

Event.getInitialProps = async function (context) {
  const { id } = context.query;
  let event = {};
  
  console.log("asdf");

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
import React, { Component } from 'react';
import { Input, FormGroup } from 'reactstrap';

class DataTable extends Component {
    render() {
        return (
           <Form>
                <FormGroup>
                    <Input defaultValue = {this.props.obj.email} />
                </FormGroup>
                <FormGroup>
                    <Input defaultValue = {this.props.obj.firstName} />
                </FormGroup>
                <FormGroup>
                    <Input defaultValue = {this.props.obj.lastName} />
                </FormGroup>
                    <FormGroup>
                    <Input defaultValue = {this.props.obj.type} />
                </FormGroup>
                    <FormGroup>
                    <Input defaultValue = {this.props.obj.country} />
                </FormGroup>
                    <FormGroup>
                    <Input defaultValue = {this.props.obj.education} />
                </FormGroup>
                    <FormGroup>
                    <Input defaultValue = {this.props.obj.education} />
                </FormGroup>
                    <FormGroup>
                    <Input defaultValue = {this.props.obj.about} />
            </FormGroup>   
           </Form>
        );
    }
}

export default DataTable;
/*             <tr>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.firstName}
                </td>
                <td>
                    {this.props.obj.lastName}
                </td>
                <td>
                    {this.props.obj.type}
                </td>
                <td>
                    {this.props.obj.country}
                </td>
                <td>
                    {this.props.obj.education}
                </td>
                <td>
                    {this.props.obj.workplace}
                </td>
                <td>
                    {this.props.obj.about}
                </td>
            </tr>*/
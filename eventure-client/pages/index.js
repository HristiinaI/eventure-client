import React from 'react'
import axios from 'axios'
// import ReactTable from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "../components/form"

const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  }
]

const data = [
  {
    name: 'Stan Lee',
    review: 'This movie was awesome',
    rating: '9.5'
  }
]

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: data
    }
  }

  handleFormSubmit (data) {
    axios.post('http://localhost:8080', data)
    .then(res => {
      console.log('received by server')
    })
    .catch(error => {
      throw error
    })
  }

  render () {
    return (
      <div>
        <Form handleFormSubmit={this.handleFormSubmit.bind(this)} />
        {/* <ReactTable
          data={this.state.data}
          columns={columns}
          defaultPageSize={10}
        /> */}
      </div>
    )
  }
}
// const Index = () => (
// <Form>Welcome to WHATABYTE!</Form>
// )

// export default Index;


import React from 'react';
import { Button, Modal, Row, Col, Form} from 'react-bootstrap'
import data from './CompanyData'
import api from '../../api'

class PostJobModal extends React.Component {
  constructor(props)
  {
    super(props)
  }

  handleSubmit(event){
    event.preventDefault();
    //alert(event.target.jobName.value) //Prints out the name as an alert

    const jobData = {
      jobID: null,
      jobTitle: event.target.jobName.value,
      jobDescription: event.target.jobDescription.value, 
      jobRequirements: event.target.jobRequirements.value,
      jobLink: event.target.jobRequirements.value
    }

    console.log("Post Modal Logging: ",jobData);

    api.postJob(jobData);
    

    // fetch('http://localhost:3000/CompanyProfile'),{
    //   method:'POST',
    //   headers:{
    //     'Accept' : 'application/json',
    //     'Content-Type' : 'application/json'
    //   },
    //   body: JSON.stringify({
    //     jobID: null,
    //     jobTitle: event.target.jobName.value,
    //     jobDescription: event.target.jobDescription.value,
    //     jobRequirements: event.target.jobRequirements.value,
    //   })
    // }

  }

  render(){

    console.log("Post Job Modal" , this.props.collectionId)
  
  return (
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily: 'Montserrat'}}>Add New Job Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
              <Form onSubmit={this.handleSubmit} style={{fontFamily: 'GlacialIndifferenceRegular'}}> {/*Form for New Job Post Information*/}
                <Form.Group controlId="JobPostID">
                <Form.Label>Job Name</Form.Label>
                <Form.Control
                type="text"
                name="jobName"
                required
                placeholder="Type New Job Name"/>
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                type="text"
                name="jobDescription"
                required
                placeholder="Type New Job Description"/>
                <Form.Label>Job Requirements</Form.Label>
                <Form.Control
                type="text"
                name="jobRequirements"
                required
                placeholder="Type New Job Requirements"/>
                <Form.Label>Job Link</Form.Label>
                <Form.Control
                type="text"
                name="jobLink"
                required
                placeholder="Type New Job Link"/>
                </Form.Group>
                <Form.Group>
                <Button variant="primary" type="submit">Add Job</Button>
                </Form.Group>
              </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  }

}

export default PostJobModal;
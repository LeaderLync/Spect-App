import React from 'react';
import { Button, Modal, Form} from 'react-bootstrap'
import api from '../../api'
const uuid = require('uuid/v4')


class PostJobModal extends React.Component {
  constructor(props)
  {
    super(props)
  }
  
  //Allows button use both the update job method and close at the same time
  doboth() {
    this.updateNewJob()
    this.props.onHide()
  }

  updateNewJob(){ 
    //New job variable based on the user inserts into the form
    const newJob = {
      "jobID":uuid(),
      "jobTitle":this.refs.jobTitle.value,
      "jobDescription":this.refs.jobDescription.value,
      "jobRequirements":this.refs.jobRequirements.value,
      "jobLink" : this.refs.jobLink.value
    }

    //newData will be the new array of jobs with the new job added at the end of the current list
    const newData = this.props.jobs.concat(newJob);

    //Reverts value of forms inputs back to empty
    this.refs.jobTitle.value = '';
    this.refs.jobDescription.value = '';
    this.refs.jobRequirements.value = '';
    this.refs.jobLink.value = '';

    const payload = {
    jobs: newData,
    collectionid: this.props.collectionId
    }

    //Passes the new job array along with the company ID to the api call, to update on the back-end side
    api.updateJob(payload);

    //Passes the new job array to the company profile to update on the front-end side
    this.props.updateNewJob(newData);

  }

  render(){
  
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
              <Form style={{fontFamily: 'GlacialIndifferenceRegular'}}> {/*Form for New Job Post Information*/}
                <Form.Group controlId="JobPostID">
                <Form.Label>Job Name</Form.Label>
                <Form.Control
                type="text"
                ref="jobTitle"
                required
                placeholder="Type New Job Title"/>
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                type="text"
                ref="jobDescription"
                required
                placeholder="Type New Job Description"/>
                <Form.Label>Job Requirements</Form.Label>
                <Form.Control
                type="text"
                ref="jobRequirements"
                required
                placeholder="Type New Job Requirements"/>
                <Form.Label>Job Link</Form.Label>
                <Form.Control
                type="text"
                ref="jobLink"
                required
                placeholder="Type New Job Link"/>
                </Form.Group>
                <Form.Group>
                <Button variant="primary" 
                //Makes sure all fields have been filled in prior to completing change
                onClick={() => {if (this.refs.jobTitle.value !== '' && this.refs.jobDescription.value !== '' && this.refs.jobLink.value !== '' && this.refs.jobTitle.value !== '') this.doboth()}} 
                type="submit">Add Job</Button>
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
import React from 'react';
import { Button, Modal, Row, Col, Form} from 'react-bootstrap'
import data from './CompanyData'
import api from '../../api'
const uuid = require('uuid/v4')


class PostJobModal extends React.Component {
  constructor(props)
  {
    super(props)

    console.log(props.jobs)

    // props.jobs = props.jobs.bind(this)
  }
  doboth() {
    this.updateNewJob()
    this.props.onHide()
  }

  //Will just update the entire jobPost Field inside mogo after
  updateNewJob(){ 
    const newJob = {
      "jobID":uuid(),
      "jobTitle":this.refs.jobTitle.value,
      "jobDescription":this.refs.jobDescription.value,
      "jobRequirements":this.refs.jobRequirements.value,
      "jobLink" : this.refs.jobLink.value
    }

    console.log(newJob);
    console.log("Job ID" , newJob.jobID);
    const newData = this.props.jobs.concat(newJob);
    console.log(newData);

    this.refs.jobTitle.value = '';
    this.refs.jobDescription.value = '';
    this.refs.jobRequirements.value = '';
    this.refs.jobLink.value = '';

    const payload = {
           jobs: newData,
           collectionid: this.props.collectionId
    }
    api.updateJob(payload);

    this.props.updateNewJob(newData);

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
                <Button variant="primary" onClick={() => {if (this.refs.jobTitle.value !== '') this.doboth()}} type="submit">Add Job</Button>
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
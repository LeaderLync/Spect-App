import React from 'react';
import { Button, Modal, Row, Col, Form} from 'react-bootstrap'
import data from './CompanyData'
import api from '../../api'


class RemoveModal extends React.Component {
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

  updateNewJob(){
      console.log("Job ID", this.props.jobID)
      const jobID = this.props.jobID;
      console.log("Company ID", this.props.collectionId)
      console.log("Jobs", this.props.jobs)

      const updatedJobs = this.props.jobs.filter(job => jobID != job.jobID)
      console.log(updatedJobs)

      const payload = {
        jobs: updatedJobs,
        collectionid: this.props.collectionId
    }
        api.updateJob(payload);

        this.props.updateNewJob(updatedJobs);
  }

  render(){

    console.log("Remove Job Modal" , this.props.collectionId)
    console.log("Remove Job Modal Job ID" , this.props.jobID)
  
  return (
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily: 'Montserrat'}}>Remove Job Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          Are you sure you wish to remove this job post?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => this.doboth() }>Remove</Button>
      </Modal.Footer>
    </Modal>
  );

  }

}

export default RemoveModal;
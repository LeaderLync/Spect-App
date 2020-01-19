import React from 'react';
import { Button, Modal} from 'react-bootstrap'
import api from '../../api'

class RemoveModal extends React.Component {
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
      
    //Variable for jobID of the selected job to be removed
    const jobID = this.props.jobID;

    //Filters the list of current jobs and creates a new list with all jobs except the one specified for removal
    const updatedJobs = this.props.jobs.filter(job => jobID != job.jobID)

    const payload = {
        jobs: updatedJobs,
        collectionid: this.props.collectionId
    }
    
    //Passes the new job array along with the company ID to the api call, to update on the back-end side
    api.updateJob(payload);

    //Passes the new job array to the company profile to update on the front-end side
    this.props.updateNewJob(updatedJobs);

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
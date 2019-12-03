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

  //Will just update the entire jobPost Field inside mogo after
  updateNewJob(){ 
      console.log("HEY")
    // const newData = this.props.jobs.filter(directory => id);
    // console.log(newData);

    // const payload = {
    //        jobs: newData,
    //        collectionid: this.props.collectionId
    // }
   // api.postJob(payload);

    // this.props.removeJobPost(newData);

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
          <Button variant="primary" onClick={() => this.updateNewJob() }  type="submit">Remove</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => this.updateNewJob() }>Remove</Button>
      </Modal.Footer>
    </Modal>
  );

  }

}

export default RemoveModal;
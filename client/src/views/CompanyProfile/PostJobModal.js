import React from 'react';
import { Button, Modal, Row, Col, Form} from 'react-bootstrap'
import data from './CompanyData'

class PostJobModal extends React.Component {
  constructor(props)
  {
    super(props)
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
        <Modal.Title id="contained-modal-title-vcenter">Add New Job Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
        <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlID="JobPostID">
                <Form.Label>Job Name</Form.Label>
                <Form.Control
                type="text"
                name="Job Name"
                required
                placeholder="Type New Job Name"/>
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                type="text"
                description="Job Description"
                required
                placeholder="Type New Job Description"/>
                <Form.Label>Job Requirements</Form.Label>
                <Form.Control
                type="text"
                description="Job Requirements"
                required
                placeholder="Type New Job Requirements"/>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  }

}

export default PostJobModal;
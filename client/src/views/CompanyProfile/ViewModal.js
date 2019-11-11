import React from 'react';
import { Button, Modal, ModalBody, ModalTitle} from 'react-bootstrap'
import data from './CompanyData'

class ViewModal extends React.Component {
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter"> 
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {data[0].jobPost[0].jobTitle}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Job Description: {data[0].jobPost[0].jobDescription}
                </p>
                <p>
                    Job Requirments: {data[0].jobPost[0].jobRequirements}
                </p>
                <p>
                    Job Link: {data[0].jobPost[0].jobLink}
                </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          );
    }
}

export default ViewModal;
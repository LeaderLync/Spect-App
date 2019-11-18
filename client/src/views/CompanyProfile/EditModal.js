import React from 'react'
import { Button, Modal, ModalBody, ModalTitle} from 'react-bootstrap'
import data from './CompanyData'


class EditModal extends React.Component
{
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
                        Edit Job Post: {data[0].jobPost[0].jobTitle}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <p>
                                Job Name
                            </p>
                            <input type="text" 
                                placeholder= "Type New Job Name...">
                            </input>
                            <p>
                                Job Description
                            </p>
                            <input type="text"
                                placeholder= "Type New Job Description...">
                            </input>
                            <p>
                                Job Requirements
                            </p>
                            <input type="text"
                                placeholder= "Type New Job Requirements...">
                            </input>
                            <p>
                                Job Link
                            </p>
                            <input type="text" 
                                placeholder= "Type New Job Link...">
                            </input>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={props.onHide}>Close</Button>
                        <Button variant="primary" onClick={props.onHide}>Save</Button>
                    </Modal.Footer>
                    </Modal>
            );
    }
}

export default EditModal
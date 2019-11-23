import React from 'react';
import './CompanyProfile.css';
import Modal from '@material-ui/core/Modal';
import { Image, CardGroup, Card, Container, Button, ButtonToolbar} from 'react-bootstrap'

export default (props) => {
  return (
      <Modal
        aria-labelledby="simple-modal-title"
		aria-describedby="simple-modal-description"
		open={props.show}
		onClose={props.onHide}

      >
        <div className="modalpaper">
		<Card border="primary" bg="light" style={{margin: '2px'}} >
                                        <Card.Header style={{fontFamily: 'Montserrat'}}>Job Post</Card.Header>
                                        <Card.Body>
                                        <Card.Title style={{fontFamily: 'Montserrat'}}>{props.jobTitle}</Card.Title>
                                        <Card.Text style={{fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal'}}>
                                            Job Description: {props.jobDescription.substring(0,48)}...
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => this.setState({setEditShow : true})} style={{margin: '2px', fontFamily: 'GlacialIndifferenceRegular' }}>Edit</Button>
                                        {/* <EditModal // edit job post modal
                                        show={this.state.setEditShow}
                                        onHide={editJobModalClose}
                                        /> */} 
                                        <Button variant="primary" onClick={() => this.setState({setViewShow : true})} style={{margin: '2px', fontFamily: 'GlacialIndifferenceRegular'}}>View</Button>
                                        </Card.Body>
                                    </Card>
        </div>
      </Modal>
  );
}

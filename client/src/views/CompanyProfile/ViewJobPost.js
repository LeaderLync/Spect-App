import React from 'react';
import './CompanyProfile.css';
import Modal from '@material-ui/core/Modal';
import { Image, CardGroup, Card, Container, Button, ButtonToolbar } from 'react-bootstrap'

export default (props) => {
  let jobPost = props.jobPost;
  console.log(jobPost);
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.show}
      onClose={props.onHide}
    >
      <div className="modalpaper">
        <Card border="primary" bg="light" style={{ margin: '2px' }} >
          <Card.Header style={{ fontFamily: 'Montserrat' }}>Job ID: {jobPost.jobID}</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontFamily: 'Montserrat' }}>{jobPost.jobTitle}</Card.Title>
            <Card.Text style={{ fontFamily: 'GlacialIndifferenceRegular', fontStyle: 'normal' }}>
              Job Description: {jobPost.jobDescription}
            </Card.Text>
            <Card.Text style={{ fontFamily: 'GlacialIndifferenceRegular', fontStyle: 'normal'}}>
              <strong>Job Requirements:</strong> {jobPost.jobRequirements}
            </Card.Text>
            <Card.Text style={{ fontFamily: 'GlacialIndifferenceRegular', fontStyle: 'normal' }}>
              Job Link: <a href={"http://"+jobPost.jobLink}>{jobPost.jobLink}</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Modal>
  );
}

import React from 'react';
import { Button, Modal, Form, Card, CardGroup, Container} from 'react-bootstrap'
import api from '../../api'
import SkillSelector from '../../components/SkillSelector/SkillSelector'
const uuid = require('uuid/v4')


class AdminJobEdit extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      skills: {},
      jobs: this.props.userinfo.jobPosts
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getStrongSkills = (skills) => {this.setState({skills: skills}, /*console.log(skills)*/)}

  //Allows button use both the update job method and close at the same time
  doboth() {
    this.updateNewJob()
    this.props.onHide()
  }

  handleSubmit(event){
    event.preventDefault();
    //New job variable based on the user inserts into the form
    const newJob = {
      "jobID":uuid(),
      "jobTitle":this.refs.jobTitle.value,
      "jobDescription":this.refs.jobDescription.value,
      "jobRequirements":this.refs.jobRequirements.value,
      "jobLink" : this.refs.jobLink.value,
      "jobSkills": this.state.skills
    }

    //newData will be the new array of jobs with the new job added at the end of the current list
    const newData = this.props.userinfo.jobPosts.concat(newJob);

    //Reverts value of forms inputs back to empty
    this.refs.jobTitle.value = '';
    this.refs.jobDescription.value = '';
    this.refs.jobRequirements.value = '';
    this.refs.jobLink.value = '';

    const payload = {
    jobs: newData,
    collectionid: this.props.userinfo.id
    }
    //Passes the new job array along with the company ID to the api call, to update on the back-end side
    api.updateJob(payload).then(response => {
      //this.props.addClose();
    });

    //Passes the new job array to the company profile to update on the front-end side
    this.setState({
      jobs: newData
    })

  }

  render(){
  const cardList = this.state.jobs.map(function(jobPost)
      {
          return(
              <Container
              //Using the jobPost ID as the key
              key={jobPost.jobID}>
                  <div>
                      <div>
                          <CardGroup>
                              <Card bg="light" style={{margin: '2px'}} >
                                  <Card.Header style={{fontFamily: 'Montserrat'}}>Job Post</Card.Header>
                                  <Card.Body>
                                  <Card.Title style={{fontFamily: 'Montserrat'}}>{jobPost.jobTitle}</Card.Title> {/*Job Title is pulled from test.company collection in mongoDB*/}
                                  <Card.Text style={{fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal'}}>
                                      Job Description: {jobPost.jobDescription} {/*Job Description is pulled from test.company collection in mongoDB*/}
                                  </Card.Text>
                                  <Card.Text style={{fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal'}}>
                                      Job Requirements: {jobPost.jobRequirements} {/*Job Description is pulled from test.company collection in mongoDB*/}
                                  </Card.Text>
                                  <Card.Text style={{fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal'}}>
                                      Job Link: {jobPost.jobLink} {/*Job Description is pulled from test.company collection in mongoDB*/}
                                  </Card.Text>
                                  {/*<Button variant="danger" onClick={() => {this.setState({setRemoveShow : true}); this.updateSelectedJobPost(jobPost);}} style={{margin: '2px', fontFamily: 'GlacialIndifferenceRegular' }}>Remove</Button>*/}
                                  </Card.Body>
                              </Card>
                          </CardGroup>
                      </div>
                  </div>
              </Container>
          )
      }.bind(this))

  return (
    <div>
      <Form onSubmit={this.handleSubmit} style={{fontFamily: 'GlacialIndifferenceRegular'}}> {/*Form for New Job Post Information*/}
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
        <Form.Label>Pick top 3 important soft skills:</Form.Label>
        <SkillSelector passToParent={this.getStrongSkills}/>
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
        /*onClick={() => {if (this.refs.jobTitle.value !== '' && this.refs.jobDescription.value !== '' && this.refs.jobLink.value !== '' && this.refs.jobTitle.value !== '') this.doboth()}}*/
        type="submit">Add Job</Button>
        </Form.Group>
      </Form>
      {cardList}
    </div>
  );

  }

}

export default AdminJobEdit;

import React from 'react';
import './CompanyProfile.css'
import data from './CompanyData'
import PostJobModal from './PostJobModal'
import ViewJobPost from './ViewJobPost'
import RemoveModal from './RemoveModal'
import Navbar from '../../components/Navbar/Navbar'
import ReactLoading from 'react-loading'
import { CardGroup, Card, Container, Button, ButtonToolbar} from 'react-bootstrap'


class CompanyProfile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.updateSelectedJobPost = this.updateSelectedJobPost.bind(this);
        this.state =
        {
            jobs: this.props.userinfo.jobPosts,
            postModalShow: false,
            setRemoveShow: false,
            setViewShow: false,
            collectionid: this.props.userinfo.id,
            // idea, have a selected job to pass to the view/edit modal:
            selectedJobPost: data[0].jobPost[0],
        }
    }

    updateSelectedJobPost(jobPost){ this.setState({selectedJobPost: jobPost})};

    updateNewJob(newJobs) {
        //Updates the current jobs with the newJobs array passed in from either remove job or post job
        this.setState({
          jobs: newJobs
        })
        var newUserInfo = this.props.userinfo;
        newUserInfo.jobPosts = newJobs;
        this.props.userInfoUpdate(newUserInfo);
      }

    render() {
       //Displays a loading screen while the page loads
       if (this.props.userinfo === null) {
         return (<div style={{margin: '0 auto'}}><ReactLoading type="spin" color="#28a4eb" height={"10%"} width={"10%"} className="the-loader"/></div>)
       }
        let postModalClose = () => this.setState({postModalShow: false});
        let removeJobModalClose = () => this.setState({setRemoveShow: false});
        let viewJobModalClose = () => this.setState({setViewShow : false});

        //Variable that represents the list of job post for a specific company
        //Based on the jobPost of the Schema for the Company, a new card is made
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
                                            Job Description: {jobPost.jobDescription.substring(0,48)}... {/*Job Description is pulled from test.company collection in mongoDB*/}
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => {this.setState({setRemoveShow : true}); this.updateSelectedJobPost(jobPost);}} style={{margin: '2px', fontFamily: 'GlacialIndifferenceRegular' }}>Remove</Button>
                                        <Button variant="primary" onClick={() => {this.setState({setViewShow : true}); this.updateSelectedJobPost(jobPost);}} style={{margin: '2px', fontFamily: 'GlacialIndifferenceRegular'}}>View</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        </div>
                    </Container>
                )
            }.bind(this))

            return(
                <div>
                    <Navbar isStudent={this.props.isStudent}/>
                    <div className="info-rectangle">
                        <h3 className="company-name">{this.props.userinfo.companyName}</h3> {/*Company Name, styled by CompanyProfile.css page*/}
                        <img src={this.props.avatarURL} className="logo-border" /> {/*Company Logo imported from assets, styled by CompanyProfile.css page*/}
                    </div>
                    <div>
                        <h4 style={{fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal' , fontSize: '1.5vw'}}>Recently Posted Content and Resources</h4>
                        <ButtonToolbar style={{justifyContent: 'flex-end', marginRight: '5%'}}>
                            <Button
                            style={{fontFamily: 'GlacialIndifferenceRegular'}}
                            variant="primary"
                            onClick={() => this.setState({postModalShow: true})}>Post Job</Button>
                            <PostJobModal
                            //Allows the modal to pop up on screen
                            show={this.state.postModalShow}
                            //Allows the modal to close
                            onHide={postModalClose}
                            //Function to update newJob on the front-end/back-end
                            updateNewJob={this.updateNewJob.bind(this)}
                            //Passes the current list of jobs onto the Post Job Modal
                            jobs={this.state.jobs}
                            //Passes the company ID to be used for api call
                            collectionId={this.state.collectionid}/>
                        </ButtonToolbar>
                        <CardGroup>
                            {cardList}

                        </CardGroup>
                        <ViewJobPost // view job post modal
                        //Allows the modal to pop up on screen
                        show={this.state.setViewShow}
                        //Allows the modal to close
                        onHide={viewJobModalClose}
                        //Passes the specific job selected by the user
                        jobPost={this.state.selectedJobPost}
                        />
                        <RemoveModal // edit job post modal
                        //Allows the modal to pop up on screen
                        show={this.state.setRemoveShow}
                        //Passes the specific job ID selected by the user
                        jobID={this.state.selectedJobPost.jobID}
                        //Passes the current list of jobs on to the Remove Modal
                        jobs={this.state.jobs}
                        //Fuction to update removedJob on the front-end/back-end
                        updateNewJob={this.updateNewJob.bind(this)}
                        //Allows the modal to close
                        onHide={removeJobModalClose}
                        //Passes the company ID to be used for api call
                        collectionId={this.state.collectionid}
                        />
                    </div>
                 </div>
            )
    }

}
export default CompanyProfile

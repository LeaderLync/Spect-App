import React from 'react';
import './CompanyProfile.css'
import data from './CompanyData'
import PostJobModal from './PostJobModal'
import ViewJobPost from './ViewJobPost'
import RemoveModal from './RemoveModal'

import sampleImage from '../../assets/Company Logo.png'
import leadership from '../../assets/Leadership Icon.png'
import Navbar from '../../components/Navbar/Navbar'
import api from '../../api'

import { Image, CardGroup, Card, Container, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'


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
            collectionid: this.props.collectionId,
            // idea, have a selected job to pass to the view/edit modal:
            selectedJobPost: data[0].jobPost[0],
        }
    }
    
    updateSelectedJobPost(jobPost){ this.setState({selectedJobPost: jobPost})};   

    updateNewJob(newJobs) {
        this.setState({
          jobs: newJobs
        })
      }
    
    render() {
        // console.log("about to log props")
        // console.log(this.state.collectionid)
        // console.log("Top Info: ")
        console.log("Jobs HERE", this.state.selectedJobPost.jobID)
        // console.log(this.props.userinfo.topSkills[0])

        console.log(this.props);
        let postModalClose = () => this.setState({postModalShow: false});
        let removeJobModalClose = () => this.setState({setRemoveShow: false});
        let viewJobModalClose = () => this.setState({setViewShow : false});

        console.log(this.state.jobs)
       // let postModalClose = () => this.setState({postModalShow: false})

        //Variable that represents the list of job post for a specific company
        //Based on the jobPost of the Schema for the Company, a new card is made
        const cardList = this.state.jobs.map(function(jobPost)
            {
                return(
                    <Container key={jobPost.jobID}>
                        <div> 
                            <div>
                                <CardGroup>
                                    <Card bg="light" style={{margin: '2px'}} >
                                        <Card.Header style={{fontFamily: 'Montserrat'}}>Job Post</Card.Header>
                                        <Card.Body>
                                        <Card.Title style={{fontFamily: 'Montserrat'}}>{jobPost.jobTitle}</Card.Title>
                                        <Card.Text style={{fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal'}}>
                                            Job Description: {jobPost.jobDescription.substring(0,48)}...
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
            }.bind(this)) // TODO: check this guy out

            return(
                <div>
                    <Navbar isStudent={this.props.isStudent}/>
                    <div className="info-rectangle">
                        <h3 className="company-name">{this.props.userinfo.companyName}</h3> {/*Company Name, styled by CompanyProfile.css page*/}
                        <img src={sampleImage} className="logo-border" /> {/*Company Logo imported from assets, styled by CompanyProfile.css page*/}
                        <div className='topSkills'>
                            <h5 style={{textAlign: "center", marginTop: "5px", textShadow: "black", fontSize: "2vw", backgroundColor: "whitesmoke", fontFamily: 'Montserrat', color: 'black'}}>Top Three Desired Skills</h5>
                            <body style={{textAlign: "center", marginTop: "5px", textShadow: "black", fontSize: "1.5vw", backgroundColor: "whitesmoke", fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal', color: 'black'}}>
                                {this.props.userinfo.strongSkills.first} | {"    "}
                                {this.props.userinfo.strongSkills.second} | {" "}
                                {this.props.userinfo.strongSkills.third}  {" "}
                            </body>
                        </div>
                    </div>
                    <div>
                        <h4 style={{fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal' , fontSize: '1.5vw'}}>Recently Posted Content and Resources</h4> 
                        <ButtonToolbar style={{justifyContent: 'flex-end', marginRight: '5%'}}>
                            <Button
                            style={{fontFamily: 'GlacialIndifferenceRegular'}}
                            variant="primary"
                            onClick={() => this.setState({postModalShow: true})}>Post Job</Button>
                            <PostJobModal
                            show={this.state.postModalShow}
                            onHide={postModalClose}
                            updateNewJob={this.updateNewJob.bind(this)}
                            jobs={this.state.jobs}
                            collectionId={this.state.collectionid}/>
                        </ButtonToolbar>
                        <CardGroup>
                            {cardList}
                            
                        </CardGroup>
                        <ViewJobPost // view job post modal
                        show={this.state.setViewShow}
                        onHide={viewJobModalClose}
                        jobPost={this.state.selectedJobPost}
                        />
                        <RemoveModal // edit job post modal
                        show={this.state.setRemoveShow}
                        jobID={this.state.selectedJobPost.jobID}
                        jobs={this.state.jobs}
                        updateNewJob={this.updateNewJob.bind(this)}
                        onHide={removeJobModalClose}
                        collectionId={this.state.collectionid}
                        /> 
                    </div>
                 </div>
            )
    }

}
export default CompanyProfile
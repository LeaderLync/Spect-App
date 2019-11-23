import React from 'react';
import './CompanyProfile.css'
import data from './CompanyData'
import PostJobModal from './PostJobModal'
import ViewJobPost from './ViewJobPost'
//import EditModal from './EditModal'

import sampleImage from '../../assets/Company Logo.png'
import leadership from '../../assets/Leadership Icon.png'
import Navbar from '../../components/Navbar/Navbar'

import { Image, CardGroup, Card, Container, Button, ButtonToolbar} from 'react-bootstrap'


class CompanyProfile extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            jobs: data[0].jobPost,
            postModalShow: false,
            seteditShow: false,
            setViewShow: false,
            // idea, have a selected job to pass to the view/edit modal:
            selectedJobPost: data[0].jobPost,
        }
    }
    
    render() {

        //console.log(this.state.jobs);
        let postModalClose = () => this.setState({postModalShow: false});
        let viewJobModalClose = () => this.setState({setViewShow : false});
        let updateSelectedJobPost = (jobPost) => this.setState({selectedJobPost: jobPost});

        //Variable that represents the list of job post for a specific company
        //Based on the jobPost of the Schema for the Company, a new card is made
        const cardList = this.state.jobs.map(jobPost => 
            {
                return(
                    <Container key={jobPost.jobID}>
                        <div> 
                            <div>
                                <CardGroup>
                                    <Card border="primary" bg="light" style={{margin: '2px'}} >
                                        <Card.Header style={{fontFamily: 'Montserrat'}}>Job Post</Card.Header>
                                        <Card.Body>
                                        <Card.Title style={{fontFamily: 'Montserrat'}}>{jobPost.jobTitle}</Card.Title>
                                        <Card.Text style={{fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal'}}>
                                            Job Description: {jobPost.jobDescription.substring(0,48)}...
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => this.setState({setEditShow : true})} style={{margin: '2px', fontFamily: 'GlacialIndifferenceRegular' }}>Edit</Button>
                                        {/* <EditModal // edit job post modal
                                        show={this.state.setEditShow}
                                        onHide={editJobModalClose}
                                        /> */} 
                                        <Button variant="primary" onClick={(jobPost) => {this.setState({setViewShow : true}); updateSelectedJobPost(jobPost)}} style={{margin: '2px', fontFamily: 'GlacialIndifferenceRegular'}}>View</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        </div>
                    </Container>
                );

            })

            return(
                <div>
                    <Navbar>
                    </Navbar>
                    <div className="info-rectangle">
                        <h3 className="company-name">{data[0].name}</h3> {/*Company Name, styled by CompanyProfile.css page*/}
                        <img src={sampleImage} className="logo-border" /> {/*Company Logo imported from assets, styled by CompanyProfile.css page*/}
                        <div className='topSkills'>
                            <h5 style={{textAlign: "center", marginTop: "5px", textShadow: "black", fontSize: "2vw", backgroundColor: "whitesmoke", fontFamily: 'Montserrat'}}>Top Three Desired Skills</h5>
                            <body style={{textAlign: "center", marginTop: "5px", textShadow: "black", fontSize: "1vw", backgroundColor: "whitesmoke", fontFamily: 'GlacialIndifferenceRegular', fontWeight: 'normal', fontStyle: 'normal'}}>
                                Skill 1: {data[0].topSkills[0]} | {"    "}
                                Skill 2: {data[0].topSkills[1]} | {" "}
                                Skill 3: {data[0].topSkills[2]}  {" "}
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
                            onHide={postModalClose}/>
                        </ButtonToolbar>
                        <CardGroup>
                            {cardList}
                            
                        </CardGroup>
                        <ViewJobPost // view job post modal
                        show={this.state.setViewShow}
                        onHide={viewJobModalClose}
                        jobPost={this.selectedJobPost}
                        />
                    </div>
                 </div>
            )

    }

}
export default CompanyProfile
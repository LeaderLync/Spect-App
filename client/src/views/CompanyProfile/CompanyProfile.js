import React from 'react';
import './CompanyProfile.css'
import data from './CompanyData'
import PostJobModal from './PostJobModal'

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
            editShow: false,
        }
    }
    
    render() {

        console.log(this.state.jobs)
        let postModalClose = () => this.setState({postModalShow: false})

        //Variable that represents the list of job post for a specific company
        //Based on the jobPost of the Schema for the Company, a new card is made
        const cardList = this.state.jobs.map(company => 
            {
                return(
                    <Container key={company.jobID}>
                        <div> 
                            <div>
                                <CardGroup>
                                    <Card border="warning" bg="light" style={{margin: '2px'}} >
                                        <Card.Header>Job Post</Card.Header>
                                        <Card.Body>
                                        <Card.Title>{company.jobTitle}</Card.Title>
                                        <Card.Text>
                                            Job Description: {company.jobDescription.substring(0,48)}...
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => this.setState({setEditShow : true})} style={{margin: '2px'}}>Edit</Button>
                                        <Button variant="primary" onClick={() => this.setState({setViewShow : true})} style={{margin: '2px'}}>View</Button>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </div>
                        </div>
                    </Container>
                );

            })

            return(
                <Container>
                    <Navbar>
                    </Navbar>
                    <div className="info-rectangle">
                        <h3 className="company-name">{data[0].name}</h3> {/*Company Name, styled by CompanyProfile.css page*/}
                        <img src={sampleImage} className="logo-border" /> {/*Company Logo imported from assets, styled by CompanyProfile.css page*/}
                        <div className='topSkills'>
                            <h5 style={{textAlign: "center", marginTop: "5px", textShadow: "black", fontSize: "2vw", backgroundColor: "whitesmoke"}}>Top Three Desired Skills</h5>
                            <body style={{textAlign: "center", marginTop: "5px", textShadow: "black", fontSize: "1vw", backgroundColor: "whitesmoke"}}>
                                Skill 1: {data[0].topSkills[0]} | {"    "}
                                Skill 2: {data[0].topSkills[1]} | {" "}
                                Skill 3: {data[0].topSkills[2]}  {" "}
                            </body>
                        </div>
                    </div>
                    <div>
                        <h4 style={{fontFamily: 'Calibri', fontStyle: 'italic'}}>Recently Posted Content and Resources</h4> 
                        <CardGroup>
                            {cardList}
                        </CardGroup>
                    </div>


                   <ButtonToolbar>
                       <Button 
                       variant="primary"
                       onClick={() => this.setState({postModalShow: true})}>Post Job</Button>
                       <PostJobModal
                       show={this.state.postModalShow}
                       onHide={postModalClose}/>
                   </ButtonToolbar>

                 </Container>
            )

    }

}
export default CompanyProfile
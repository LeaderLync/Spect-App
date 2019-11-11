import React from 'react';
import './CompanyProfile.css'
import data from './CompanyData'

import sampleImage from '../../assets/Company Logo.png'
import leadership from '../../assets/Leadership Icon.png'

import {Navbar, Image, CardGroup, Card, Container, Button, Modal, ModalBody, ModalTitle} from 'react-bootstrap'


class CompanyProfile extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            jobs: data[0].jobPost,
            viewShow: false,
            setViewShow: false,
            editShow: false,
            setEditShow: false
        }
    }
    
    render() {

        const cardList = data[0].jobPost.map(company => 
            {
                return(
                    <Container key={company.jobID}>
                        <div> 
                            <div>
                                <CardGroup>
                                    <Card bg="light" style={{margin: '2px'}} >
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
                    <Navbar style={{backgroundColor: 'rgba(250, 70, 22, 0.61)'}}>
                        <Navbar.Brand style={{fontFamily: 'Calibri', fontStyle: 'bold', fontWeight: '900', fontSize: "1.5vw",}}>Spect App Internship Match</Navbar.Brand>
                        <Button variant="danger" style={{margin: '2px'}}>Logout</Button>
                    </Navbar>
                    <div className="info-rectangle">
                        <h3 className="company-name">{data[0].name}</h3>
                        <img src={sampleImage} className="logo-border" />
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
                 </Container>
            )

    }

}

export default CompanyProfile
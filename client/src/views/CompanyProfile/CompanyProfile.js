import React from 'react';
import './CompanyProfile.css'
import data from './CompanyData'

import sampleImage from '../../assets/Company Logo.png'
import leadership from '../../assets/Leadership Icon.png'




import {Navbar, Image, CardGroup, Card, Container, Button, Modal, ModalBody, ModalTitle} from 'react-bootstrap'


function ViewModal(props) {

    //console.log(props)
    
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

  
  function EditModal(props) {

    const jobPost = React.useState(data[0].jobPost)
    console.log(jobPost[0])

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
  

function CompanyProfile()
{
    const id = data[0].id
    const CompanyName = data[0].name
    const JobTitle = data[0].jobPost[0].jobTitle
    const JobDescription = data[0].jobPost[0].jobDescription

    const companySkill1 = data[0].topSkills[0];
    const companySkill2 = data[0].topSkills[1];
    const companySkill3 = data[0].topSkills[2];



    const JobTitle1 = data[0].jobPost[1].jobTitle
    const JobDescription1 = data[0].jobPost[1].jobDescription

    const JobTitle2 = data[0].jobPost[2].jobTitle
    const JobDescription2 = data[0].jobPost[2].jobDescription

    const numJobPost = data[0].jobPost.length

    const [viewShow, setViewShow] = React.useState(false);
    const [editShow, setEditShow] = React.useState(false);

    // var CompanyData = JSON.parse(data);
    // console.log(CompanyData.id);

    return(
        <Container>
            <Navbar style={{backgroundColor: 'rgba(250, 70, 22, 0.61)'}}>
                <Navbar.Brand style={{fontFamily: 'Calibri', fontStyle: 'bold', fontWeight: '900', fontSize: "1.5vw",}}>Spect App Internship Match</Navbar.Brand>
                <Button variant="danger" style={{margin: '2px'}}>Logout</Button>
            </Navbar>
            <div className="info-rectangle">
                <h3 className="company-name">{CompanyName}</h3>
                <img src={sampleImage} className="logo-border" />
                <div className='topSkills'>
                    <h5 style={{textAlign: "center", marginTop: "5px", textShadow: "black", fontSize: "2vw", backgroundColor: "whitesmoke"}}>Top Three Desired Skills</h5>
                    <body style={{textAlign: "center", marginTop: "5px", textShadow: "black", fontSize: "1vw", backgroundColor: "whitesmoke"}}>
                        Skill 1: {companySkill1} | {"    "}
                        Skill 2: {companySkill2} | {" "}
                        Skill 3: {companySkill3}  {" "}
                    </body>
                </div>
            </div>
            <div>
                <h4 style={{fontFamily: 'Calibri', fontStyle: 'italic'}}>Recently Posted Content and Resources</h4> 
                <div>
                    <CardGroup>
                        <Card bg="light" style={{margin: '2px'}}>
                            <Card.Header>Job Post</Card.Header>
                            <Card.Body>
                            <Card.Title>{JobTitle}</Card.Title>
                            <Card.Text>
                                Job Description: {JobDescription.substring(0,48)}...
                            </Card.Text>
                            <Button variant="danger" onClick={() => setEditShow(true)} style={{margin: '2px'}}>Edit</Button>
                            <EditModal  show={editShow} onHide={() => setEditShow(false)} />
                            <Button variant="primary" onClick={() => setViewShow(true)} style={{margin: '2px'}}>View</Button>
                            <ViewModal  show={viewShow} onHide={() => setViewShow(false)} />
                            </Card.Body>
                        </Card>
                        <Card bg="light" style={{margin: '2px'}}>
                            <Card.Header>Job Post</Card.Header>
                            <Card.Body>
                            <Card.Title>{JobTitle1}</Card.Title>
                            <Card.Text>
                                Job Description: {JobDescription1.substring(0,48)}...
                            </Card.Text>
                            <Button variant="danger" style={{margin: '2px'}}>Edit</Button>
                            <Button variant="primary"  style={{margin: '2px'}}>View</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light" style={{margin: '2px'}}>
                            <Card.Header>Job Post</Card.Header>
                            <Card.Body>
                            <Card.Title>{JobTitle2}</Card.Title>
                            <Card.Text>
                             Job Description: {JobDescription2.substring(0,44)}...
                            </Card.Text>
                            <Button variant="danger" style={{margin: '2px'}}>Edit</Button>
                            <Button variant="primary"  style={{margin: '2px'}}>View</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
                <div>
                    <CardGroup>
                        <Card bg="light" style={{margin: '2px'}}>
                            <Card.Header>Job Post</Card.Header>
                            <Card.Body>
                            <Card.Title>Resource Title</Card.Title>
                            <Card.Text>
                                Job Description: As a ... at our company you will be required to ... and have ... as the minimum qualifications
                            </Card.Text>
                            <Button variant="danger" style={{margin: '2px'}}>Edit</Button>
                            <Button variant="primary"  style={{margin: '2px'}}>View</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light" style={{margin: '2px'}}>
                            <Card.Header>Job Post</Card.Header>
                            <Card.Body>
                            <Card.Title>Resource Title</Card.Title>
                            <Card.Text>
                                Job Description: As a ... at our company you will be required to ... and have ... as the minimum qualifications
                            </Card.Text>
                            <Button variant="danger" style={{margin: '2px'}}>Edit</Button>
                            <Button variant="primary"  style={{margin: '2px'}}>View</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light" style={{margin: '2px'}}>
                            <Card.Header>Job Post</Card.Header>
                            <Card.Body>
                            <Card.Title>Resource Title</Card.Title>
                            <Card.Text>
                                Job Description: As a ... at our company you will be required to ... and have ... as the minimum qualifications
                            </Card.Text>
                            <Button variant="danger" style={{margin: '2px'}}>Edit</Button>
                            <Button variant="primary"  style={{margin: '2px'}}>View</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div> 
                <Button variant="primary" style={{margin: '20px'}}>Post Job</Button>               
            </div>
        </Container>

    );
}

export default CompanyProfile
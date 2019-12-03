import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import './CompanyPopup.css'

const useStyles = makeStyles(theme => ({
    paper: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: '450px',
        height: '300px',
    },
}));

export default function CompanyPopup(props) {
    const classes = useStyles();
    let company = props.company;
    return (
        <div>
            <Modal
                aria-labelledby="modalTitle"
                aria-describedby="AboutUs"
                open={props.show}
                onClose={props.onHide}
            >
                <div className={classes.paper}>
                    <div className="modalcompanytop">
                    <h2 id="modalSkillshead" className="companyHead" Style="width:35%;">
                    <Paper className={classes.root}>
                        {company.companyName}
                        </Paper>
                    </h2>
                    <h2 id="modalCompany" className="companyHead" Style="background-color:#5f89ce;
                                                                        width:65%;
                                                                        flex-direction:column;
                                                                        align-items:flex-start; 
                                                                        padding-left:2vh;">
                        <div className="modalValueTitle" Style="flex-direction:row;display:flex;">
                        <p Style="width: 89%;">VALUED SOFT SKILLS</p>
                        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png' className="modalcloseImg" onClick={props.onHide}/>
                        </div>
                        <div className="modalcompanytop">
                            <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
                            {company.strongSkills.first}
                            </Paper>
                            <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
                            {company.strongSkills.second}
                            </Paper>
                            <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
                            {company.strongSkills.third}
                            </Paper>
                        </div>
                    </h2>
                    </div>
                    <div className="modalcompanydesc">
                        <h4> About us: </h4>
                        <p id="AboutUs" Style="width:auto;">
                            {company.companyBio}
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
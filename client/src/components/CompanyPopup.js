import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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

export default function CompanyPopup() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" size="small" style={{background: 'rgb(46, 167, 235)'}} onClick={handleOpen}>
                Profile
            </Button>
            <Modal
                aria-labelledby="modalTitle"
                aria-describedby="AboutUs"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <div className="modalcompanytop">
                    <h2 id="modalSkillshead" className="companyHead" Style="width:35%;">
                    <Paper className={classes.root}>
                        Google img
                        </Paper>
                    </h2>
                    <h2 id="modalCompany" className="companyHead" Style="background-color:#5f89ce;
                                                                        width:65%;
                                                                        flex-direction:column;
                                                                        align-items:flex-start; 
                                                                        padding-left:2vh;">
                        <div className="modalValueTitle" Style="flex-direction:row;display:flex;">
                        <p Style="width: 89%;">VALUED SOFT SKILLS</p>
                        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png' className="modalcloseImg" onClick={handleClose}/>
                        </div>
                        <div className="modalcompanytop">
                            <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
                            skill1
                            </Paper>
                            <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
                            skill2
                            </Paper>
                            <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
                            skill3
                            </Paper>
                        </div>
                    </h2>
                    </div>
                    <div className="modalcompanydesc">
                        <h4> About us: </h4>
                        <p id="AboutUs" Style="width:auto;">
                            Our mission is to organize the world’s information and make it universally accessible and useful.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
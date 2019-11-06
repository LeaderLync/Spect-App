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
        width: 400,
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
            <button type="button" onClick={handleOpen}>
                Profile
            </button>
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
                    <h2 id="modalCompany" className="companyHead" Style="background-color:#3074ff;width:65%;flex-direction:column">
                        <div className="modalValueTitle">
                            VALUED SOFT SKILLS
                        </div>
                        <div className="modalcompanytop">
                            <Paper className={classes.root}>
                            skill1
                            </Paper>
                            <Paper className={classes.root}>
                            skill2
                            </Paper>
                            <Paper className={classes.root}>
                            skill3
                            </Paper>
                        </div>
                    </h2>
                    </div>
                    <div className="modalcompanydesc">
                        <h4> About us:</h4>
                        <p id="AboutUs">
                            Our mission is to organize the world’s information and make it universally accessible and useful.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
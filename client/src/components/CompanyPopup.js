// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import './CompanyPopup.css'

// const useStyles = makeStyles(theme => ({
//     paper: {
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         position: 'absolute',
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         width: '450px',
//         height: '300px',
//     },
// }));

// export default function CompanyPopup() {
//     const classes = useStyles();
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div>
//             <Button variant="contained" size="small" style={{background: 'rgb(46, 167, 235)'}} onClick={handleOpen}>
//                 Profile
//             </Button>
//             <Modal
//                 aria-labelledby="modalTitle"
//                 aria-describedby="AboutUs"
//                 open={open}
//                 onClose={handleClose}
//             >
//                 <div className={classes.paper}>
//                     <div className="modalcompanytop">
//                     <h2 id="modalSkillshead" className="companyHead" Style="width:35%;">
//                     <Paper className={classes.root}>
//                         Google img
//                         </Paper>
//                     </h2>
//                     <h2 id="modalCompany" className="companyHead" Style="background-color:#5f89ce;
//                                                                         width:65%;
//                                                                         flex-direction:column;
//                                                                         align-items:flex-start; 
//                                                                         padding-left:2vh;">
//                         <div className="modalValueTitle" Style="flex-direction:row;display:flex;">
//                         <p Style="width: 89%;">VALUED SOFT SKILLS</p>
//                         <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png' className="modalcloseImg" onClick={handleClose}/>
//                         </div>
//                         <div className="modalcompanytop">
//                             <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
//                             skill1
//                             </Paper>
//                             <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
//                             skill2
//                             </Paper>
//                             <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
//                             skill3
//                             </Paper>
//                         </div>
//                     </h2>
//                     </div>
//                     <div className="modalcompanydesc">
//                         <h4> About us: </h4>
//                         <p id="AboutUs" Style="width:auto;">
//                             Our mission is to organize the world’s information and make it universally accessible and useful.
//                         </p>
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: 'rgb(46, 167, 235)',
    padding: theme.spacing(6, 0, 6),
  },
  skillCard: {
    color: 'black',
    marginRight: 30,
    marginLeft: 30,
  },
}));

export default function CompanyPopup() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = event => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="contained" size="small" style={{background: 'rgb(46, 167, 235)', color: 'white'}} onClick={handleClickOpen}>
        Profile
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">COMPANY NAME</DialogTitle>
        <DialogContent>
            <div className={classes.heroContent}>
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item xs = {12} sm={12} md={8} style={{textAlign: 'center', justifyContent: 'center'}}>
                            <Typography noWrap style={{color: "black", display: 'block'}} variant="h6" gutterBottom>Most Valued Skills</Typography>     
                            <Grid container spacing = {2}>
                               
                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent textAlign = "center">
                                                    <Typography noWrap style={{display: 'block'}}>skill</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent textAlign = "center">
                                                    <Typography noWrap style={{display: 'block'}}>skill</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent textAlign = "center">
                                                    <Typography noWrap style={{display: 'block'}}>skill</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                
                                </Grid>
                        </Grid>
                    

                </Grid>
            </div>

            <div>
                <Typography><h4>About Us:</h4></Typography>
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt nunc sit amet nisi tincidunt egestas. Vestibulum justo tellus, pretium id consequat at, convallis quis erat. Etiam non placerat diam, quis tempus elit. Nulla in elementum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in tellus metus. Aliquam ut mi interdum nibh tempor eleifend vel et libero.
            </div>
            
          {/* <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} value="fullWidth" />
              }
              label="Full width"
            />
          </form> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

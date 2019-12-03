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

// export default function CompanyPopup(props) {
//     const classes = useStyles();
//     let company = props.company;
//     return (
//         <div>
//             <Modal
//                 aria-labelledby="modalTitle"
//                 aria-describedby="AboutUs"
//                 open={props.show}
//                 onClose={props.onHide}
//             >
//                 <div className={classes.paper}>
//                     <div className="modalcompanytop">
//                     <h2 id="modalSkillshead" className="companyHead" Style="width:35%;">
//                     <Paper className={classes.root}>
//                         {company.companyName}
//                         </Paper>
//                     </h2>
//                     <h2 id="modalCompany" className="companyHead" Style="background-color:#5f89ce;
//                                                                         width:65%;
//                                                                         flex-direction:column;
//                                                                         align-items:flex-start; 
//                                                                         padding-left:2vh;">
//                         <div className="modalValueTitle" Style="flex-direction:row;display:flex;">
//                         <p Style="width: 89%;">VALUED SOFT SKILLS</p>
//                         <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png' className="modalcloseImg" onClick={props.onHide}/>
//                         </div>
//                         <div className="modalcompanytop">
//                             <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
//                             {company.strongSkills.first}
//                             </Paper>
//                             <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
//                             {company.strongSkills.second}
//                             </Paper>
//                             <Paper className={classes.root} Style="margin:5px; min-height:8vh; min-width:8vh;">
//                             {company.strongSkills.third}
//                             </Paper>
//                         </div>
//                     </h2>
//                     </div>
//                     <div className="modalcompanydesc">
//                         <h4> About us: </h4>
//                         <p id="AboutUs" Style="width:auto;">
//                             {company.companyBio}
//                         </p>
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// }

export default function CompanyPopup(props) {
  const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const handleMaxWidthChange = event => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked);
  };
  let company = props.company;
  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.show}
        onClose={props.onHide}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{company.companyName}</DialogTitle>
        <DialogContent>
            <div className={classes.heroContent}>
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item xs = {12} sm={12} md={8} style={{textAlign: 'center', justifyContent: 'center'}}>
                            <Typography noWrap style={{color: "black", display: 'block'}} variant="h6" gutterBottom>Most Valued Skills</Typography>     
                            <Grid container spacing = {2}>
                               
                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent textAlign = "center">
                                                    <Typography noWrap style={{display: 'block'}}>{company.strongSkills.first}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent textAlign = "center">
                                                    <Typography noWrap style={{display: 'block'}}>{company.strongSkills.second}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent textAlign = "center">
                                                    <Typography noWrap style={{display: 'block'}}>{company.strongSkills.third}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                
                                </Grid>
                        </Grid>
                    

                </Grid>
            </div>

            <div>
            <h4><Typography>About Us:</Typography></h4>
            </div>
            <div>
                {company.companyBio}
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onHide} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

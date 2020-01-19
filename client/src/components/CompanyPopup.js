import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

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


export default function CompanyPopup(props) {
  const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

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
        <DialogTitle id="max-width-dialog-title">
          <img style={{width: '50px', marginBottom: '0px', paddingRight: '10px', display: 'inline'}}src={company.avatarUrl}></img>
          <span>{company.companyName}</span>
        </DialogTitle>
        <DialogContent>
            <div className={classes.heroContent}>
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item xs = {12} sm={12} md={8} style={{textAlign: 'center', justifyContent: 'center'}}>
                            <Typography noWrap style={{color: "black", display: 'block'}} variant="h6" gutterBottom>{company.jobTitle}</Typography>
                    </Grid>
                </Grid>
            </div>
            <br/>
            <div>
                <strong>Description: </strong>
                <span>{company.jobDescription}</span>
            </div>
            <div>
                <strong>Requirements: </strong>
                <span>{company.jobRequirements}</span>
            </div>
            <div>
                <strong>Apply: </strong>
                <a href={company.jobLink}>{company.jobLink}</a>
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

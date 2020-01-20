import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from 'react-loading-skeleton'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
   bar: {
    background: 'linear-gradient(180deg, #2EA7EB 30%, #2EA7EB 90%)',
    border: 0,
    padding: '0 30px',
  },
  drawer: {
    margin: '0px 20px 50px',
  },
  spectDiv: {
  },
  spect: {
    maxWidth: '10%',
    margin: 'auto',
  }
}));

const Loader = (props) => {

  return (
    <React.Fragment>
        <Skeleton height="64px"/>
    </React.Fragment>
  );
}
export default Loader;

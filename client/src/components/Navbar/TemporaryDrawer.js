import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link, Route, Redirect  } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: '20px',
  }
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClick = (name)=> {
    console.log(name);
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const menuitems = (props.isStudent)? 
    <List >
      <ListItem button><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></ListItem>
    </List>
    :
    <List >
      <ListItem button><Link to="/CompanyProfile" style={{ textDecoration: 'none' }}>Home</Link></ListItem>
    </List>
  return (
    <div className='buttonDiv'>
      <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon>Open Left</MenuIcon>
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          {menuitems}
      </div>
      </Drawer>
    </div>
  );
}

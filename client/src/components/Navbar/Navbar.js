import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TemporaryDrawer from "./TemporaryDrawer"
import auth from '../../config/firebaseauth'
import { Link, Route, Redirect  } from 'react-router-dom';
import spectLogo from '../../assets/Black-logo-no-background.png';


const signout = () => {
  auth.signOut().then(()=> {
      alert('Signed Out')
  }).catch((error) => {
      alert('Cant sign out')
  })
}
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
  spect: {
    maxWidth: '10%',
    margin: 'auto',
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenProfile = () => {
    handleClose();    
  }
  const menuItems = (props.isStudent)?
  <Menu
  id="menu-appbar"
  anchorEl={anchorEl}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={open}
  onClose={handleClose}
  >
    <MenuItem onClick={handleOpenProfile}>
      <Link to="/studentprofile" style={{ textDecoration: 'none' }}>Profile</Link>
    </MenuItem>
    <MenuItem onClick={signout}>
      Sign Out
    </MenuItem>
  </Menu>
  :
  <Menu
  id="menu-appbar"
  anchorEl={anchorEl}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={open}
  onClose={handleClose}
  >
    <MenuItem onClick={handleOpenProfile}>
      <Link to="/CompanyProfile" style={{ textDecoration: 'none' }}>Profile</Link>
    </MenuItem>
    <MenuItem onClick={signout}>
      Sign Out
    </MenuItem>
  </Menu>;


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <TemporaryDrawer className="drawer" isStudent= {props.isStudent}/>
          <div>
            <img src={spectLogo} className = {classes.spect}/> 
          </div>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              > 
                <AccountCircle />
              </IconButton>
              {menuItems}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
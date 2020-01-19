import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import CompanyPopup from "../../components/CompanyPopup"
import {auth} from '../../config/firebaseauth'
import ProfileBar from '../../components/ProfileBar'
import Button from '@material-ui/core/Button'
import Navbar from '../../components/Navbar/Navbar'

class test extends React.Component {
    signOut() {
        auth.signOut().then(()=> {
            alert('Signed Out')
        }).catch((error) => {
            alert('Cant sign out')
        })
    }
    render(){
        return (
            <div className="App">
                <h1>HELLO WORLD</h1>
            </div>
        );
    }
}

export default Home;

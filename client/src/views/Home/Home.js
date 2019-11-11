import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import CompanyPopup from "../../components/CompanyPopup"
import auth from '../../config/firebaseauth'
import ProfileBar from '../../components/ProfileBar'
import Button from '@material-ui/core/Button'
import Navbar from '../../components/Navbar/Navbar'

class Home extends React.Component {
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
                <Navbar />
                <CompanyPopup/>
                <Button onClick={this.signOut}>Sign out</Button>
            </div>
        );
    }
}

export default Home;

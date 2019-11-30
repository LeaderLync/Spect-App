import React from 'react';
import logo from '../assets/logo.svg';
import './Matches.css';
import CompanyPopup from "../components/CompanyPopup"
import auth from '../config/firebaseauth'
import ProfileBar from '../components/ProfileBar'
import Button from '@material-ui/core/Button'
import Navbar from '../components/Navbar/Navbar'
import CompanyCard from '../components/CompanyCard'

class Matches extends React.Component {
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
                <Navbar page={"Matches"}/>
                <div className="cards">
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                </div>
                
            </div>
        );
    }
}

export default Matches;

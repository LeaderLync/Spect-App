import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import ProfileBar from '../../components/ProfileBar'

function Home() {
    return (
        <div className="App">
            <ProfileBar/>
            <ProfileBar/>
        </div>
    );
}

export default Home;

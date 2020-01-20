
import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import CompanyPopup from "../../components/CompanyPopup"
import {auth} from '../../config/firebaseauth'
import ProfileBar from '../../components/ProfileBar'
import Button from '@material-ui/core/Button'
import Navbar from '../../components/Navbar/Navbar'

class Home extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            collectionid: props.collectionid
        }
    }
    signOut() {
        app.auth().signOut().then(()=> {
            alert('Signed Out')
        }).catch((error) => {
            alert('Cant sign out')
        })
    }
    componentDidUpdate(prevProps) {
        console.log(this.props)
        console.log("old props")
        console.log(prevProps)
    }
    render(){
        console.log(this.state.collectionid)
        return (
            <div className="App">
                <Navbar isStudent={this.props.isStudent}/>
                <CompanyPopup/>
                <Button onClick={this.signOut}>Sign out</Button>
            </div>
        );
    }
}

export default Home;
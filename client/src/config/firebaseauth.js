import firebase from 'firebase'
import config from './config'

const app = firebase.initializeApp(config)
const auth = app.auth()
export default auth
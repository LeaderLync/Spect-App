import firebase from 'firebase'

const appconfig = {
    apiKey: (process.env.API_KEY),
    authDomain: (process.env.AUTH_DOMAIN),
    databaseURL: (process.env.DATABASE_URL),
    projectId: (process.env.PROJECT_ID),
    storageBucket: (process.env.STORAGE_BUCKET),
    messagingSenderId:(process.env.MESSAGING_SENDER_ID),
    appId: (process.env.APP_ID),
    measurementId: (process.env.MEASUREMENT_ID)
}
console.log(appconfig)
const app = firebase.initializeApp(appconfig)
const auth = app.auth()
export default auth
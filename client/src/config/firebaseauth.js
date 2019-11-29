import firebase from 'firebase'

const appconfig = {
    apiKey: (process.env.API_KEY || require('./config').default.apiKey),
    authDomain: (process.env.AUTH_DOMAIN || require('./config').default.authDomain),
    databaseURL: (process.env.DATABASE_URL || require('./config').default.databaseURL),
    projectId: (process.env.PROJECT_ID || require('./config').default.projectId),
    storageBucket: (process.env.STORAGE_BUCKET || require('./config').default.storageBucket),
    messagingSenderId:(process.env.MESSAGING_SENDER_ID || require('./config').default.messagingSenderId),
    appId: (process.env.APP_ID || require('./config').default.appId),
    measurementId: (process.env.MEASUREMENT_ID || require('./config').default.measurementId)
}

const app = firebase.initializeApp(appconfig)
const auth = app.auth()
export default auth
var firebase_admin = require('firebase-admin')
var serviceAccount = require('./spect-app-firebase-adminsdk-o0eoj-cd0537aefe.json')
var app = firebase_admin.initializeApp({
    credential: firebase_admin.credential.cert(serviceAccount),
    databaseURL: require('./config').databaseURL
})

const auth = app.auth()

module.exports = {
    auth: auth
}
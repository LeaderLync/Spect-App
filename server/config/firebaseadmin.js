var firebase_admin = require('firebase-admin')
// var serviceAccount = require('./spect-app-firebase-adminsdk-o0eoj-cd0537aefe.json')
// var app = firebase_admin.initializeApp({
//     credential: firebase_admin.credential.cert(serviceAccount),
//     databaseURL: require('./config').databaseURL
// })

var app = firebase_admin.initializeApp({
    credential: firebase_admin.credential.cert({
      projectId: (process.env.PROJECT_ID || require('./config').projectid),
      clientEmail: (process.env.CLIENT_EMAIL || require('./config').client_email),
      privateKey: (process.env.PRIVATE_KEY || require('./config').privateKey)
    }),
    databaseURL: (process.env.FIREBASE_DB_URL || require('./config').databaseURL)
  });

const auth = app.auth()

module.exports = {
    auth: auth
}
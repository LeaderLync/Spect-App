//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
        uri: 'mongodb+srv://adminuser:Software4c!@spect-app-zkgek.mongodb.net/test?retryWrites=true&w=majority', //place the URI of your mongo database here.
    },
    databaseURL: 'https://spect-app.firebaseio.com'
};

// module.exports = {
//     db: {
//         uri: 'mongodb+srv://marcgabe15:mackyjas555@cen3031-marc-rhpb2.mongodb.net/test?retryWrites=true&w=majority', //place the URI of your mongo database here.
//     }
// };
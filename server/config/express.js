const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    companyRouter = require('../routes/company.routes'),
    studentRouter = require('../routes/student.routes'),
    authRouter = require('../routes/auth.routes')

module.exports.init = () => {

    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());
    app.use(cors())
    // add a router
    app.use('/api/student', studentRouter);
    app.use('/api/company', companyRouter);
    app.use('/api/auth', authRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    
    return app
}


var should = require('should'),
    request = require('supertest'),
    express = require('../config/express'),
    User = require('../models/UserSchema'),
    Student = require('../models/student.model')
    Company = require('../models/company.model')



var app, agent

var exampleuserinfo = {
    id: '45063b7f-60c5-433b-95c3-b953d94836cf',
    question1: 1,
    question2: 0,
    question3: 0,
    question4: 1,
    question5: 0,
    question6: 0,
    question7: 1,
    question8: 0,
    question9: 1,
    question10: 1,
    question11: 0,
    question12: 1,
    question13: 0,
    question14: 1,
    question15: 1,
    question16: 1,
    question17: 1,
    question18: 1
}

var teststudentid = 'AxUgrsIy0NWQ4CkoXgybHCBVvPY2'
var companyid = 'LF2aS1TsEpdMAe4SqBMNKznFNy52'
describe('API Requests', function() {

    before(function(done) {
        app = express.init();
        agent = request.agent(app);
    
        done();
    });

    it('should be able to retrieve all the matches', function(done) {
        agent.patch('/api/student')
            .send(exampleuserinfo)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res)
                done()
            });
    });

    it('should be able to grab the student', function(done) {
        agent.get(`/api/student/${teststudentid}`)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err)
                should.exist(res)
                console.log(res)
                done()
            })
    })
    it('should be able to grab the company', function(done) {
        agent.get(`/api/student/${companyid}`)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err)
                should.exist(res)
                console.log(res)
                done()
            })
    })

    after(function(done) {
        done()
    }); 
})
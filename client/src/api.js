import axios from 'axios'


const client = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
})

export default {
    getdata(){
        client.get('/students')
        .then(response => {
            return response
        }).catch((err) => {
            console.log(err)
        })
    },
    registernewuser(userid){
        return client.post('/auth', userid)
        .then(response => {
            return response.data
        }).catch((err) => {
            console.log(err)
            return null;
        })
    },
    updateJob(data){ // update when a new job post is created
        let params = data

        client.put(`/company/${params.collectionid}`, params.jobs)
        .then(response => {
            return response
        }).catch((err) => {
            console.log(err)
            return null;
        })
    },
    collectStudentResponse(studentData){ //send initial student survey responses to database
      return client.post('/student', studentData)
      .then(response => {
        return response.data
      }).catch((err) => {
        console.log(err)
        return null
      })
    },
    collectCompanyResponse(companyData){ // send initial company survey responses to database
      return client.post('/company', companyData)
      .then(response => {
        return response.data
      }).catch((err) => {
        console.log(err)
        return null
      })
    },
    getcompanyuser(userid) {
        return client.get(`/company/${userid}`)
            .then(response => {
                return response.data
            }).catch((err) => {
                console.log(err)
                return null;
            })
    },
    getstudentuser(userid) {
        return client.get(`/student/${userid}`)
            .then(response => {
                return response.data
            }).catch((err) => {
                console.log(err)
                return null;
            })
    },
    getrecommendations(userinfo) {
        return client.patch('/student', userinfo)
            .then(response => {
                return response
            }).catch((err) => {
                console.log(err)
                return null
            })
    },
    updatematch(payload) {
        return client.patch(`/student/${payload.userId}`, payload)
            .then(response => {
                return response.data
            }).catch((err) => {
                console.log(err)
                return null
            })
    },
}

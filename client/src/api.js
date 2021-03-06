import axios from 'axios'


const client = axios.create({
    baseURL: 'https://spectapp.herokuapp.com/api',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
})

export default {
    /*inputdata(arraydata) {
        let params = arraydata
        client.post('/students',params)
        .then((response) => {
            console.log(response)
        })
    },*/
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
            console.log(response)
            console.log(response.data)
            return response.data
        }).catch((err) => {
            console.log(err)
            return null;
        })
    },
    updateJob(data){ // update when a new job post is created
        let params = data

        console.log("API logging CollectionID", params.collectionid)

        client.put(`/company/${params.collectionid}`, params.jobs)
        .then(response => {
            console.log(response)
            return response
        }).catch((err) => {
            console.log(err)
            return null;
        })
    },
    collectStudentResponse(studentData){ // collecting initial reponses from the student survey
      return client.post('/student', studentData)
      .then(response => {
        //console.log(response.data)
        return response.data
      }).catch((err) => {
        console.log(err)
        return null
      })
    },
    collectCompanyResponse(companyData){ // collecting initial responses from the job posting survey
      return client.post('/company', companyData)
      .then(response => {
        //console.log("put response here")
        return response.data
      }).catch((err) => {
        console.log(err)
        return null
      })
    },
    getcompanyuser(userid) {
        return client.get(`/company/${userid}`)
            .then(response => {
                // console.log(response.data)
                return response.data
            }).catch((err) => {
                console.log(err)
                return null;
            })
    },
    getstudentuser(userid) {
        return client.get(`/student/${userid}`)
            .then(response => {
                // console.log(response.data)
                return response.data
            }).catch((err) => {
                console.log(err)
                return null;
            })
    },
    getrecommendations(userinfo) {
        console.log(userinfo)
        console.log(userinfo)
        return client.patch('/student', userinfo)
            .then(response => {
                // console.log(response)
                // console.log(response.data)
                return response
                // return response.data
            }).catch((err) => {
                console.log(err)
                return null
            })
    },
    updatematch(payload) {
        console.log(payload);
        return client.patch(`/student/${payload.userId}`, payload)
            .then(response => {
                return response.data
            }).catch((err) => {
                console.log(err)
                return null
            })
    },
}

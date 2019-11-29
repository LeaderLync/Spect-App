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
    collectStudentResponse(studentData){
      return client.post('/student', studentData)
      .then(response => {
        console.log("put response here")
        return response
      }).catch((err) => {
        console.log(err)
      })
    },
    collectCompanyResponse(companyData){
      return client.post('/company', companyData)
      .then(response => {
        console.log("put response here")
        return response
      }).catch((err) => {
        console.log(err)
      })
    }
}

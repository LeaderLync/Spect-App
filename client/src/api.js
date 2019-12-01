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
    inputdata(arraydata) {
        let params = arraydata
        client.post('/students',params)
        .then((response) => {
            console.log(response)
        })
    },
    getdata(){
        client.get('/students')
        .then(response => {
            return response
        }).catch((err) => {
            console.log(err)
        })
    },
    async registernewuser(userid){
        client.post('/auth', userid)
        .then(response => {
            return response
        }).catch((err) => {
            console.log(err)
            return null;
        })
    },
    postJob(jobData)
    {
        let params = jobData

        console.log("API logging", params)

        client.post('/company/job', {params})
        .then(response => {
            console.log(response)
            return response
        }).catch((err) => {
            console.log(err)
            return null;
        })
    },
    postCompany(companyData)
    {
        let params = companyData
        client.post('/company', params)
        .then(response => {
            return response
        }).catch((err) => {
            console.log(err)
            return null;
        })
    },

}
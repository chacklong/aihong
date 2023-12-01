import axios from "axios"

class ServiceError extends Error {
    constructor(message: string | undefined) {
        super(message)
        this.name = 'ServiceError'
    }
}

const service = axios.create({
    baseURL: 'http://127.0.0.1:1337/api',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})

service.interceptors.request.use(config => {
    // const token = localStorage.getItem("token")
    // if(token){
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    console.log(`Sending request to ${config.url}`,config)
    return config
}, error => {
    return Promise.reject(new ServiceError(error.message))
})

service.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(new ServiceError(error.message))
})

export { service, ServiceError }
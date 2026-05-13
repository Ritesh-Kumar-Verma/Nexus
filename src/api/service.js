import axios from "axios";

const apiURL=import.meta.env.VITE_API_URL

const apiClient=axios.create({
    baseURL: apiURL
})
apiClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem("jwttoken")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error)=>{
    toast.error("Missing JWTtoken")
})

export const authAPI = {
    signup:({username,password,email})=>
        apiClient.post('/auth/register',{username,password,email}),
    login : ({username,password})=>
        apiClient.post('/auth/login',{username,password})
}

export const friendsAPI = {
    search : (keyword)=>
        apiClient.get('/search',{
            params:{
                query : keyword
            }
        }),
    sendRequest : (receiver)=>
        apiClient.post('/sendfriendrequest',null,{
            params:{
                receiver: receiver
            }
        }),
    getRequest : ()=>
        apiClient.get('/getfriendrequest')
    
} 




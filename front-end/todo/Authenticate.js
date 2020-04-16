import Axios from "axios"

class Authenticate {
    
    registerSuccesfulLogin(username,password){
            sessionStorage.setItem('authenticatedUser',username)
            let basicAuthHeader = 'Basic '+ window.btoa(username+':'+password)
            this.setupAxiosInterceptor(basicAuthHeader)
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
            return true
    }

    getUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
            return user
    }

    setupAxiosInterceptor(basicAuthHeader){
        Axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }   
                return config
            }
        )
    }
}

export default new Authenticate()
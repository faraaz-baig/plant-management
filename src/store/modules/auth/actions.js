export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'Login'
        })
    },
    
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'Signup'
        }) 
    },
    
    logout(context) {
        
        localStorage.removeItem('token')
        localStorage.removeItem('userId')

        return context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null
        })

    },


    
    async auth(context, payload) {
        const mode = payload.mode
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOiHQJo7piPUuthvZPdPbZ2jCK5g9c8Ls'

        if (mode === 'Signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOiHQJo7piPUuthvZPdPbZ2jCK5g9c8Ls'
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        }) 
        

        const responseData = await response.json()

        if (!response.ok) {
            const error = new error(responseData.message || 'Failed to authenticate')
            throw error
        }

        localStorage.setItem('token', responseData.idToken)
        localStorage.setItem('userId', responseData.localId)

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },

    tryLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
                tokenExpiration: null
            })
        } 
    }

}
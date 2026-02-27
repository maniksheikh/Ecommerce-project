import { ref, onMounted } from 'vue'

export const useAuth = () => {
    const user = ref(null)
    const token = ref(null)
    const isAuthenticated = ref(false)

    const initAuth = () => {
        if (process.client) {
            const savedUser = localStorage.getItem('user')
            const savedToken = localStorage.getItem('auth_token')
            if (savedUser && savedToken) {
                user.value = JSON.parse(savedUser)
                token.value = savedToken
                isAuthenticated.value = true
            }
        }
    }

    const login = (userData, userToken) => {
        user.value = userData
        token.value = userToken
        isAuthenticated.value = true
        if (process.client) {
            localStorage.setItem('user', JSON.stringify(userData))
            localStorage.setItem('auth_token', userToken)
        }
    }

    const logout = () => {
        user.value = null
        token.value = null
        isAuthenticated.value = false
        if (process.client) {
            localStorage.removeItem('user')
            localStorage.removeItem('auth_token')
        }
    }

    return {
        user,
        token,
        isAuthenticated,
        initAuth,
        login,
        logout
    }
}

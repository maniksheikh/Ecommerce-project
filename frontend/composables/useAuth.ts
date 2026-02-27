export const useAuth = () => {
    // useState is Nuxt-specific and safe for SSR while sharing state across components
    const user = useState('auth_user', () => null)
    const token = useState('auth_token', () => null)
    const isAuthenticated = useState('auth_is_authenticated', () => false)

    const initAuth = () => {
        if (process.client) {
            const savedUser = localStorage.getItem('user')
            const savedToken = localStorage.getItem('auth_token')
            if (savedUser && savedToken) {
                try {
                    user.value = JSON.parse(savedUser)
                    token.value = savedToken
                    isAuthenticated.value = true
                } catch (e) {
                    console.error('Failed to parse saved user', e)
                    logout()
                }
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

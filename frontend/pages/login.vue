<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-950 px-6 py-20 relative overflow-hidden">
    <!-- Background elements to match the theme -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,60,200,0.15),transparent)]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
    
    <div class="relative w-full max-w-md">
      <!-- Card -->
      <div class="bg-gray-900/80 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600"></div>
        
        <div class="text-center mb-8 space-y-2">
          <h2 class="text-3xl font-black text-white">Welcome <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Back</span></h2>
          <p class="text-gray-400 text-sm">Please sign in to your account to continue</p>
        </div>

        <!-- Notification -->
        <div v-if="errorMsg" class="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center animate-shake">
          {{ errorMsg }}
        </div>
        <div v-if="successMsg" class="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs text-center">
          {{ successMsg }}
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="space-y-1">
            <label class="text-xs font-semibold text-gray-400 ml-1">Email Address</label>
            <input 
              v-model="email"
              type="email" 
              required
              placeholder="name@company.com"
              class="w-full px-5 py-3.5 bg-gray-800/50 border border-white/5 rounded-2xl focus:border-violet-500 outline-none text-white text-sm transition-all focus:ring-1 focus:ring-violet-500"
            />
          </div>
          
          <div class="space-y-1">
            <div class="flex justify-between items-center ml-1">
              <label class="text-xs font-semibold text-gray-400">Password</label>
              <a href="#" class="text-[10px] text-violet-400 hover:text-violet-300 font-bold uppercase tracking-wider">Forgot?</a>
            </div>
            <input 
              v-model="password"
              type="password" 
              required
              placeholder="••••••••"
              class="w-full px-5 py-3.5 bg-gray-800/50 border border-white/5 rounded-2xl focus:border-violet-500 outline-none text-white text-sm transition-all focus:ring-1 focus:ring-violet-500"
            />
          </div>

          <button 
            type="submit"
            :disabled="loading"
            class="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50 disabled:cursor-not-wait text-white font-bold rounded-2xl shadow-xl shadow-violet-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] mt-2 group"
          >
            <span v-if="!loading" class="flex items-center justify-center gap-2">
              Sign In 
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Signing in...
            </span>
          </button>
        </form>

        <!-- Divider -->
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-white/5"></div></div>
          <div class="relative flex justify-center text-xs uppercase"><span class="bg-gray-900 px-3 text-gray-500 font-bold tracking-widest">Or continue with</span></div>
        </div>

        <!-- Google Login -->
        <div class="flex justify-center">
           <div id="google-btn"></div>
        </div>

        <p class="text-center mt-8 text-gray-500 text-xs">
          Don't have an account? 
          <a href="#" class="text-violet-400 font-bold hover:text-violet-300 transition-colors">Create account</a>
        </p>
      </div>

      <!-- Footer links inside the page -->
      <div class="mt-8 flex justify-center gap-6 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
        <a href="#" class="hover:text-gray-400">Privacy</a>
        <span class="w-1 h-1 rounded-full bg-gray-800 self-center"></span>
        <a href="#" class="hover:text-gray-400">Terms</a>
        <span class="w-1 h-1 rounded-full bg-gray-800 self-center"></span>
        <a href="#" class="hover:text-gray-400">Contact</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { login } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

// This would typically come from environment variables
const GOOGLE_CLIENT_ID = 'your_google_client_id_here'

const handleLogin = async () => {
  loading.value = true
  errorMsg.value = ''
  
  try {
    const response = await $fetch('http://localhost:3001/api/persion/v1/login', {
      method: 'POST',
      body: { 
        email: email.value, 
        password: password.value 
      }
    })
    
    if (response.token) {
      successMsg.value = 'Login successful! Redirecting...'
      login(response.person, response.token)
      setTimeout(() => {
        router.push('/')
      }, 1500)
    }
  } catch (err) {
    errorMsg.value = err.data?.message || 'Invalid email or password'
  } finally {
    loading.value = false
  }
}

// Google Login Integration
onMounted(() => {
  if (window.google) {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse
    })
    
    window.google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      { theme: 'outline', size: 'large', text: 'signin_with', width: '384', logo_alignment: 'left', shape: 'pill' }
    )
  }
})

const handleGoogleResponse = async (response) => {
  console.log('Google response received:', response)
  loading.value = true
  
  // Here you would typically send response.credential to your backend
  // to verify and log in the user.
  // For demo purposes, we'll simulate a successful login if a token is received.
  
  if (response.credential) {
    try {
      // Simulate backend verification
      // Substitute with actual backend call: 
      // const res = await $fetch('http://localhost:3001/api/persion/v1/google-login', { ... })
      
      const mockUser = {
        name: 'Google User',
        email: 'google-user@example.com',
        avatar: 'https://lh3.googleusercontent.com/a/ACg8oc...'
      }
      
      successMsg.value = 'Signed in with Google! Redirecting...'
      login(mockUser, response.credential)
      
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } catch (err) {
      errorMsg.value = 'Google sign-in failed'
    } finally {
      loading.value = false
    }
  }
}
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.animate-shake {
  animation: shake 0.2s ease-in-out 0s 2;
}

/* Customize Google Button to look better with theme */
:deep(.S67oWb) {
  background-color: transparent !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}
:deep(.nsm7Bb-HzV7m-LgbsSe) {
  border-radius: 1rem !important;
}
</style>

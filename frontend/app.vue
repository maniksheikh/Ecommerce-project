<template>
  <div class="min-h-screen font-sans bg-gray-950 text-white overflow-x-hidden">
    <!-- NAVBAR -->
    <AppNavbar />
    
    <!-- PAGE CONTENT -->
    <NuxtPage />

    <!-- FOOTER -->
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const { isAuthenticated, initAuth } = useAuth()
const router = useRouter()
const route = useRoute()

onMounted(() => {
  // Initialize auth from localStorage
  initAuth()
  
  // Custom Global Click Guard
  // If user is not logged in, any click on the page redirects to login (except on the login page itself)
  window.addEventListener('click', (e) => {
    if (!isAuthenticated.value && route.path !== '/login') {
      // Check if the click is already aiming for the login page (e.g. Nav link)
      // or if it's some specific interactive element that should be allowed (optional)
      
      // Prevent original action
      e.preventDefault();
      e.stopPropagation();
      
      // Redirect to login
      router.push('/login');
    }
  }, true);
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

* {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0f0f14;
}
::-webkit-scrollbar-thumb {
  background: #7c3aed;
  border-radius: 10px;
}
</style>

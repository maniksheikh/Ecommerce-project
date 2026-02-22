<template>
  <!-- NAVBAR -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
          <span class="text-white font-black text-sm">V</span>
        </div>
        <span class="text-xl font-extrabold tracking-tight">Vel<span class="text-violet-400">orra</span></span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-px bg-violet-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <!-- Search -->
        <button class="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </button>

        <!-- Cart -->
        <button class="relative group p-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 7H4l1-7z"/>
          </svg>
          <span class="absolute -top-1 -right-1 w-4 h-4 bg-violet-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>
        </button>

        <!-- Sign In -->
        <button class="hidden md:block px-4 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 active:scale-95">
          Sign In
        </button>

        <!-- Mobile Menu Toggle -->
        <button @click="mobileMenu = !mobileMenu" class="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
          <svg v-if="!mobileMenu" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenu"
        class="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-3"
      >
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="text-gray-300 hover:text-white text-sm font-medium py-2 border-b border-white/5 transition-colors"
          @click="mobileMenu = false"
        >
          {{ link.label }}
        </a>
        <button class="mt-2 w-full px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all">
          Sign In
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenu = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Products', href: '#products' },
  { label: 'Categories', href: '#categories' },
  { label: 'Reviews', href: '#testimonials' },
]
</script>

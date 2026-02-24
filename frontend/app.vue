<template>
  <div class="min-h-screen font-sans bg-gray-950 text-white overflow-x-hidden">
    <!-- NAVBAR -->
    <AppNavbar />
    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
      <!-- Background -->
      <div class="absolute inset-0 bg-gray-950">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,60,200,0.25),transparent)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(217,70,239,0.1),transparent)]"></div>
        <!-- Grid -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      <!-- Floating orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay:1s"></div>
      <div class="relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
        <!-- Left: Text -->
        <div class="text-center lg:text-left space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">
            <span class="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            New Collection 2026 — Live Now
          </div>
          <h1 class="text-4xl md:text-5xl xl:text-[64px] font-black leading-2 tracking-tight">
            <span class="block text-white">Discover <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Premium</span></span>
            <span class="block text-white mt-1">Products</span>
          </h1>
          <p class="text-lg text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Explore thousands of curated, high-quality products from top brands. Unbeatable prices, lightning-fast delivery, and world-class customer service.
          </p>
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#products" class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-2xl shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
              Shop Now
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="#features" class="inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-violet-500/50 text-gray-300 hover:text-white font-semibold rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              Explore More
            </a>
          </div>
          <!-- Stats -->
          <div class="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
            <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
              <div class="text-2xl font-black text-white">{{ stat.value }}</div>
              <div class="text-sm text-gray-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <!-- Right: Hero Visual -->
        <div class="relative flex justify-center items-center">
          <div class="relative w-full">
            <!-- Glow ring -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 blur-2xl scale-110"></div>
            <!-- Main card -->
            <div class="relative rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-white/10 backdrop-blur-sm overflow-hidden p-8 shadow-2xl">
              <!-- Product showcase grid -->
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(item, i) in heroProducts" :key="i"
                  class="group rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
                  :class="item.bg">
                  <span class="text-4xl">{{ item.emoji }}</span>
                  <div class="text-center">
                    <div class="text-xs font-semibold text-white">{{ item.name }}</div>
                    <div class="text-xs font-bold" :class="item.color">{{ item.price }}</div>
                  </div>
                  <span class="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300">{{ item.badge }}</span>
                </div>
              </div>
              <!-- Bottom bar -->
              <div class="mt-6 flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                <div>
                  <div class="text-xs text-gray-400">Today's Best Deal</div>
                  <div class="text-sm font-bold text-white">Up to 70% OFF</div>
                </div>
                <div class="flex -space-x-2">
                  <div v-for="n in 4" :key="n" class="w-7 h-7 rounded-full border-2 border-gray-800 flex items-center justify-center text-xs font-bold"
                    :class="['bg-violet-500','bg-fuchsia-500','bg-pink-500','bg-orange-500'][n-1]">
                    {{ ['A','B','C','D'][n-1] }}
                  </div>
                </div>
                <div class="text-xs text-gray-400">+12k buyers</div>
              </div>
            </div>
            <!-- Floating badges -->
            <div class="absolute -top-4 -right-4 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-green-500/30 animate-bounce">
              ✈️ Free Shipping
            </div>
            <div class="absolute -bottom-4 -left-4 px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-amber-500/30">
              🔥 Hot Deals
            </div>
          </div>
        </div>
      </div>
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span class="text-xs font-medium">Scroll</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </div>
    </section>
    <!-- MARQUEE BRANDS -->
    <div class="relative py-6 bg-gray-900/50 border-y border-white/5 overflow-hidden">
      <div class="flex gap-16 marquee-track">
        <span v-for="(brand, index) in brands.concat(brands)" :key="index"
          class="whitespace-nowrap text-gray-500 font-bold text-lg tracking-widest uppercase hover:text-gray-300 transition-colors cursor-default">
          {{ brand }}
        </span>
      </div>
    </div>
    <!-- FEATURES -->
    <section id="features" class="py-28 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <span class="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">Why Choose Us</span>
          <h2 class="text-4xl md:text-5xl font-black text-white">Everything you <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">need</span></h2>
          <p class="text-gray-400 max-w-xl mx-auto">We've built the ultimate shopping experience with features that matter most to our customers.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="feature in features" :key="feature.title"
            class="group relative p-6 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 cursor-default">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110"
              :class="feature.bg">
              {{ feature.icon }}
            </div>
            <h3 class="text-white font-bold text-lg mb-2">{{ feature.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- CATEGORIES -->
    <section id="categories" class="py-20 px-6 bg-gray-900/30">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div class="space-y-2">
            <span class="inline-block px-4 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm font-medium">Categories</span>
            <h2 class="text-4xl font-black text-white">Browse by <span class="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Category</span></h2>
          </div>
          <a href="#" class="text-violet-400 hover:text-violet-300 text-sm font-semibold flex items-center gap-1 group">
            View All
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="cat in categories" :key="cat.name"
            class="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square flex flex-col items-center justify-center gap-3 p-4 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            :class="cat.bg">
            <span class="text-4xl group-hover:scale-125 transition-transform duration-300">{{ cat.emoji }}</span>
            <span class="text-sm font-semibold text-white text-center">{{ cat.name }}</span>
            <span class="text-xs text-gray-400">{{ cat.count }} items</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED PRODUCTS -->
    <section id="products" class="py-28 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div class="space-y-2">
            <span class="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">Featured</span>
            <h2 class="text-4xl font-black text-white">Trending <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Products</span></h2>
          </div>
          <!-- Filter tabs -->
          <div class="flex gap-2 flex-wrap">
            <button v-for="tab in filterTabs" :key="tab"
              @click="activeTab = tab"
              class="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              :class="activeTab === tab ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25' : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'">
              {{ tab }}
            </button>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="product in filteredProducts" :key="product.id"
            class="group relative rounded-2xl bg-gray-900/60 border border-white/5 hover:border-violet-500/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"> 
            <!-- Image area -->
            <div class="relative aspect-square overflow-hidden flex items-center justify-center"
              :class="product.imageBg">
              <span class="text-7xl group-hover:scale-110 transition-transform duration-500">{{ product.emoji }}</span>
              <!-- Badges -->
              <div class="absolute top-3 left-3 flex flex-col gap-1">
                <span v-if="product.badge" class="text-xs font-bold px-2 py-0.5 rounded-lg" :class="product.badgeClass">
                  {{ product.badge }}
                </span>
              </div>
              <!-- Wishlist -->
              <button class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </button>
              <!-- Quick add -->
              <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button class="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition-colors">
                  Quick Add to Cart
                </button>
              </div>
            </div>
            <!-- Info -->
            <div class="p-4 space-y-2">
              <p class="text-xs text-violet-400 font-semibold uppercase tracking-wider">{{ product.category }}</p>
              <h3 class="text-white font-semibold text-sm leading-snug group-hover:text-violet-300 transition-colors line-clamp-2">{{ product.name }}</h3>
              
              <!-- Stars -->
              <div class="flex items-center gap-1">
                <div class="flex text-amber-400 text-xs">
                  <span v-for="n in 5" :key="n">{{ n <= product.rating ? '★' : '☆' }}</span>
                </div>
                <span class="text-xs text-gray-500">({{ product.reviews }})</span>
              </div>

              <div class="flex items-center justify-between pt-1">
                <div class="flex items-center gap-2">
                  <span class="text-lg font-black text-white">${{ product.price }}</span>
                  <span v-if="product.originalPrice" class="text-sm text-gray-500 line-through">${{ product.originalPrice }}</span>
                </div>
                <button class="p-2 rounded-xl bg-violet-600/20 text-violet-400 hover:bg-violet-600 hover:text-white transition-all">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button class="group inline-flex items-center gap-3 px-10 py-4 border border-violet-500/30 hover:border-violet-500 text-violet-300 hover:text-white font-bold rounded-2xl bg-violet-500/5 hover:bg-violet-500/10 transition-all duration-300">
            Load More Products
            <svg class="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- PROMO BANNER -->
    <section class="py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="relative rounded-3xl overflow-hidden p-12 text-center"
          style="background: linear-gradient(135deg, #1e093a 0%, #2d0a5c 40%, #1a0630 70%, #2e0845 100%);">
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(167,60,255,0.3),transparent)]"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
          <div class="relative space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium">
              ⚡ Limited Time Offer
            </div>
            <h2 class="text-5xl md:text-6xl font-black text-white">
              Get <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">30% OFF</span>
            </h2>
            <p class="text-gray-400 max-w-lg mx-auto text-lg">Use code <span class="font-mono font-bold text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded-lg border border-violet-500/20">LUXE30</span> at checkout on your first order</p>
            <!-- Countdown -->
            <div class="flex justify-center gap-4 flex-wrap">
              <div v-for="unit in countdown" :key="unit.label" class="flex flex-col items-center">
                <div class="w-16 h-16 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl font-black text-white">
                  {{ unit.value }}
                </div>
                <span class="text-xs text-gray-400 mt-1">{{ unit.label }}</span>
              </div>
            </div>
            <button class="inline-flex items-center gap-2 px-10 py-4 bg-white text-gray-900 font-black rounded-2xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl shadow-white/20">
              Claim Discount
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section id="testimonials" class="py-28 px-6 bg-gray-900/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <span class="inline-block px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium">Testimonials</span>
          <h2 class="text-4xl md:text-5xl font-black text-white">What our <span class="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">customers</span> say</h2>
          <p class="text-gray-400 max-w-xl mx-auto">Join over 50,000 satisfied customers who love shopping with us.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="testimonial in testimonials" :key="testimonial.name"
            class="relative p-6 rounded-2xl bg-gray-900/80 border border-white/5 hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-1 space-y-4">
            <!-- Quote -->
            <div class="text-4xl text-violet-400/30 font-serif leading-none">"</div>
            <!-- Stars -->
            <div class="flex text-amber-400 text-sm">
              <span v-for="n in 5" :key="n">★</span>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">{{ testimonial.text }}</p>
            <div class="flex items-center gap-3 pt-2 border-t border-white/5">
              <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                :class="testimonial.avatarBg">
                {{ testimonial.initials }}
              </div>
              <div>
                <div class="text-white font-semibold text-sm">{{ testimonial.name }}</div>
                <div class="text-gray-500 text-xs">{{ testimonial.role }}</div>
              </div>
              <div class="ml-auto">
                <span class="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-medium">✓ Verified</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust indicators -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div v-for="trust in trustBadges" :key="trust.label" class="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-gray-900/40 border border-white/5">
            <span class="text-3xl">{{ trust.icon }}</span>
            <span class="text-white font-bold">{{ trust.value }}</span>
            <span class="text-gray-500 text-sm">{{ trust.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="py-20 px-6">
      <div class="max-w-2xl mx-auto text-center space-y-6">
        <span class="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">Newsletter</span>
        <h2 class="text-4xl font-black text-white">Stay in the <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">loop</span></h2>
        <p class="text-gray-400">Get exclusive deals, new arrivals, and insider offers delivered straight to your inbox.</p>
        <form @submit.prevent="subscribe" class="flex gap-3 max-w-md mx-auto">
          <input v-model="email"
            type="email"
            placeholder="Enter your email..."
            class="flex-1 px-5 py-3.5 rounded-xl bg-gray-900 border border-white/10 focus:border-violet-500 text-white placeholder-gray-500 text-sm outline-none transition-colors">
          <button type="submit"
            class="px-6 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-lg shadow-violet-500/25 transition-all hover:scale-105 active:scale-95 whitespace-nowrap text-sm">
            Subscribe
          </button>
        </form>
        <p class="text-xs text-gray-600">No spam, ever. Unsubscribe any time.</p>
        <div v-if="subscribed" class="text-green-400 text-sm font-medium animate-pulse">✓ Thanks for subscribing! Check your inbox.</div>
      </div>
    </section>

    <!-- FOOTER -->
    <AppFooter />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Hero
const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '10K+', label: 'Products' },
  { value: '4.9★', label: 'Avg. Rating' },
  { value: '24/7', label: 'Support' },
]

const heroProducts = [
  { emoji: '👟', name: 'Air Sneakers', price: '$129', badge: 'New', bg: 'bg-violet-500/10 hover:bg-violet-500/20', color: 'text-violet-300' },
  { emoji: '⌚', name: 'Smart Watch', price: '$299', badge: 'Hot', bg: 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20', color: 'text-fuchsia-300' },
  { emoji: '💻', name: 'Laptop Pro', price: '$899', badge: 'Sale', bg: 'bg-blue-500/10 hover:bg-blue-500/20', color: 'text-blue-300' },
  { emoji: '🎧', name: 'Headphones', price: '$199', badge: 'Top', bg: 'bg-pink-500/10 hover:bg-pink-500/20', color: 'text-pink-300' },
]

const brands = ['Nike', 'Apple', 'Samsung', 'Adidas', 'Sony', 'LG', 'Puma', 'Google', 'Bose', 'Zara']

// Features
const features = [
  { icon: '🚀', title: 'Lightning Fast', desc: 'Delivery in 24-48 hours directly to your doorstep.', bg: 'bg-violet-500/10' },
  { icon: '🔒', title: 'Secure Payments', desc: '256-bit SSL encryption for all your transactions.', bg: 'bg-green-500/10' },
  { icon: '↩️', title: 'Easy Returns', desc: '30-day hassle-free returns on all products.', bg: 'bg-blue-500/10' },
  { icon: '🏆', title: 'Premium Quality', desc: 'Hand-picked products from certified brands only.', bg: 'bg-amber-500/10' },
]

// Categories
const categories = [
  { name: 'Electronics', emoji: '📱', count: '2.4K', bg: 'bg-blue-500/10 hover:bg-blue-500/20' },
  { name: 'Fashion', emoji: '👗', count: '1.8K', bg: 'bg-pink-500/10 hover:bg-pink-500/20' },
  { name: 'Footwear', emoji: '👟', count: '980', bg: 'bg-violet-500/10 hover:bg-violet-500/20' },
  { name: 'Home', emoji: '🏠', count: '1.2K', bg: 'bg-amber-500/10 hover:bg-amber-500/20' },
  { name: 'Beauty', emoji: '💄', count: '740', bg: 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20' },
  { name: 'Sports', emoji: '⚽', count: '630', bg: 'bg-green-500/10 hover:bg-green-500/20' },
]

// Products
const filterTabs = ['All', 'Electronics', 'Fashion', 'Footwear', 'Beauty']
const activeTab = ref('All')
const allProducts = [
  { id:1, name:'AirPods Pro Max — Active Noise Cancellation', category:'Electronics', emoji:'🎧', price:'249', originalPrice:'299', badge:'Sale', badgeClass:'bg-red-500/80 text-white', imageBg:'bg-gradient-to-br from-blue-900/40 to-violet-900/40', rating:5, reviews:'1.2k', tab:'Electronics' },
  { id:2, name:'Nike Air Max 2026 Running Shoes', category:'Footwear', emoji:'👟', price:'129', originalPrice:null, badge:'New', badgeClass:'bg-green-500/80 text-white', imageBg:'bg-gradient-to-br from-orange-900/30 to-red-900/30', rating:4, reviews:'896', tab:'Footwear' },
  { id:3, name:'Galaxy S25 Ultra Smartphone 512GB', category:'Electronics', emoji:'📱', price:'999', originalPrice:'1199', badge:'Hot', badgeClass:'bg-orange-500/80 text-white', imageBg:'bg-gradient-to-br from-gray-800/60 to-gray-900/60', rating:5, reviews:'2.1k', tab:'Electronics' },
  { id:4, name:'Leather Crossbody Handbag — Premium', category:'Fashion', emoji:'👜', price:'89', originalPrice:null, badge:null, badgeClass:'', imageBg:'bg-gradient-to-br from-amber-900/30 to-yellow-900/30', rating:4, reviews:'544', tab:'Fashion' },
  { id:5, name:'Apple Watch Ultra 2 — Titanium Case', category:'Electronics', emoji:'⌚', price:'799', originalPrice:'899', badge:'Sale', badgeClass:'bg-red-500/80 text-white', imageBg:'bg-gradient-to-br from-gray-800/60 to-slate-900/60', rating:5, reviews:'3.4k', tab:'Electronics' },
  { id:6, name:'Floral Maxi Dress — Summer Collection', category:'Fashion', emoji:'👗', price:'59', originalPrice:'79', badge:'Sale', badgeClass:'bg-pink-500/80 text-white', imageBg:'bg-gradient-to-br from-pink-900/30 to-fuchsia-900/30', rating:4, reviews:'321', tab:'Fashion' },
  { id:7, name:'Adidas Ultraboost 24 Performance', category:'Footwear', emoji:'🥿', price:'169', originalPrice:null, badge:'New', badgeClass:'bg-green-500/80 text-white', imageBg:'bg-gradient-to-br from-green-900/30 to-teal-900/30', rating:4, reviews:'678', tab:'Footwear' },
  { id:8, name:'Luxury Skincare Gift Set — 12 Pieces', category:'Beauty', emoji:'🧴', price:'79', originalPrice:'120', badge:'Sale', badgeClass:'bg-red-500/80 text-white', imageBg:'bg-gradient-to-br from-rose-900/30 to-pink-900/40', rating:5, reviews:'892', tab:'Beauty' },
]
const filteredProducts = computed(() =>
  activeTab.value === 'All' ? allProducts : allProducts.filter(p => p.tab === activeTab.value)
)

// Countdown (static demo)
const countdown = ref([
  { label: 'Hours', value: '11' },
  { label: 'Minutes', value: '47' },
  { label: 'Seconds', value: '32' },
])
let timer = null
onMounted(() => {
  let secs = 11 * 3600 + 47 * 60 + 32
  timer = setInterval(() => {
    if (secs <= 0) { clearInterval(timer); return }
    secs--
    countdown.value[0].value = String(Math.floor(secs / 3600)).padStart(2, '0')
    countdown.value[1].value = String(Math.floor((secs % 3600) / 60)).padStart(2, '0')
    countdown.value[2].value = String(secs % 60).padStart(2, '0')
  }, 1000)
})
onUnmounted(() => clearInterval(timer))

// Testimonials
const testimonials = [
  { name: 'Sarah Johnson', role: 'Fashion Blogger', initials: 'SJ', avatarBg: 'bg-gradient-to-br from-violet-600 to-fuchsia-600', text: 'Absolutely love LuxeShop! The quality of every product I\'ve ordered has exceeded my expectations. Fast shipping and gorgeous packaging too. My go-to online store now.' },
  { name: 'Marcus Chen', role: 'Tech Enthusiast', initials: 'MC', avatarBg: 'bg-gradient-to-br from-blue-600 to-cyan-600', text: 'Best online shopping experience I\'ve had. The product descriptions are accurate, customer support was incredibly helpful, and my order arrived ahead of schedule!' },
  { name: 'Priya Sharma', role: 'Fitness Coach', initials: 'PS', avatarBg: 'bg-gradient-to-br from-pink-600 to-rose-600', text: 'I\'ve been ordering athletic gear from LuxeShop for over a year. The prices are unbeatable, the quality is excellent, and returns are genuinely hassle-free. 10/10!' },
]

const trustBadges = [
  { icon: '⭐', value: '4.9/5', label: 'Customer Rating' },
  { icon: '🛡️', value: '100%', label: 'Secure Shopping' },
  { icon: '📦', value: '1M+', label: 'Orders Delivered' },
  { icon: '🌍', value: '50+', label: 'Countries Served' },
]

// Newsletter
const email = ref('')
const subscribed = ref(false)
const subscribe = () => {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => subscribed.value = false, 4000)
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

* {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.marquee-track {
  display: flex;
  gap: 4rem;
  animation: marquee 25s linear infinite;
  width: max-content;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<template>
  <!-- FOOTER -->
  <footer class="border-t border-white/5 bg-gray-900/50">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid md:grid-cols-5 gap-12">

        <!-- Brand Column -->
        <div class="md:col-span-2 space-y-5">
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <span class="text-white font-black text-sm">V</span>
            </div>
            <span class="text-xl font-extrabold tracking-tight text-white">Vel<span class="text-violet-400">orra</span></span>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
            The premium online destination for curated products. Quality, style, and value — guaranteed.
          </p>

          <!-- Social Links -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              href="#"
              :aria-label="social.label"
              class="w-9 h-9 rounded-xl bg-gray-800 hover:bg-violet-600 border border-white/5 hover:border-transparent flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <!-- Link Columns -->
        <div v-for="col in footerLinks" :key="col.title" class="space-y-4">
          <h4 class="text-white font-bold text-sm uppercase tracking-wider">{{ col.title }}</h4>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link">
              <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-sm">© 2026 Velorra. All rights reserved.</p>

        <div class="flex items-center gap-6">
          <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          <a href="#" class="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
        </div>

        <!-- Payment Icons -->
        <div class="flex items-center gap-2 text-gray-500 text-xs">
          <span>💳</span>
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
          <span>Apple Pay</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { label: 'Twitter', icon: '𝕏' },
  { label: 'Instagram', icon: '📷' },
  { label: 'Facebook', icon: '𝔽' },
  { label: 'YouTube', icon: '▶' },
]

const footerLinks = [
  { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'Sale Items', 'Gift Cards', 'All Categories'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog', 'Partners'] },
  { title: 'Help', links: ['FAQ', 'Shipping Info', 'Returns', 'Track Order', 'Contact Us'] },
]
</script>

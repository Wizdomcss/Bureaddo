export const headerHTML = `
<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
<div class="bg-blue-500 hidden md:block">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <div class="flex items-center space-x-8">
      <a href="#" class="text-white hover:text-gray-200 font-medium">Delivery</a>
      <a href="#" class="text-white hover:text-gray-200 font-medium">Our Stores</a>
    </div>
    <div class="flex items-center space-x-8">
      <a href="#" class="text-white hover:text-gray-200 flex items-center">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span class="ml-2 font-medium">Search</span>
        </a>
        <a href="#" class="text-white hover:text-gray-200 flex items-center">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="ml-2 font-medium">Cart</span>
        </a>
         <a href="#" class="text-white hover:text-gray-200 flex items-center">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="ml-2 font-medium">My Account</span>
        </a>
    </div>
  </div>
</div>
 
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:bg-white bg-violet-500">
    <div class="flex justify-between md:justify-center items-center h-16">
      <div class="md:hidden flex items-center">
        <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div class="hidden md:flex md:space-x-8">
        <a href="#" class="text-gray-700 hover:text-black font-medium">What's New</a>
        <a href="#" class="text-gray-700 hover:text-black font-medium">Easter</a>
        <a href="#" class="text-gray-700 hover:text-black font-medium">Occasions</a>
        <a href="#" class="text-gray-700 hover:text-black font-medium">Cupcakes</a>
        <a href="#" class="text-gray-700 hover:text-black font-medium">Cakes</a>
        <a href="#" class="text-gray-700 hover:text-black font-medium">Brownies & Cookies</a>
        <a href="#" class="text-gray-700 hover:text-black font-medium">Birthday Cakes</a>
        <a href="#" class="text-gray-700 hover:text-black font-medium">Wedding Cakes</a>
      </div>
      <div class="md:hidden flex items-center space-x-4">
        <a href="#" class="text-white hover:text-gray-200">
          <span class="sr-only">Search</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </a>
        <a href="#" class="text-white hover:text-gray-200">
          <span class="sr-only">Cart</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </a>
         <a href="#" class="text-white hover:text-gray-200">
          <span class="sr-only">Account</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </a>
      </div>
    </div>
    <div id="mobile-menu" class="fixed inset-0 bg-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out flex flex-col">
      <div class="bg-violet-500 flex justify-between items-center p-4">
        <h2 class="text-white text-xl font-bold italic">Menu</h2>
        <button id="close-menu-button" class="text-white">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-col divide-y divide-gray-200">
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>What's New</span>
          <svg class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Easter</span>
          <svg class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Occasions</span>
          <svg class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Cupcakes</span>
          <svg class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Cakes</span>
          <svg class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Brownies & Cookies</span>
          <svg class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Birthday Cakes</span>
          <svg class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Wedding Cakes</span>
          <svg class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </nav>

 <div class="bg-red-700"> 
  <div class="max-w-7xl mx-auto px-6 mx-4">
  </div>
</div>
<div class="" ></div>
</header>
`

export const footerHTML = `
<footer class="bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
      <div>
        <h3 class="text-lg font-bold mb-4 italic">Bureaddi</h3>
        <p class="text-gray-400 text-sm">Crafting delicious moments since 2026. Every bite is a piece of heaven.</p>
      </div>
      <div>
        <h4 class="font-bold mb-4">Quick Links</h4>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="#" class="hover:text-white">Delivery</a></li>
          <li><a href="#" class="hover:text-white">Our Stores</a></li>
          <li><a href="#" class="hover:text-white">What's New</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Support</h4>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="#" class="hover:text-white">Contact Us</a></li>
          <li><a href="#" class="hover:text-white">FAQs</a></li>
          <li><a href="#" class="hover:text-white">Shipping Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Follow Us</h4>
        <div class="flex justify-center md:justify-start space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.058 2.633.304 3.511.574.878.27 1.502.64 2.128 1.266.626.626.996 1.25 1.266 2.128.27.878.516 2.145.574 3.511.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.366-.304 2.633-.574 3.511-.27.878-.64 1.502-1.266 2.128-.626.626-1.25.996-2.128 1.266-.878.27-2.145.516-3.511.574-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.058-2.633-.304-3.511-.574-.878-.27-1.502-.64-2.128-1.266-.626-.626-.996-1.25-1.266-2.128-.27-.878-.516-2.145-.574-3.511-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.366.304-2.633.574-3.511.27-.878.64-1.502 1.266-2.128.626-.626 1.25-.996 2.128-1.266.878-.27 2.145-.516 3.511-.574 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.413a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-xs">
      <p>&copy; 2026 Bureaddi. All rights reserved.</p>
    </div>
  </div>
</footer>
`

export function setupLayout() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
    });
  }

  if (closeMenuButton && mobileMenu) {
    closeMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });
  }
}

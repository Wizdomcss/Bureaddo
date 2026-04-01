import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


document.querySelector('#app').innerHTML = `
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
      <div class="bg-[#4A1D1D] flex justify-between items-center p-4">
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

<section></section>


`

document.getElementById('mobile-menu-button').addEventListener('click', function() {
  var mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.remove('-translate-x-full');
});

document.getElementById('close-menu-button').addEventListener('click', function() {
  var mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.add('-translate-x-full');
});




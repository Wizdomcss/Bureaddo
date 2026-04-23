export const headerHTML = `
<header id="site-header" class="bg-white border-b border-gray-200 sticky top-0 z-50 transform transition-transform duration-200 ease-out">
<div class="bg-violet-500 hidden lg:block">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <div class="flex items-center space-x-8">
      <a data-link href="/" class="text-white hover:text-gray-200 font-medium">Home</a>
      <a data-link href="/delivery" class="text-white hover:text-gray-200 font-medium">Delivery</a>
      <a data-link href="/stores" class="text-white hover:text-gray-200 font-medium">Our Stores</a>
    </div>
    <div class="flex items-center space-x-8">
      <a data-link href="/contact" class="text-white hover:text-gray-200 font-medium">Contact Us</a>
      <a data-link href="/blog" class="text-white hover:text-gray-200 font-medium">Blog</a>
        <a data-link href="/cart" class="text-white hover:text-gray-200 flex items-center">
          <span class="relative">
            <i class="fa-solid fa-cart-shopping text-lg"></i>
            <span id="cart-badge-desktop" class="hidden absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-white text-violet-700 text-[11px] font-extrabold leading-5 text-center"></span>
          </span>
          <span class="ml-2 font-medium">Cart</span>
        </a>
         <a data-link href="/account" class="text-white hover:text-gray-200 flex items-center">
          <i class="fa-solid fa-user text-lg"></i>
          <span class="ml-2 font-medium">My Account</span>
        </a>
    </div>
  </div>
</div>

<div class="hidden lg:block bg-white border-b border-gray-200">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
    <form id="site-search-form" class="w-full flex items-center gap-3">
      <input id="site-search-input" type="search" name="q" placeholder="I am looking for..." class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500" />
      <button type="submit" class="rounded-md bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">
        Search
      </button>
    </form>
  </div>
</div>
 
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:bg-white bg-violet-500">
    <div class="flex justify-between lg:justify-center items-center h-16">
      <div class="lg:hidden flex items-center">
        <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="sr-only">Open main menu</span>
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
      <div class="hidden lg:flex lg:space-x-8 items-center whitespace-nowrap flex-nowrap">
        <div class="group relative">
          <button type="button" data-mega-trigger="whats-new" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            What's New <i data-mega-chevron="whats-new" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="whats-new" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/whats-new/new-5-inch-cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cakes" alt="New 5 inch Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">New 5" Cakes</span>
                </a>
                <a data-link href="/whats-new/hampers" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Hampers" alt="Hampers" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Hampers</span>
                </a>
                <a data-link href="/whats-new/party-bag-fillers" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Party" alt="Party Bag Fillers" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Party Bag Fillers</span>
                </a>
                <a data-link href="/whats-new/spring-bakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Spring" alt="Spring Bakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Spring Bakes</span>
                </a>
                <a data-link href="/whats-new/sharing-bundles" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Sharing" alt="Sharing Bundles" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Sharing Bundles</span>
                </a>
                <a data-link href="/whats-new/vintage-cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Vintage" alt="Vintage Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Vintage Cakes</span>
                </a>
                <a data-link href="/whats-new" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All What's New</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="easter" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Easter <i data-mega-chevron="easter" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="easter" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/whats-new/spring-bakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Spring" alt="Spring Bakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Spring Bakes</span>
                </a>
                <a data-link href="/pies-cheesecakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Pies" alt="Pies and Cheesecakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Pies & Cheesecakes</span>
                </a>
                <a data-link href="/cupcakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cupcakes" alt="Cupcakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Cupcakes</span>
                </a>
                <a data-link href="/cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cakes" alt="Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Cakes</span>
                </a>
                <a data-link href="/nationwide" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Ship" alt="Nationwide" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Nationwide</span>
                </a>
                <a data-link href="/whats-new/hampers" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Hampers" alt="Hampers" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Hampers</span>
                </a>
                <a data-link href="/easter" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All Easter</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="occasions" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Occasions <i data-mega-chevron="occasions" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="occasions" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/birthday-cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Birthday" alt="Birthday Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Birthday Cakes</span>
                </a>
                <a data-link href="/wedding-cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Wedding" alt="Wedding Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Wedding Cakes</span>
                </a>
                <a data-link href="/cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cakes" alt="Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Cakes</span>
                </a>
                <a data-link href="/cupcakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cupcakes" alt="Cupcakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Cupcakes</span>
                </a>
                <a data-link href="/brownies-cookies" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Treats" alt="Brownies and Cookies" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Brownies & Cookies</span>
                </a>
                <a data-link href="/pies-cheesecakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cheesecake" alt="Pies and Cheesecakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Pies & Cheesecakes</span>
                </a>
                <a data-link href="/occasions" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All Occasions</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="cupcakes" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Cupcakes <i data-mega-chevron="cupcakes" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="cupcakes" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/cupcakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cupcakes" alt="Cupcakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">All Cupcakes</span>
                </a>
                <a data-link href="/whats-new/party-bag-fillers" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Party" alt="Party Bag Fillers" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Party Bag Fillers</span>
                </a>
                <a data-link href="/occasions" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Occasions" alt="Occasions" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Occasions</span>
                </a>
                <a data-link href="/search?q=cupcake" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Search" alt="Search" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Search Cupcakes</span>
                </a>
                <a data-link href="/whats-new" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=New" alt="What's New" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">What's New</span>
                </a>
                <a data-link href="/brownies-cookies" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Treats" alt="Treats" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Treats</span>
                </a>
                <a data-link href="/cupcakes" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All Cupcakes</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="cakes" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Cakes <i data-mega-chevron="cakes" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="cakes" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/search?q=vanilla+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Vanilla" alt="Vanilla Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Vanilla Cakes</span>
                </a>
                <a data-link href="/search?q=red+velvet" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Red+Velvet" alt="Red Velvet" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Red Velvet</span>
                </a>
                <a data-link href="/search?q=heart+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Heart" alt="Heart Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Heart Cakes</span>
                </a>
                <a data-link href="/search?q=gluten+free+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Gluten+Free" alt="Cakes Made Without Gluten" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Cakes Made Without Gluten</span>
                </a>
                <a data-link href="/search?q=peppa+pig+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Peppa" alt="Peppa Pig Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Peppa Pig Cakes</span>
                </a>
                <a data-link href="/search?q=pinata+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Pinata" alt="Pinata Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Pinata Cakes</span>
                </a>
                <a data-link href="/search?q=rainbow+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Rainbow" alt="Rainbow Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Rainbow Cakes</span>
                </a>
                <a data-link href="/search?q=giant+cupcake" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Giant+Cupcake" alt="The Giant Cupcake" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">The Giant Cupcake</span>
                </a>
                <a data-link href="/search?q=vegan+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Vegan" alt="Vegan Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Vegan Cakes</span>
                </a>
                <a data-link href="/search?q=chocolate+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Chocolate" alt="Chocolate Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Chocolate Cakes</span>
                </a>
                <a data-link href="/search?q=nutty+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Nutty" alt="Nutty Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Nutty Cakes</span>
                </a>
                <a data-link href="/search?q=fruity+cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Fruity" alt="Fruity Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Fruity Cakes</span>
                </a>
                <a data-link href="/cakes" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All Cakes</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="nationwide" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Nationwide <i data-mega-chevron="nationwide" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="nationwide" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/whats-new/hampers" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Hampers" alt="Hampers" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Hampers</span>
                </a>
                <a data-link href="/brownies-cookies" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Treats" alt="Brownies and Cookies" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Brownies & Cookies</span>
                </a>
                <a data-link href="/pies-cheesecakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Pies" alt="Pies and Cheesecakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Pies & Cheesecakes</span>
                </a>
                <a data-link href="/whats-new/sharing-bundles" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Bundles" alt="Sharing Bundles" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Sharing Bundles</span>
                </a>
                <a data-link href="/search?q=nationwide" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Search" alt="Search" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Search Nationwide</span>
                </a>
                <a data-link href="/delivery" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Delivery" alt="Delivery" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Delivery Info</span>
                </a>
                <a data-link href="/nationwide" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All Nationwide</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="brownies-cookies" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Brownies & Cookies <i data-mega-chevron="brownies-cookies" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="brownies-cookies" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/whats-new/sharing-bundles" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Bundles" alt="Sharing Bundles" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Sharing Bundles</span>
                </a>
                <a data-link href="/whats-new/party-bag-fillers" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Party" alt="Party Bag Fillers" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Party Bag Fillers</span>
                </a>
                <a data-link href="/nationwide" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Ship" alt="Nationwide" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Nationwide</span>
                </a>
                <a data-link href="/search?q=brownie" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Search" alt="Search" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Search Brownies</span>
                </a>
                <a data-link href="/search?q=cookie" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Search" alt="Search" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Search Cookies</span>
                </a>
                <a data-link href="/whats-new" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=New" alt="What's New" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">What's New</span>
                </a>
                <a data-link href="/brownies-cookies" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All Treats</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="pies-cheesecakes" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Pies & Cheesecakes <i data-mega-chevron="pies-cheesecakes" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="pies-cheesecakes" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/pies-cheesecakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cheesecake" alt="Pies and Cheesecakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">All Pies & Cheesecakes</span>
                </a>
                <a data-link href="/whats-new/spring-bakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Spring" alt="Spring Bakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Spring Bakes</span>
                </a>
                <a data-link href="/easter" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Easter" alt="Easter" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Easter</span>
                </a>
                <a data-link href="/nationwide" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Ship" alt="Nationwide" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Nationwide</span>
                </a>
                <a data-link href="/search?q=cheesecake" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Search" alt="Search" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Search Cheesecake</span>
                </a>
                <a data-link href="/search?q=pie" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Search" alt="Search" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Search Pies</span>
                </a>
                <a data-link href="/pies-cheesecakes" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="birthday-cakes" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Birthday Cakes <i data-mega-chevron="birthday-cakes" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="birthday-cakes" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/birthday-cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Birthday" alt="Birthday Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">All Birthday Cakes</span>
                </a>
                <a data-link href="/occasions" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Occasions" alt="Occasions" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Occasions</span>
                </a>
                <a data-link href="/cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cakes" alt="Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Cakes</span>
                </a>
                <a data-link href="/cupcakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cupcakes" alt="Cupcakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Cupcakes</span>
                </a>
                <a data-link href="/whats-new" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=New" alt="What's New" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">What's New</span>
                </a>
                <a data-link href="/search?q=birthday" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Search" alt="Search" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Search Birthday</span>
                </a>
                <a data-link href="/birthday-cakes" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All Birthday Cakes</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button type="button" data-mega-trigger="wedding-cakes" aria-expanded="false" class="text-gray-700 hover:text-black font-medium flex items-center whitespace-nowrap">
            Wedding Cakes <i data-mega-chevron="wedding-cakes" class="fa-solid fa-chevron-down ml-1 text-[10px] transition-transform duration-200 ease-out group-hover:rotate-180"></i>
          </button>
          <div data-mega-panel="wedding-cakes" class="fixed left-0 right-0 top-48 h-[66vh] bg-white shadow-xl border border-gray-100 hidden group-hover:block z-50 overflow-y-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="grid grid-cols-4 gap-6">
                <a data-link href="/wedding-cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Wedding" alt="Wedding Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">All Wedding Cakes</span>
                </a>
                <a data-link href="/whats-new/vintage-cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Vintage" alt="Vintage Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Vintage Cakes</span>
                </a>
                <a data-link href="/occasions" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Occasions" alt="Occasions" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Occasions</span>
                </a>
                <a data-link href="/cakes" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Cakes" alt="Cakes" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Cakes</span>
                </a>
                <a data-link href="/contact" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Contact" alt="Contact Us" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Custom Inquiries</span>
                </a>
                <a data-link href="/delivery" class="flex items-start space-x-4 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white min-w-0">
                  <img src="https://placehold.co/80x80?text=Delivery" alt="Delivery" class="w-16 h-16 rounded-full object-cover shrink-0">
                  <span class="font-medium text-gray-800 leading-snug whitespace-normal break-words">Delivery Info</span>
                </a>
                <a data-link href="/wedding-cakes" class="flex items-center justify-center space-x-2 p-4 border border-violet-300 rounded-xl hover:shadow-md transition-shadow bg-white group/all">
                  <span class="font-medium text-violet-600">View All Wedding Cakes</span>
                  <i class="fa-solid fa-arrow-right text-violet-600 group-hover/all:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden flex items-center space-x-4">
        <a data-link href="/search" class="text-white hover:text-gray-200">
          <span class="sr-only">Search</span>
          <i class="fa-solid fa-magnifying-glass text-xl"></i>
        </a>
        <a data-link href="/cart" class="text-white hover:text-gray-200 relative">
          <span class="sr-only">Cart</span>
          <i class="fa-solid fa-cart-shopping text-xl"></i>
          <span id="cart-badge-mobile" class="hidden absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-white text-violet-700 text-[11px] font-extrabold leading-5 text-center"></span>
        </a>
         <a data-link href="/account" class="text-white hover:text-gray-200">
          <span class="sr-only">Account</span>
          <i class="fa-solid fa-user text-xl"></i>
        </a>
      </div>
    </div>
    <div id="mobile-menu" class="fixed inset-0 bg-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out flex flex-col">
      <div class="bg-violet-500 flex justify-between items-center p-4">
        <h2 class="text-white text-xl font-bold italic">Menu</h2>
        <button id="close-menu-button" class="text-white">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
      <div class="flex flex-col divide-y divide-gray-200">
        <a data-link href="/whats-new" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>What's New</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/easter" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Easter</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/occasions" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Occasions</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/cupcakes" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Cupcakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/cakes" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Cakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/nationwide" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Nationwide</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/brownies-cookies" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Brownies & Cookies</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/pies-cheesecakes" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Pies & Cheesecakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/birthday-cakes" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Birthday Cakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
        <a data-link href="/wedding-cakes" class="flex justify-between items-center py-4 px-6 text-lg text-gray-800 hover:bg-gray-50">
          <span>Wedding Cakes</span>
          <i class="fa-solid fa-chevron-right text-violet-500"></i>
        </a>
      </div>
    </div>
  </nav>

  <div class="bg-violet-100 text-center text-xs sm:text-sm py-2 text-gray-700">
    What can be delivered to me?
  </div>

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
          <li><a data-link href="/delivery" class="hover:text-white">Delivery</a></li>
          <li><a data-link href="/stores" class="hover:text-white">Our Stores</a></li>
          <li><a data-link href="/whats-new" class="hover:text-white">What's New</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Support</h4>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a data-link href="/contact" class="hover:text-white">Contact Us</a></li>
          <li><a data-link href="/faqs" class="hover:text-white">FAQs</a></li>
          <li><a data-link href="/shipping-policy" class="hover:text-white">Shipping Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Follow Us</h4>
        <div class="flex justify-center md:justify-start space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="fa-brands fa-facebook text-2xl"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="fa-brands fa-instagram text-2xl"></i>
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
  const header = document.getElementById('site-header');
  const cartBadgeDesktop = document.getElementById('cart-badge-desktop');
  const cartBadgeMobile = document.getElementById('cart-badge-mobile');

  const CART_KEY = 'bureaddi_cart_v1';

  const getCartCount = () => {
    try {
      const raw = window.localStorage.getItem(CART_KEY);
      if (!raw) return 0;
      const cart = JSON.parse(raw);
      if (!cart || typeof cart !== 'object') return 0;
      return Object.values(cart).reduce((sum, qty) => sum + (Number(qty) || 0), 0);
    } catch {
      return 0;
    }
  };

  const updateCartBadges = () => {
    const count = getCartCount();
    const text = count > 99 ? '99+' : String(count);
    const shouldShow = count > 0;

    if (cartBadgeDesktop) {
      cartBadgeDesktop.textContent = text;
      cartBadgeDesktop.classList.toggle('hidden', !shouldShow);
    }
    if (cartBadgeMobile) {
      cartBadgeMobile.textContent = text;
      cartBadgeMobile.classList.toggle('hidden', !shouldShow);
    }
  };

  updateCartBadges();
  window.addEventListener('cart:changed', updateCartBadges);
  window.addEventListener('storage', (e) => {
    if (e.key === CART_KEY) updateCartBadges();
  });

  const siteSearchForm = document.getElementById('site-search-form');
  const siteSearchInput = document.getElementById('site-search-input');

  if (siteSearchForm) {
    siteSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = siteSearchInput ? siteSearchInput.value.trim() : '';
      const next = q ? `/search?q=${encodeURIComponent(q)}` : '/search';
      window.history.pushState({}, '', next);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

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

  const megaTriggers = Array.from(document.querySelectorAll('[data-mega-trigger]'));
  const megaPanels = Array.from(document.querySelectorAll('[data-mega-panel]'));

  const closeAllMega = () => {
    megaPanels.forEach((panel) => panel.classList.add('hidden'));
    megaTriggers.forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      const key = button.getAttribute('data-mega-trigger');
      if (!key) return;
      const chevron = document.querySelector(`[data-mega-chevron="${key}"]`);
      if (chevron) chevron.classList.remove('rotate-180');
    });
  };

  const openMega = (key) => {
    closeAllMega();
    const panel = document.querySelector(`[data-mega-panel="${key}"]`);
    if (panel) panel.classList.remove('hidden');
    const button = document.querySelector(`[data-mega-trigger="${key}"]`);
    if (button) button.setAttribute('aria-expanded', 'true');
    const chevron = document.querySelector(`[data-mega-chevron="${key}"]`);
    if (chevron) chevron.classList.add('rotate-180');
  };

  if (megaTriggers.length) {
    megaTriggers.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const key = button.getAttribute('data-mega-trigger');
        if (!key) return;
        const panel = document.querySelector(`[data-mega-panel="${key}"]`);
        if (!panel) return;
        const isOpen = !panel.classList.contains('hidden');
        if (isOpen) {
          closeAllMega();
          return;
        }
        openMega(key);
      });
    });

    document.addEventListener('click', (e) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;

      const inPanel = target.closest('[data-mega-panel]');
      if (inPanel) {
        const link = target.closest('a[data-link]');
        if (link) closeAllMega();
        return;
      }

      closeAllMega();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllMega();
    });

    window.addEventListener('popstate', closeAllMega);
  }

  if (header) {
    let scrollTimeoutId;
    let isHidden = false;

    const showHeader = () => {
      if (!isHidden) return;
      header.classList.remove('-translate-y-full', 'pointer-events-none');
      isHidden = false;
    };

    const hideHeader = () => {
      if (isHidden) return;
      header.classList.add('-translate-y-full', 'pointer-events-none');
      isHidden = true;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY <= 0) {
          showHeader();
          return;
        }

        hideHeader();
        if (scrollTimeoutId) window.clearTimeout(scrollTimeoutId);
        scrollTimeoutId = window.setTimeout(showHeader, 180);
      },
      { passive: true },
    );
  }
}


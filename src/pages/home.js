import heroBg from '../assets/bureaddibg.jpg'
import cupcakesImg from '../assets/categories/cookies-cream-cupcake-643931f3e52f1203845833_1_2.webp'
import cakesImg from '../assets/categories/Fancy_heart_cake_1.webp'
import cookiesImg from '../assets/categories/Cookie_1.webp'
import cheesecakesImg from '../assets/categories/maltesers-cheesecake.webp'
import piesImg from '../assets/categories/lemon_meringue_pie.webp'
import hampersImg from '../assets/categories/Christmas_hamper_4_4.webp'
import browniesImg from '../assets/categories/hb-choc-brownie.webp'
import birthdayCakesImg from '../assets/categories/birthday-category-2.webp'
import { products } from './category.js'

export function renderHome() {
  return `
    <section class="relative bg-white overflow-hidden">
      <div class="relative h-[420px] sm:h-[520px] bg-cover bg-center" style="background-image: url('${heroBg}');">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative z-10 h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <p class="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
            Handmade in Lagos.
          </p>
          <h1 class="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Celebrating Every Occasion
            <span class="block">With You</span>
          </h1>

          <div class="mt-8 flex items-center gap-3">
            <a data-link href="/whats-new" class="inline-flex items-center justify-center rounded-md bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white hover:bg-fuchsia-700">
              Preorder
            </a>
            <a data-link href="/cakes" class="group inline-flex items-center justify-center rounded-md bg-white/95 px-6 py-3 text-sm font-semibold text-fuchsia-700 hover:bg-white">
              Cake Today
              <i class="fa-solid fa-chevron-down ml-2 text-xs transition-transform duration-200 ease-out group-hover:rotate-180"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-4">
          <div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900">Popular this week</h2>
            <p class="mt-2 text-gray-600">Best sellers people keep coming back for.</p>
          </div>
          <a data-link href="/whats-new" class="hidden sm:inline-flex text-sm font-semibold text-violet-700 hover:underline">
            View all
          </a>
        </div>

        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${products
            .slice(0, 4)
            .map(
              (p) => `
                <div class="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
                  <a data-link href="/product/${p.slug}" class="block">
                    <div class="aspect-[4/3] bg-gray-50">
                      <img src="${p.image}" alt="${p.name}" class="h-full w-full object-cover" />
                    </div>
                  </a>
                  <div class="p-4">
                    <a data-link href="/product/${p.slug}" class="block">
                      <h3 class="font-bold text-gray-900">${p.name}</h3>
                    </a>
                    <p class="mt-1 text-sm text-gray-600">₦${Number(p.price).toLocaleString('en-NG')}</p>
                    <div class="mt-4 flex items-center gap-2">
                      <button type="button" data-add-to-cart="${p.slug}" class="flex-1 rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-700">
                        Add to cart
                      </button>
                      <a data-link href="/product/${p.slug}" class="rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="bg-violet-100 py-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-4xl font-extrabold text-[#3e1d1d] mb-10">Explore our Categories</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          <a data-link href="/cupcakes" class="group flex flex-col items-center text-center">
            <img src="${cupcakesImg}" alt="Cupcakes" class="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
            <span class="mt-5 text-2xl font-bold text-[#3e1d1d]">Cupcakes</span>
          </a>
          <a data-link href="/cakes" class="group flex flex-col items-center text-center">
            <img src="${cakesImg}" alt="Cakes" class="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
            <span class="mt-5 text-2xl font-bold text-[#3e1d1d]">Cakes</span>
          </a>
          <a data-link href="/brownies-cookies" class="group flex flex-col items-center text-center">
            <img src="${cookiesImg}" alt="Cookies" class="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
            <span class="mt-5 text-2xl font-bold text-[#3e1d1d]">Cookies</span>
          </a>
          <a data-link href="/pies-cheesecakes" class="group flex flex-col items-center text-center">
            <img src="${cheesecakesImg}" alt="Cheesecakes" class="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
            <span class="mt-5 text-2xl font-bold text-[#3e1d1d]">Cheesecakes</span>
          </a>
          <a data-link href="/pies-cheesecakes" class="group flex flex-col items-center text-center">
            <img src="${piesImg}" alt="Pies" class="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
            <span class="mt-5 text-2xl font-bold text-[#3e1d1d]">Pies</span>
          </a>
          <a data-link href="/whats-new/hampers" class="group flex flex-col items-center text-center">
            <img src="${hampersImg}" alt="Hampers" class="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
            <span class="mt-5 text-2xl font-bold text-[#3e1d1d]">Hampers</span>
          </a>
          <a data-link href="/brownies-cookies" class="group flex flex-col items-center text-center">
            <img src="${browniesImg}" alt="Brownies" class="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
            <span class="mt-5 text-2xl font-bold text-[#3e1d1d]">Brownies</span>
          </a>
          <a data-link href="/birthday-cakes" class="group flex flex-col items-center text-center">
            <img src="${birthdayCakesImg}" alt="Birthday Cakes" class="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-200">
            <span class="mt-5 text-2xl font-bold text-[#3e1d1d]">Birthday Cakes</span>
          </a>
        </div>
      </div>
    </section>
  `
}

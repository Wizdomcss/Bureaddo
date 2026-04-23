import cupcakesImg from '../assets/categories/cookies-cream-cupcake-643931f3e52f1203845833_1_2.webp'
import cakesImg from '../assets/categories/Fancy_heart_cake_1.webp'
import cookiesImg from '../assets/categories/Cookie_1.webp'
import cheesecakesImg from '../assets/categories/maltesers-cheesecake.webp'
import piesImg from '../assets/categories/lemon_meringue_pie.webp'
import hampersImg from '../assets/categories/Christmas_hamper_4_4.webp'
import browniesImg from '../assets/categories/hb-choc-brownie.webp'
import birthdayCakesImg from '../assets/categories/birthday-category-2.webp'

const CART_KEY = 'bureaddi_cart_v1'

function formatMoney(value) {
  const amount = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(amount)) return '₦0'
  return `₦${amount.toLocaleString('en-NG')}`
}

function readCart() {
  try {
    const raw = window.localStorage.getItem(CART_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return {}
    return parsed
  } catch {
    return {}
  }
}

function writeCart(cart) {
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart))
  } catch {}
  window.dispatchEvent(new Event('cart:changed'))
}

export function getCartCount() {
  const cart = readCart()
  return Object.values(cart).reduce((sum, qty) => sum + (Number(qty) || 0), 0)
}

export function addToCart(slug, qty = 1) {
  const cart = readCart()
  const nextQty = (Number(cart[slug]) || 0) + (Number(qty) || 0)
  cart[slug] = Math.max(0, nextQty)
  if (cart[slug] <= 0) delete cart[slug]
  writeCart(cart)
}

export function setCartQty(slug, qty) {
  const cart = readCart()
  const nextQty = Math.max(0, Number(qty) || 0)
  if (nextQty <= 0) {
    delete cart[slug]
  } else {
    cart[slug] = nextQty
  }
  writeCart(cart)
}

export const products = [
  {
    slug: 'cookies-cream-cupcakes',
    name: 'Cookies & Cream Cupcakes',
    price: 6500,
    category: 'cupcakes',
    collections: ['whats-new', 'occasions'],
    image: cupcakesImg,
    description: 'Moist chocolate cupcakes topped with cookies & cream frosting and a crunchy cookie finish.',
  },
  {
    slug: 'fancy-heart-cake',
    name: 'Fancy Heart Cake',
    price: 28500,
    category: 'cakes',
    collections: ['whats-new', 'wedding-cakes', 'occasions'],
    image: cakesImg,
    description: 'A soft vanilla sponge with silky buttercream, finished in a romantic heart design.',
  },
  {
    slug: 'classic-cookie-box',
    name: 'Classic Cookie Box',
    price: 7500,
    category: 'brownies-cookies',
    collections: ['nationwide'],
    image: cookiesImg,
    description: 'An assorted cookie box with buttery classics and chocolate-loaded favorites.',
  },
  {
    slug: 'maltesers-cheesecake',
    name: 'Maltesers Cheesecake',
    price: 19500,
    category: 'pies-cheesecakes',
    collections: ['whats-new', 'occasions'],
    image: cheesecakesImg,
    description: 'Creamy cheesecake with a crisp base and a Maltesers crunch on top.',
  },
  {
    slug: 'lemon-meringue-pie',
    name: 'Lemon Meringue Pie',
    price: 16500,
    category: 'pies-cheesecakes',
    collections: ['easter', 'nationwide'],
    image: piesImg,
    description: 'Zesty lemon filling, toasted meringue, and a buttery pastry crust.',
  },
  {
    slug: 'christmas-hamper',
    name: 'Celebration Hamper',
    price: 42000,
    category: 'nationwide',
    collections: ['whats-new', 'hampers', 'sharing-bundles'],
    image: hampersImg,
    description: 'A curated hamper packed with bakes and treats for gifting and sharing.',
  },
  {
    slug: 'fudge-brownies',
    name: 'Fudge Brownies',
    price: 12000,
    category: 'brownies-cookies',
    collections: ['sharing-bundles', 'nationwide'],
    image: browniesImg,
    description: 'Rich, chocolatey brownies with a fudgy center and a glossy crackly top.',
  },
  {
    slug: 'birthday-cake-classic',
    name: 'Birthday Cake Classic',
    price: 32000,
    category: 'birthday-cakes',
    collections: ['occasions'],
    image: birthdayCakesImg,
    description: 'A celebration-ready cake with smooth buttercream and a clean, modern finish.',
  },
  {
    slug: 'vanilla-sprinkle-cupcakes',
    name: 'Vanilla Sprinkle Cupcakes',
    price: 6000,
    category: 'cupcakes',
    collections: ['easter', 'occasions'],
    image: cupcakesImg,
    description: 'Fluffy vanilla cupcakes topped with buttercream and a shower of sprinkles.',
  },
  {
    slug: 'choco-fudge-cupcakes',
    name: 'Choco Fudge Cupcakes',
    price: 6800,
    category: 'cupcakes',
    collections: ['whats-new'],
    image: cupcakesImg,
    description: 'Deep chocolate cupcakes with a smooth fudge frosting and rich cocoa finish.',
  },
  {
    slug: 'red-velvet-cake',
    name: 'Red Velvet Cake',
    price: 29500,
    category: 'cakes',
    collections: ['occasions', 'nationwide'],
    image: cakesImg,
    description: 'Classic red velvet sponge layered with cream cheese frosting.',
  },
  {
    slug: 'carrot-cake',
    name: 'Carrot Cake',
    price: 27000,
    category: 'cakes',
    collections: ['easter', 'nationwide'],
    image: cakesImg,
    description: 'Spiced carrot sponge with a creamy frosting and a soft, moist crumb.',
  },
  {
    slug: 'vintage-buttercream-cake',
    name: 'Vintage Buttercream Cake',
    price: 34500,
    category: 'wedding-cakes',
    collections: ['vintage-cakes', 'occasions'],
    image: cakesImg,
    description: 'A vintage-style celebration cake with piped buttercream details.',
  },
  {
    slug: 'mini-hamper',
    name: 'Mini Treat Hamper',
    price: 26000,
    category: 'nationwide',
    collections: ['hampers', 'nationwide'],
    image: hampersImg,
    description: 'A compact hamper with a curated selection of treats for gifting.',
  },
  {
    slug: 'party-cookie-bag',
    name: 'Party Cookie Bag',
    price: 5200,
    category: 'brownies-cookies',
    collections: ['party-bag-fillers'],
    image: cookiesImg,
    description: 'Individually packed cookies, perfect for party bags and favors.',
  },
  {
    slug: 'cookie-dough-brownies',
    name: 'Cookie Dough Brownies',
    price: 13500,
    category: 'brownies-cookies',
    collections: ['whats-new', 'sharing-bundles'],
    image: browniesImg,
    description: 'Fudgy brownies layered with cookie dough and baked to perfection.',
  },
  {
    slug: 'spring-berry-cheesecake',
    name: 'Spring Berry Cheesecake',
    price: 21000,
    category: 'pies-cheesecakes',
    collections: ['spring-bakes', 'whats-new'],
    image: cheesecakesImg,
    description: 'Creamy cheesecake with a berry topping and a crisp base.',
  },
  {
    slug: 'birthday-cake-deluxe',
    name: 'Birthday Cake Deluxe',
    price: 39000,
    category: 'birthday-cakes',
    collections: ['occasions', 'whats-new'],
    image: birthdayCakesImg,
    description: 'A taller birthday cake with extra layers and premium finishing.',
  },
]

const collections = [
  { key: 'whats-new', title: `What's New` },
  { key: 'new-5-inch-cakes', title: `New 5" Cakes` },
  { key: 'hampers', title: 'Hampers' },
  { key: 'party-bag-fillers', title: 'Party Bag Fillers' },
  { key: 'spring-bakes', title: 'Spring Bakes' },
  { key: 'sharing-bundles', title: 'Sharing Bundles' },
  { key: 'vintage-cakes', title: 'Vintage Cakes' },
]

function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

function getProductsForCategory(categoryKey) {
  return products.filter((p) => p.category === categoryKey)
}

function getProductsForCollection(collectionKey) {
  return products.filter((p) => p.collections.includes(collectionKey))
}

function renderBreadcrumbs(items) {
  return `
    <nav class="text-sm text-gray-500">
      <ol class="flex flex-wrap items-center gap-x-2 gap-y-1">
        ${items
          .map((item, index) => {
            const isLast = index === items.length - 1
            if (isLast) return `<li class="text-gray-900 font-medium">${item.label}</li>`
            return `<li><a data-link href="${item.href}" class="hover:text-gray-900">${item.label}</a> <span class="mx-1">/</span></li>`
          })
          .join('')}
      </ol>
    </nav>
  `
}

function renderProductCard(product) {
  return `
    <div class="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <a data-link href="/product/${product.slug}" class="block">
        <div class="aspect-[4/3] bg-gray-50">
          <img src="${product.image}" alt="${product.name}" class="h-full w-full object-cover" />
        </div>
      </a>
      <div class="p-4">
        <a data-link href="/product/${product.slug}" class="block">
          <h3 class="font-bold text-gray-900">${product.name}</h3>
        </a>
        <p class="mt-1 text-sm text-gray-600">${formatMoney(product.price)}</p>
        <div class="mt-4 flex items-center gap-2">
          <button type="button" data-add-to-cart="${product.slug}" class="flex-1 rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-700">
            Add to cart
          </button>
          <a data-link href="/product/${product.slug}" class="rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            View
          </a>
        </div>
      </div>
    </div>
  `
}

function renderProductGrid(list) {
  if (!list.length) {
    return `
      <div class="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-gray-700">
        <p>No items found.</p>
      </div>
    `
  }
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      ${list.map(renderProductCard).join('')}
    </div>
  `
}

function renderSectionShell({ title, subtitle, breadcrumbs, content }) {
  return `
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        ${breadcrumbs || ''}
        <div class="mt-4">
          <h1 class="text-4xl font-extrabold text-gray-900">${title}</h1>
          ${subtitle ? `<p class="mt-3 text-gray-600">${subtitle}</p>` : ''}
        </div>
        <div class="mt-8">
          ${content}
        </div>
      </div>
    </section>
  `
}

export function renderCategoryPage({ title, subtitle, categoryKey, collectionKey }) {
  const inferredCategoryKey = categoryKey || title?.toLowerCase().replaceAll(' ', '-')
  const list = collectionKey
    ? getProductsForCollection(collectionKey)
    : inferredCategoryKey
      ? getProductsForCategory(inferredCategoryKey)
      : []

  const crumbs = renderBreadcrumbs([{ label: 'Home', href: '/' }, { label: title, href: window.location.pathname }])
  return renderSectionShell({
    title,
    subtitle,
    breadcrumbs: crumbs,
    content: renderProductGrid(list),
  })
}

function renderLandingPage({ title, subtitle, tiles, featuredTitle, featuredList, browseHref }) {
  const tilesHtml = (tiles || [])
    .map(
      (t) => `
        <a data-link href="${t.href}" class="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between gap-6">
            <div>
              <h3 class="font-bold text-gray-900">${t.title}</h3>
              <p class="mt-1 text-sm text-gray-600">${t.description || 'Shop now'}</p>
            </div>
            <i class="fa-solid fa-arrow-right text-violet-600"></i>
          </div>
        </a>
      `,
    )
    .join('')

  return `
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        ${renderBreadcrumbs([{ label: 'Home', href: '/' }, { label: title, href: window.location.pathname }])}
        <h1 class="mt-4 text-4xl font-extrabold text-gray-900">${title}</h1>
        ${subtitle ? `<p class="mt-3 text-gray-600">${subtitle}</p>` : ''}

        ${
          tilesHtml
            ? `
              <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${tilesHtml}
              </div>
            `
            : ''
        }

        <div class="mt-12 flex items-end justify-between gap-4">
          <h2 class="text-2xl font-extrabold text-gray-900">${featuredTitle || 'Featured'}</h2>
          ${browseHref ? `<a data-link href="${browseHref}" class="text-sm font-semibold text-violet-700 hover:underline">Browse all</a>` : ''}
        </div>
        <div class="mt-6">
          ${renderProductGrid((featuredList || []).slice(0, 8))}
        </div>
      </div>
    </section>
  `
}

export function renderWhatsNewLanding() {
  const tiles = collections
    .filter((c) => c.key !== 'whats-new')
    .map((c) => ({ title: c.title, href: `/whats-new/${c.key}` }))

  return renderLandingPage({
    title: `What's New`,
    subtitle: 'Fresh bakes, limited drops, and new favorites.',
    tiles,
    featuredTitle: 'Featured',
    featuredList: getProductsForCollection('whats-new'),
  })
}

export function renderEasterLanding() {
  return renderLandingPage({
    title: 'Easter',
    subtitle: 'Seasonal bakes for sharing, gifting, and celebrating.',
    tiles: [
      { title: 'Spring Bakes', href: '/whats-new/spring-bakes', description: 'Fresh seasonal flavors' },
      { title: 'Pies & Cheesecakes', href: '/pies-cheesecakes', description: 'Citrus, berries, and cream' },
      { title: 'Nationwide', href: '/nationwide', description: 'Shipped favorites' },
    ],
    featuredTitle: 'Top Easter picks',
    featuredList: getProductsForCollection('easter'),
    browseHref: '/search?q=easter',
  })
}

export function renderOccasionsLanding() {
  return renderLandingPage({
    title: 'Occasions',
    subtitle: 'Celebrate birthdays, weddings, and milestones with signature bakes.',
    tiles: [
      { title: 'Birthday Cakes', href: '/birthday-cakes', description: 'Celebrate in style' },
      { title: 'Wedding Cakes', href: '/wedding-cakes', description: 'Elegant designs' },
      { title: 'Cupcakes', href: '/cupcakes', description: 'Shareable treats' },
    ],
    featuredTitle: 'Occasion picks',
    featuredList: getProductsForCollection('occasions'),
    browseHref: '/search?q=cake',
  })
}

export function renderCupcakesLanding() {
  return renderLandingPage({
    title: 'Cupcakes',
    subtitle: 'Small bites, big flavor. Perfect for parties and gifting.',
    tiles: [
      { title: `What's New`, href: '/whats-new', description: 'New drops and specials' },
      { title: 'Party Bag Fillers', href: '/whats-new/party-bag-fillers', description: 'Party-ready packs' },
      { title: 'Search Cupcakes', href: '/search?q=cupcake', description: 'Find your favorite' },
    ],
    featuredTitle: 'Popular cupcakes',
    featuredList: getProductsForCategory('cupcakes'),
    browseHref: '/cupcakes',
  })
}

export function renderCakesLanding() {
  return renderLandingPage({
    title: 'Cakes',
    subtitle: 'From simple classics to statement designs.',
    tiles: [
      { title: `New 5" Cakes`, href: '/whats-new/new-5-inch-cakes', description: 'Cute & delicious' },
      { title: 'Birthday Cakes', href: '/birthday-cakes', description: 'Make it special' },
      { title: 'Wedding Cakes', href: '/wedding-cakes', description: 'Elegant celebration' },
    ],
    featuredTitle: 'Featured cakes',
    featuredList: getProductsForCategory('cakes').concat(getProductsForCategory('wedding-cakes')).concat(getProductsForCategory('birthday-cakes')),
    browseHref: '/search?q=cake',
  })
}

export function renderNationwideLanding() {
  return renderLandingPage({
    title: 'Nationwide',
    subtitle: 'Delivery-friendly items that travel well.',
    tiles: [
      { title: 'Hampers', href: '/whats-new/hampers', description: 'Gift-ready boxes' },
      { title: 'Brownies & Cookies', href: '/brownies-cookies', description: 'Perfect for shipping' },
      { title: 'Pies & Cheesecakes', href: '/pies-cheesecakes', description: 'Selected items' },
    ],
    featuredTitle: 'Nationwide favorites',
    featuredList: getProductsForCollection('nationwide'),
    browseHref: '/nationwide',
  })
}

export function renderBrowniesCookiesLanding() {
  return renderLandingPage({
    title: 'Brownies & Cookies',
    subtitle: 'Baked treats for cravings, gifting, and sharing.',
    tiles: [
      { title: 'Sharing Bundles', href: '/whats-new/sharing-bundles', description: 'For friends & family' },
      { title: 'Party Bag Fillers', href: '/whats-new/party-bag-fillers', description: 'Easy party wins' },
      { title: 'Search Cookies', href: '/search?q=cookie', description: 'Crunchy and chewy' },
    ],
    featuredTitle: 'Best sellers',
    featuredList: getProductsForCategory('brownies-cookies'),
    browseHref: '/brownies-cookies',
  })
}

export function renderPiesCheesecakesLanding() {
  return renderLandingPage({
    title: 'Pies & Cheesecakes',
    subtitle: 'Creamy, tangy, and baked to slice perfectly.',
    tiles: [
      { title: 'Spring Bakes', href: '/whats-new/spring-bakes', description: 'Seasonal picks' },
      { title: 'Easter', href: '/easter', description: 'Holiday favorites' },
      { title: 'Search Cheesecake', href: '/search?q=cheesecake', description: 'Find your flavor' },
    ],
    featuredTitle: 'Top slices',
    featuredList: getProductsForCategory('pies-cheesecakes'),
    browseHref: '/pies-cheesecakes',
  })
}

export function renderBirthdayCakesLanding() {
  return renderLandingPage({
    title: 'Birthday Cakes',
    subtitle: 'Signature birthday cakes for every vibe.',
    tiles: [
      { title: 'Occasions', href: '/occasions', description: 'More celebration ideas' },
      { title: `What's New`, href: '/whats-new', description: 'Limited drops' },
      { title: 'Search Birthday', href: '/search?q=birthday', description: 'Explore options' },
    ],
    featuredTitle: 'Birthday favorites',
    featuredList: getProductsForCategory('birthday-cakes'),
    browseHref: '/birthday-cakes',
  })
}

export function renderWeddingCakesLanding() {
  return renderLandingPage({
    title: 'Wedding Cakes',
    subtitle: 'Elegant designs made for unforgettable moments.',
    tiles: [
      { title: 'Vintage Cakes', href: '/whats-new/vintage-cakes', description: 'Classic piping styles' },
      { title: 'Occasions', href: '/occasions', description: 'More celebration bakes' },
      { title: 'Contact Us', href: '/contact', description: 'Custom inquiries' },
    ],
    featuredTitle: 'Wedding picks',
    featuredList: getProductsForCategory('wedding-cakes'),
    browseHref: '/wedding-cakes',
  })
}

export function renderProductPage({ slug }) {
  const product = getProductBySlug(slug)
  if (!product) {
    return renderSectionShell({
      title: 'Not Found',
      subtitle: 'This product does not exist.',
      breadcrumbs: renderBreadcrumbs([{ label: 'Home', href: '/' }, { label: 'Not Found', href: window.location.pathname }]),
      content: `
        <div class="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-gray-700">
          <a data-link href="/" class="text-violet-700 font-semibold hover:underline">Go back home</a>
        </div>
      `,
    })
  }

  return `
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        ${renderBreadcrumbs([
          { label: 'Home', href: '/' },
          { label: 'Shop', href: `/${product.category}` },
          { label: product.name, href: window.location.pathname },
        ])}

        <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="rounded-2xl border border-gray-200 overflow-hidden bg-gray-50">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
          </div>
          <div>
            <h1 class="text-4xl font-extrabold text-gray-900">${product.name}</h1>
            <p class="mt-3 text-xl font-bold text-gray-900">${formatMoney(product.price)}</p>
            <p class="mt-5 text-gray-700 leading-relaxed">${product.description}</p>

            <div class="mt-8 flex items-center gap-3">
              <button type="button" data-add-to-cart="${product.slug}" class="rounded-md bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">
                Add to cart
              </button>
              <a data-link href="/cart" class="rounded-md border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                View cart
              </a>
            </div>

            <div class="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-700">
              <p><span class="font-semibold text-gray-900">Delivery:</span> Same-day pickup in Lagos. Nationwide delivery available for selected items.</p>
              <p class="mt-2"><span class="font-semibold text-gray-900">Freshness:</span> Baked in small batches. Best enjoyed within 48 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

function getCartItems() {
  const cart = readCart()
  const items = []
  for (const [slug, qtyRaw] of Object.entries(cart)) {
    const qty = Number(qtyRaw) || 0
    if (qty <= 0) continue
    const product = getProductBySlug(slug)
    if (!product) continue
    items.push({ product, qty })
  }
  return items
}

export function renderCartPage() {
  const items = getCartItems()
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0)

  const content =
    items.length === 0
      ? `
        <div class="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-gray-700">
          <p>Your cart is empty.</p>
          <a data-link href="/whats-new" class="mt-4 inline-block text-violet-700 font-semibold hover:underline">Shop What's New</a>
        </div>
      `
      : `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-4">
            ${items
              .map(
                ({ product, qty }) => `
                  <div class="rounded-2xl border border-gray-200 bg-white p-4 flex gap-4">
                    <a data-link href="/product/${product.slug}" class="h-24 w-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                      <img src="${product.image}" alt="${product.name}" class="h-full w-full object-cover" />
                    </a>
                    <div class="flex-1">
                      <div class="flex items-start justify-between gap-4">
                        <div>
                          <a data-link href="/product/${product.slug}" class="font-bold text-gray-900 hover:underline">${product.name}</a>
                          <p class="mt-1 text-sm text-gray-600">${formatMoney(product.price)}</p>
                        </div>
                        <button type="button" data-cart-remove="${product.slug}" class="text-sm font-semibold text-gray-500 hover:text-gray-900">Remove</button>
                      </div>
                      <div class="mt-4 flex items-center justify-between">
                        <div class="inline-flex items-center rounded-md border border-gray-200">
                          <button type="button" data-cart-dec="${product.slug}" class="px-3 py-2 text-gray-700 hover:bg-gray-50">-</button>
                          <span class="px-3 py-2 text-sm font-semibold text-gray-900">${qty}</span>
                          <button type="button" data-cart-inc="${product.slug}" class="px-3 py-2 text-gray-700 hover:bg-gray-50">+</button>
                        </div>
                        <p class="text-sm font-semibold text-gray-900">${formatMoney(product.price * qty)}</p>
                      </div>
                    </div>
                  </div>
                `,
              )
              .join('')}
          </div>
          <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6 h-fit">
            <h2 class="text-lg font-extrabold text-gray-900">Order summary</h2>
            <div class="mt-4 flex items-center justify-between text-sm text-gray-700">
              <span>Subtotal</span>
              <span class="font-semibold text-gray-900">${formatMoney(subtotal)}</span>
            </div>
            <div class="mt-2 flex items-center justify-between text-sm text-gray-700">
              <span>Delivery</span>
              <span class="font-semibold text-gray-900">Calculated at checkout</span>
            </div>
            <button type="button" class="mt-6 w-full rounded-md bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-700">
              Checkout
            </button>
            <a data-link href="/whats-new" class="mt-4 block text-center text-sm font-semibold text-violet-700 hover:underline">
              Continue shopping
            </a>
          </div>
        </div>
      `

  return renderSectionShell({
    title: 'Cart',
    breadcrumbs: renderBreadcrumbs([{ label: 'Home', href: '/' }, { label: 'Cart', href: '/cart' }]),
    content,
  })
}

export function renderSearchPage({ query }) {
  const q = (query || '').trim().toLowerCase()
  const list = q
    ? products.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(q))
    : products

  return `
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        ${renderBreadcrumbs([{ label: 'Home', href: '/' }, { label: 'Search', href: '/search' }])}
        <h1 class="mt-4 text-4xl font-extrabold text-gray-900">Search</h1>

        <form data-search-form class="mt-6 flex items-center gap-3">
          <input
            type="search"
            name="q"
            value="${(query || '').replaceAll('"', '&quot;')}"
            placeholder="Search cakes, cupcakes, brownies..."
            class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button type="submit" class="rounded-md bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">
            Search
          </button>
        </form>

        <p class="mt-4 text-sm text-gray-600">${list.length} result${list.length === 1 ? '' : 's'}</p>
        <div class="mt-6">
          ${renderProductGrid(list)}
        </div>
      </div>
    </section>
  `
}

export function renderStaticPage({ title, subtitle, body }) {
  return renderSectionShell({
    title,
    subtitle,
    breadcrumbs: renderBreadcrumbs([{ label: 'Home', href: '/' }, { label: title, href: window.location.pathname }]),
    content: `
      <div class="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-gray-700 leading-relaxed">
        ${body}
      </div>
    `,
  })
}

export function setupPageInteractions(container) {
  if (!container) return

  container.addEventListener('click', (e) => {
    const el = e.target instanceof Element ? e.target.closest('button') : null
    if (!el) return

    const addSlug = el.getAttribute('data-add-to-cart')
    if (addSlug) {
      addToCart(addSlug, 1)
      return
    }

    const incSlug = el.getAttribute('data-cart-inc')
    if (incSlug) {
      addToCart(incSlug, 1)
      container.innerHTML = renderCartPage()
      return
    }

    const decSlug = el.getAttribute('data-cart-dec')
    if (decSlug) {
      addToCart(decSlug, -1)
      container.innerHTML = renderCartPage()
      return
    }

    const removeSlug = el.getAttribute('data-cart-remove')
    if (removeSlug) {
      setCartQty(removeSlug, 0)
      container.innerHTML = renderCartPage()
    }
  })

  container.addEventListener('submit', (e) => {
    const form = e.target instanceof HTMLFormElement ? e.target : null
    if (!form) return
    if (!form.hasAttribute('data-search-form')) return
    e.preventDefault()

    const fd = new FormData(form)
    const q = String(fd.get('q') || '').trim()
    const next = q ? `/search?q=${encodeURIComponent(q)}` : '/search'
    window.history.pushState({}, '', next)
    container.innerHTML = renderSearchPage({ query: q })
  })
}

import './style.css'
import { headerHTML, footerHTML, setupLayout } from './layout.js'
import { renderHome } from './pages/home.js'
import {
  renderBirthdayCakesLanding,
  renderBrowniesCookiesLanding,
  renderCakesLanding,
  renderCartPage,
  renderCategoryPage,
  renderCupcakesLanding,
  renderEasterLanding,
  renderNationwideLanding,
  renderOccasionsLanding,
  renderPiesCheesecakesLanding,
  renderProductPage,
  renderSearchPage,
  renderStaticPage,
  renderWeddingCakesLanding,
  renderWhatsNewLanding,
  setupPageInteractions,
} from './pages/category.js'

function isSameOrigin(url) {
  return url.origin === window.location.origin
}

function shouldHandleLink(a) {
  if (!a) return false
  if (a.target && a.target !== '_self') return false
  if (a.hasAttribute('download')) return false
  const rel = (a.getAttribute('rel') || '').toLowerCase()
  if (rel.includes('external')) return false
  const href = a.getAttribute('href')
  if (!href) return false
  if (href.startsWith('#')) return false
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return false
  if (!a.hasAttribute('data-link')) return false
  return true
}

function createRouter({ routes, renderNotFound, onNavigate }) {
  function getRouteMatch(pathname) {
    const direct = routes[pathname]
    if (direct) return { handler: direct, params: {} }

    const pathParts = pathname.split('/').filter(Boolean)
    for (const [pattern, handler] of Object.entries(routes)) {
      if (!handler) continue
      if (!pattern.includes(':')) continue

      const patternParts = pattern.split('/').filter(Boolean)
      if (patternParts.length !== pathParts.length) continue

      const params = {}
      let isMatch = true
      for (let i = 0; i < patternParts.length; i += 1) {
        const patternPart = patternParts[i]
        const pathPart = pathParts[i]

        if (patternPart.startsWith(':')) {
          params[patternPart.slice(1)] = decodeURIComponent(pathPart || '')
          continue
        }
        if (patternPart !== pathPart) {
          isMatch = false
          break
        }
      }

      if (isMatch) return { handler, params }
    }

    return null
  }

  function getPath() {
    return window.location.pathname || '/'
  }

  function render() {
    const pathname = getPath()
    const match = getRouteMatch(pathname)
    if (match) {
      match.handler({ params: match.params, pathname })
      return
    }
    if (renderNotFound) {
      renderNotFound(pathname)
    }
  }

  function navigate(to) {
    const url = new URL(to, window.location.origin)
    if (!isSameOrigin(url)) {
      window.location.href = url.toString()
      return
    }
    const nextUrl = `${url.pathname}${url.search}${url.hash}`
    window.history.pushState({}, '', nextUrl)
    if (onNavigate) onNavigate(url.pathname)
    render()
  }

  function start() {
    window.addEventListener('popstate', render)
    document.addEventListener('click', (e) => {
      const a = e.target instanceof Element ? e.target.closest('a') : null
      if (!shouldHandleLink(a)) return
      const href = a.getAttribute('href')
      if (!href) return
      e.preventDefault()
      navigate(href)
    })
    render()
  }

  return { start, navigate, render }
}

document.querySelector('#app').innerHTML = `
  ${headerHTML}
  <main id="page-root"></main>
  ${footerHTML}
`

setupLayout()

const pageRoot = document.getElementById('page-root')

function renderToRoot(html) {
  if (!pageRoot) return
  pageRoot.innerHTML = html
  setupPageInteractions(pageRoot)
}

const router = createRouter({
  routes: {
    '/': () => {
      renderToRoot(renderHome())
    },
    '/whats-new': () => {
      renderToRoot(renderWhatsNewLanding())
    },
    '/whats-new/new-5-inch-cakes': () => {
      renderToRoot(renderCategoryPage({ title: `What's New`, subtitle: `New 5" Cakes`, collectionKey: 'new-5-inch-cakes' }))
    },
    '/whats-new/hampers': () => {
      renderToRoot(renderCategoryPage({ title: `What's New`, subtitle: `Hampers`, collectionKey: 'hampers' }))
    },
    '/whats-new/party-bag-fillers': () => {
      renderToRoot(renderCategoryPage({ title: `What's New`, subtitle: `Party Bag Fillers`, collectionKey: 'party-bag-fillers' }))
    },
    '/whats-new/spring-bakes': () => {
      renderToRoot(renderCategoryPage({ title: `What's New`, subtitle: `Spring Bakes`, collectionKey: 'spring-bakes' }))
    },
    '/whats-new/sharing-bundles': () => {
      renderToRoot(renderCategoryPage({ title: `What's New`, subtitle: `Sharing Bundles`, collectionKey: 'sharing-bundles' }))
    },
    '/whats-new/vintage-cakes': () => {
      renderToRoot(renderCategoryPage({ title: `What's New`, subtitle: `Vintage Cakes`, collectionKey: 'vintage-cakes' }))
    },
    '/easter': () => {
      renderToRoot(renderEasterLanding())
    },
    '/occasions': () => {
      renderToRoot(renderOccasionsLanding())
    },
    '/cupcakes': () => {
      renderToRoot(renderCupcakesLanding())
    },
    '/cakes': () => {
      renderToRoot(renderCakesLanding())
    },
    '/nationwide': () => {
      renderToRoot(renderNationwideLanding())
    },
    '/brownies-cookies': () => {
      renderToRoot(renderBrowniesCookiesLanding())
    },
    '/pies-cheesecakes': () => {
      renderToRoot(renderPiesCheesecakesLanding())
    },
    '/birthday-cakes': () => {
      renderToRoot(renderBirthdayCakesLanding())
    },
    '/wedding-cakes': () => {
      renderToRoot(renderWeddingCakesLanding())
    },
    '/product/:slug': ({ params }) => {
      renderToRoot(renderProductPage({ slug: params.slug }))
    },
    '/delivery': () => {
      renderToRoot(
        renderStaticPage({
          title: 'Delivery',
          subtitle: 'How Bureaddi gets your order to you.',
          body: `
            <p class="font-semibold text-gray-900">Local delivery (Lagos)</p>
            <p class="mt-2">Same-day delivery is available for selected items and time slots.</p>
            <p class="mt-6 font-semibold text-gray-900">Nationwide delivery</p>
            <p class="mt-2">Some items can be shipped nationwide with protective packaging.</p>
            <p class="mt-6 font-semibold text-gray-900">Pickup</p>
            <p class="mt-2">Pickup options are available depending on your location.</p>
          `,
        }),
      )
    },
    '/stores': () => {
      renderToRoot(
        renderStaticPage({
          title: 'Our Stores',
          subtitle: 'Find a pickup location near you.',
          body: `
            <p>We currently offer pickup in Lagos. More locations coming soon.</p>
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="rounded-xl border border-gray-200 bg-white p-5">
                <p class="font-semibold text-gray-900">Victoria Island</p>
                <p class="mt-1 text-sm text-gray-600">Mon–Sat, 9am–6pm</p>
              </div>
              <div class="rounded-xl border border-gray-200 bg-white p-5">
                <p class="font-semibold text-gray-900">Lekki</p>
                <p class="mt-1 text-sm text-gray-600">Mon–Sat, 9am–6pm</p>
              </div>
            </div>
          `,
        }),
      )
    },
    '/search': () => {
      const q = new URLSearchParams(window.location.search).get('q') || ''
      renderToRoot(renderSearchPage({ query: q }))
    },
    '/cart': () => {
      renderToRoot(renderCartPage())
    },
    '/account': () => {
      renderToRoot(
        renderStaticPage({
          title: 'My Account',
          subtitle: 'Sign in and manage your orders.',
          body: `
            <p>This is a front-end demo for now. Account features can be connected to a backend later.</p>
            <div class="mt-6 rounded-xl border border-gray-200 bg-white p-5">
              <p class="font-semibold text-gray-900">Coming soon</p>
              <ul class="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Order history</li>
                <li>Saved addresses</li>
                <li>Favorites</li>
              </ul>
            </div>
          `,
        }),
      )
    },
    '/contact': () => {
      renderToRoot(
        renderStaticPage({
          title: 'Contact Us',
          subtitle: 'We reply fast during business hours.',
          body: `
            <p><span class="font-semibold text-gray-900">Email:</span> support@bureaddi.com</p>
            <p class="mt-2"><span class="font-semibold text-gray-900">Phone:</span> +234 000 000 0000</p>
            <p class="mt-2"><span class="font-semibold text-gray-900">Instagram:</span> @bureaddi</p>
          `,
        }),
      )
    },
    '/blog': () => {
      renderToRoot(
        renderStaticPage({
          title: 'Blog',
          subtitle: 'Stories, updates, and baking tips.',
          body: `
            <p>Coming soon.</p>
          `,
        }),
      )
    },
    '/faqs': () => {
      renderToRoot(
        renderStaticPage({
          title: 'FAQs',
          subtitle: 'Quick answers.',
          body: `
            <p class="font-semibold text-gray-900">How far in advance should I order?</p>
            <p class="mt-2">For custom cakes, we recommend at least 48 hours notice.</p>
            <p class="mt-6 font-semibold text-gray-900">Do you offer same-day delivery?</p>
            <p class="mt-2">Same-day slots may be available for selected items.</p>
            <p class="mt-6 font-semibold text-gray-900">Do you deliver nationwide?</p>
            <p class="mt-2">Yes, for selected items that ship well.</p>
          `,
        }),
      )
    },
    '/shipping-policy': () => {
      renderToRoot(
        renderStaticPage({
          title: 'Shipping Policy',
          subtitle: 'Packaging, timelines, and handling.',
          body: `
            <p>All items are packaged to arrive fresh and intact. Delivery timelines vary by location.</p>
            <p class="mt-4">Perishable items should be refrigerated on arrival where applicable.</p>
          `,
        }),
      )
    },
  },
  renderNotFound: (path) => {
    renderToRoot(renderStaticPage({ title: `Not Found`, subtitle: path, body: `<a data-link href="/" class="text-violet-700 font-semibold hover:underline">Go back home</a>` }))
  },
  onNavigate: () => {
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenu) mobileMenu.classList.add('-translate-x-full')
  },
})

router.start()

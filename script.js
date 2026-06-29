const WHATSAPP_NUMBER = "919876543210";

const products = [
  {
    name: "Classic Fudge Brownie",
    price: "₹120",
    description: "Dense, fudgy chocolate brownie with a glossy crackle top.",
    image: "https://picsum.photos/seed/classic-fudge-brownie/640/480",
  },
  {
    name: "Walnut Brownie",
    price: "₹140",
    description: "Rich brownie loaded with crunchy walnuts and cocoa depth.",
    image: "https://picsum.photos/seed/walnut-brownie/640/480",
  },
  {
    name: "Triple Chocolate Brownie",
    price: "₹160",
    description: "Dark, milk, and white chocolate folded into every bite.",
    image: "https://picsum.photos/seed/triple-chocolate-brownie/640/480",
  },
  {
    name: "Chocolate Truffle Cake",
    price: "₹850",
    description: "Velvety chocolate layers finished with smooth truffle cream.",
    image: "https://picsum.photos/seed/chocolate-truffle-cake/640/480",
  },
  {
    name: "Red Velvet Cake",
    price: "₹950",
    description: "Soft red velvet sponge with a silky cream cheese finish.",
    image: "https://picsum.photos/seed/red-velvet-cake/640/480",
  },
  {
    name: "Black Forest Cake",
    price: "₹800",
    description: "Chocolate sponge, cherries, and whipped cream in classic layers.",
    image: "https://picsum.photos/seed/black-forest-cake/640/480",
  },
  {
    name: "Butter Cookies",
    price: "₹220",
    description: "Crisp, buttery cookies baked golden for tea-time gifting.",
    image: "https://picsum.photos/seed/butter-cookies/640/480",
  },
  {
    name: "Choco Chip Cookies",
    price: "₹250",
    description: "Chewy cookies filled with generous chocolate chips.",
    image: "https://picsum.photos/seed/choco-chip-cookies/640/480",
  },
  {
    name: "Mini Celebration Box",
    price: "₹499",
    description: "A compact box of brownies and treats for small celebrations.",
    image: "https://picsum.photos/seed/mini-celebration-box/640/480",
  },
  {
    name: "Premium Dessert Hamper",
    price: "₹999",
    description: "A curated hamper with brownies, cookies, and dessert bites.",
    image: "https://picsum.photos/seed/premium-dessert-hamper/640/480",
  },
];

const productGrid = document.querySelector("#productGrid");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

function buildWhatsAppLink(productName) {
  const text = `Hi Celebrownz, I would like to order ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function renderProducts() {
  if (!productGrid) return;

  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card reveal">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-body">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <p>${product.description}</p>
            <a class="btn btn-primary" href="${buildWhatsAppLink(product.name)}" target="_blank" rel="noopener">
              Order on WhatsApp
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function setupMobileNavigation() {
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
}

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  if (!contactForm || !formStatus) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    formStatus.textContent = "Thank you. We will get back to you shortly.";
  });
}

renderProducts();
setupMobileNavigation();
setupContactForm();
setupRevealAnimation();

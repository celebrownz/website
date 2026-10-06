/* ------------------------------------------------------------------
   Edit these to update the site.
   WHATSAPP_NUMBER: country code + number, digits only (e.g. 919876543210)
   Photos: put them in /images named after each product's id, e.g.
   images/chocolate-truffle.jpg. Until a photo exists, the item shows
   its layer-colour artwork instead.
------------------------------------------------------------------- */
const WHATSAPP_NUMBER = "919790335544";

// layers: colours for the small slice on each category tile, top to bottom
const CATEGORIES = [
  { id: "all", label: "Everything", layers: ["#DB4977", "#602515", "#FFD5C5", "#602515"] },
  { id: "brownies", label: "Brownies", layers: ["#7B4A3B", "#602515", "#4A1C10"] },
  { id: "boxes", label: "Brownie boxes", layers: ["#DB4977", "#602515", "#FFD5C5", "#602515"] },
  { id: "slabs", label: "Brownie slabs", layers: ["#4A1C10", "#602515", "#602515", "#4A1C10"] },
  { id: "kunafa", label: "Kunafa", layers: ["#E2A646", "#FFF1E6", "#9DB36A"] },
  { id: "cans", label: "Can cakes", layers: ["#FFF1E6", "#602515", "#FFF1E6", "#602515"] },
  { id: "sickles", label: "Brownie sickles", layers: ["#F3E4D2", "#602515", "#602515"] },
  { id: "pudding", label: "Caramel pudding", layers: ["#B8621B", "#F5D38A", "#F5D38A"] },
];

// price: shown on the menu and included in the WhatsApp message
// wide: true for landscape photos
// layers: colours for the stand-in artwork until a photo is added, top to bottom
const PRODUCTS = [
  { id: "roasted-almond-brownie", cat: "brownies", name: "Roasted almond brownie",
    text: "Rich, fudgy chocolate brownie topped with crunchy roasted almonds for the perfect blend of chocolatey goodness and nutty crunch.",
    price: "₹66 per piece", layers: ["#C89A6A", "#602515", "#4A1C10"] },
  { id: "milk-chocolate-brownie", cat: "brownies", name: "Milk chocolate topped brownie",
    text: "Rich, fudgy brownie topped with smooth milk chocolate for a creamy, indulgent finish.",
    price: "₹88 per piece", layers: ["#9A5B3A", "#602515", "#4A1C10"] },
  { id: "dark-chocolate-brownie", cat: "brownies", name: "Dark chocolate topped brownie",
    text: "Rich, fudgy brownie topped with smooth dark chocolate for a creamy, indulgent finish.",
    price: "₹88 per piece", layers: ["#2E0F07", "#602515", "#4A1C10"] },
  { id: "white-chocolate-brownie", cat: "brownies", name: "White chocolate topped brownie",
    text: "Rich, fudgy brownie topped with smooth white chocolate for a creamy, indulgent finish.",
    price: "₹88 per piece", layers: ["#FFF4E8", "#602515", "#4A1C10"] },
  { id: "triple-chocolate-brownie", cat: "brownies", name: "Triple chocolate brownie",
    text: "A rich, fudgy brownie loaded with three kinds of chocolate for the ultimate chocolate indulgence.",
    price: "₹88 per piece", layers: ["#FFF4E8", "#9A5B3A", "#2E0F07", "#602515"] },
  { id: "red-velvet-brownie", cat: "brownies", name: "Red velvet brownie",
    text: "Soft, fudgy red velvet brownie with a rich chocolatey flavour and a smooth, creamy finish.",
    price: "₹66 per piece", layers: ["#FFF1E6", "#A3293F", "#8A1F33"] },

  { id: "assorted-box-4", cat: "boxes", name: "Assorted brownie box of 4",
    text: "A delicious box of 4 assorted, rich and fudgy brownies. Perfect for trying a little bit of everything.",
    price: "₹370 per box", layers: ["#DB4977", "#602515", "#FFD5C5"] },
  { id: "assorted-box-6", cat: "boxes", name: "Assorted brownie box of 6",
    text: "A delicious box of 6 rich, fudgy brownies in a variety of flavours and toppings. Perfect for sharing or enjoying a little of everything.",
    price: "₹530 per box", layers: ["#DB4977", "#FFF4E8", "#602515", "#FFD5C5"] },
  { id: "assorted-box-9", cat: "boxes", name: "Assorted brownie box of 9",
    text: "A delightful box of 9 assorted, rich and fudgy brownies with a variety of delicious toppings and flavours.",
    price: "₹810 per box", layers: ["#DB4977", "#A3293F", "#602515", "#FFF4E8", "#602515"] },

  { id: "brownie-slab-half-kg", cat: "slabs", wide: true, name: "½ kg brownie slab",
    text: "A rich, fudgy chocolate brownie slab. Perfect for sharing and celebrations.",
    price: "₹880 per slab", layers: ["#4A1C10", "#602515", "#602515"] },
  { id: "double-chocolate-slab-half-kg", cat: "slabs", wide: true, name: "½ kg double chocolate brownie slab",
    text: "Rich, fudgy and irresistibly chocolatey, loaded with decadent chocolate for the ultimate indulgent treat.",
    price: "₹999 per slab", layers: ["#2E0F07", "#602515", "#2E0F07", "#602515"] },
  { id: "double-chocolate-slab-nuts-half-kg", cat: "slabs", wide: true, name: "½ kg double chocolate brownie slab with nuts",
    text: "Rich, fudgy and irresistibly chocolatey, loaded with roasted almonds and decadent chocolate for the ultimate indulgent treat.",
    price: "₹1,049 per slab", layers: ["#C89A6A", "#2E0F07", "#602515", "#602515"] },
  { id: "custom-double-chocolate-slab-1kg", cat: "slabs", wide: true, name: "1 kg customised double chocolate brownie slab",
    text: "Rich, fudgy and loaded with chocolate, beautifully customised to make your special moments extra delicious.",
    price: "₹1,500 per slab", layers: ["#DB4977", "#FFD5C5", "#2E0F07", "#602515", "#602515"] },

  { id: "classic-kunafa", cat: "kunafa", name: "Crispy classic kunafa",
    text: "Crispy on the outside, soft and delicious inside, filled with a creamy, rich cream cheese filling.",
    price: "₹160", layers: ["#E2A646", "#FFF4E8", "#E2A646"] },
  { id: "pistachio-kunafa", cat: "kunafa", name: "Pistachio kunafa",
    text: "Crispy golden kunafa layered with creamy, rich cream cheese and topped with delicious pistachios.",
    price: "₹180", layers: ["#9DB36A", "#E2A646", "#FFF4E8", "#E2A646"] },
  { id: "pistachio-kunafa-bar", cat: "kunafa", name: "Pistachio kunafa chocolate bar",
    text: "Creamy chocolate filled with crispy kunafa and rich pistachio, finished with a delicious nutty crunch.",
    price: "₹200", layers: ["#602515", "#9DB36A", "#E2A646", "#602515"] },

  { id: "chocolate-cream-cheese-can-cake", cat: "cans", name: "Chocolate cream cheese can cake",
    text: "Rich, moist chocolate cake layered with smooth, creamy cream cheese frosting, packed in a cute can.",
    price: "₹180", layers: ["#FFF4E8", "#602515", "#FFF4E8", "#602515"] },
  { id: "chocolate-pista-kunafa-can-cake", cat: "cans", name: "Chocolate pista kunafa can cake",
    text: "A delicious chocolate cake layered with creamy pista kunafa, packed in a cute can.",
    price: "₹230", layers: ["#9DB36A", "#602515", "#E2A646", "#602515"] },

  { id: "brownie-sickle", cat: "sickles", name: "Brownie sickle",
    text: "A rich, fudgy brownie shaped like a cake sickle, coated and decorated with chocolate for a fun, indulgent treat.",
    price: "₹99", layers: ["#DB4977", "#2E0F07", "#602515"] },
  { id: "white-chocolate-brownie-sickle", cat: "sickles", name: "White chocolate brownie sickle",
    text: "A rich, fudgy white chocolate brownie shaped like a cake sickle, coated and decorated with white chocolate for a fun, indulgent treat.",
    price: "₹120", layers: ["#DB4977", "#FFF4E8", "#F3E4D2"] },

  { id: "caramel-pudding-small", cat: "pudding", name: "Caramel pudding, small",
    text: "Silky, creamy caramel pudding topped with a delicious golden caramel layer.",
    price: "₹75", layers: ["#B8621B", "#F5D38A", "#F5D38A"] },
  { id: "caramel-pudding-large", cat: "pudding", name: "Caramel pudding, large",
    text: "Silky, creamy caramel pudding topped with a delicious golden caramel layer.",
    price: "₹120", layers: ["#B8621B", "#F5D38A", "#F5D38A", "#F5D38A"] },
];

/* ------------------------------------------------------------------ */

const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}` + (text ? `?text=${encodeURIComponent(text)}` : "");

const GENERAL_MESSAGE = "Hi Celebrownz, I’d like to place an order.";

// General WhatsApp links (nav, hero, footer, mobile bar)
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = waLink(GENERAL_MESSAGE);
  a.target = "_blank";
  a.rel = "noopener";
});

// Mobile navigation
const header = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
const setMenu = (open) => {
  header.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
};
toggle.addEventListener("click", () => setMenu(!header.classList.contains("open")));
document.querySelectorAll("#site-menu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && header.classList.contains("open")) { setMenu(false); toggle.focus(); }
});
document.addEventListener("click", (e) => { if (!header.contains(e.target)) setMenu(false); });

// Menu
const grid = document.getElementById("products");
const filters = document.querySelector(".filters");

function renderFilters(active) {
  filters.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    const count = c.id === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === c.id).length;
    b.innerHTML = `<span class="mini" aria-hidden="true">${c.layers.map((l) => `<i style="background:${l}"></i>`).join("")}</span>
      ${c.label}<small>${count} ${count === 1 ? "item" : "items"}</small>`;
    b.setAttribute("aria-pressed", String(c.id === active));
    b.addEventListener("click", () => { renderFilters(c.id); renderProducts(c.id); });
    filters.appendChild(b);
  });
}

function renderProducts(cat) {
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  grid.innerHTML = "";
  list.forEach((p) => {
    // wide: landscape photos (the slabs) get a wide tile; everything else is portrait
    const shape = p.wide ? "wide" : "";
    const el = document.createElement("article");
    el.className = `item ${shape}`.trim();
    el.innerHTML = `
      <div class="photo">
        <div class="art"><div class="mini">${p.layers.map((c) => `<i style="background:${c}"></i>`).join("")}</div></div>
        <img src="images/${p.id}.jpg" alt="${p.name}" loading="lazy">
      </div>
      <h3>${p.name}</h3>
      <p>${p.text}</p>
      <span class="meta">${p.price}</span>
      <a class="order" href="${waLink(`Hi Celebrownz, I’d like to order the ${p.name} (${p.price}).`)}" target="_blank" rel="noopener">
        <svg aria-hidden="true" viewBox="0 0 24 24" class="wa-icon"><use href="#wa"/></svg>
        Order this<span class="sr"> (${p.name}) on WhatsApp</span>
      </a>`;
    el.querySelector("img").addEventListener("error", (e) => e.target.remove());
    grid.appendChild(el);
  });
}

renderFilters("all");
renderProducts("all");

// Planner
const form = document.getElementById("planner");
const itemSelect = document.getElementById("plan-item");
const preview = document.getElementById("plan-preview");
const dateInput = document.getElementById("plan-date");

itemSelect.innerHTML =
  `<option value="">Choose from the menu</option>` +
  PRODUCTS.map((p) => `<option>${p.name}</option>`).join("");

const tomorrow = new Date(Date.now() + 864e5);
dateInput.min = tomorrow.toISOString().slice(0, 10);

function composeMessage() {
  const d = new FormData(form);
  const lines = ["Hi Celebrownz, I’d like to place an order."];
  if (d.get("item")) {
    const p = PRODUCTS.find((x) => x.name === d.get("item"));
    lines.push(`Item: ${p.name} (${p.price})`);
  }
  if (d.get("occasion")) lines.push(`Occasion: ${d.get("occasion")}`);
  if (d.get("date")) {
    const nice = new Date(d.get("date") + "T00:00").toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long" });
    lines.push(`Date needed: ${nice}`);
  }
  if (d.get("qty")) lines.push(`Quantity: ${d.get("qty")}`);
  if (d.get("message")) lines.push(`Message to write on it: “${d.get("message")}”`);
  if (d.get("handover")) lines.push(`${d.get("handover")}`);
  return lines.join("\n");
}

const updatePreview = () => { preview.textContent = composeMessage(); };
form.addEventListener("input", updatePreview);
form.addEventListener("change", updatePreview);
updatePreview();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.open(waLink(composeMessage()), "_blank", "noopener");
});


// Structured data: the menu for Google, built from the same product list as the page
const menuLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": "https://www.celebrownz.com/#menu",
  name: "Celebrownz menu",
  url: "https://www.celebrownz.com/#menu",
  hasMenuSection: CATEGORIES.filter((c) => c.id !== "all").map((c) => ({
    "@type": "MenuSection",
    name: c.label,
    hasMenuItem: PRODUCTS.filter((p) => p.cat === c.id).map((p) => ({
      "@type": "MenuItem",
      name: p.name,
      description: p.text,
      image: `https://www.celebrownz.com/images/${p.id}.jpg`,
      offers: {
        "@type": "Offer",
        price: p.price.replace(/[^\d]/g, ""),
        priceCurrency: "INR",
      },
    })),
  })),
};
const business = JSON.parse(document.getElementById("ld-business").textContent);
business.hasMenu = menuLd;
const ld = document.createElement("script");
ld.type = "application/ld+json";
ld.textContent = JSON.stringify(business);
document.getElementById("ld-business").replaceWith(ld);

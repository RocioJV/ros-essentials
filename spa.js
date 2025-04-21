const spaContainer = document.getElementById("spa-container");

const routes = {
  home: "pages/home.html",
  shop: "pages/shop.html",
  cart: "pages/cart.html",
  account: "pages/account.html",
  about: "pages/about.html"
};

function loadPage(page) {
  fetch(routes[page])
    .then((res) => res.text())
    .then((html) => {
      spaContainer.innerHTML = html;
    })
    .catch(() => {
      spaContainer.innerHTML = "<h2>Page not found 😢</h2>";
    });
}

function handleHashChange() {
  const hash = window.location.hash.replace("#", "") || "home";
  loadPage(hash);
}

window.addEventListener("hashchange", handleHashChange);
window.addEventListener("load", handleHashChange);

document.addEventListener("DOMContentLoaded", () => {
  const groceryItems = [
    {
      name: "Rice",
      description: "2kg of Tastic rice",
      price: 59.99,
      currency: "ZAR",
    },
    {
      name: "Meali meal",
      description: "1kg of Tshisa Maize meal",
      price: 37.49,
      currency: "ZAR",
    },
    {
      name: "Pasta",
      description: "750g of Italian Pasta",
      price: 42.99,
      currency: "ZAR",
    },
    {
      name: "Cooking Oil",
      description: "2l Virgin oil",
      price: 76.49,
      currency: "ZAR",
    },
    {
      name: "Sugar",
      description: "1kg of Brown Sugar",
      price: 48.99,
      currency: "ZAR",
    },
    {
      name: "Salt",
      description: "1kg of Course Salt",
      price: 23.99,
      currency: "ZAR",
    },
    { name: "Tea", description: "100 Tea bags", price: 29.99, currency: "ZAR" },
    {
      name: "Coffee",
      description: "250g of Ground Coffee",
      price: 59.99,
      currency: "ZAR",
    },
  ];

  const productListSection = document.getElementById("product-list");
  const cartSection = document.getElementById("cart-section");
  const welcomeSection = document.getElementById("welcome-section");
  const groceriesLink = document.getElementById("groceries-link");
  const cleaningLink = document.getElementById("cleaning-link");
  const salesLink = document.getElementById("sales-link");
  const cartLink = document.getElementById("cart-link");
  const cartItems = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  const cartCountEl = document.createElement("span");

  let totalPrice = 0;
  let cartCount = 0;

  // Add the cart count next to "Cart" menu item
  cartCountEl.id = "cart-count";
  cartCountEl.style.marginLeft = "8px";
  cartCountEl.style.fontWeight = "bold";
  cartCountEl.textContent = "(0)";
  document.getElementById("cart-link").appendChild(cartCountEl);

  // Display grocery items
  function displayItems() {
    const ul = document.getElementById("shoppingList");
    ul.innerHTML = ""; // Clear existing items
    groceryItems.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("product-item");
      li.setAttribute("data-name", item.name); // For identifying items
      li.innerHTML = `
                <h2>${item.name}</h2>
                <p>R ${item.price.toFixed(2)}</p>
                <p>${item.description}</p>
                <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
            `;
      ul.appendChild(li);
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      // Only add listener if button is not disabled
      if (!button.disabled) {
        button.addEventListener("click", () => {
          const name = button.getAttribute("data-name");
          const price = parseFloat(button.getAttribute("data-price"));

          // Grey out and disable the product
          const productItem = document.querySelector(
            `#shoppingList li[data-name="${name}"]`
          );
          productItem.classList.add("bought");
          button.disabled = true;

          // Add item to cart
          const li = document.createElement("li");
          li.classList.add("product-item");
          li.setAttribute("data-name", name);
          li.innerHTML = `
                        <h2>${name}</h2>
                        <p>R ${price.toFixed(2)}</p>
                        <button class="remove-from-cart" data-name="${name}" data-price="${price}">Remove</button>
                    `;
          cartItems.appendChild(li);

          // Update total
          totalPrice += price;
          totalPriceEl.textContent = totalPrice.toFixed(2);

          // Update cart count
          cartCount++;
          cartCountEl.textContent = `(${cartCount})`;

          // Add event listener to the new "Remove" button
          li.querySelector(".remove-from-cart").addEventListener(
            "click",
            () => {
              // Remove item from cart
              li.remove();

              // Update total and cart count
              totalPrice -= price;
              totalPriceEl.textContent = totalPrice.toFixed(2);
              cartCount--;
              cartCountEl.textContent = `(${cartCount})`;

              // Re-enable the product in Groceries view
              const productItem = document.querySelector(
                `#shoppingList li[data-name="${name}"]`
              );
              productItem.classList.remove("bought");
              productItem.querySelector(".add-to-cart").disabled = false;
            }
          );
        });
      }
    });
  }

  // Set default checked items
  function setDefaultChecked() {
    const items = document.querySelectorAll("#shoppingList li");
    if (items.length >= 2) {
      items[0].classList.add("bought");
      const firstButton = items[0].querySelector(".add-to-cart");
      if (firstButton) firstButton.disabled = true;

      items[1].classList.add("bought");
      const secondButton = items[1].querySelector(".add-to-cart");
      if (secondButton) secondButton.disabled = true;
    }
  }

  // Show groceries and hide welcome text
  groceriesLink.addEventListener("click", () => {
    productListSection.classList.remove("hidden");
    cartSection.classList.add("hidden");
    welcomeSection.classList.add("hidden");
  });

  // Show welcome section for other menu items
  cleaningLink.addEventListener("click", () => {
    productListSection.classList.add("hidden");
    cartSection.classList.add("hidden");
    welcomeSection.classList.remove("hidden");
  });

  salesLink.addEventListener("click", () => {
    productListSection.classList.add("hidden");
    cartSection.classList.add("hidden");
    welcomeSection.classList.remove("hidden");
  });

  // Show cart and hide welcome text
  cartLink.addEventListener("click", () => {
    cartSection.classList.remove("hidden");
    productListSection.classList.add("hidden");
    welcomeSection.classList.add("hidden");
  });

  // Initialize the page
  welcomeSection.classList.remove("hidden"); // Show welcome text by default
  displayItems();
  setDefaultChecked();
});

const products = JSON.parse(localStorage.getItem("products")) || [];


const queryString = window.location.search; // ?product=shoes&color=black

// Create a URLSearchParams object
const params = new URLSearchParams(queryString);

// Get specific parameters
const id = params.get('id'); // "shoes"

console.log({ id });

const container = document.getElementById("product-detail-card");
products.forEach(product => {

    if (product.id == id) {
        const main = document.createElement("div");
        console.log("image::",product.image)
        main.classList.add("edit");

       main.innerHTML = `<img src="${product.image}" class="edit" />`;


        // main.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAe1BMVEUAAAD////CwsJsbGy1tbX29vbx8fGOjo7z8/PNzc1kZGSCgoIRERHu7u7p6enX19c/Pz9ERESdnZ2srKwbGxsmJiZUVFSJiYnAwMAxMTE6OjrV1dWoqKgjIyO4uLgICAhbW1vi4uJxcXFPT098fHyWlpYXFxcsLCw1NTVySMJjAAADzElEQVR4nO3bZ4OiMBAGYEMREYGlnBUVWDn9/7/wLHgKUkINwff57mYym4RhjJMJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfKk/rAPIclwcWYeQQVuwjuDDfqn4G9ZBZLDnrCNIOlqRqq6GuKgmK5V1BO9+ToJO1j7rMLKJZMk6hKdLKAWEGNGZdSA5lmTHOoQ7V7QDmRCiiqwjybWdkQGcVn5kzq55IjPnh3Uo+Y4GCRiHYCnqbT1dBQN8Hr8xCVEYDu9qhzhPhAi/DAOhsCZEZlbFiJLxzBOR7b+swqBk385SJiMvPZO8mCGTIKoQb3FqvQ9r2Sp5J1m9h1CZdV/8l17H3K6EaSJRRtTr+DUt9Hus/Q24DdcBSRpwMZXw2AhOP4NtRCmdJzJ1ONh8d/Yj4FX3I7lz25TTiSKm5nY/dDvmcch+x+P4ijn9yNO1mBrMO2g5V4+D7rLLZ6UP8phuD7EzlUuIw5a7GmCvHTLzRMhu+MVUwol0mivRMbLzdC2mBvxynGkvd5er30RFntp8LN89axJIN7naRmpunq7F1ACaP5WJr/jl1rogGy37IH8O5HB1nv+nv82hlUbIJTwEBXm6dabaGIaB6H0WjWvR89zJP6AeS0rwW4iaiWNiIkKTP+X69qP3W8Cw+307b5WT/KfXftNYKjs9Jz8vvBVTScfUbGo9xi1NKM8TkaWBt4XLeKkJ6VWfhPuTRJGn6+ZT9p1MoEcfc5KqfFr0civyJC6LqZTV57ROlB+17JIH3ovD/ZK6yVoWFM3JTWFFnsRtMZXymzm74smdtXVZYfCGp85UsfTJHjvk7ZmzWFKRJ+n2IG+91ZN3MsveZ69kW1qRp5i0Jx8XsrdgPFMnXF72i8nR3Vh+aKtBpTwR+cB5MZWW8RRMTlg3DEOvcDo9BcqINt+DUD7rOsZQTH2gLCQrmXlb1tPqwp8au6uEqQ3yDmxzRUd7LUO/M9WAWD77CmR7pEvqLmwxUxzcmWrkVJ4COjIPd6aaaWldGcqg78C2o5Xzipc7Uw01fw5OvdFvvphb9G0nBY7uTDUXNMnUejSdKSpReUZyjKozRcWqmandd5znSfRd8zfSKF+OS1VfWDzemWpJTsM9zyg7U9QqtNBlj+NrG21YUH3BTm7FFOtQ2TvTNEd157uKqTxu2cNwJohf8HJMSfn8ycdrRQnht1Wdxc5edufddPwveuOjtQjTP+RTPX8Ut1u6sZ8rjnQ4SE4k/uCAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+AbdUKMeiDScsAAAAAElFTkSuQmCC"/>`
container.appendChild(main)
        // main.appendChild(img);
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
    
  <h3>${product.name}</h3>
  <p><strong>Price:</strong> $${product.price}</p>
  <p><strong>Stock:</strong> ${product.inStock}</p>
  
  <button>Proceed to pay </button>
  <div class="qty-box">
    <button class="qty-btn" id="decrease">➖</button>
    <span id="quantity">1</span>
    <button class="qty-btn" id="increase">➕</button>
  </div>

  <button class="add-cart-btn" id="addToCartBtn">Add to Cart 🛒</button>

  <button id="view-cart" > View Cart </button>
  
`;

{/* <button class = "view-cart" > View Cart </button> */}

        container.appendChild(card)

        // const mob = document.getElementById("view-cart") {"()"}


        let quantity = 1;
        const quantityDisplay = card.querySelector("#quantity");
        const increaseBtn = card.querySelector("#increase");
        const decreaseBtn = card.querySelector("#decrease");

        increaseBtn.addEventListener("click", () => {
            if (quantity < product.inStock) {
                quantity++;
                quantityDisplay.innerText = quantity;
            } else {
                alert(`Only ${product.inStock} items in stock`);
            }
        });

        decreaseBtn.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.innerText = quantity;
            }
        });
// Add to Cart button functionality
document.getElementById("addToCartBtn").addEventListener("click", () => {
    const quantity = document.getElementById("quantity").value;
    localStorage.setItem("cartQuantity", quantity); // Save to localStorage
    alert("Item added to the cart");
});

// View Cart button functionality
document.getElementById("viewCartBtn").addEventListener("click", () => {
    const savedQuantity = localStorage.getItem("cartQuantity");
    if (savedQuantity) {
        alert(`You have added ${savedQuantity} item(s) to your cart.`);
    } else {
        alert("Your cart is empty.");
    }
});





    }
});


// [{"id":1,"name":"Adidas","price":345,"inStock":5,"image":"https://drippycustom.com/cdn/shop/products/EmuOxkpyhY.jpg?v=1651663232&width=940"},{"id":2,"name":"Nike","price":345,"inStock":7,"image":"https://cdn.salla.sa/BrKBO/9X7eRcZFAbc8RZeuNAdjOb0zdrKjREV458QMAYi6.jpg"},{"id":3,"name":"Bata","price":345,"inStock":9,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72EN67ATKemWjT2e-3szqk3E5H5bjb_O3ng&s"}]

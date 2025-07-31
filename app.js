const product = JSON.parse(localStorage.getItem("products")) || [];
const container = document.getElementById("productContainer");             
 product.forEach( product =>{
    const card = document.createElement("div");
     card.classList.add("product-card"); 

    card.innerHTML = `
  <h3>${product.name}</h3>
  <p><strong>Price:</strong> $${product.price}</p>
  <p><strong>Stock:</strong> ${product.inStock}</p>
  <button>
  <a href='/view.html?id=${product.id}'>View Details</a>
  </button>
`;
   container.appendChild(card)
  



}
);

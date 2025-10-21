let favorites = JSON.parse(localStorage.getItem("Favorites")) || [];

function addToFavorites(id){
    const product = products.find(p => p.id === id);

    if (favorites.find(f => f.id === id)){
        alert("Ya está en favoritos")
        return;
    }
    
    favorites.push(product);

    localStorage.setItem("Favorites", JSON.stringify(favorites));
    alert("Agregado a favoritos");
}

function renderFavorites(){
    const productList = document.getElementById("produc-list");
    
    productList.innerHTML = "<h2> Tus Favoritos </h2>";

    if(favorites.length === 0){
        productList.innerHTML = "<p> No tienes favoritos aún </p>"
        return;
    }  


    favorites.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>$${prosduct.price} NMX</p>
            <button onclick="addToCart(${product.id})> Agregar al carrito </button>`
            ;
        
    productList.appendChild(card);
});
}
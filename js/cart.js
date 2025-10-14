let cart = JSON.parse(localStorage.getItem("Cart")); 

function addToCart(id){ 
    const product = products.find(p => p.id === id); 
    
    const existing  = cart.find(item => item.id === id)


    if (existing)
    {
        existing.quantity += 1; 

    }else{
        cart.push({...product, quantity: 1}); 
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    alert("Producto agregado con exito al carrito"); 


    function getCartTotal(){
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0) 
    }

    // Funcion para mandar un mensaje con los productos en el carrito al wasap

    function sendWhatsAppOrder(){
        const total = getCartTotal(); 
        // lo creamos en forma de lista 
        const items = cart.map(item => '${item.name} x${item.quantity}').join(","); 
        // vamos a crear un mensaje para ordenar 
    }


}





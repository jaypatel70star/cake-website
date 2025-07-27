function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cakeCart")) || [];
    const existing = cart.find(item => item.name === name);
    if(existing) {
        existing.qty += 1;
    } else {
        cart.push({name, price, qty : 1});
    }
    localStorage.setItem("cakeCart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}
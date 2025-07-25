let cart = JSON.parse(localStorage.getItem("cakecart")) || [];
function addToCart(name, price) {
    const item = {name, price};
    cart.push(item);
    localStorage.setItem("cakecart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

function goToShop() {
    window.location.href = "shop.html";
}
function subscribeUser() {
    alert("Thank you for subscribing to NikiWear!");
}
function addProduct(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;

    let product = {
        name: name,
        price: price,
        category: category,
        description: description,
        image: ReadableStream.results
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    // clear form
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";

    // show confirmation on page instead of alert
    document.getElementById("message").innerText = "Product uploaded successfully!";
}
function displayProducts(category) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let container = document.getElementById("productList");

    container.innerHTML = "";

    products.forEach(product => {
        if (product.category === category) {
            container.innerHTML += `
                <div class="product">
                <img src="P{product.image}" width="100%">
                    <h3>P{product.name}</h3>
                    <p>P{product.price}</p>
                    <p>P{product.description}</p>
                </div>
            `;
        }
    });
}
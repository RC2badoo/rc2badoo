const products = [
    {
        name: "Produto 1",
        price: "R$ 100,00",
        image: "url_da_imagem_1.jpg",
        description: "Descrição do Produto 1"
    },
    {
        name: "Produto 2",
        price: "R$ 200,00",
        image: "url_da_imagem_2.jpg",
        description: "Descrição do Produto 2"
    },
    // Adicione mais produtos conforme necessário
];

function loadProducts() {
    const catalog = document.getElementById('product-catalog');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-4', 'product-card');

        productCard.innerHTML = `
            <div class="card h-100">
                <img class="card-img-top product-img" src="${product.image}" alt="${product.name}">
                <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <h5>${product.price}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
            </div>
        `;

        catalog.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);

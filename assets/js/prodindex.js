fetch('../../products.json')
    .then(response => response.json())
    .then(products => {
        console.log(products)
        products.forEach(product => {
            const productHTML = `
        <!-- IMAGEN ${product.id}-->
        <img src="${product.imgAll}" alt="${product.altDescription}">
        `;
            if (product.is_active === true) {
                document.getElementById('img-carousel').innerHTML += productHTML;
            }
        });
    });
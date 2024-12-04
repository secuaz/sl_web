fetch('../../products.json')
    .then(response => response.json())
    .then(products => {
        console.log(products)
        products.forEach(product => {
            const productHTML = `
        <!-- IMAGEN ${product.id}-->
        <li>
            <img src="${product.imgAll}" alt="${product.id}" width="400" height="300"/>
        </li>
        `;
            if (product.is_active === true) {
                document.getElementById('slideshow').innerHTML += productHTML;
            }
        });
    });

$(function () {
    setInterval(function () {
        $(".slideshow ul").animate({ marginLeft: -350 }, 800, function () {
            $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
        })
    }, 3500);
});





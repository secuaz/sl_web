fetch('../../products.json')
    .then(response => response.json())
    .then(products => {
        console.log(products)
        products.forEach(product => {
            const productHTML = `
        <!-- TARJETA -->
            <div class="card">
                <a id="modalBtn-${product.id}" class="btn" href="#open-modal-${product.id}">
                    <img src="${product.imgFile}" alt="${product.altDescription}">
                </a>
                <div class="card-container">
                    <h4><b>${product.productName}</b></h4>
                    <p>${product.productCode}</p>
                </div>
            </div>

        <!-- MODAL -->
        <div id="open-modal-${product.id}" class="modal-window">
            <div>
                <a href="#" title="Cerrar" class="modal-close">Close</a>

                        <div class="modal-content">
                            <div class="content-img">
                                <h1>${product.productName}</h1>
                                <img src="${product.imgFile}">
                            </div>
                            <div class="">
                                <div class="tec-content">
                                    <div class="post-content">
                                        <p><strong>Información Técnica</strong></p>

                                    </div>
                                    <div class="tec-detail">

                                        <table>
                                            <tr>
                                                <th>Código:</th>
                                                <td>${product.productCode}</th>
                                            </tr>
                                            <tr>
                                                <th>Medida:</th>
                                                <td>${product.productName}</td>
                                            </tr>
                                            <tr>
                                                <th>Ancho:</th>
                                                <td>${product.width}</td>
                                            </tr>
                                            <tr>
                                                <th>Diámetro</th>
                                                <td>${product.diameter}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <a rel="lightbox" href="#"> 
                                            <img src="${product.imgTec}">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
        `;
            document.getElementById('card-list').innerHTML += productHTML;
        });
    });
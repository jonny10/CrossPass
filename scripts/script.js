const showJogos = (jogos) => {
    // console.log('Cheguei no show products');
    console.log(jogos);

    // console.log(products.length);

    for (let i = 0; i < jogos.length; i++) {
        console.log(jogos[i].name);

        /*<div class="col-3">
                  <img src="assets/IMG/cyberpunk-2077_444.jpg" class="img-fluid" alt="...">
                  <p>Cyberpunk 2077</p>
                  <button type="submit" class="btn btn-outline-info" >Jogar</button>
                </div>*/

        let tagDivCol = document.createElement('div');
        tagDivCol.setAttribute('class', 'col-3');


        let tagImage = document.createElement('img');
        tagImage.setAttribute('class', 'img-fluid');
        tagImage.setAttribute('src', jogos[i].image);
        tagImage.setAttribute('alt', jogos[i].name);

        tagDivCol.appendChild(tagImage);

        let tagP = document.createElement('p');
        textNode = document.createTextNode(jogos[i].name);
        tagP.appendChild(textNode);
        tagDivCol.appendChild(tagP);

        let tagButton = document.createElement('button');
        tagButton.setAttribute('type', 'submit');
        tagButton.setAttribute('class', 'btn btn-outline-info');
        textNode = document.createTextNode("Jogar");
        tagButton.appendChild(textNode);
        tagDivCol.appendChild(tagButton);

        

        let tagDivJogos = document.getElementById('aqui');
        tagDivJogos.appendChild(tagDivCol);
    }
}

const fetchJogos = () => {
    //console.log("Cheguei na script para carregar os produtos");
    //Carrega os produtos do banco de dados. 
    //Endereço da api http://localhost:8000/GetProducts.php
    fetch('http://localhost:8000/getjogos.php')
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText);
        })
        .then((jogos) => {
            showJogos(jogos);
        })
        .catch((error) => {
            console.log(error);
        });
}
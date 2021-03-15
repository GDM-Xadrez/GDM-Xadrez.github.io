var atletas = [
    {
        "primeiro_nome": "Jerónimo",
        "segundo_nome": "Mendes",
        "elo": "0",
        "jogo": "jeronimo.gif",
        "foto": "jeronimo.png"
    },
    {
        "primeiro_nome": "José",
        "segundo_nome": "Martins",
        "elo": "0",
        "jogo": "exemplo.gif",
        "foto": "standard.jpg"
    }
]

function newCard(person){
    var cards = document.getElementById("cartoes");

    cards.innerHTML += `<div class="col">
                            <div class="card text-center">
                                <img src="resources/img/${person.foto}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    
                                <h5 class="card-title">${person.primeiro_nome}</h5>
                                <h5 class="card-title">${person.segundo_nome}</h5>
                                <p class="card-text">elo: ${person.elo}</p>
                                </div>
                                <img src="resources/img/${person.jogo}" class="card-image-top">
                            </div>
                        </div>`;
}

atletas.forEach(element => {
    newCard(element);
});
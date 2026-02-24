function doFetch()
{
    let pokemonName = document.getElementById("pokemonInput").value;
    
    if(pokemonName == "") {
        alert("Please enter a Pokemon name or ID");
        return;
    }
    
    let cacheKey = "pokemon_" + pokemonName.toLowerCase();
    let cachedData = localStorage.getItem(cacheKey);
    
    if(cachedData) {
        let data = JSON.parse(cachedData);
        processJSON(data);
    }
    else {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName.toLowerCase())
        .then(response => response.json())
        .then(myJSONDocument => processJSON(myJSONDocument));
    }
}

function processJSON(json)
{
    let pokemonName = document.getElementById("pokemonInput").value;
    let cacheKey = "pokemon_" + pokemonName.toLowerCase();
    
    localStorage.setItem(cacheKey, JSON.stringify(json));
    
    let id = json.id;
    let name = json.name;
    let image = json.sprites.front_default;
    let sound = json.cries.latest;
    let moves = json.moves;
    
    document.getElementById("pokemonImage").src = image;
    document.getElementById("pokemonAudio").src = sound;
    
    let moveNames = [];
    for(let i = 0; i < moves.length; i++) {
        moveNames.push(moves[i].move.name);
    }
    
    populateDropdowns(moveNames);
}

function populateDropdowns(moves)
{
    let select1 = document.getElementById("move1");
    let select2 = document.getElementById("move2");
    let select3 = document.getElementById("move3");
    let select4 = document.getElementById("move4");
    
    let selectElements = [select1, select2, select3, select4];
    
    for(let select of selectElements) {
        while(select.children.length > 1) {
            select.removeChild(select.lastChild);
        }
        
        for(let move of moves) {
            let option = document.createElement("option");
            option.value = move;
            option.innerText = move;
            select.appendChild(option);
        }
    }
}

function addToTeam()
{
    let image = document.getElementById("pokemonImage").src;
    let audio = document.getElementById("pokemonAudio").src;
    let move1 = document.getElementById("move1").value;
    let move2 = document.getElementById("move2").value;
    let move3 = document.getElementById("move3").value;
    let move4 = document.getElementById("move4").value;
    
    if(image == "" || move1 == "" || move2 == "" || move3 == "" || move4 == "") {
        alert("Please select all moves and find a Pokemon");
        return;
    }
    
    let teamDisplay = document.getElementById("teamDisplay");
    
    let pokemonDiv = document.createElement("div");
    pokemonDiv.classList.add("team-pokemon");
    
    let imgElement = document.createElement("img");
    imgElement.src = image;
    
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("team-pokemon-info");
    
    let movesList = document.createElement("ul");
    
    let li1 = document.createElement("li");
    li1.innerText = move1;
    movesList.appendChild(li1);
    
    let li2 = document.createElement("li");
    li2.innerText = move2;
    movesList.appendChild(li2);
    
    let li3 = document.createElement("li");
    li3.innerText = move3;
    movesList.appendChild(li3);
    
    let li4 = document.createElement("li");
    li4.innerText = move4;
    movesList.appendChild(li4);
    
    infoDiv.appendChild(movesList);
    
    pokemonDiv.appendChild(imgElement);
    pokemonDiv.appendChild(infoDiv);
    
    teamDisplay.appendChild(pokemonDiv);
    
    document.getElementById("pokemonInput").value = "";
    document.getElementById("pokemonImage").src = "";
    document.getElementById("pokemonAudio").src = "";
}

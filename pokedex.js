const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            const pokeName = document.createElement('h2');
            pokeName.innerText = `Name: ${data.species.name}`

            const pokeType = document.createElement('h2');
            pokeType.innerText = `Type: ${data.types[0].type.name}`

            const pokeTitle1 = document.createElement('h2');
            const pokeStats = document.createElement('h2')

            sta = []
            pokeTitle1.innerText = `Stats: `
            for (var i = 0; i<=5; i++){
                pokeStats.innerText = `${" "} ${data.stats[i].stat.name}${": "} ${data.stats[i].base_stat}${"\n"}`
                    sta.push(pokeStats.innerText);
            }
  
            mov = []
            const pokeTitle = document.createElement('h2');
            pokeTitle.innerText = `Moves: `
            const pokeMoves = document.createElement('h2')
            for (var i = 0; i<=3; i++){
                pokeMoves.innerText = `${" "} ${data.moves[i].move.name}`
                if (data.moves[i].move.name != null){
                    mov.push(pokeMoves.innerText);
                }
                else{
                    mov.push('0');
                }
            }
            
            const container = document.createElement('div')
            container.append(pokeName, pokeType, pokeTitle, mov, pokeTitle1, sta)
            
            const allItems = []
            allItems.push(container)
            app.append(...allItems)
            
            
        }
    });
}



const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

function deletePokemon() {
    let allPokemon = app.childNodes
    allPokemon = Array.from(allPokemon)

    allPokemon.forEach(pokemon => {
        pokemon.remove(pokemon)
    });
}





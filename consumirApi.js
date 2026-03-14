const characterId = document.getElementById('characterId');
const btn = document.getElementById('btn');
const content = document.getElementById('content');
const image = document.getElementById('img');

const fetchApi = (value) => {
    const result = fetch (`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });

    return result;
}

btn.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(characterId.value);

    const {name, status, gender, species, location} = result;

    content.innerHTML =`
    <div class = "card">
        <h2>${name}</h2>
        <p>Status: ${status}</p>
        <p>Genero: ${gender}</p>
        <p>Espécie: ${species}</p>
        <p>Localização: ${location.name}</p>
    </div>
    `;

    image.src = result.image;
});


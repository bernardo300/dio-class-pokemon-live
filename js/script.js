var BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
var offest = 0;

var ulPokemon = document.querySelector('.list_pokemon');
var btnNext = document.getElementById('next');
var btnPrevious = document.getElementById('previous');

var namePokemon = document.getElementById('nome');
var typePokemon = document.querySelector('.tipo');
var imgPokemon = document.querySelector('.img_pokemon');
var experiencePokemon = document.querySelector('.experience');
var abilityPokemon = document.querySelector('.ability');
var heightPokemon = document.querySelector('.height');
var weightPokemon = document.querySelector('.weight');

var pokemons = [];
var service = new ServicePokemon();

window.addEventListener('load', getListPokemon);

async function getListPokemon(limit = 12) {
  pokemons = await service.getListPokemon();
  render();
}

async function getPokemon(url) {
  let data = await service.getPokemon(url);
  let { name, sprites, types, abilities, base_experience, height, weight } =
    data;
  //prettier-ignore
  let pokemon = buildPokemon(
    name,
    sprites,
    types,
    abilities,
    base_experience,
    height,
    weight
  );
  namePokemon.textContent = pokemon.name;
  imgPokemon.src = pokemon.image;
  typePokemon.textContent = 'Tipo: ' + pokemon.type;
  experiencePokemon.textContent =
    'Experiência: ' + pokemon.experience + '/1000';
  abilityPokemon.textContent = 'Habilidade: ' + pokemon.ability;
  weightPokemon.textContent = 'Peso: ' + pokemon.weight + 'kg';
  heightPokemon.textContent = 'Altura: ' + pokemon.height + 'm';

  console.log('Expereience ' + pokemon.experience);
  console.log('abilidade ' + pokemon.ability);
}

//prettier-ignore
function buildPokemon(
  name,
  sprites,
  types,
  abilities,
  base_experience,
  height,
  weight
) {
  return new Pokemon(
    name = `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    image = sprites.other.home.front_default,
    type = `${types[0].type.name.charAt(0).toUpperCase()}${types[0].type.name.slice(1)}`,
    ability = `${abilities[0].ability.name.charAt(0).toUpperCase()}${abilities[0].ability.name.slice(1)}`,
    experience = base_experience,
    height = height,
    weight = weight
  );
}

function handlabrir(ev) {
  ev.preventDefault();
  let url = ev.target.href;
  getPokemon(url);
}

function nextPage() {
  service.offset += 12;
  getListPokemon();
}
function previousPage() {
  if (service.offset > 0) {
    service.offset -= 12;
    getListPokemon();
  }
}
btnPrevious.addEventListener('click', previousPage);
btnNext.addEventListener('click', nextPage);

function render() {
  ulPokemon.innerHTML = '';
  pokemons.map((pokemon) => {
    let liPokemon = document.createElement('li');
    let aPokemon = document.createElement('a');
    let imgPokemon = document.createElement('img');

    aPokemon.href = pokemon.url;
    aPokemon.innerText = pokemon.name;
    urlImg = pokemon.url.split('/')[6];
    imgPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlImg}.png`;

    aPokemon.addEventListener('click', handlabrir);

    liPokemon.appendChild(imgPokemon);
    liPokemon.appendChild(aPokemon);
    ulPokemon.appendChild(liPokemon);
  });
}
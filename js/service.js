class ServicePokemon {
  constructor() {
    this.baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    this.offset = 0;
  }

  get offset() {
    return this._offset;
  }
  get baseUrl() {
    return this._baseUrl;
  }
  set offset(offset) {
    this._offset = offset;
  }

  set baseUrl(offset) {
    this._baseUrl = offset;
  }

  async getListPokemon(limit = 12) {
    console.log(
      `Requisao: ${this._baseUrl}?offset=${this._offset}&limit=${12}`
    );
    return fetch(`${this._baseUrl}?offset=${this._offset}&limit=${12}`)
      .then((res) => res.json().then((data) => data.results))
      .catch((e) => {
        console.log(e.message);
      });
  }

  async getPokemon(url) {
    return fetch(url)
      .then((res) => res.json().then((data) => data))
      .catch((e) => {
        console.log(e.message);
      });
  }
}

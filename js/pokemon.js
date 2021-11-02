class Pokemon {
  constructor(name, image, type, ability, experience, height, weight) {
    this._name = name;
    this._image = image;
    this._type = type;
    this._ability = ability;
    this._experience = experience;
    this._height = height;
    this.weight = weight;
  }
  get name() {
    return this._name;
  }
  get image() {
    return this._image;
  }
  get type() {
    return this._type;
  }
  get ability() {
    return this._ability;
  }
  get experience() {
    return this._experience;
  }
  get height() {
    return this._height;
  }
  get weight() {
    return this._weight;
  }

  set name(name) {
    this._name = name;
  }
  set image(image) {
    this._image = image;
  }
  set type(type) {
    this._type = type;
  }
  set ability(ability) {
    this._ability = ability;
  }
  set experience(experience) {
    this._experience = experience;
  }
  set height(height) {
    this._height = height;
  }
  set weight(weight) {
    this._weight = weight;
  }
}
export{
  Pokemon
}
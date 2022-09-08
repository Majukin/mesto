export class Section {
  constructor({items, renderer}, containerSelector){ 
    this._items = items; 
    this._renderer = renderer; 
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items, id) {
    items.reverse().forEach((item)=> this._renderer(item, id));
  }

  addItem(element) { 
    this._container.prepend(element); 
  }; 
}
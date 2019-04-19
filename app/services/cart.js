import Ember from 'ember';

export default Ember.Service.extend({

  init() {
    // get the cart out of local storage (this way it persists in the user's browser past a reload)
    this.set('items', JSON.parse(localStorage.getItem("cart")));
    if (!this.items) { 
      this.set('items',[]); 
    }
    // send the current total in the cart to the template as well
    this.set('total', this._calcTotal());
  },

  //add an item to the cart in both local storage and the current state
  addToCart(title, author, price) {
    this.items.pushObject({ title, author, price });
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.set('total', this._calcTotal());
  },

  //clear out the cart in local storage and in state
  emptyCart() {
    localStorage.setItem('cart', '[]');
    this.set('items', []);
    this.set('total', 0);
  },

  //internally find the current total of prices in the cart
  _calcTotal() {
    return this.items.reduce((accumulator, current)  => {
      return accumulator + current.price;
    },0);
  }
});

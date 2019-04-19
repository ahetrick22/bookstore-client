import Ember from 'ember';

export default Ember.Service.extend({
  addToCart(title, author, price) {
    //get the existing cart and add the book, or if there's not a cart then create a new cart with the book in it
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    } 
    cart.push({ title, author, price });
    localStorage.setItem('cart', JSON.stringify(cart));

  },

  emptyCart() {
    localStorage.removeItem('cart');
    window.location.reload();
  }

});

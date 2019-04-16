import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // get the cart our of local storage (this way it persists in the user's browser past a reload)
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) { 
      cart = []; 
    }
    // send the current total in the cart to the template as well
    const total = cart.reduce((accumulator, current)  => {
      return accumulator + current.price;
    },0);
    return {cart, total};
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    //empty the local storage and then force a refresh to show the empty cart
    emptyCart() {
      localStorage.removeItem('cart');
      this.get('target.router').refresh();
    }
  }
});

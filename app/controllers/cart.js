import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    //empty the local storage and then force a refresh of the cart template
    emptyCart() {
      localStorage.removeItem('cart');
      this.get('target.router').refresh();
    }
  }
});

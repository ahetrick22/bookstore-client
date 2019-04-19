import Ember from 'ember';
import { inject as service } from '@ember/service';


export default Ember.Component.extend({

  cart: service(),

  actions: {

    open() {
      this.get('book').reload().then(() => {
        this.set('isShowingModal', true);
        this.get('blurBackground')(true);
      });
    },


    close() {
      this.set('isShowingModal', false);
      this.get('blurBackground')(false);
    },

    addToCart(title, author, price) {
      this.cart.addToCart(title, author, price);
      this.set('isShowingModal', false);
      this.get('blurBackground')(false);
    } 

  }

});
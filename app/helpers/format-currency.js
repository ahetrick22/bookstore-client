import Ember from 'ember';

export function formatCurrency(num) {
  num = +num;

  if (isNaN(num)) { return 0; } 

  return num.toFixed(2);
}

export default Ember.Helper.helper(formatCurrency);
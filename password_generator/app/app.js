
/**
 * Generate: An entry point to call the class UI
 * @teeclver
 */

import { UI_action } from './UI_actions.js';

// instatialing the class to call the perform method
const perform = new UI_action();

// ticks element

const range = document.querySelector('#len');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');

// grouping all the info into an object of data about the password

// the generate password button
const Generate = document.querySelector('#generate');


// range.addEventListener('touchstart', () => {
//   // calling a method that always changes ithe range
//   perform.rangechange();
// });


// this eventlistner which even ever the scrollbar is move and also calling a method for that action
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (isTouchDevice) {
  range.addEventListener('touchstart', () => {
    // calling a method that changes the range
    perform.rangechange();
  });
}
range.addEventListener('mousemove', () => {
  // calling a method that changes the range
  perform.rangechange();
});




// this is to add event on each ticks to display the password level for each ticks
const tick = document.querySelector('.pick').addEventListener('click', (e) => {
  if (e.target.className == 'check') {
    const info = {
      range: range.value,
      upper: upper.checked,
      lower: lower.checked,
      number: number.checked,
      symbols: symbols.checked
    };

    /// im using setter that why im using equal sign un calling the method
    perform.levels = info;
  }
});

Generate.addEventListener('click', () => {
  const info = {
    range: range.value,
    upper: upper.checked,
    lower: lower.checked,
    number: number.checked,
    symbols: symbols.checked
  };
  const fileds = [range, upper, lower, number, symbols];
  /// im using setter that why im using equal sign un calling the method
  perform.generate(info, fileds);
});

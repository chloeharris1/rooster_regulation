// import the assert module 
const assert = require('assert');

// import the Rooster module 
const Rooster = require('../index');

// describe block for Rooster
describe('Rooster', () => {
  // describe block for the .announceDawn method
  describe('.announceDawn', () => {
    // it block that tests that the method 'returns a rooster call'
    it('returns a rooster call', () => {
      // Setup: define expected result
      const expected = 'cock-a-doodle-doo!';
      // Exercise: call the function under test
      const actual = Rooster.announceDawn();

      // Verify: using an assert function
      assert.strictEqual(actual, expected);
    });
  });
  // describe block for .timeAtDawn
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () =>{
      // Setup
      const inputNum = 12;
      const expected = '12';
      // Exercise 
      const actual = Rooster.timeAtDawn(inputNum);
      // Verify
      assert.strictEqual(actual, expected);
    });
    it('throws an error if passed a number less than 0', ()=>{
      // Setup
      const inputNum = -1;
      const expected = RangeError;
      // Verify
      assert.throws(() =>{
        // Exercise 
        Rooster.timeAtDawn(inputNum) 
      }, expected)
  });
  it('throws an error if passed a number greater than 23', ()=>{
      // Setup
      const inputNum = 24;
      const expected = RangeError;
      // Verify
      assert.throws(() =>{
        // Exercise 
        Rooster.timeAtDawn(inputNum) 
      }, expected)
    });
});
});

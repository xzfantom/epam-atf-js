const assert = require('chai').assert;
const Calculator = require('../index.js');

describe('Calculator test', function(){
   
    let calc = new Calculator();
    
    it('check the addition operations.', function(){
        assert.equal(calc.add(5, 10), 15);
    });
    
    it('check the multiplication operations.', function (){
        assert.equal(calc.multiply(5, 10), 50);
    });
    
});
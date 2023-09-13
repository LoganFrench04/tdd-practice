const { expect } = require("chai");
const reverseString = require('../problems/reverse-string')

describe('reverseString', function () {
    it('Should take a string and reverse it', function () {
        let string = 'fun'
        let reverse = reverseString(string)
        expect(reverse).to.equal('nuf')
    })
})

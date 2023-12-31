const { expect, assert } = require('chai')
const { returnsThree } = require('../problems/number-fun')
const { reciprocal } = require('../problems/number-fun')

describe('returnsThree', function () {
    it('should return 3', function () {
        let num = returnsThree()
        expect(num).to.equal(3)
    })

})

describe('reciprocal(num)', function () {
    it('should intake a number and then return the reciprocal of that number', function () {
        let num = reciprocal(4)
        expect(num).to.equal(0.25)

    })

    it('it should throw and error with invalid arguments', function () {

        let invalidArg = 'invalidArg'
        let testFunction = () => reciprocal(invalidArg)

        expect(testFunction).to.throw(TypeError, 'arguments can only be numbers')

    })

    it('it should throw an error if num is less than 1', function () {
        let invalidNum = 0
        let testFunction = () => reciprocal(invalidNum)
        expect(testFunction).to.throw(RangeError, 'arguments can not be less than 1')
    })

    it('it should throw an error if num is greater than 1 million', function () {
        let invalidNum = 1000001
        let testFunction = () => reciprocal(invalidNum)
        expect(testFunction).to.throw(RangeError, 'arguments can not be greater than 1 million')
    })
})

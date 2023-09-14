const Person = require('../problems/person')
const {expect} = require('chai')

describe('Person constructor', function (){
    it ('should have a name and age properites and set them properly', function (){
        let person = new Person('Logan', 50)

        expect(person).to.have.property('name')
        expect(person).to.have.property('age')

        expect(person.name).to.equal('Logan')
        expect(person.age).to.equal(50)


    })
})

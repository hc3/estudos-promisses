'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import promisse from './promisse';

chai.use(chaiAsPromised);

let expect = chai.expect;

describe('teste unidade ', () => {

  describe('import ', () => {
    it('should return a Function', () => {
      expect(promisse).to.be.an('function');
    })
  })

  describe('invoked', () => {
    it('should return a Promisse', () => {
      expect(promisse().then).to.be.a('function')
      expect(promisse().catch).to.be.a('function')
    })
  })

  describe('teste', () => {
    it('should return false', () => {
      expect(promisse("")).to.eventually.deep.equal
    })
  })
})

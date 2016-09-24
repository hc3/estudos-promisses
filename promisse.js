'use strict';

module.exports = function(valor) {
  return new Promise((resolve, reject) => {
    Promise.resolve(valor)
      .then(isEmpty)
      .then(isString)
      .then(isEmail)
      .catch(handlerErro)

    function isEmpty(valor) {
      const isNull = (valor === null);
      const isUndefined = (valor === undefined);
      const isEmpty = (valor === '');
      if (isNull || isUndefined || isEmpty) return true;
      return false;
    }

    function isString(valor) {
      if (typeof valor === 'string' || valor instanceof String) return true;
      return false;
    }

    function isEmail(valor) {
      const regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    	const isEmpty = require('../isEmpty/isEmpty')(valor);
    	if(isEmpty) return false;

    	const isString = require('../isString/isString')(valor);
    	if(!isString) return false;

    	return regex.test(valor);
    }

    function handlerErro(erro) {
      if(erro instanceof Error) {
        return reject({
          type:'type_error',
          message:'erro ao executar promisse'
        })
      }
    }
  })
}

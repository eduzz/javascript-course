class Teste {}

var string = 'oi';
var number = 10;
var boolean = true;
var date = new Date();
var func = function valor() { return 1; };
var array = [1, 2];
var obj = { a: 1 };
var instance = new Teste();

console.log('\x1b[35m%s\x1b[0m', '\n*** Tipos ***');
console.log('string:', '\t', string, '\t\t\t\t', typeof string);
console.log('number:', '\t', number, '\t\t\t\t', typeof number);
console.log('boolean:', '\t', boolean, '\t\t\t\t', typeof boolean);
console.log('func:', '\t\t', func, '', typeof func);
console.log('date:', '\t\t', date, '\t', typeof date, '\t', (date instanceof Date) ? 'Date' : '');
console.log('array:', '\t\t', array, '\t\t\t', typeof array, '\t', Array.isArray(array) ? 'Array' : false);
console.log('obj:', '\t\t', obj, '\t\t\t', typeof obj);
console.log('instance:', '\t', instance, '\t\t\t', typeof instance, '\t', (instance instanceof Teste) ? 'Class Teste' : '');
console.log('undefined:', '\t', undefined, '\t\t\t', typeof undefined);
console.log('null:', '\t\t', null, '\t\t\t\t', typeof null, '\t <~ ¯\\_(ツ)_/¯');

//****************************************************************** */
console.log('\x1b[35m%s\x1b[0m', '\n*** Prototypes ***');

console.log('string.charAt:', string.charAt(1));
try {
  console.log('number.charAt:', number.charAt(1));
} catch (err) {
  console.log('number.charAt:', err.message);
}

console.log('number.toString().charAt:', number.toString().charAt(1));
console.log('number.toFixed:', number.toFixed(2));

try {
  console.log('string.toFixed:', string.toFixed(2));
} catch (err) {
  console.log('string.toFixed:', err.message);
}

console.log('array.length', array.length);
console.log('obj.length', obj.length, '<~ Não teve deu erro');

//****************************************************************** */
console.log('\x1b[35m%s\x1b[0m', '\n*** Criando Prototypes ***');

console.log('array.meuValor', '\t', array.meuValor, '\t', '<~ Ainda não existe');
console.log('obj.meuValor', '\t', obj.meuValor, '\t', '<~ Ainda não existe');
Object.prototype.meuValor = function() { return this; };
console.log('array.meuValor', '\t', array.meuValor(), '\t', '<~ Agora sim');
console.log('obj.meuValor', '\t', obj.meuValor(), '\t', '<~ Agora sim');

console.log('\nPosso criar para String, Number, Boolean, Array, Object, Date ou uma classe especifica');

//****************************************************************** */
console.log('\x1b[35m%s\x1b[0m', '\n*** Cast: String ***');
console.log('string:', string.toString());
console.log('number:', number.toString(), ' - ', number.toFixed(2));
console.log('date:', date.toString(), ' - ', date.toISOString());
console.log('func:', func.toString());
console.log('array:', array.toString(), ' - ', array.join('|'));
console.log('obj:', obj.toString(), ' - ', JSON.stringify(obj));
console.log('instance:', instance.toString());

//****************************************************************** */
console.log('\x1b[35m%s\x1b[0m', '\n*** Cast: Number ***');
console.log('number:', number, '\t', Number(number), '\t', typeof Number(number));
console.log('string:', '5', '\t', Number('5'), '\t', typeof Number('5'));
console.log('string:', string, '\t', Number(string), '\t', typeof Number(string), '<~ NaN = Not a Number ¯\\_(ツ)_/¯');

//****************************************************************** */
console.log('\x1b[35m%s\x1b[0m', '\n*** Cast: Boolean ***');
console.log('0:\t\t', Boolean(0));
console.log('1:\t\t', !!'1');
console.log('-1:\t\t', !!'-1');
console.log('[]:\t\t', Boolean([]));
console.log('{}:\t\t', Boolean({}));
console.log('null:\t\t', Boolean(null));
console.log('undefined:\t', Boolean(null));
console.log('\"\":\t\t', Boolean(''));
console.log('a:\t\t', Boolean('a'));
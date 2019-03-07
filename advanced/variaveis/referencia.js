console.log('\x1b[35m%s\x1b[0m', '*** Valor ***');
var value1 = 1;
var value2 = value1;
value2 = 2;
console.log('value1: ', value1, ' - value2:', value2);

console.log('\x1b[35m%s\x1b[0m', '\n*** Referência Obj ***');
var obj = { a: 1 };
var newObj = obj;
newObj.b = 2;
console.log('obj:', obj, ' - newObj:', newObj);

console.log('\x1b[35m%s\x1b[0m', '\n*** Referência Array ***');
var array = [1];
var newArray = array;
newArray.push(2);
console.log('array:', array, ' - newArray:', newArray);

console.log('\x1b[35m%s\x1b[0m', '\n*** Referência Date ***');
var date = new Date();
var newDate = date;
newDate.setDate(1);
console.log('date:', date, ' - newDate:', newDate);

console.log('\x1b[35m%s\x1b[0m', '\n*** Referência Classes ***');
class Teste {
  constructor(value) { this.value = value };
}

var instance = new Teste(1);
var newInstance = instance;
newInstance.value = 2;
console.log('instance:', instance, ' - newInstance:', newInstance);
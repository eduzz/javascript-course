var nomeInicial = 'Daniel';

// document.querySelector('h3 span').innerHTML = nome;
var nome = document.getElementById('nome')
// nome.innerHTML = nomeInicial;
nome.innerHTML = 'Olá ' + nomeInicial + '!';

var campoNome = document.getElementById('campo-nome');
campoNome.value = nomeInicial;

// campoNome.onchange = onChangeNome;
campoNome.onkeyup = onChangeNome;

function onChangeNome(e) {
  console.log(e.type);
  var value = e.target.value;
  var erro = document.getElementById('erro');
  var grupo = document.getElementById('grupo');

  if (value.length > 10) {
    // document.getElementById('erro').innerHTML = 'Não pode ser maior que 10';
    erro.innerHTML = 'Não pode ser maior que 10';
    grupo.classList.add('has-error');
    return;
  }

  erro.innerHTML = '';
  grupo.classList.remove('has-error');

  nome.innerHTML = 'Olá ' + value + '!';
}
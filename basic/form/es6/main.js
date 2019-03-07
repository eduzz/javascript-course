class Form {
  constructor() {
    this._value = '';

    this.nome = document.getElementById('nome');
    this.campoNome = document.getElementById('campo-nome');
    this.erro = document.getElementById('erro');
    this.grupo = document.getElementById('grupo');
    this.limpar = document.getElementById('limpar');
    this.nomeGrande = document.getElementById('nome-grande');

    this.campoNome.onchange = this.onChangeNome;
    this.campoNome.onkeyup = this.onChangeNome;
    this.limpar.onclick = this.limparNome;
    this.nomeGrande.onclick = this.colocarNomeGrande;

    this.value = 'Daniel';
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this.campoNome.value = value;

    if (value.length > 10) {
      this.erro.innerHTML = 'Não pode ser maior que 10';
      this.grupo.classList.add('has-error');
      return;
    }

    this.erro.innerHTML = '';
    this.grupo.classList.remove('has-error');

    this._value = value;
    this.nome.innerHTML = `Olá ${value}!`;
  }

  onChangeNome = (e) => {
    this.value = e.target.value;
  }

  limparNome = () => {
    this.value = '';
  }

  colocarNomeGrande = () => {
    this.value = 'Daniel de Oliveira Prado';
  }
}

const form = new Form();
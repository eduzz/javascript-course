export class List {
  constructor(element) {
    this.element = element;
    this._pokemon = [];

    // fetch('https://pokeapi.co/api/v2/pokemon')
    //   .then(result => result.json())
    //   .then(({ results }) => this.pokemon = results);
    this.loadData();
  }

  get pokemon() {
    return this._pokemon;
  }

  set pokemon(value) {
    this._pokemon = value;
    this.render();
  }

  loadData = async () => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon');
    const { results } = await result.json();
    this.pokemon = results;
  }

  render = () => {
    const html = `
      <table class='table'>
        <tr>
          <th>#</th>
          <th>Nome</th>
        </tr>
        ${this._pokemon.map((pokemon, index) => 
          `<tr>
            <td>${index}</td>
            <td>${pokemon.name}</td>
          </tr>`
        ).join('')}
      </table>
    `;

    this.element.innerHTML = html;
  }
}
// Definindo a classe Livro
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(novoTitulo) {
        this.titulo = novoTitulo;
    }

    getAutor() {
        return this.autor;
    }

    setAutor(novoAutor) {
        this.autor = novoAutor;
    }
}

const formLivro = document.getElementById('formLivro');
const listaLivros = document.getElementById('livros');

formLivro.onsubmit = function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;

    const livro = new Livro(titulo, autor);
    adicionarLivroNaLista(livro);

    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
};

function adicionarLivroNaLista(livro) {
    const li = document.createElement('li');
    const titulo = livro.getTitulo();
    const autor = livro.getAutor();
    li.innerHTML = `<strong>${titulo}</strong> - ${autor}`;
    li.classList.add('livro');
    const editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar';
    editarBtn.onclick = function () {
        editarLivro(this);
    };
    const excluirBtn = document.createElement('button');
    excluirBtn.textContent = 'Excluir';
    excluirBtn.onclick = function () {
        removerLivro(this);
    };
    li.appendChild(editarBtn);
    li.appendChild(excluirBtn);
    listaLivros.appendChild(li);
}

function editarLivro(botao) {
    const itemLivro = botao.parentElement;
    const titulo = itemLivro.querySelector('strong').innerText;
    const autor = itemLivro.innerText.split(' - ')[1];
    const novoTitulo = prompt("Digite o novo título do livro:", titulo);
    const novoAutor = prompt("Digite o novo autor do livro:", autor);
    if (novoTitulo && novoAutor) {
        itemLivro.querySelector('strong').innerText = novoTitulo;
        itemLivro.innerText = `<strong>${novoTitulo}</strong> - ${novoAutor}`;
    }
}

function removerLivro(botao) {
    const itemLivro = botao.parentElement;
    listaLivros.removeChild(itemLivro);
}

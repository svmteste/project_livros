// Definindo a classe Livro
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo; // Atributo para armazenar o título do livro
        this.autor = autor; // Atributo para armazenar o autor do livro
    }

    getTitulo() {
        return this.titulo; // Método para retornar o título do livro
    }

    setTitulo(novoTitulo) {
        this.titulo = novoTitulo; // Método para definir um novo título para o livro
    }

    getAutor() {
        return this.autor; // Método para retornar o autor do livro
    }

    setAutor(novoAutor) {
        this.autor = novoAutor; // Método para definir um novo autor para o livro
    }
}

const formLivro = document.getElementById('formLivro'); // Obtendo o formulário do HTML
const listaLivros = document.getElementById('livros'); // Obtendo a lista de livros do HTML

// Função para ser executada quando o formulário é submetido
formLivro.onsubmit = function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Obtendo os valores dos campos de título e autor do formulário
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;

    // Criando um novo objeto Livro com os valores dos campos do formulário
    const livro = new Livro(titulo, autor);

    // Adicionando o livro à lista de livros e limpando os campos do formulário
    adicionarLivroNaLista(livro);
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
};

// Função para adicionar um livro à lista de livros no HTML
function adicionarLivroNaLista(livro) {
    // Criando um novo elemento de lista no HTML
    const li = document.createElement('li');
    li.classList.add('livro'); // Adicionando a classe 'livro' ao elemento de lista

    // Criando um elemento de span para exibir o título do livro
    const tituloSpan = document.createElement('span');
    tituloSpan.textContent = livro.getTitulo(); // Definindo o texto do span como o título do livro
    li.appendChild(tituloSpan); // Adicionando o span à lista de livros

    // Criando um elemento de span para exibir o autor do livro
    const autorSpan = document.createElement('span');
    autorSpan.textContent = ` - ${livro.getAutor()}`; // Definindo o texto do span como o autor do livro
    li.appendChild(autorSpan); // Adicionando o span à lista de livros

    // Criando um botão de editar e configurando sua função de clique
    const editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar'; // Definindo o texto do botão como 'Editar'
    editarBtn.onclick = function () {
        editarLivro(this); // Chamando a função de edição de livro ao clicar no botão
    };
    li.appendChild(editarBtn); // Adicionando o botão à lista de livros

    // Criando um botão de excluir e configurando sua função de clique
    const excluirBtn = document.createElement('button');
    excluirBtn.textContent = 'Excluir'; // Definindo o texto do botão como 'Excluir'
    excluirBtn.onclick = function () {
        removerLivro(this); // Chamando a função de remoção de livro ao clicar no botão
    };
    li.appendChild(excluirBtn); // Adicionando o botão à lista de livros

    listaLivros.appendChild(li); // Adicionando o elemento de lista à lista de livros no HTML
}

// Função para editar um livro
function editarLivro(botao) {
    const itemLivro = botao.parentElement; // Obtendo o elemento pai do botão (elemento de lista)
    const titulo = itemLivro.querySelector('span').innerText; // Obtendo o título do livro
    const autor = itemLivro.innerText.split(' - ')[1]; // Obtendo o autor do livro

    // Solicitando ao usuário um novo título e autor para o livro
    const novoTitulo = prompt("Digite o novo título do livro:", titulo);
    const novoAutor = prompt("Digite o novo autor do livro:", autor);

    // Se o usuário inseriu um novo título e autor, atualiza os valores na lista
    if (novoTitulo && novoAutor) {
        itemLivro.querySelector('span').innerText = novoTitulo; // Atualiza o título na lista
        autorSpan.textContent = ` - ${novoAutor}`; // Atualiza o autor na lista
    }
}

// Função para remover um livro da lista
function removerLivro(botao) {
    const itemLivro = botao.parentElement; // Obtendo o elemento pai do botão (elemento de lista)
    listaLivros.removeChild(itemLivro); // Removendo o elemento de lista da lista de livros no HTML
}

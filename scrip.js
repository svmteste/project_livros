// Definindo a classe Livro
class Livro {
    // Método construtor da classe Livro, recebe título e autor como parâmetros
    constructor(titulo, autor) {
        // Atribuindo o título recebido como parâmetro ao atributo titulo do objeto Livro
        this.titulo = titulo;
        // Atribuindo o autor recebido como parâmetro ao atributo autor do objeto Livro
        this.autor = autor;
    }

    // Método getter para obter o título do livro
    getTitulo() {
        // Retorna o título do livro
        return this.titulo;
    }

    // Método setter para definir um novo título para o livro
    setTitulo(novoTitulo) {
        // Atribui o novo título recebido como parâmetro ao atributo titulo do objeto Livro
        this.titulo = novoTitulo;
    }

    // Método getter para obter o autor do livro
    getAutor() {
        // Retorna o autor do livro
        return this.autor;
    }

    // Método setter para definir um novo autor para o livro
    setAutor(novoAutor) {
        // Atribui o novo autor recebido como parâmetro ao atributo autor do objeto Livro
        this.autor = novoAutor;
    }
}

// Obtendo o formulário de cadastro de livros do HTML pelo ID
const formLivro = document.getElementById('formLivro');
// Obtendo a lista de livros do HTML pelo ID
const listaLivros = document.getElementById('livros');

// Definindo a função que será executada ao submeter o formulário
formLivro.onsubmit = function() {
    // Obtendo o valor do campo título do formulário
    const titulo = document.getElementById('titulo').value;
    // Obtendo o valor do campo autor do formulário
    const autor = document.getElementById('autor').value;

    // Criando um novo objeto Livro com os valores obtidos do formulário
    const livro = new Livro(titulo, autor);
    // Adicionando o livro à lista de livros
    adicionarLivroNaLista(livro);

    // Limpando os campos de título e autor do formulário após adicionar o livro
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';

    // Impedindo o formulário de ser enviado
    return false;
};

// Função para adicionar um livro à lista de livros
function adicionarLivroNaLista(livro) {
    // Criando um novo elemento de lista no HTML
    const li = document.createElement('li');
    // Definindo o conteúdo do elemento de lista com o título e autor do livro
    li.innerHTML = `<strong>${livro.getTitulo()}</strong> - ${livro.getAutor()}`;
    // Adicionando o elemento de lista à lista de livros no HTML
    listaLivros.appendChild(li);
}

// Função para remover um livro da lista de livros
function removerLivro(botao) {
    // Obtendo o elemento pai do botão (que é o elemento de lista que contém o livro)
    const itemLivro = botao.parentElement;
    // Removendo o elemento de lista (livro) da lista de livros
    listaLivros.removeChild(itemLivro);
}

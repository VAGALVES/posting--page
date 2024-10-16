document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#post-form');
    const tituloInput = document.querySelector('#titulo');
    const conteudoInput = document.querySelector('#conteudo');
    const renderizadorTitulo = document.querySelector('#renderizador-titulo');
    const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const data = {
            title: tituloInput.value,
            body: conteudoInput.value,
            userId: 1
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(postData => {
            // Renderiza o post enviado
            renderizadorTitulo.innerHTML = postData.title;
            renderizadorConteudo.innerHTML = postData.body;

            // Limpa os campos do formulário
            tituloInput.value = '';
            conteudoInput.value = '';
        })
        .catch(error => console.error('Erro:', error));
    });
});

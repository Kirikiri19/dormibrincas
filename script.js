document.addEventListener('DOMContentLoaded', () => {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            const atual = document.querySelector('.ativo');
            if (atual) {
                atual.classList.remove('ativo');
            }
            
            const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
            const proximoPasso = document.getElementById(proximoPassoId);

            if (proximoPasso) {
                proximoPasso.classList.add('ativo');
            } else {
                console.warn(`Elemento com o ID ${proximoPassoId} não encontrado.`);
            }
        });
    });
});

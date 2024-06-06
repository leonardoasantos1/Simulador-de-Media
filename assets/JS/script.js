function obterValorDecimal(id) {
    const input = document.getElementById(id).value;
    const valor = parseFloat(input);
    return valor;
}

function calcular() {
    const primeiraNota = obterValorDecimal('note-ac1');
    const segundaNota = obterValorDecimal('note-ac2');
    const terceiraNota = obterValorDecimal('note-pex');
    const quartaNota = obterValorDecimal('note-ar');
    const resultado = document.querySelector('#result');

    if (primeiraNota === 0 && segundaNota === 0 && terceiraNota === 0 && quartaNota === 0) {
        resultado.innerHTML = `<p>Sua média é 0.0, <strong class="rep">REPROVADO</strong>.<p>EITA!</p><img src='./assets/imagens/reprovado-zero.jpg' width='300'></p>`;
    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
        resultado.innerHTML = '<p>Por favor, preencha todos os campos com valores válidos.</p>';
    } else {
        const media = (primeiraNota * 0.10) + (segundaNota * 0.20) + (terceiraNota * 0.20) + (quartaNota * 0.50);
        if (media >= 7) {
            resultado.innerHTML = `<p>Sua média é ${media.toFixed(2)}, está  <strong id='apv'>APROVADO</strong>.</p>Mandou bem! Sua nota tá mais alta que o aluguel!<p><img src='./assets/imagens/aprovado.jpg' width='300'></p>`;
        } else if (media >= 3) {
            const exame = 10;
            const diferenca = exame - media;
            resultado.innerHTML = `<p>Sua média é ${media.toFixed(2)}, <strong id='exa'>EXAME</strong>.<p>Quase lá! Tá mais próximo da aprovação do que de segunda-feira!</p><img src='./assets/imagens/exame.jpg' width='300'></p></p><p>É necessário obter no mínimo ${diferenca.toFixed(2)} no exame para ser aprovado.</p>`;
        } else {
            resultado.innerHTML = `<p>Sua média é ${media.toFixed(2)}, <strong class="rep">REPROVADO</strong><p><p>Essa média tá mais baixa que meu ânimo na segunda-feira! Bora levantar isso!</p><img src='./assets/imagens/reprovado.jpg' width='300'></p>.</p>`;
        }
    }
    
};

document.getElementById('id-form').addEventListener("submit", function(e) {
    e.preventDefault();
});

function limpar() {
    const input1 = document.getElementById('note-ac1');
    const input2 = document.getElementById('note-ac2');
    const input3 = document.getElementById('note-pex');
    const input4 = document.getElementById('note-ar');
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';
};

const inputs = document.querySelectorAll('#inputs-grades input');
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const proximoInput = inputs[index + 1];
                if (proximoInput) {
                    proximoInput.focus();
                } else {
                    document.getElementById('button-calculate').focus();
                }
            }
        });
    });

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const modal = document.querySelector('#exampleModal');
        const abrirModal = modal.classList.contains('show');
        if (abrirModal) {
            event.preventDefault();
            const fecharBotao = modal.querySelector('.btn-close');
            fecharBotao.click();
        }
    }
});
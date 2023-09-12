let numeroAtual = '';
let numeroArmazenado = '';
let operacaoAtual = null;
let erro = false;

function adicionarNumero(digito) {
    if (erro) return; // Evitar operações após erro
    numeroAtual += digito;
    atualizarTela();
}

function selecionarOperacao(operacao) {
    if (erro) return; // Evitar operações após erro
    if (numeroAtual !== '') {
        if (numeroArmazenado !== '') {
            calcularResultado();
            numeroArmazenado = numeroAtual; // Atualiza o número armazenado com o resultado
            numeroAtual = '';
        } else {
            numeroArmazenado = numeroAtual;
            numeroAtual = '';
        }
        operacaoAtual = operacao;
        atualizarTela();
    }
}


function calcularResultado() {
    if (erro) return; // Evitar operações após erro
    if (numeroArmazenado === '' || numeroAtual === '') return; // Evitar cálculos incompletos
    const num1 = parseFloat(numeroArmazenado);
    const num2 = parseFloat(numeroAtual);

    switch (operacaoAtual) {
        case '+':
            numeroAtual = (num1 + num2).toString();
            break;
        case '-':
            numeroAtual = (num1 - num2).toString();
            break;
        case '*':
            numeroAtual = (num1 * num2).toString();
            break;
        case '/':
            if (num2 === 0) {
                mostrarErro('Divisão por zero');
                return;
            }
            numeroAtual = (num1 / num2).toString();
            break;
    }

    numeroArmazenado = '';
    operacaoAtual = null;
    atualizarTela();
}
function calcularResultadoFinal() {
    if (erro) return; // Evitar operações após erro
    if (numeroArmazenado !== '' && numeroAtual !== '') {
        calcularResultado();
        numeroArmazenado = '';
        operacaoAtual = null;
        atualizarTela();
    }
}


function limpar() {
    numeroAtual = '';
    numeroArmazenado = '';
    operacaoAtual = null;
    erro = false;
    atualizarTela();
}

function atualizarTela() {
    const tela = document.getElementById('tela');
    tela.innerText = erro ? 'Erro' : numeroAtual;
}

function mostrarErro(mensagem) {
    erro = true;
    numeroAtual = '';
    atualizarTela();
    console.error(mensagem);
}


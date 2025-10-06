alert('Boas Vindas ao Jogo do Número Secreto!');

let numeroSecreto = 5;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = Number(prompt('Escolha um número entre 1 e 10'));

    if (chute === numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
    }
    tentativas++;
}

if (tentativas > 1) {
    alert(`Correto! Você acertou o número secreto com ${tentativas} tentativas. Aqui está -> ${numeroSecreto}`);
} else {
    alert(`Correto! Você acertou o número secreto com ${tentativas} tentativa. Aqui está -> ${numeroSecreto}`);
}

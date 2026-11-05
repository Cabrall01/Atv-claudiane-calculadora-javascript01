function calcularContaEGorjeta() {
    const valorContaInput = prompt("Digite o valor total da conta (R$):");
    const valorConta = parseFloat(valorContaInput);

    const porcentagemGorjetaInput = prompt("Digite a porcentagem da gorjeta (ex: 10, 15 ou 20):");
    const porcentagemGorjeta = parseFloat(porcentagemGorjetaInput);

    const numPessoasInput = prompt("Em quantas pessoas a conta será dividida?");
    const numPessoas = parseInt(numPessoasInput, 10);

    if (isNaN(valorConta) || isNaN(porcentagemGorjeta) || isNaN(numPessoas) || numPessoas <= 0) {
        alert("Por favor, insira valores válidos para realizar o cálculo.");
        return;
    }

    const valorGorjeta = valorConta * (porcentagemGorjeta / 100);
    const totalComGorjeta = valorConta + valorGorjeta;
    const valorPorPessoa = totalComGorjeta / numPessoas;

    const resumo = `--- Resumo da Conta ---
Consumo: R$ ${valorConta.toFixed(2)}
Gorjeta: R$ ${valorGorjeta.toFixed(2)}
Total com Gorjeta: R$ ${totalComGorjeta.toFixed(2)}
Divisão por pessoa (${numPessoas} pessoas): R$ ${valorPorPessoa.toFixed(2)}`;

    alert(resumo);
}

calcularContaEGorjeta();
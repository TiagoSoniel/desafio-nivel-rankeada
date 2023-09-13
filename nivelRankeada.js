//Desafio calculadora de nível de rankeada
//Fontes de auxílio: https://github.com/TiagoSoniel/primeiro-desafio-dio-logica
//Fontes de auxílio: ChatGPT

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivelRankeadas(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

let nomesDoHeroi = ["Soniel", "Kyara", "Andrew", "Zelgadis", "Sitka", "Alana", "Samara"];
let vitorias = [8, 15, 30, 55, 90, 95, 110]; // Quantidade de vitórias para cada herói
let derrotas = [2, 3, 7, 10, 5, 3, 2];     // Quantidade de derrotas para cada herói
let niveisDoHeroi = [];

// Estrutura de repetição para determinar o nível de cada herói com base nas vitórias e derrotas
for (let i = 0; i < nomesDoHeroi.length; i++) {
    let nivel = calcularNivelRankeadas(vitorias[i], derrotas[i]);
    niveisDoHeroi.push(nivel);
}

// Exibe a mensagem com o nível de cada herói
for (let i = 0; i < nomesDoHeroi.length; i++) {
    console.log("O herói " + nomesDoHeroi[i] + " " + niveisDoHeroi[i]);
}

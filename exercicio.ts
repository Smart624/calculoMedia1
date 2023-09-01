/* Crie um código com Node.js e Typescript que vai solicitar ao usuário um
nome, 4 notas de 0 a 10 e no final vai devolver no console um objeto com o
nome do aluno, suas 4 notas e a média final calculada. */

import PromptSync from "prompt-sync";

const prompt = PromptSync();

interface IAluno {
    nome: string;
    notas: number[];
    mediaFinal: number;

    calcularMedia(): number;
}

class Aluno implements IAluno {
    nome: string;
    notas: number[];
    mediaFinal: number;

    constructor(nome: string, notas: number[]) {
        this.nome = nome;
        this.notas = notas;
        this.mediaFinal = Aluno.calcularMedia(this.notas);
    }

    static calcularMedia(notas: number[]): number {
        return notas.reduce((a, b) => a + b) / notas.length;
    }

    calcularMedia(): number {
        return Aluno.calcularMedia(this.notas);
    }
}

let nome = prompt('Digite seu nome: ');
if (nome === null) {
    console.log("Nome não pode ser nulo");
    process.exit(1);
}

const notas: number[] = [];
for (let i = 0; i < 4; i++) {
    const nota = Number(prompt(`Digite a nota ${i + 1}: `));
    notas.push(nota);
}

const aluno = new Aluno(nome, notas);

console.log(aluno);

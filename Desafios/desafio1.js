"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
//Resolução como objeto
let funcionario = {
    codigo: 18,
    nome: "Breno"
};
//resolução 1 com interface
const funcionarioPrimeiro = {};
funcionarioPrimeiro.codigo = 39;
funcionarioPrimeiro.nome = 'Breno';
//resolução 2 com interface
const funcionarioSegundo = {
    codigo: 39,
    nome: 'Breno'
};
//Resolução com tipagem prévia
const funcionarioTerceiro = {
    codigo: 30,
    nome: 'Breno'
};

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Resolução como objeto
let funcionario = {
 codigo: 18,
 nome: "Breno"
}


interface Funcionario {
    codigo: number;
    nome: string;
}

//resolução 1 com interface
const funcionarioPrimeiro = {} as Funcionario;
funcionarioPrimeiro.codigo = 39;
funcionarioPrimeiro.nome = 'Breno';


//resolução 2 com interface
const funcionarioSegundo: Funcionario = {
    codigo: 39,
    nome: 'Breno'
}

//Resolução com tipagem prévia
const funcionarioTerceiro: {codigo: number, nome: string} = {
    codigo: 30,
    nome: 'Breno'
}
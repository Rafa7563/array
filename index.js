/**@type {{ id:number, nome:string }[]} */
let alunos = []; // Removido o array 'aluno' não utilizado
let proximoId = 1;

// Corrigido: adicionado o parâmetro 'nome'
function AdicionarAluno(nome){
    // Corrigido: agora o 'nome' recebido é associado corretamente
    alunos.push({ id: proximoId, nome: nome });
    proximoId++;
}

function listarAlunos(){
    console.log(`--- alunos (${alunos.length}) ---`);
    alunos.forEach((a, i) => {
        console.log(`${i + 1} - ${a.nome}`);
    });
}

// Corrigido: adicionado o parâmetro 'nome'
function buscarAlunos(nome){
    return alunos.find((a) => a.nome === nome);
}

// Corrigido: adicionado o parâmetro 'nome'
function removerAluno(nome) {
    const indice = alunos.findIndex((a) => a.nome === nome);
    if (indice !== -1) {
        alunos.splice(indice, 1);
        return true;
    }
    return false;
}

function nomesEmMaiusculo() {
    return alunos.map((a) => a.nome.toUpperCase());
}

// Execução dos testes
AdicionarAluno("Ana");
AdicionarAluno("Bia");
AdicionarAluno("Cadu");

listarAlunos();

console.log("Buscar Ana:", buscarAlunos("Ana"));
console.log("Buscar Ze :", buscarAlunos("Ze"));
console.log("Removeu Bia?", removerAluno("Bia"));
listarAlunos();

console.log("Maiusculo:", nomesEmMaiusculo());
console.log("Original apos maiusculo:", alunos);

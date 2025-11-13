export interface EsmprestimoDTODTO{
    idEmprestimos? : number, 
    id_aluno: number, 
    id_livro: number, 
    dataEmprestimo: Date, 
    data_devolucao: Date, 
    status_emprestimo: string, 
    situacao?: boolean 
};
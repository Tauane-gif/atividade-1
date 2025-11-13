export interface livroDTO{
    idLivros? : number, 
    editora: string, 
    anoPublicacao: string, 
    principioAtivo: number, 
    isbn: string, 
    quantidadeTotal: number, 
    quantidadeDisponivel:number, 
    valorAquisicao: number, 
    statusLivroEmprestado: string, 
    situacao?: boolean 
}
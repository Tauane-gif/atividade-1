export interface AlunoDTO{
    idCliente? : number, 
    sobrenome: string, 
    ra: number,  
    dataNascimento: Date, 
    email: string, 
    endereco:string, 
    celular:number
    situacao?: boolean 
}
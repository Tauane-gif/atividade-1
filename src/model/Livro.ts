import { DatabaseModel } from "./DatabaseModel.js";

const database = new DatabaseModel().pool;

class Livro{
    private idLivro: number = 0;
    private titulo: string; 
    private autor: string; 
    private editora: string; 
    private anoPublicado: number; 
    private isbn: string; 
    private quantidadeTotal: number; 
    private quantidadeDisponivel: number; 
    private valorAquisicao: number; 
    private statusLivroEmprestado: string; 


  constructor(
    _titulo: string,
    _autor: string, 
    _editora: string, 
    _anoPublicado: number, 
    _isbn: string, 
    _quantidadeTotal: number, 
    _quantidadeDisponivel:number, 
    _valorAquisicao: number, 
    _statusLivroEmprestado: string, 
  ){
  this.titulo = _titulo; 
  this.autor = _autor; 
  this.editora = _editora; 
  this.anoPublicado = _anoPublicado; 
  this.isbn = _isbn; 
  this.quantidadeTotal = _quantidadeTotal;
  this.quantidadeDisponivel = _quantidadeDisponivel;
  this.valorAquisicao = _valorAquisicao; 
  this.statusLivroEmprestado = _statusLivroEmprestado;
}
    public getIdLivro(): number {
        return this.idLivro;
    }

   
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }
   
    public getTitulo():string{
        return this.titulo;
    }

    public setTitulo(_titulo: string): void{
        this.titulo = _titulo; 
    }

    public getAutor(): string{
        return this.autor;
    }
    public setAutor(_autor: string): void{
       this.autor = _autor;
    }
    public getEditora(): string{
        return this.editora; 
    }
    public setEditora(_editora:string): void{
        this.editora= _editora; 
    }
    public getAnoPublicado(): number{
        return this.anoPublicado;
    }
    public setAnoPublicado(_anopublicado: number): void{
          this.anoPublicado = _anopublicado; 
    }
    public getIsbn(): string{
        return this.isbn; 
    }
    public setIsbn(_isbn:string): void{
        this.isbn = _isbn; 
    }
    public getquantidadeTotal():number{
        return this.quantidadeTotal; 
    }
    public setquantidadeDisponivel(_quantidadeDisponivel:number): void{
        this.quantidadeDisponivel = _quantidadeDisponivel; 
    }
    public getvalorAquisicao(): number{
        return this.valorAquisicao
    }
    public setAquicao(_valorAquisicao:number): void{
        this.valorAquisicao = _valorAquisicao
    }
    public getstatusLivroEmprestado(): number{
        return this.valorAquisicao
    }
    public setLivroEmprestado(_statusLivroEmprestado:string): void{
        this.statusLivroEmprestado = _statusLivroEmprestado
    }
    
    static async listarLivro(idLivro: number):Promise<Livro|null> {
        try {
            const querySelectLivro = `SELECT * FROM Livros WHERE id_Livro=$1;`;

              

           const respostaBD = await database.query(querySelectLivro, [idLivro]);

            if (respostaBD.rowCount !== 0) {
                const aluno: Livro = new Livro  (
                    respostaBD.rows[0].autor,
                    respostaBD.rows[0].titulo,
                    respostaBD.rows[0].editora,
                    respostaBD.rows[0].anoPublicado,
                    respostaBD.rows[0].isbn,
                    respostaBD.rows[0].quantidadeTotal,
                    respostaBD.rows[0].quantidadeDisponivell,
                    respostaBD.rows[0].valorAquisicao,
                    respostaBD.rows[0].statusLivroEmprestado, 
                    
                );

                    
                aluno.setIdLivro(respostaBD.rows[0].id_Livro);

                return aluno;
            }

            return null;
        } catch (error) {
            console.error(`Erro ao buscar Livro no banco de dados. ${error}`);
            return null;
        }
    }
    
      static async listarLivros(): Promise<Array<Livro> | null> {
        try {
           
            let listaDeLivros: Array<Livro> = [];

           
            const querySelectLivros = `SELECT * FROM livros;`;

            
            const respostaBD = await database.query(querySelectLivros);

            respostaBD.rows.forEach((LivroBD) => {
              
                const novoLivro: Livro = new LivroBD(
                    LivroBD.autor,
                    LivroBD.editora,
                    LivroBD.anoPublicado,
                    LivroBD.isbn,
                    LivroBD.quantidadeTotal,
                    LivroBD.quantidadeDisponivel, 
                    LivroBD.valorAquisicao,
                    LivroBD.statusLivroEmprestado,
                );

                novoLivro.setIdLivro(LivroBD.id_livro);

                
                listaDeLivros.push(novoLivro);
            });

            
            return listaDeLivros;
        } catch (error) {
          
            console.error(`Erro na consulta ao banco de dados. ${error}`);

            
            return null;
        }
    }
}
 
export default Livro;

  
  
  



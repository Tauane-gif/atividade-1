class Livro{
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
}
    

  
  
  



class Aluno{
    private nome: string;
    private sobrenome: string; 
    private ra: number;
    private dataNascimento:Date;
    private email:string;  
    private endereco: string; 
    private celular:number; 


    constructor(
        _nome: string,
        _sobrenome: string,
        _ra:number, 
        _dataNascimento:Date, 
        _email: string, 
        _endereco: string, 
        _celular:number, 
    
    ){
        this.nome = _nome;
        this.sobrenome = _sobrenome;
        this.ra= _ra;
        this.dataNascimento = _dataNascimento;
        this.email= _email;
        this.endereco= _endereco; 
        this.celular= _celular;
        
    }

    public getNome():string{
        return this.nome;
    }

    public setNome(_nome: string): void{
        this.nome = _nome; 
    }

    public getSobrenome(): string{
        return this.sobrenome;
    }
    public setSobrenome(_sobrenome: string): void{
       this.sobrenome = _sobrenome;
    }
    public getRa(): number{
        return this.ra; 
    }
    public setRa(_ra:number): void{
        this.ra = _ra; 
    }
    public getdataNascimento(): Date{
        return this.dataNascimento;
    }
    public setdataNascimento(_dataNascimento: Date): void{
          this.dataNascimento = _dataNascimento; 
    }
    public getemail():string{
        return this.email; 
    }
    public setemail(_email:string): void{
        this.email = _email; 
    }
    public getendereco():string{
        return this.endereco 
    }
    public setendereco(_endereco:string): void{
        this.endereco = _endereco; 
    }
    public getcelular(): number{
        return this.celular
    }
    public setcelular(_celular:number): void{
        this.celular = _celular
    }
    

}

export default Aluno; 
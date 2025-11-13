import type { EsmprestimoDTODTO } from "../interface/EmprestimoDTO.js";

class Emprestimo {
  private id_aluno: number;
  private id_livro: number;
  private data_emprestimo: Date;
  private data_devolucao: Date;
  private status_emprestimo: string;

  constructor(
    _id_aluno: number,
    _id_livro: number,
    _data_emprestimo: Date,
    _data_devolucao: Date,
    _status_emprestimo: string
  ) {
    this.id_aluno = _id_aluno;
    this.id_livro = _id_livro;
    this.data_emprestimo = _data_emprestimo;
    this.data_devolucao = _data_devolucao;
    this.status_emprestimo = _status_emprestimo;
  }
   public getIdEmprestimo(): number {
    return this.id_emprestimo;
  }

  public setIdAEmprestimo(id_emprestimo: number): void {
    this.id_aluno = id_emprestimo;
  }


  public getIdAluno(): number {
    return this.id_aluno;
  }

  public setIdAluno(id_aluno: number): void {
    this.id_aluno = id_aluno;
  }

  public getIdLivro(): number {
    return this.id_livro;
  }

  public setIdLivro(id_livro: number): void {
    this.id_livro = id_livro;
  }

  public getDataEmprestimo(): Date {
    return this.data_emprestimo;
  }

  public setDataEmprestimo(data_emprestimo: Date): void {
    this.data_emprestimo = data_emprestimo;
  }

  public getDataDEvolucao(): Date {
    return this.data_devolucao;
  }

  public setDataDEvolucao(data_evolucao: Date): void {
    this.data_devolucao = data_evolucao;
  }

  public getStatusEmprestimo(): string {
    return this.status_emprestimo;
  }

  public setStatusEmprestimo(status_emprestimo: string): void {
    this.status_emprestimo = status_emprestimo;
  }
 
  static async listarEmprestimo(idEmprestimo: number):Promise<Emprestimos|null> {
        try {
            const querySelectEmprestimo = `SELECT * FROM Emprestimos WHERE id_Emprestimo=$1;`;

              

           const respostaBD = await databe.query(querySelectEmprestimo, [idEmprestimo]);

            if (respostaBD.rowCount !== 0) {
                const aluno: Emprestimo = new Emprestimo  (
                    respostaBD.rows[0].id_aluno,
                    respostaBD.rows[0].id_livro,
                    respostaBD.rows[0].data_emprestimo,
                    respostaBD.rows[0].data_devolucao,
                    respostaBD.rows[0].status_emprestimo, 
                    
                );

                    
                aluno.setIdEmprestimo(respostaBD.rows[0].id_Emprestimo);

                return aluno;
            }

            return null;
        } catch (error) {
            console.error(`Erro ao buscar Emprestimo no banco de dados. ${error}`);
            return null;
        }
    }
    
      static async listarEmprestimos(): Promise<Array<Emprestimo> | null> {
        try {
           
            let listaDeEmprestimos: Array<Emprestimo> = [];

           
            const querySelectEmprestimos = `SELECT * FROM Emprestimos;`;

            
            const respostaBD = await database.query(querySelectEmprestimos);

            respostaBD.rows.forEach((EmprestimoBD) => {
              
                const novoEmprestimo: Emprestimo = new EmprestimoBD(
                    EmprestimoBD.autor,
                    EmprestimoBD.editora,
                    EmprestimoBD.anoPublicado,
                    EmprestimoBD.isbn,
                    EmprestimoBD.quantidadeTotal,
                    EmprestimoBD.quantidadeDisponivel, 
                    EmprestimoBD.valorAquisicao,
                    EmprestimoBD.statusEmprestimoEmprestado,
                );

                novoEmprestimo.setIdEmprestimos(EmprestimoBD.id_Emprestimo);

                
                listaDeEmprestimos.push(novoEmprestimo);
            });

            
            return listaDeEmprestimos;
        } catch (error) {
          
            console.error(`Erro na consulta ao banco de dados. ${error}`);

            
            return null;
        }
    }

    static async cadastrarEmprestimo(Emprestimo: EsmprestimoDTO): Promise<boolean> {
            try {
                
                const queryInsertEmprestimo = `INSERT INTO Emprestimo(id_aluno,id_livro, data_emprestimo, data_devolucao, status_emprestimo)
                                    VALUES
                                    ($1, $2, $3)
                                    RETURNING id_Emprestimo;`;
    
                
                const respostaBD = await database.query(queryInsertEmprestimo, [
                    Emprestimo.id_aluno.toUpperCase(), 
                    Emprestimo.id_livro,             
                    Emprestimo.data_emprestimo,   
                    Emprestimo.data_devolucao, 
                    Emprestimo.status_emprestimo
                ]);
    
               
                if (respostaBD.rows.length > 0) {
                  
                    console.info(`Aluno cadastrado com sucesso. ID: ${respostaBD.rows[0].id_Emprestimo}`);
    
                   
                    return true;
                }
    
              
                return false;
            } catch (error) {
             
                console.error(`Erro na consulta ao banco de dados. ${error}`);
    
                return false;
            }
  
}
}
export default Emprestimo;

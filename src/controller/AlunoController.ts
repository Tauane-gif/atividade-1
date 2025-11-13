import Aluno from "../model/Aluno.js";
import type { Request, Response } from "express";

/**
 * Classe responsável por receber a requisição do Aluno, processar essa requisição e devolver a resposta ao Aluno
 * 
 * Trata apenas de requisições relacionadas ao recurso Aluno
 */
class AlunoController extends Aluno {

    /**
     * Faz a chamada ao modelo para obter a lista de Alunos e devolve ao Aluno
     * 
     * @param req Requisição do Aluno
     * @param res Resposta do servidor
     * @returns (200) Lista de todos os Alunos
     * @returns (500) Erro na consulta
     */
   static async novo(req: Request, res: Response): Promise<Response> {
        try {
           
            const dadosRecebidosAlunos = req.body;

            const respostaModelo = await Aluno.cadastrarAluno(dadosRecebidosAlunos);

            
            if (respostaModelo) {
                
                return res.status(201).json({ mensagem: "Aluno cadastrado com sucesso." });
            } else {
                
                return res.status(400).json({ mensagem: "Erro ao cadastrar Aluno." });
            }
        } catch (error) {
           
            return res.status(500).json({ mensagem: "Não foi possível inserir o Aluno" });
        }
    }

    static async Aluno(req: Request, res: Response): Promise<Response> {
        try {
            const idAluno: number = parseInt(req.params.idAluno as string); 

            if( isNaN(idAluno) ||idAluno<=0){
                return res.status(400). json({mensagem : "ID inálido."});
            }
          const respostaModelo =  await Aluno.listarAlunos;

          return res.status(200). json(respostaModelo); 
        } catch (error) {
            console.error(`Erro ao acesso o modelo. ${error}`);
            return res.status(500).json ({mensagem: "Não foi possível recuperar o Aluno"}); 
        }
    }
}

export default AlunoController;
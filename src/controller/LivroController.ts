import Livro from "../model/Livro.js";
import type { Request, Response } from "express";
import type { livroDTO } from "../interface/LivroDTO.js";


class LivroController extends Livro {
    /**
     * Faz a chamada ao modelo para obter a lista de Livros e devolve ao cliente
     * 
     * @param req Requisição do cliente
     * @param res Resposta do servidor
     * @returns (200) Lista de todos os Livros
     * @returns (500) Erro na consulta
     */
  static async todos(req: Request, res: Response): Promise<Response> {
        try {

            const listaLivro: Array<Livro> | null = await Livro.listarLivros();

            return res.status(200).json(listaLivro);
        } catch (error) {

            console.error(`Erro ao consultar modelo. ${error}`);

            return res.status(500).json({ mensagem: "Não foi possivel acessar a lista de Livro." });
        }

    }

    /**
     * Retorna um Livro específico pelo ID
     * 
     * @param req Requisição com o ID do Livro
     * @param res Resposta do servidor
     * @returns (200) Livro encontrado
     * @returns (400) ID inválido
     * @returns (500) Erro interno
     */
    static async livro(req: Request, res: Response): Promise<Response> {
        try { 
            const idLivro: number = parseInt(req.params.idLivro as string);

            if (isNaN(idLivro) || idLivro <= 0) {
                return res.status(400).json({ mensagem: "ID do Livro inválido." });
            }

            const livro = Livro.listarLivro(idLivro);

            return res.status(200).json(livro);

        } catch (error) {
            console.error(`Erro ao acessar o modelo. ${error}`);
            return res.status(500).json({ mensagem: "Não foi possível recuperar o Livro." });
        }
    }
}

export default LivroController;

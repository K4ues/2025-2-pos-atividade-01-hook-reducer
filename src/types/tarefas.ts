export interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  concluida: boolean;
  dataCriacao: string;
  dataConclusao?: string;
}
import { Tarefa } from "@/types/tarefas";

// Ações
type TarefaAction =
  | { type: 'ADICIONAR_TAREFA'; payload: Omit<Tarefa, 'id' | 'dataCriacao' | 'concluida'> }
  | { type: 'EDITAR_TAREFA'; payload: Tarefa }
  | { type: 'REMOVER_TAREFA'; payload: { id: string } }
  | { type: 'TOGGLE_CONCLUIDA'; payload: { id: string } };

// Estado inicial
const initialState: Tarefa[] = [];

// Reducer
export function tarefasReducer(state: Tarefa[] = initialState, action: TarefaAction): Tarefa[] {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      const novaTarefa: Tarefa = {
        id: Date.now().toString(),
        titulo: action.payload.titulo,
        descricao: action.payload.descricao,
        concluida: false,
        dataCriacao: new Date().toISOString(),
      };
      return [...state, novaTarefa];
      
    case 'EDITAR_TAREFA':
    return state.map(tarefa => 
        tarefa.id === action.payload.id ? {
        ...action.payload,
      // Mantém as datas originais se não foram alteradas
        dataCriacao: action.payload.dataCriacao || tarefa.dataCriacao,
      // Atualiza a data de conclusão se o status mudou
        dataConclusao: action.payload.concluida !== tarefa.concluida 
            ? action.payload.concluida 
            ? new Date().toISOString() 
            : undefined
            : tarefa.dataConclusao
        } : tarefa
    );
      
    case 'REMOVER_TAREFA':
        return state.filter(tarefa => tarefa.id !== action.payload.id);
      
    case 'TOGGLE_CONCLUIDA':
      return state.map(tarefa => 
        tarefa.id === action.payload.id 
          ? { 
              ...tarefa, 
              concluida: !tarefa.concluida,
              dataConclusao: !tarefa.concluida ? new Date().toISOString() : undefined
            } 
          : tarefa
      );
      
    default:
      return state;
  }
}

// Funções para persistência no localStorage
const STORAGE_KEY = 'tarefas_app';

export function carregarTarefas(): Tarefa[] {
  if (typeof window === 'undefined') return [];
  
  const salvas = localStorage.getItem(STORAGE_KEY);
  return salvas ? JSON.parse(salvas) : [];
}

export function salvarTarefas(tarefas: Tarefa[]): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
}
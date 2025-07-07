'use client';

import { useEffect, useReducer } from 'react';
import { Tarefa } from '@/types/tarefas';
import { tarefasReducer, carregarTarefas, salvarTarefas } from '@/lib/tarefasReducer';

export function useTarefas() {
  const [tarefas, dispatch] = useReducer(tarefasReducer, [], () => carregarTarefas());

  useEffect(() => {
    salvarTarefas(tarefas);
  }, [tarefas]);

  const adicionarTarefa = (tarefa: Omit<Tarefa, 'id' | 'dataCriacao' | 'concluida'>) => {
    dispatch({ type: 'ADICIONAR_TAREFA', payload: tarefa });
  };

  const editarTarefa = (tarefa: Tarefa) => {
    dispatch({ type: 'EDITAR_TAREFA', payload: tarefa });
};

  const removerTarefa = (id: string) => {
    dispatch({ type: 'REMOVER_TAREFA', payload: { id } });
};

  const toggleConcluida = (id: string) => {
    dispatch({ type: 'TOGGLE_CONCLUIDA', payload: { id } });
  };

  return {
    tarefas,
    adicionarTarefa,
    editarTarefa,
    removerTarefa,
    toggleConcluida,
  };
}
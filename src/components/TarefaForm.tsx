'use client';

import { Tarefa } from '@/types/tarefas';
import { useState, useEffect } from 'react';

interface TarefaFormProps {
  tarefa?: Tarefa;
  onSubmit: (tarefa: Omit<Tarefa, 'id' | 'dataCriacao' | 'concluida'> | Tarefa) => void;
  modoEdicao?: boolean;
  readOnly?: boolean;
}

export default function TarefaForm({ 
  tarefa, 
  onSubmit, 
  modoEdicao = false, 
  readOnly = false 
}: TarefaFormProps) {
  const [titulo, setTitulo] = useState(tarefa?.titulo || '');
  const [descricao, setDescricao] = useState(tarefa?.descricao || '');


  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo);
      setDescricao(tarefa.descricao);
    }
  }, [tarefa]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (modoEdicao && tarefa) {
      onSubmit({
        ...tarefa,
        titulo,
        descricao
      });
    } else {
      onSubmit({ titulo, descricao });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="titulo" className="block mb-1">Título</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 border rounded"
          required
          readOnly={readOnly}
          disabled={readOnly}
        />
      </div>
      
      <div>
        <label htmlFor="descricao" className="block mb-1">Descrição</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </div>
      
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        {modoEdicao ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
      </button>
    </form>
  );
}
'use client';

import { Tarefa } from '@/types/tarefas';
import Link from 'next/link';

interface TarefaListaProps {
  tarefas: Tarefa[];
  onToggleConcluida: (id: string) => void;
}

export default function TarefaLista({ tarefas, onToggleConcluida }: TarefaListaProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {tarefas.length === 0 ? (
        <p className="text-center text-gray-500">Nenhuma tarefa cadastrada</p>
      ) : (
        <ul className="space-y-2">
          {tarefas.map(tarefa => (
            <li key={tarefa.id} className="border p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`font-medium ${tarefa.concluida ? 'line-through text-gray-500' : ''}`}>
                    {tarefa.titulo}
                  </h3>
                  <p className="text-sm text-gray-600">{tarefa.descricao}</p>
                </div>
                
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={() => onToggleConcluida(tarefa.id)}
                    className="mt-1"
                  />
                  
                  <Link href={`/tarefas/${tarefa.id}`} className="text-blue-500 hover:underline">
                    Editar
                  </Link>
                  
                  <Link href={`/tarefas/${tarefa.id}/apagar`} className="text-red-500 hover:underline">
                    Apagar
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
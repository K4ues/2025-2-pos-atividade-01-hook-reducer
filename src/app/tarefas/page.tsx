'use client';

import TarefaLista from '@/components/TarefaLista';
import { useTarefas } from '@/lib/useTarefas';
import Link from 'next/link';

export default function TarefasPage() {
  const { tarefas, toggleConcluida } = useTarefas();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
        <Link href="/tarefas/nova" className="px-4 py-2 bg-green-500 text-white rounded">
          Nova Tarefa
        </Link>
      </div>
      
      <TarefaLista 
        tarefas={tarefas} 
        onToggleConcluida={toggleConcluida} 
      />
    </div>
  );
}
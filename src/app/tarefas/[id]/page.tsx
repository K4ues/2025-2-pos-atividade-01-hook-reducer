'use client';

import { useRouter, useParams } from 'next/navigation';
import { useTarefas } from '@/lib/useTarefas';
import TarefaForm from '@/components/TarefaForm';

export default function EditarTarefaPage() {
  const router = useRouter();
  const { id } = useParams();
  const { tarefas, editarTarefa } = useTarefas();

  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return <div className="max-w-2xl mx-auto p-4">Tarefa não encontrada</div>;
  }

  const handleSubmit = (tarefaAtualizada: Tarefa) => {
    // Garante que o ID original é mantido
    editarTarefa({
      ...tarefaAtualizada,
      id: tarefa.id,
      dataCriacao: tarefa.dataCriacao,
      concluida: tarefa.concluida
    });
    router.push('/tarefas');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Editar Tarefa</h1>
      <TarefaForm 
        tarefa={tarefa} 
        onSubmit={handleSubmit} 
        modoEdicao={true} 
      />
    </div>
  );
}
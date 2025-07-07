'use client';

import { useRouter } from 'next/navigation';
import TarefaForm from '@/components/TarefaForm';
import { useTarefas } from '@/lib/useTarefas';

export default function NovaTarefaPage() {
  const router = useRouter();
  const { adicionarTarefa } = useTarefas();

  const handleSubmit = (tarefa: { titulo: string; descricao: string }) => {
    adicionarTarefa(tarefa);
    router.push('/tarefas');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Nova Tarefa</h1>
      <TarefaForm onSubmit={handleSubmit} />
    </div>
  );
}
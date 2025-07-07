'use client';

import { useRouter, useParams } from 'next/navigation';
import { useTarefas } from '@/lib/useTarefas';
import TarefaForm from '@/components/TarefaForm';

export default function ApagarTarefaPage() {
  const router = useRouter();
  const { id } = useParams();
  const { tarefas, removerTarefa } = useTarefas();

  // Encontra a tarefa específica
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return <div className="max-w-2xl mx-auto p-4">Tarefa não encontrada</div>;
  }

  const handleConfirmar = () => {
    removerTarefa(id as string);
    router.push('/tarefas');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Confirmar Exclusão</h1>
      
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
        <p className="font-bold">Você está prestes a apagar esta tarefa:</p>
        <p>{tarefa.titulo}</p>
      </div>
      
      <TarefaForm 
        tarefa={tarefa} 
        onSubmit={() => {}} 
        modoEdicao={true} 
        readOnly={true}
      />
      
      <div className="mt-6 flex space-x-4">
        <button 
          onClick={handleConfirmar}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Confirmar Exclusão
        </button>
        
        <button 
          onClick={() => router.push('/tarefas')}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
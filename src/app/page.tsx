import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <h1>Infoweb - Atividade 1 do 2o bimestre</h1>
      </header>
      <main>
        <h2>Atividade 1 do 2o bimestre com hook reducer e shadcnui</h2>
        <div className="space-x-4">
          <Link href="/tarefas" className="px-4 py-2 bg-blue-500 text-white rounded">Ver Tarefas</Link>
          <Link href="/tarefas/nova" className="px-4 py-2 bg-green-500 text-white rounded">Nova Tarefa</Link>
        </div>
      </main>
      <footer>
        <p>GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007</p>
        <p><a href="https://fsf.org/">Copyright (C) 2007 Free Software Foundation, Inc.</a></p>
      </footer>
    </div>
  );
}

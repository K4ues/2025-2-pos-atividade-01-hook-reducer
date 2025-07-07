"use client";

import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Tarefa } from "@/types/tarefas";

export const TarefasLista = ({ dados }: { dados: Tarefa[] }) => {
	return (
		<div className="space-y-4">
			{dados.map((tarefa) => (
				<TarefasListaCard tarefa={tarefa} key={tarefa.id} />
			))}
		</div>
	);
};

const TarefasListaCard = ({ tarefa }: { tarefa: Tarefa }) => {
	return (
		<Card key={tarefa.id}>
			<CardContent className="pt-6">
				<div className="flex items-center space-x-4">
					<Checkbox
						id={`tarefa-${tarefa.id}`}
						checked={tarefa.feito}
						onCheckedChange={(checked) => console.info(tarefa.titulo, checked)}
					/>
					<Label
						htmlFor={`tarefa-${tarefa.id}`}
						className={tarefa.feito ? "line-through" : ""}
					>
						{tarefa.titulo}
					</Label>
				</div>
			</CardContent>
			<CardFooter className="flex justify-end gap-2">
				<Link href={`/todos/edit/${tarefa.id}`}>
					<Button variant="outline">Editar</Button>
				</Link>
				<Button
					variant="destructive"
					onClick={() => console.info(tarefa.titulo, "apagar")}
				>
					Apagar
				</Button>
			</CardFooter>
		</Card>
	);
};
import { ChangeEvent, FormEvent, useState } from 'react';

interface Tarefa {
    tarefa: string;
    limitePrazo: string;
}

function ToDoList() {
    const [tarefa, setTarefa] = useState<Tarefa>({} as Tarefa);
    const [listaDeTarefa, setListaDeTarefa] = useState<Tarefa[]>([]);

    function removerTarefa(index: number) {
        setListaDeTarefa(
            listaDeTarefa.filter((_, i) => i !== index)
        );
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setTarefa((tarefa) => ({
            ...tarefa,
            [name]: value,
        }));
    }

    function gerarNovaTarefa(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setListaDeTarefa((tarefasAtuais) => [
            ...tarefasAtuais,
            tarefa
        ]);

        setTarefa({ tarefa: '', limitePrazo: '' });
    }

    return (
        <>
            <form onSubmit={gerarNovaTarefa}>
                <input
                    type="text"
                    name="tarefa"
                    value={tarefa.tarefa}
                    onChange={atualizarEstado}
                    placeholder="Tarefa"
                />
                <input
                    type="text"
                    name="limitePrazo"
                    value={tarefa.limitePrazo}
                    onChange={atualizarEstado}
                    placeholder="Limite de Prazo"
                />
                <button type="submit">Enviar</button>
            </form>
            {listaDeTarefa.map((tarefa, i) => (
                <div key={i}>
                    <h1>{tarefa.tarefa}</h1>
                    <h2>{tarefa.limitePrazo}</h2>
                    <button onClick={() => removerTarefa(i)}>Remover</button>
                </div>
            ))}
        </>
    );
}

export default ToDoList;
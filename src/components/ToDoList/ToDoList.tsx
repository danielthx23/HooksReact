import { ChangeEvent, FormEvent, useState } from 'react';
import './ToDoList.css';

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
            <form className='form-tarefas' onSubmit={gerarNovaTarefa}>
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
            <div className='lista-tarefas'>
            {listaDeTarefa.map((tarefa, i) => (
                <div className="lista-item" key={i}>
                    <input type="checkbox" name="finalizado" id="finalizado" />
                    <span>{tarefa.tarefa}</span>
                    <span>{tarefa.limitePrazo}</span>
                    <button onClick={() => removerTarefa(i)}>Remover</button>
                </div>
            ))}
            </div>
        </>
    );
}

export default ToDoList;
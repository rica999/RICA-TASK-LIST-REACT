import React from 'react';
import "./TodoForm.css";
import { TodoContext } from '../TodoContext/TodoContext';

function TodoForm() {
    const {
        addTask,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTaskValue,setNewTaskValue] = React.useState("");

    const onSubmit = (e)=>{
        e.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    }
    const onCancel = ()=>{
        setOpenModal(false);
    }
    const onChange = (e)=>{
        setNewTaskValue(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <p>Inserta una nueva tarea</p>
            <textarea placeholder='Nueva tarea' value={newTaskValue} onChange={onChange}></textarea>
            <div className='form-buttons'>
                <button type='button' className='form-buttons-btn btn-cancel' onClick={onCancel}>Cancelar</button>
                <button type='submit' className='form-buttons-btn btn-add' onClick={onSubmit}>Agregar</button>
            </div>
        </form>
    )
}

export {TodoForm};
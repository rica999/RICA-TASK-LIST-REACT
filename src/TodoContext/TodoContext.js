import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) { //almacena las propiedades que se compartirán a todos los componentes
    const {
        item: countTask,
        savedItem,
        loading,
        error
    } = useLocalStorage("RicaTask_v1", []); //uso del custom hook
    const numberCompletedTask = countTask.filter(task => ( //número de tareas completadas
        task.completed
    )).length;
    const totalTask = countTask.length; //número total de tareas

    const [searchValue, setSearchValue] = React.useState(""); //estado para reconocer el valor del input
    const filterTaskInput = countTask.filter(tasks => ( //filtrar las tareas según input
        tasks.text.toLowerCase().includes(searchValue.toLowerCase(), 0)
    ));

    const [openModal,setOpenModal] = React.useState(false);

    const addTask = (text)=>{ //agregar nuevas tareas
        const newArrayTask = [...countTask];
        newArrayTask.push({
            text,
            completed: false,
        })
        savedItem(newArrayTask);
    }

    const taskCompleted = (text) => { //función para marcar como completada una tarea
        const newArrayTask = [...countTask];
        const taskIndex = newArrayTask.findIndex((task) =>//encontrar el índice de la tarea donde se hizo clic en check
            task.text === text
        )
        if (!newArrayTask[taskIndex].completed) {
            newArrayTask[taskIndex].completed = true;
        } else {
            newArrayTask[taskIndex].completed = false;
        }
        savedItem(newArrayTask);
    }

    const taskDeleted = (text) => { //función para eliminar una tarea
        const newArrayTask = [...countTask];
        const taskIndex = newArrayTask.findIndex((task) =>//encontrar el índice de la tarea donde se hizo clic en check
            task.text === text
        )
        newArrayTask.splice(taskIndex, 1);
        savedItem(newArrayTask);
    }

    return (
        <TodoContext.Provider value={{
            searchValue,
            setSearchValue,
            loading,
            error,
            numberCompletedTask,
            totalTask,
            filterTaskInput,
            taskCompleted,
            taskDeleted,
            openModal,
            setOpenModal,
            addTask
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider};
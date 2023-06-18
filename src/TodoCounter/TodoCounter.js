import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
    const {
        totalTask,
        numberCompletedTask
    } = React.useContext(TodoContext);
    return (
        <h2>{numberCompletedTask === totalTask ? "FELICITACIONES" : `Has completado ${numberCompletedTask} de ${totalTask}`}</h2>
    )
}

export {TodoCounter};
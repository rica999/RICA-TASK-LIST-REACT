import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <input
        placeholder="Escriba una nueva tarea"
        value={searchValue}
        onChange={(e)=>{
            setSearchValue(e.target.value);
        }}
        />
    )
}

export {TodoSearch};
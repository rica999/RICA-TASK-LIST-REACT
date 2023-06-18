import React from "react";
import "./TodoCreateButton.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCreateButton() {
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <button className="button-openModal"
        onClick={()=>{
            console.log("Hicisite click");
            if (!openModal) {
                setOpenModal(true);
            }else{
                setOpenModal(false);
            }
        }}
        >+</button>
    )
}

export {TodoCreateButton};
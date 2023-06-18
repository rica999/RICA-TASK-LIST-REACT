import "./TodoItem.css";
import check from "../icons/check.svg";
import close from "../icons/close.svg";
function TodoItem({completed,text,onComplete,onDelete,onSaved}) {
    {/* Creación de un nuevo componente */ }
    return (
        <li className="container-task-item">
            <img
                src={check}
                className={`${completed && "completed" }`}
                onClick={onComplete}
            />
            <p
                className={completed && "task-completed" }
            >
                {text}
            </p>
            <img
                src={close}
                onClick={onDelete}
            />
        </li>
    );
}

export {TodoItem};
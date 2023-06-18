import "./TodoTitle.css";
import taskIcon from "../icons/task.png";

function TodoTitle() {
    return (
        <div className="title">
            <img src={taskIcon} />
            <h1>RICATASKLIST</h1>
            <img src={taskIcon} />
        </div>
    )
}

export { TodoTitle };
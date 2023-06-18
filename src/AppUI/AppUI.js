import React from 'react';

import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import { TodoTitle } from '../TodoTitle/TodoTitle';
import { TodoSkeleton } from "../TodoSkeleton/TodoSkeleton";
import { TodoForm } from "../TodoForm/TodoForm";

import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';

function AppUI() {
    const {
        openModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoTitle />
            <TodoCounter
            /* total={totalTask}
            completed={numberCompletedTask} */
            />
            <TodoSearch
            /* searchValue={searchValue}
            setSearchValue={setSearchValue} */
            />
            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    filterTaskInput,
                    taskCompleted,
                    taskDeleted
                }) => (
                    <TodoList>
                        {loading &&
                            <>
                                <TodoSkeleton />
                                <TodoSkeleton />
                                <TodoSkeleton />
                            </>
                        }
                        {error && <p>Sucedió un error...</p>} {/* son como if-else */}
                        {(!loading && filterTaskInput === 0) && <p>¡Crea tu primera tarea!</p>}

                        {filterTaskInput.map(task => (
                            <TodoItem
                                key={task.text}
                                text={task.text}
                                completed={task.completed}
                                onComplete={() => { taskCompleted(task.text) }}
                                onDelete={() => taskDeleted(task.text)}
                            />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>

            <TodoCreateButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

        </React.Fragment>
    )
}

export {AppUI}
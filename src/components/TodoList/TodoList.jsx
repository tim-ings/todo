import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import TodoItem from './TodoItem';
import { createTodo } from '../../store/actions/todos';
import './TodoList.scss';

const TodoList = () => {
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.firebase.auth);
    const todos = useSelector((state) => state.firestore.ordered.myTodos);

    useFirestoreConnect([
        {
            collection: 'users',
            doc: auth.uid,
            subcollections: [{ collection: 'todos' }],
            storeAs: 'myTodos',
            orderBy: ['createdAt', 'desc'],
        },
    ]);

    const addNewTodo = () => {
        dispatch(createTodo());
    };

    return (
        <div className="todo-list">
            <button
                className="new-todo-btn btn-primary"
                type="button"
                onClick={addNewTodo}
            >
                Add new todo
            </button>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem
                            todoId={todo.id}
                            body={todo.body}
                            complete={todo.complete}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

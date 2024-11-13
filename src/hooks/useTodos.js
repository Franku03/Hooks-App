import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// Función de inicialización
const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {

    // Inicialización de mi state y del reducer
    const [todos, dispatchTodo] = useReducer(todoReducer, [] , init);

    //Guardar en local storage cada cambio en los todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])


    // Mandar actiones al Reducer
    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        
        dispatchTodo( action );
    } 

    const handleDeleteTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    // Funciones de conteo
    // const todosCount = () => todos.length;
    // const pendingTodosCount = () => todos.filter( todo => !todo.done ).length;

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount:  todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
    }

}

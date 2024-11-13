const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

// Un reducer no es más que una función pura
// Produce un nuevo estado basado en la acción que recibió
const todoReducer =  ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

// ? El type nos indica la acción que ejecutaremos al estado actual dentro del reducer
// ¡ El payload es la información con la que vamos a construir un nuevo estado
const addTodoAction = {
    type:'[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction)

console.log({state: todos});
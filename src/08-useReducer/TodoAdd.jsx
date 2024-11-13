import { useRef } from "react"
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({ description: '' })

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if( description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime() + 100,
            description: description.trim(),
            done: false,
        }

        onNewTodo( newTodo );
        onResetForm();
    }

    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}

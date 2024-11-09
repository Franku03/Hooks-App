import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickBtn = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr/>
            
            <input
                ref={ inputRef }
                className="form-control"
                type="text"
                placeholder="Ingrese su nombre"
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onClickBtn }
            >   
                
                Set Focus
            </button>
        </>
    )
}

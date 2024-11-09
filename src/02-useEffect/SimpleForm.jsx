import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setformState] = useState({
      username: 'franku',
      email: 'franku@google.com',
  })

  const { username, email } = formState;

  const onInputChange = ( { target }) => {
       const { value, name} = target;
       setformState({
            ...formState,
            [ name ]: value,
       });   
  }

  // ? Es más recomendable tener un efecto separado para cada acción secundaria que quiero que se ejecute:
  useEffect( () => {
    // console.log('useEffect called!');
  }, []);

  useEffect( () => {
    // console.log('formState changed');
  }, [formState]);

  useEffect( () => {
    // console.log('email changed!');
  }, [email]);

  return (
    <>
        <h1>Formulario Simple</h1>

        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username } 
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="gintoki@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
          username === 'gintoki' && <Message />
        }

    </>
  )
}

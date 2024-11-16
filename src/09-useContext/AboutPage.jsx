import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {

  const { user } = useContext( UserContext );
  console.log(user);

  return (
    <>
        <h1>AboutPage</h1>
        <hr />

        <pre>
          { JSON.stringify( user, null, 3 ) }
        </pre>
        
    </>
  )
}

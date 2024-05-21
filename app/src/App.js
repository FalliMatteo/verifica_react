import './App.css';
import {useState} from "react";
import FormLogin from "./FormLogin";
import FormSignup from "./FormSignup";
import InfoUtente from "./InfoUtente";

function App() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [utente, setUtente] = useState(null);

  return (
    <div className="App">
      {
        utente === null ?
          <>
            <br />
            {
              login ?
                <>
                  <FormLogin setUtente={setUtente} />
                  <br />
                  <button onClick={() => setLogin(false)}>Chiudi</button>
                </>
                :
                <button onClick={() => setLogin(true)}>Login</button>
            }
            <br />
            <hr />
            {
              signup ?
              <>
                <FormSignup setUtente={setUtente} />
                <br />
                <button onClick={() => setSignup(false)}>Chiudi</button>
              </>
              :
              <button onClick={() => setSignup(true)}>Signup</button>
            }
            <br />
            <hr />
          </>
        :
          <>
            <InfoUtente utente={utente} />
            <br />
            <button onClick={() => setUtente(null)}>Logout</button>
          </>
      }
    </div>
  );
}

export default App;

import {useState} from "react";

export default function FormSignup({setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [risposta, setRisposta] = useState("");
    const [classe, setClasse] = useState("");

    async function registraUtente(){
        const response = await fetch(`http://localhost:8080/signup`, 
            {  
              method: "POST",
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({username: username, password: password, email: email})
            }
        );
        const status = await response.json();
        if(status === false){
            setRisposta("Username o Email già esistenti");
            setClasse("errore");
        }else{
            setRisposta("Utente registrato");
        }
    }

    function gestisciCambioUsername(e){
        let stringa = e.target.value;
        setUsername(stringa);
    }

    function gestisciCambioPassword(e){
        let stringa = e.target.value;
        setPassword(stringa);
    }

    function gestisciCambioEmail(e){
        let stringa = e.target.value;
        setEmail(stringa);
    }

    return (
        <div className="FormSignup">
            <div>Username: <input type="text" onChange={gestisciCambioUsername} /></div><br />
            <div>Password: <input type="password"  onChange={gestisciCambioPassword} /></div><br />
            <div>Email: <input type="email" onChange={gestisciCambioEmail} /></div><br />
            <div><button onClick={registraUtente}>Registrati</button></div>
            {
                risposta != "" &&
                <p className={classe}>{risposta}</p>
            }
        </div>
    );
}
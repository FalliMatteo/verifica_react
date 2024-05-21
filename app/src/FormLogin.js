import {useState} from "react";

export default function FormLogin({setUtente}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errore, setErrore] = useState("");

    async function verificaUtente(){
        const response = await fetch(`http://localhost:8080/login`, 
            {  
              method: "POST",
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({username: username, password: password})
            }
        );
        const t = await response.json();
        if(t.token === ''){
            setErrore("Valori inseriti invalidi");
        }else{
            getUtente(t.token);
        }
    }

    async function getUtente(token){
        const response = await fetch(`http://localhost:8080/user/` + token, 
            {  
              method: "GET",
              headers: { 'Content-Type': 'application/json'}
            }
        );
        const u = await response.json();
        let user = [u.id, u.username, u.token, u.email, u.reg_date];
        setUtente(user);
    }

    function gestisciCambioUsername(e){
        let stringa = e.target.value;
        setUsername(stringa);
    }

    function gestisciCambioPassword(e){
        let stringa = e.target.value;
        setPassword(stringa);
    }

    return (
        <div className="FormLogin">
            <div>Username: <input type="text" onChange={gestisciCambioUsername} /></div><br />
            <div>Password: <input type="password"  onChange={gestisciCambioPassword} /></div><br />
            <div><button onClick={verificaUtente}>Accedi</button></div>
            {
                errore != "" &&
                <p className="errore">{errore}</p>
            }
        </div>
    );
}
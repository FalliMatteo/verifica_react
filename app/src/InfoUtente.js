export default function InfoUtente({utente}){
    return (
        <div className="InfoUtente">
            <p>Id: {utente[0]}</p>
            <p>Username: {utente[1]}</p>
            <p>Token: {utente[2]}</p>
            <p>Email: {utente[3]}</p>
            <p>Registrazione: {utente[4]}</p>
        </div>
    );
}
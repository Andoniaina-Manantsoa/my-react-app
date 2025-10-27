import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="error_message">
            <h1 className="code_error">404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error
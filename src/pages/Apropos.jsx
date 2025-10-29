import Collapse from "../Composants/Collapse.jsx";
import "../Styles/_apropos.scss";

function Apropos() {
    const collapsesData = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale..."
        },
        {
            title: "Respect",
            content: "Le respect est une valeur essentielle pour tous les utilisateurs..."
        },
        {
            title: "Service",
            content: "Notre service client est disponible 24h/24 et 7j/7 pour vous aider..."
        },
        {
            title: "Sécurité",
            content: "La sécurité de nos utilisateurs est notre priorité absolue..."
        }
    ];

    return (
        <div className="apropos-page">
            <div className="banner banner--apropos">
                <div className="banner__overlay"></div>
            </div>

            <div className="apropos-collapses">
                {collapsesData.map((item) => (
                    <Collapse key={item.title} title={item.title}>
                        <p>{item.content}</p>
                    </Collapse>
                ))}
            </div>
        </div>
    );
}

export default Apropos;


import { Link } from 'react-router-dom';
import data  from '../DATA/data.json';
import './card.scss';

function Card() {
    return data.map((element) => {
        // Récupération des données avec des valeurs par défaut pour éviter les erreurs
        const id = element.id || "id-inconnu";
        const titre = element.titre || element.title || "Titre indisponible";
        const couverture = element.couverture || "placeholder-image.jpg";

        return (
            <Link to={`Fiche/${id}`} className="card-link" key={id}>
                <div className="card">
                    <img
                        className="card-img"
                        src={couverture}
                        alt={titre} // Suppression des mots comme "Image pour"
                    />
                    <div className="card-title">
                        {titre}
                    </div>
                </div>
            </Link>
        );
    });
}

export default Card
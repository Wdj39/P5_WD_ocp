import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../../DATA/data.json';
import Collapses from '../../COMPONENTS/Collapse/Collapses.jsx';
import flecheGauche from '../../IMG/Vector_gauche.svg';
import flecheDroite from '../../IMG/Vector_droite.svg';
import etoile from '../../IMG/Etoile.svg';
import etoile_active from '../../IMG/Etoile_active.svg';
import './Fiche.scss';

function Fiche() {
    const { id } = useParams();

    // Recherche des données pour l'ID sélectionné
    const dataFiche = data.find((e) => e.id === id);

    // Redirection si l'ID est invalide
    if (!dataFiche) {
        return <Navigate to="/404" />;
    }

    // Assignation des valeurs avec fallback
    const title = dataFiche.titre || dataFiche.title || "Titre non disponible";
    const pictures = dataFiche.images || [dataFiche.couverture];
    const tags = dataFiche[" balises "] || [];
    const host = dataFiche.hôte || { nom: "Hôte inconnu", image: "" };
    const location = dataFiche.location || "Emplacement non spécifié";
    const note = parseInt(dataFiche.note, 10) || 0;
    const equipements = dataFiche[" équipements"] || [];

    // Composant pour le carrousel d'images
    function Slideshow() {
        const [currentIndex, setCurrentIndex] = useState(0); // État pour l'index de l'image actuelle
        const totalSlides = pictures.length; // Nombre total d'images

        // Fonction pour passer à l'image suivante
        const goToNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        };

        // Configuration de l'intervalle pour le défilement automatique
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            }, 2000); // Change d'image toutes les 2 secondes
        
            return () => clearInterval(interval); // Nettoyage de l'intervalle
        }, [totalSlides]); // totalSlides reste dans les dépendances
        

        return (
            <div className="slideshow">
                {/* Affiche l'image correspondant à l'index */}
                <img
                    src={pictures[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="slide-image"
                />

                {totalSlides > 1 && (
                    <>
                        <img
                            src={flecheGauche}
                            alt="Précédent"
                            className="arrow left-arrow"
                            onClick={() =>
                                setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
                            }
                        />
                        <img
                            src={flecheDroite}
                            alt="Suivant"
                            className="arrow right-arrow"
                            onClick={goToNext}
                        />
                        <p className="slide-number">
                            {currentIndex + 1}/{totalSlides}
                        </p>
                    </>
                )}
            </div>
        );
    }

    // Composant pour les informations générales
    function Infos() {
        return (
            <div className="fiche_infos">
                <div className="fiche_infos_gauche">
                    <h2>{title}</h2>
                    <p>{location}</p>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="fiche_infos_droite">
                    <div className="host">
                        <p className='name_id'>{host.nom}</p>
                        {host.image && <img src={host.image} alt={host.nom} />}
                    </div>
                    <div className="note">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={i < note ? etoile_active : etoile}
                                alt={`Étoile ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="fiche">
            <Slideshow />
            <Infos />
            <div className="collapses">
                <div className="info_2">
                    <div className='if1'>
                        <Collapses context="fiche" name="Description" description={dataFiche.description} />
                    </div>
                    <div className='if2'>
                        <Collapses
                            context="fiche"
                            name="Équipements"
                            description={equipements.length > 0 ? equipements.join(", ") : "Aucun équipement"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fiche;
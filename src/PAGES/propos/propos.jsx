import Collapses from '../../COMPONENTS/Collapse/Collapses.jsx';
import './propos.scss';
import montage from '../../IMG/montage.png';

function Propos (){
    /** donnés pour collapses **/
        const dataPropos = [
            {
            "id":"1",
            "name":"Fiabilité",
            "description":`Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`
            },
            {
            "id":"2",
            "name":"Respect",
            "description":`La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
            },
            {
            "id":"3",
            "name":"Service",
            "description":`La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locatires, soit empreinte de respect et de bienveillance.`
            },
            {
            "id":"4",
            "name":"Responsabilité",
            "description":`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
            chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
            cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
            }
        ];
    
        return (
            <div className='propos'>
                <div className='banner'>
                    <img src={montage} className='banner_montagne' alt='montagne'></img>
                </div>
                <div className="propos_div">
                    <div className='propos_div_width'>
                        <Collapses context="propos" id={dataPropos[0].id} name={dataPropos[0].name} description={dataPropos[0].description}/>
                    </div>
                    <div className='propos_div_width'>
                        <Collapses context="propos" id={dataPropos[1].id} name={dataPropos[1].name} description={dataPropos[1].description}/>  
                    </div>
                    <div className='propos_div_width'>
                        <Collapses context="propos" id={dataPropos[2].id} name={dataPropos[2].name} description={dataPropos[2].description}/>
                    </div>
                    <div className='propos_div_width'>
                        <Collapses context="propos" id={dataPropos[3].id} name={dataPropos[3].name} description={dataPropos[3].description}/>
                    </div>
                </div>
            </div>
        )
    };
    export default Propos;


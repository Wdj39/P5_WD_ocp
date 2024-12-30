import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
    return (
        <section className='PGeror'>
            <h1 className='Ttleror'>404</h1>
            <p className='Txteror'>Oups! La page que vous demandez n'existe pas </p>
            <Link to="/">Retourner à l'accueil</Link>
        </section>
    );
}

export default Error;

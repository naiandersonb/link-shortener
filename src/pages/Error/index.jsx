import { Link } from 'react-router-dom';
import './error.css';

function Error() {
    return(
        <div className='container-error'>
            <img src="404-error.svg" alt="Página não encontrada" />
            <h1>Página não encontrada!</h1>
            <Link to='/'>Voltar para a página inicial</Link>
        </div>
    )
}

export default Error;
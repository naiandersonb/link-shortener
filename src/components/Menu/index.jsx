import { FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './menu.css';

function Menu() {
    return(
        <div className='menu'>
            <a className='social' href="https://www.instagram.com/naiandersonbruno_/" target='_blank' rel="noreferrer">
                <FiInstagram size={24} color='#fff'/>
            </a>
            <Link className='menu-item' to='/links'>Meus links</Link>
        </div>
    )
}

export default Menu;

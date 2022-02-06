import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './menu.css';

function Menu() {
    return (
        <div className='menu'>
            <div className="menu-links">
                <a href="https://github.com/naiandersonb/link-shortener" target='_blank' rel='noreferrer'>
                    <BsGithub size={24} title='ver código do projeto' className='github-icon'/>
                </a>
                <Link to='/about' className='link-about'>Sobre</Link>
            </div>
            <Link className='menu-item' to='/links'>Meus links</Link>
        </div>
    )
}

export default Menu;

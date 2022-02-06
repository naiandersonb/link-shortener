import { useState } from 'react';
import { FiLink } from 'react-icons/fi';

import logo from '../../assets/images/logo.svg';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

import './home.css';

function Home() {

  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try{
      const response = await api.post('/shorten', {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink', response.data);

      setLink('');

    } catch {
      alert('Ops! parece que algo deu errado');
      setLink('');
    }
  }

  return (
    <div className="container-home">

      <div className="logo">
        <h1>
          <img src={logo} alt="linkShrt. logo" />
          LinkShrt.
        </h1>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={20} />
          <input 
            type="text"
            placeholder='Cole seu link aqui...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar link</button>
      </div>

      <Menu/>

      {showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
      
    </div>
  );
}

export default Home;

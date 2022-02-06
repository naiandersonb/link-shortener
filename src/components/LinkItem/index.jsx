import { FiX, FiCopy  } from 'react-icons/fi';

import './link-item.css';

function LinkItem({ closeModal, content }) {

    async function copyLink() {

        // copia o conteúdo para a área de transferência
        await navigator.clipboard.writeText(content.link);
        alert('URL copiada com sucesso!');
    }

    return(
        <div className='modal-container'>
            
            <div className="modal-header">
                <h2>Link encurtado</h2>

                <button onClick={closeModal}>
                    <FiX size={28} color='#000' />
                </button>
            </div>
            
            <span>
                {content.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiCopy size={20} color='#fff' />
            </button>

        </div>
    )
}

export default LinkItem;
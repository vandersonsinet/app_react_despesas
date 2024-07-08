import React from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

const Sobre = () => {
    return (
        <div>
             <Cabecalho titulo="Sobre"/>
             <br />
             <h1 className='bemvindo'> Sobre nós...</h1>
             <Rodape />
        </div>
    );
}

export default Sobre;
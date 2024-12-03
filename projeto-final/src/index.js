import React from 'react';
import ReactDOM from 'react-dom';

import '../src/Estilos.css';

import Formulario from './Formulario';



class Principal extends React.Component{


    render(){
        return(
            <div>
                <Formulario />
            </div>
        );
    }
}

ReactDOM.render(<Principal />,document.getElementById('root'));
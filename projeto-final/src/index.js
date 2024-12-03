import React from 'react';
import ReactDOM from 'react-dom';
import './Estilos.css';
import Tabela from './Tabela';
import Formulario from './Formulario';



class Principal extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nome: '',
            idaide: null
        }

    }

    // onChange ao digitar

    aoDigitar = (campo) => {
        this.setState({[campo.target.name] : campo.target.value});
    }

    aoClicar = (botao) => {
        botao.preventDefault();
        console.log(this.state);
    }


    render(){
        return(
            <div>
                <Formulario funcaoBotao={this.aoClicar}  funcaoCampo={this.aoDigitar}/>
                <Tabela />
            </div>
        );
    }
}

ReactDOM.render(<Principal />,document.getElementById('root'));
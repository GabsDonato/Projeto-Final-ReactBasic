//importar modulo

import React from 'react';


//componente
class Formulario extends React.Component{


    //render
    render(){
        return(
            <form onSubmit={this.props.funcaoBotao} >

                <input type='text'
                 value={this.props.campoNome}  
                 placeholder='informe o nome' 
                 className='form-control' 
                 name='nome'  
                 onChange={this.props.funcaoCampo}  />

                <input type='number' 
                value={this.props.campoIdade}
                placeholder='informe a idade' 
                className='form-control' 
                name='idade' 
                onChange={this.props.funcaoCampo}  />

                <input type='submit' 
                value='Cadastrar' 
                className='btn btn-primary' />

            </form>
        );
    }
}

//exportar
export default Formulario;
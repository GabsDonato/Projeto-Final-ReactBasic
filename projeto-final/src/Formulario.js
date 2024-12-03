//importar modulo

import React from 'react';


//componente
class Formulario extends React.Component{


    //render
    render(){
        return(
            <form>
                <input type='text' placeholder='informe o nome' className='form-control' />
                <input type='number' placeholder='informe a idade' className='form-control' />
                <input type='submit' value='Cadastrar' className='btn btn-primary'/>
            </form>
        );
    }
}

//exportar
export default Formulario;
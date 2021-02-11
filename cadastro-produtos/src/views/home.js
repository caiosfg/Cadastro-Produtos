import React from 'react';

function Home(){
  return(
    <div className="jumbotron">
        <h1 className="display-3">Seja Bem Vindo!</h1>
        <p className="lead">
           Selecione os produtos que deseja realizar suas vendas.
        </p>

        <hr className="my-4"/>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Saiba Mais</a>
        </p>
    </div>
  )  
}

export default Home;

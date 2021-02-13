import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';
import Consulta from './views/produtos/consulta';

export default() =>{
    return(
            <Switch>
                <Route exact path="/cadastro-produtos" component={CadastroProduto} />
                <Route exact path="/" component={Home} />
                <Route exact path="/consulta" component={Consulta} />
            </Switch>
    )
}
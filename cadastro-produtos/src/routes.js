import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';
import Consulta from './views/produtos/consulta';

export default() =>{
    return(
            <Switch>
                <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
                <Route exact path="/consulta-produtos" component={Home} />
                <Route exact path="/consulta" component={Consulta} />
            </Switch>
    )
}
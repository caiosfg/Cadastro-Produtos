import React from 'react'
import Card from '../../components/card'

import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'

class ConsultaProdutos extends React.Component{

    state = {
        produtos : []
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({produtos})
    }

    preparaEditar = (sku) => {
        console.log('SKU PARA EDITAR',sku)
        this.props.history.push(`/cadastro-produtos/${sku}`)

    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku)
        this.setState({produtos})
    }

    render(){
        return(
            <Card header="Consulta Produtos">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">SKU</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Fornecedor</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.produtos.map( (produto, index) =>{
                                        return(
                                            <tr key={index}>
                                                <th scope="col">{produto.nome}</th>
                                                <th scope="col">{produto.sku}</th>
                                                <th scope="col">{produto.preco}</th>
                                                <th scope="col">{produto.fornecedor}</th>
                                                <th scope="col">
                                                    <button onClick={ () => this.preparaEditar(produto.sku)} className="btn btn-primary">Editar</button>
                                                    <button onClick={ () => this.deletar(produto.sku)} className="btn btn-danger">Remover</button>
                                                </th>
                                            </tr>  
                                        )
                                    })
                                }
                            </tbody>
                        </table>
            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos);
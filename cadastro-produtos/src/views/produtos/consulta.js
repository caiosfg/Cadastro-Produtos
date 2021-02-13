import React from 'react'
import ProdutoService from '../../app/produtoService'

export default class ConsultaProdutos extends React.Component{

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

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Consulta Produtos
                </div>
                    <div className="card-body">
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
                                                <th scope="col"></th>
                                            </tr>  
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}
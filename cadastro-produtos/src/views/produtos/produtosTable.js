import React from 'react'

export default (props) => (
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
                props.produtos.map( (produto, index) =>{
                    return(
                        <tr key={index}>
                            <th scope="col">{produto.nome}</th>
                            <th scope="col">{produto.sku}</th>
                            <th scope="col">{produto.preco}</th>
                            <th scope="col">{produto.fornecedor}</th>
                            <th scope="col">
                                <button onClick={ () => props.editarAction(produto.sku)} 
                                        className="btn btn-primary">Editar</button>
                                <button onClick={ () => props.deletarAction(produto.sku)} 
                                        className="btn btn-danger">Remover</button>
                            </th>
                        </tr>  
                    )
                })
            }
        </tbody>
    </table>
)
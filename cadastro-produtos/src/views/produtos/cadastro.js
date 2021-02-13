import React from 'react';
import ProdutoService from '../../app/produtoService'

    const stateinitial = {
        nome : '',
        sku : '',
        descricao  : '',
        preco : 0,
        fornecedor : '',
        sucessMsg: false,
        errors: []
    }

    export default class CadastroProduto extends React.Component{
        
        state = stateinitial;

        constructor(){
            super()
            this.service = new ProdutoService();
        }

        onChange = (event) => {
            const valor = event.target.value;
            const nomedoCampo = event.target.name;

            this.setState({ [nomedoCampo] : valor})
        }

        onSubmit = (event) => {
            
            const produto = {
                nome : this.state.nome,
                sku : this.state.sku,
                descricao  : this.state.descricao,
                preco : this.state.preco,
                fornecedor : this.state.fornecedor
            }

            try{
                this.service.salvar(produto)
                this.clearFields()
                this.setState({sucessMsg: true})
                console.log('Salvo com sucesso')
            }catch(erro){
                const errors = erro.errors
                this.setState({errors : errors})
            }

        }

        clearFields = () => {
            this.setState(stateinitial)
        }

        render(){
            return(
                   <div className="card">
                        <div className="card-header">Cadastro de Produto</div>
                        <div className="card-body">
                        { this.state.sucessMsg ?
                            (
                                <div class="alert alert-dismissible alert-primary">
                                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                                    <strong>Inserido!</strong> produto cadastrado com sucesso.
                                </div>
                            ) : (
                                 <></>   
                            )
                        }
                        { this.state.errors.length > 0 && 
                            this.state.errors.map( msg =>{
                                return (
                                    <div class="alert alert-dismissible alert-danger">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                        <strong>Ocorreu um Erro!</strong> {msg}
                                    </div>
                                )
                            })
                        }
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Nome: *</label>
                                    <input type="text" name="nome" onChange={this.onChange} value={this.state.nome} className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label>SKU: *</label>
                                    <input type="text" name="sku" onChange={this.onChange}  value={this.state.sku} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Descrição: </label>
                                        <textarea name="descricao" onChange={this.onChange} value={this.state.descricao} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Preço: *</label>
                                    <input type="text" name="preco" onChange={this.onChange} value={this.state.preco} className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label>Fornecedor: *</label>
                                    <input type="text" name="fornecedor" onChange={this.onChange} value={this.state.fornecedor} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                   <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                                </div>

                                <div className="col-md-1">
                                   <button onClick={this.clearFields} className="btn btn-primary">Limpar</button>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
    }
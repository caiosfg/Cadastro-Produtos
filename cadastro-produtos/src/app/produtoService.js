
const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors){
    this.errors = errors;
}

export default class ProdutoService{

    validar = (produto) => {
        const errors = []

        if(!produto.nome){
            errors.push('Campo nome é obrigatório.')
        }
        if(!produto.sku){
            errors.push('Campo sku é obrigatório.')
        }
        if(!produto.preco || produto.preco <= 0){
            errors.push('Campo preço é obrigatório.')
        }
        if(!produto.fornecedor){
            errors.push('Campo fornecedor é obrigatório.')
        }

        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    } 

    obterProdutos = () =>{
        const produtos = localStorage.getItem(PRODUTOS)

        return JSON.parse(produtos)
    }
    
    salvar = (produto) =>{

        this.validar(produto)
        
        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}
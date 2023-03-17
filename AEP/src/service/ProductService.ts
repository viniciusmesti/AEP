import { writeFile, readFile} from 'fs/promises'

class ProductService {
    public async writeProduct(products: any) {
        try {
            await writeFile('products.json', JSON.stringify(products, null, 2))
        }

        catch(err) {
            console.error('erro na escrita', err)
        }
    }

    public async readProduct () : Promise<any> {
        try {
            const file = await readFile('products.json', { encoding: 'utf-8'})
            return JSON.parse(file)
        }
        catch (err) {
            console.error('erro na leitura', err)
        }
    }

    async getStock() {
        try {
            const productList = await this.readProduct()

            const productStock = productList.map(produto => {
                let stock ={
                    none: produto.none,
                    qtde: produto.qtde,
                    preco: produto.preco,
                    valor_stock: produto.qtde*produto.preco
                }
                return stock 
            })

            return productStock

            
        }catch(error) {
            throw new Error(error)
        }
    }
}
export default new ProductService()
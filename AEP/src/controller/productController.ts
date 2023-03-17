import { Request, Response } from "express";
import productService from '../service/ProductService'

class ProductController {
    public async createProduct (req: Request, res: Response) {
        const { body: produto } = req
        productService.writeProduct (produto)
        return res.status(201).send()
    }

    public async readProduct (req: Request, res: Response) {
        const products= await productService.readProduct ()
        return res.send(products)
    }

    public async productStock (req: Request, res: Response) {
        const products= await productService.getStock ()
        return res.send(products)
    }
}

export default new ProductController ()
import {Request, Response} from 'express'

class UserController {
    public async findUsers(req: Request, res: Response) {
        return res.json('Thiago Bussola')
    }

    public async createUser(req: Request, res: Response) {
        return res.json("Usuário buscado do banco: Thiago Bussola")
    }
}

export default new UserController()
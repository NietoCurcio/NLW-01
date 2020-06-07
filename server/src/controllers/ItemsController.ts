import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
        // note que ao utilizar uma query no banco de dados, tem que usar o await, para aguardar o resultado chegar
        // SELECT * FROM items
    
        // items is a array of object
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.2:3333/uploads/${item.image}`
            };
        })
        // transform a data, a data most accessible
    
        return res.json(serializedItems)
    }
}

export default ItemsController;

import knex from '../database/connection';
import { Request, Response }from 'express'; 
// use { } to take especific function or method of a module like in { Component } from React for use extends Component rather than extends React.Component

class PointsController {
    async index(req: Request, res: Response) {
        //cidade, uf and items (Query params) taken from query params
        const { city, uf, items } = req.query;

        const parsedItems = String(items)
        .split(',')
        .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items','points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        const serializedPoints = points.map(point => {
            return {
                ...point, //retornar todos so dados do ponto, take everything that current exist
                image_url: `http://192.168.0.2:3333/uploads/${point.image}`
            };
        });

        // console.log(points);
        // WHEREIN pra tratar esse array, procura todos os pontos que tem pelo menos um item id que ta dentro do parsedItems

        return res.json(serializedPoints);
            // no TS sempre que recebe pelo query, é legal informar o formato, pode vir qlq coisa do query
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return res.status(400).json({ message: 'Point not found' });
        }

        const serializedPoint = {
                ...point, //retornar todos so dados do ponto, take everything that current exist
                image_url: `http://192.168.0.2:3333/uploads/${point.image}`
        };

        /**
         * SELECT * FROM items 
         *  JOIN point_items ON items.id = point_items.item_id
         *  WHERE point_items.point_id = {id} para retornar os itens que estao relacionados com esse ponto(id)
         */
        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');
        

        return res.json({ point: serializedPoint, items });
    }

    async create(req: Request, res: Response) {
        const { name, email, whatsapp, latitude, longitude, city, uf, items} = req.body;

        console.log(req.body);
    
        const trx = await knex.transaction();
    
        const point = { //knex no metodo insert retorna os ids dos items inseridos, no caso esse unico id
            image: req.file.filename,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }

        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
    
        const pointItems = items
            .split(',')
            .map((item: string )=> Number(item.trim()))
            .map((item_id: number) => {
            return {
                item_id,
                point_id
            }
        })
    
        // transaction caso o segundo insert dê problema, para a execução do primeiro insert
        await trx('point_items').insert(pointItems)
        // if in pointItems have a item_id that doesn't exist, won't insert, because item_id and point_id is foreign key
        // reference to a 'id' of 'point table' and 'id' of 'item table' that have to exist

        await trx.commit(); // somente se der tudo certo, o trx realmente faz os inserts no db

        return res.json({
            id: point_id,
            ...point, // take everything in the current state ;D

         });
    }
}

export default PointsController;
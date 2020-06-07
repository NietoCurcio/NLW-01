import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
// PointsController is a class
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// note that, in frontend (React) I receive the data from the server, so I have req.body.email req.params.name

// in server, most times I have a connection with the database to provide these data to my frontend with res.json

// in forms in component, like we learn in traversy media MERN stack, I want to have a component state in our react components,
// and we take the action as a props and pass the data to our server, the server take these in req.body, notice that in that
// project we destruct the object that we received

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post(
    '/points',
     upload.single('image'),
     celebrate({
         body: Joi.object().keys({
             name: Joi.string().required(),
             email: Joi.string().required().email(),
             whatsapp: Joi.number().required(),
             latitude: Joi.number().required(),
             longitude: Joi.number().required(),
             city: Joi.string().required(),
             uf: Joi.string().required().max(2),
             items: Joi.string().required(),
         })
     }, {
         abortEarly: false
     }), 
     pointsController.create);

export default routes;

// criar uma rota para acessar e ver a imagem pelo navegador, 3333/uploads/lampadas.svg
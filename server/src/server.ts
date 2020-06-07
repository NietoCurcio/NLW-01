import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);
// or I could use ('/', routes), and try also /api/users and in my routes '/', so /api/users'/'

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // function of expresss to server static files, image, pdf
// express.static pega o diretorio do arquivo, I have a get request to /uploads/oleo.svg. No expresss usar o path para caminhos
// I tried with ../ with ..\\ ..\ and dont work, only with path.resolver(__dirname, 'dir', 'dir')

app.use(errors());

app.listen(3333, () => console.log('Running os port 3333'));
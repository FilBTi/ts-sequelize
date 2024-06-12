import Express  from "express";
import userRout from './user';
import productRout from './product';
import basketRout from './basket';
import authoRout from './auth'
import { auth } from "../middelwaers/auth";


const rout: Express.Router = Express.Router();

rout.use('/users', userRout);
rout.use('/product', auth, productRout);
rout.use('/basket',  basketRout);
rout.use('/aut',  authoRout);



export default rout;


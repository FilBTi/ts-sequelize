import Express  from "express";
import BasketController from "../../controllers/basket";

const rout: Express.Router = Express.Router();

const basket = new BasketController;

rout.route('/')
    .get(basket.get)
    .post(basket.create);

rout.route('/:id')
    .get(basket.getById)
    .post(basket.update);


export default rout

import BasketService from "../../service/basket";
import { Request, Response } from "express";

export default class BasketController{
    private basketcontroller: BasketService;

    constructor(){
        this.basketcontroller = new BasketService();
    };

    get = async (req: Request, res: Response) =>{
        try{
            const result = await this.basketcontroller.getAll();
            res.status(200).send(result);
        }catch(err){
            res.status(400).send(err);
        }
    };

    getById = async (req: Request, res: Response) => {
        try{
            const result = await this.basketcontroller.getById(Number(req.params.id));
            res.status(200).send(result);
        }catch (err){
            res.status(400).send(err);
        }
    };

    create = async (req: Request, res: Response) => {
        try{
            const result = await this.basketcontroller.create(req.body.userId, req.body.productId, req.body);
            console.log(req.body.userId)
            res.status(200).send({result});
        }catch (err){
            res.status(400).send(err);
        }
    };

    update = async (req: Request, res: Response) => {
        try{
            const result = await this.basketcontroller.updateProduct(Number(req.params.id), req.body.product);
            res.status(200).send(result);
        }catch (err){
            res.status(400).send(err);
        }
    };

}
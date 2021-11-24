import { Router } from "express"
import { solveFibonacci } from '../controllers/fibonacci'

const fibo = Router();

fibo.get('/:num', solveFibonacci);

export default fibo;

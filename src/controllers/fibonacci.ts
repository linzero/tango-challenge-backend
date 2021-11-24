import { Request, Response } from "express"

export const solveFibonacci = (req:Request, res:Response) => {

    // Get Number from Params
    const { num } = req.params
    const number = parseInt(num)

    if (number !== NaN) {

        // Calculate fibonacci
        let num1 = 0, num2 = 1, calc = (number === 0) ? 0 : 1;

        for (let i = 1; i < number; i++) {
            calc = num1 + num2;
            num1 = num2;
            num2 = calc;
        }

        // Response 200
        res.json({
            response:calc
        })
    } else {
        // Response 400 
        res.status(400).json({
            msg:"Debes enviar un número válido"
        })
    }   
    
}


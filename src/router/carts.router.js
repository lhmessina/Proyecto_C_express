import {Router} from 'express';
import fs from "fs";
import cartManager from "../cartManager.js"
import productManager from "../productManager.js"

const router = Router();


router.post ("/" ,async (req,res)  => {
    try{

        const cart = await cartManager.createCar();

    res.status(201).json({ status: "success", cart });
    console.log('fff')
    console.log(cart)
    }
    catch (error){

    }

})

// "status": "success",
//     "cart": {
//         "id": 1,
//         "products": [
//             {
//                 "product": 1,
//                 "quantity": 1
//             }
//         ]






router.post ("/:cid/product/:pid" ,async (req,res)  => {
    try{
        const { cid, pid } = req.params;
        console.log(cid,pid)
        
        const  carts = await cartManager.addProduct2cart(Number(cid),Number(pid))
        //res.status(201).json({ status: "success", carts });
        console.log('rrrrr', carts)
        //console.log('?????????',carts)
        //console.log('giordano',cart2load)
        switch( carts){

            
            case "no_Product":
                res.status(404).json({ status: "Error", msg: "Product no encontrado" });
                break;
            
            case "no_Cart":
                res.status(404).json({ status: "Error", msg: "Cart no encontrado" });
            
                break;

        }
        console.log('?????????',carts)
        //cart_2_load.products.push(prod2load)
        //console.log('?????????',carts)
        res.status(201).json({ status: "successvvvvv", carts });
        //res.status(201).json({ status: "successvvvvv", cart_2_load });
        
    }
    catch (error){

    }

})

router.get("/:cid", async (req,res) => {
    try{
        const { cid } = req.params;
        console.log('fff',cid)
        // const cart_by_id = await cartManager.getCarByid(Number(cid))
        // res.status(201).json({ status: "success", cart_by_id });
        const cart = await cartManager.getCarByid(Number(cid))
        console.log('llllllllll',cart)
        if (cart == "no cart id") {
            res.status(404).json({ status: "Error", msg: "Cart no encontrado" });
        }
        res.status(201).json({ status: "success", cart });
    }
    catch{}
})







export default router;
import {Router} from 'express';
import fs from "fs";
import productManager from "../productManager.js"
const router = Router();

const path_producto = "./products.json"

/

router.get("/", async(req, res) => {
  try{
    const products = await productManager.getProducts()
    res.status(200).json({ status: "success", payload: products });
  } catch(error){
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
  });
  

router.get("/:pid", async (req,res) => {
  try{  
   const {pid}  = req.params;
    
  
    const productsid = await productManager.getProductById(Number(pid))
    
   
      if (! productsid) return res.send(`Producto con id ${pid} no existe` )
      console.log ('eeeee',productsid)
    res.status(200).json({ status: "success", payload: productsid});
  } catch (error){
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
  })
  
  router.delete("/:pid", async (req, res) => {
    try {
      const { pid } = req.params;
      const productsid = await productManager.deleteProduct(Number(pid));
      if (!productsid) return res.status(404).json({ status: "Error", msg: "Producto no encontrado" });
  
      res.status(200).json({ status: "success", msg: `El producto con el id ${pid} fue eliminado` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
    }
  });

  
router.post("/", async(req, res) => {
    
    try{
     const body = req.body;
     const product = await productManager.addProduct(body) 
   
    
    
    if (product === -1) {
      console.log('wwwwwwww',product)
      res.status(400).json({status:"Error", msg : "Todos los campos de producto son obligatorios"})
     }
    
    
    else

      if (product === "coderep") {
      res.status(400).json({status:"Error", msg : "Codigo  ya utilizado" })
     }

    else {
      res.status(201).json({ status: "success", product });}
  }
   catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
});
    
     

router.put("/:pid", async (req, res) => {
  try{  
    const { pid } = req.params; 
    const dataUser = req.body; 
    
    const product = await productManager.updateProduct(Number(pid), dataUser);
    if (!product) return res.status(404).json({ status: "Error", msg: "Producto no encontrado" });

    res.status(200).json({ status: "success", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
});
    

export default router;  //para poder importarlo en app.js
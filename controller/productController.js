const productController= require("express").Router();
const Product=require('../models/Product')

//get all products which is available in our db
productController.get('/getAll',async(req,res)=>{
    try {
        const products= await Product.find({});
        return res.status(200).json(products);        
    } catch (error) {
        return res.status(500).json(error);
    }
})

//get specific product
productController.get('/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
      const product = await Product.findById(productId);
      if (product) {
        return res.status(200).json(product);
      } else {
        return res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//create product
productController.post('/',async(req,res)=>{
    try {
        const product= await Product.create(req.body);
        return res.status(200).json(product); 
    } catch (error) {
        return res.status(500).json(error);
    }
})

//update product
productController.put('/:productId',async(req,res)=>{
    try {
        const productId = req.params.productId;
        const product = await Product.findByIdAndUpdate(
            productId, 
            req.body, 
            { new: true }
        );

        if (product) {
            return res.status(200).json(product);
        } else {
            return res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})

//delete product
productController.delete('/:productId',async(req,res)=>{
    try {
        const productId = req.params.productId;
        const result = await Product.findByIdAndDelete(productId);

        if (result) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})


module.exports=productController;
const serachController= require('express').Router();
const Product=require('../models/Product');

serachController.get('/:item', async (req, res) => {
    const itemSearch=req.params.item;
    try {
        const results = await Product.find({
          "$or": [
            { 
              name: { $regex: itemSearch } 
            },
            { 
              description: { $regex: itemSearch } 
            },
          ]
        });
        return res.status(200).json(results);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports=serachController
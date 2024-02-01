const mongoose=require('mongoose');

const ProductSchema= new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: Number
    },
    variants: {
        type:[{
            name: String,
            sku: String,
            additionalCost: Number,
            stockCount: Number
          }]
        // type: [mongoose.Types.ObjectId],
        // ref: "Variant",
    }
},{timeseries: true})

module.exports=mongoose.model("Product",ProductSchema);
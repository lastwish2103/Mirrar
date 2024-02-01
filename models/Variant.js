const mongoose=require("mongoose")

const VariantSchema= new mongoose.Schema({
    name: {
        type:String
    },
    sku: {
        type:String
    },
    additionalCost: {
        type:Number
    },
    stockCount: {
        type: Number
    }
},{timeseries:true})

module.exports= mongoose.model("Varaint",VariantSchema)
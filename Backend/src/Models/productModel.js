const mongoose=require('mongoose');
const {Schema}=mongoose;    

const productSchema=new Schema({
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    description:{
        type:String,
       
    },

    productImage:{
        type:String,
        required:true
    },

    // brand:{
    //     type:String,
    //     required:true
    // },
    // rating:{
    //     type:Number,
    //     required:true
    // },
    // numReviews:{
    //     type:Number,  
    // },
    countInStock:{
        type:Number,
    }
});

const Product=mongoose.model('Product',productSchema);
module.exports=Product;
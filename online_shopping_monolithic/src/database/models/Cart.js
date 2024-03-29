const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    customerId: { type: String },
    items: [
        {   
            product: {type: Schema.Types.ObjectId, ref: 'product', required: true},
            unit: { type: Number, require: true} 
        }
    ]
});

module.exports =  mongoose.model('cart', CartSchema);

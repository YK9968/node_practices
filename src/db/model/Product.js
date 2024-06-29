import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        min: 0,
        max: 1,
        default: 0
    },
},
    { versionKey: false, timestamps: true });

const Product = model('products', productSchema);
export default Product;

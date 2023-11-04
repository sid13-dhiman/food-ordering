const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    
    location: {
        type: String,
        required: true,
        unique: true
    }

});
const Restaurant = mongoose.model('restaurant', RestaurantSchema);
module.exports = Restaurant;
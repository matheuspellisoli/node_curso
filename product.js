var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    value: Number,
    name: String
});

module.exports = mongoose.model('Product', ProductSchema);
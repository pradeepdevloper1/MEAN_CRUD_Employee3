var mongoose =require('mongoose');
var Employee=mongoose.model('employees',{
    FullName:{type:String},
    Position:{type:String},
    EMPCode:{type:String},
    Mobile:{type:String}
});
module.exports={Employee};
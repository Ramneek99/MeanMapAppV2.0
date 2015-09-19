/**
 * Created by Ahmed on 9/18/2015.
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    location: String,
    lat: Number,
    lng: Number,
    gender: String,
    age: Number,
    favlang: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

UserSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

module.exports = mongoose.model('scotch-user', UserSchema);

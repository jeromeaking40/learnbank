const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    // the larger this value is, the stronger the encryption,
    // but the longer it will take to compare hashes;
    SALT_INDEX = 10,
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bank: {
        type: Schema.Types.ObjectId,
        ref: 'Bank'
    }
});

UserSchema.pre('save', function(next) {
    var user = this;
    user.email = user.email.toLowerCase();
    // ONLY HASH THE PASSWORD IF MODIFIED OR A NEW USER
    if (!user.isModified('password')) {
        return next();
    }
    // GENERATE A SALT VALUE TO ENCRYPT OUR PASSWORD
    bcrypt.genSalt(SALT_INDEX, (saltErr, salt) => {
        if (saltErr) {
            console.error(saltErr);
            return next(saltErr);
        }
        console.info('SALT GENERATED', salt);
        //HASH THE PASSWORD BEFORE SAVING IT
        bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
            if (hashErr) {
                console.error(hashErr);
                return next(hashErr);
            }
            // OVERRIDE THE PLAIN TEXT PASSWORD WITH THE HASHED PASSWORD
            user.password = hashedPassword;
            next();
        });
    });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

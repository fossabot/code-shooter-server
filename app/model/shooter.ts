module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ShooterSchema = new Schema({
        username: { type: String },
        password: { type: String },
    });

    return mongoose.model('User', ShooterSchema);
};

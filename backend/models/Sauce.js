const mongoose = require('mongoose');

// Creation schema de donnée 
//nous créons un schéma de données qui contient les champs souhaités pour chaque sauce
const sauceSchema = mongoose.Schema({
    user_id: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: false },
    dislikes: { type: Number, required: false },
    usersLiked: { type: Array, required: false },
    usersDisliked: { type: Array, required: false },
});

// Nous exportons ce schéma en tant que modèle Mongoose appelé « Sauce », le rendant par là même disponible pour notre application Express.
module.exports = mongoose.model('Sauce', sauceSchema)
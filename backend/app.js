const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://piiquante:piiquante@cluster0.n16ez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
  {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
 })
 .then(() => {
  console.log("Database connected");
 })
 .catch((error) => {
  console.log(error);
 });

// mongoose.connect('mongodb+srv://piiquante:piiquante@cluster0.n16ez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
// {
//   dbName: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   pass: process.env.DB_PASS,
//   useNewUrlParser: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true })
//   .then(() => console.log('Conexion à MongoDB réussi !'))
//   .catch(() => console.log('connexion à MongoDB échouée !'))

  const app = express();

 /* `Ces headers permettent :
    d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
    d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
    d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).`*/
 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes); // Enregistrement du routeur pour toutes les demandes effectuées vers /api/sauces

module.exports = app;
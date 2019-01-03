const express=require('express');
const graphqlHTTP=require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();

//allow cross origin request 
app.use(cors());

mongoose.connect("mongodb://calle:swan123@ds127994.mlab.com:27994/gqlbooks");
mongoose.connection.once('open', ()=>{
  console.log('Connected to DB');
})


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}));

app.listen(4000, ()=>{
  console.log('now listening on port 4000');
});
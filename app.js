const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
const cors = require('cors')
const app = express();
//config dotenv
dotenv.config()
//Les cors
app.use(cors())
//BodyParser Middleware
app.use(express.json());
mongoose.connect(process.env.DATABASE)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });
// requête
app.get("/",(req,res)=>{
    res.send("bonjour");
});
const categorieRouter =require("./routes/categorie.route")
app.use('/api/categories', categorieRouter);
const scategorieRouter =require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter);
const articleRouter =require("./routes/article.route")
const userRouter =require("./routes/user.route")
app.use('/api/articles', articleRouter);
app.use('/api/users', userRouter);
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;
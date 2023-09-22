

const mongoose = require('mongoose')
// const url = "mongodb://127.0.0.1:27017/products"
// const uri = "mongodb+srv://root:<root>@cluster0.q290lhg.mongodb.net/?retryWrites=true&w=majority";

//mongoose

// async function mongooseConn(url){
//     return await mongoose.connect(url)
// }


async function mongooseConn(url) {
    const connectionParams = {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    }
    await mongoose.connect(url, connectionParams)
        .then(() => {
            console.log('DataBase connected')
        })
        .catch((err) => {
            console.error(`Error connecting to the database. n${err}`);
        })
}

// async function mongooseConn(url){
//     await mongoose.connect(url,{
//         dbName:"e-shop",
//         useNewUrlParser:true,
//         // useUnifiedTepology:true
//     }).then(()=>console.log("Mongoose DB connected"))
//     .catch((err)=>console.log("DB connection err",err))
// }

// const mongooseConn = (url)=>{
//     mongoose.connect(url,{
//         dbName:"e-shop",
//         useNewUrlParser:true,
//         useUnifiedTepology:true
//     }).then((res)=>{
//         console.log("Mongoose DB connected");
//     }).catch((err)=>{
//         console.log("DB connection failed",err);
//     })
// }


module.exports = { mongooseConn }
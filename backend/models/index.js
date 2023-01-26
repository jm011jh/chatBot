const mongoose = require("mongoose")
const dbUriPW = "Tmffotnl92"
const dbUri = `mongodb+srv://dev_slash:${dbUriPW}@news.0ctmg8v.mongodb.net/?retryWrites=true&w=majority`;
const connect = () => {
    mongoose.connect(dbUri, (err) => {
            if (err) console.log("mongo db connect failed")
            else console.log("mongodb connect success")
    })
}
mongoose.set('strictQuery', false);
mongoose.connection.on('error', (err) => {
    console.error("mongo db connect error", err)
})
mongoose.connection.on('disconnected', ()=>{
    console.error("connection disconnected...retrying...")
    connect()
})

module.exports = connect;
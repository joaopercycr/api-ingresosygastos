import mongoose from 'mongoose'
import config from './config'

(async()=>{
    const uri = "mongodb+srv://" + config.mongoConfigUser + ":" + config.mongoConfigPassword +"@cluster0.ho7at.mongodb.net/bdiyg?retryWrites=true&w=majority";
    console.log(uri)
    const dbconnect = await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database is conected to',dbconnect.connection.name)
})()


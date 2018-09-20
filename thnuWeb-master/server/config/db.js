const mongoose = require('mongoose')
const URL = 'mongodb://localhost:27017/thnuweb'
const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
exports.connect =function(){
    mongoose.connect(URL,options).then(
        ()=>{
            console.log("连接数据库");
            console.log("数据库链接成功");

        },
        err =>{
            console.log("数据库连接失败"+ err);
        }
    )
}
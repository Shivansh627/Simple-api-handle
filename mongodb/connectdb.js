const mong= require("mongoose");

const conn =async ()=>{
    try{
        const connect= await mong.connect(process.env.strng);
        console.log('DB connected: ',connect.connection.host);
        
    }catch(e){
        console.log(e);
        process.exit(1)
    }
}

module.exports= conn;
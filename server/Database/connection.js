const mongoose = require('mongoose')  //import

function RunServer(){
   try{//similar to if else.
       mongoose.connect(process.env.MONOGO_DB_URL)
       console.log('mongoose is connected')
   }catch(error){
       console.log('not connected')
   }
}

module.exports = RunServer //exporting runserver
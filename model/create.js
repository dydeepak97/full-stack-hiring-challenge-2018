const database = require('./db')

const db = database.getDB()

exports.createFile = function(fName, fPath, content, type){
    let queryString = "INSERT INTO files ( fName, fPath, content , type ) VALUES ( ?, ?, ?, ? );"

    db.query(queryString, [ fName, fPath, content, type ], (err, result, fields) => {
        if(err){
            //SEND RESPONSE WITH ERROR
            return false
        }
        else{
            //SEND SUCCESS MESSAGE
            return true
        }
    })
}
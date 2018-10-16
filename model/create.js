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

console.log(db);




addFile = function(fName, fPath, content){
    let dirLevels = fPath.split('/')
    console.log(dirLevels)
    var temp = db
    for(let level in dirLevels){
        console.log("Index: ", dirLevels[level])
        console.log("Vals: ", temp[dirLevels[level]]);
        console.log("Childs: ", temp[dirLevels[level]]["sub"]);
        if(temp[dirLevels[level]]["sub"].length != 0){
            temp = temp[dirLevels[level]]["sub"]
        }
        console.log("TEMP :", temp);
        
    }
    temp.push({
        "type": "file",
        "sub": null
    })

    console.log(temp);
    
}

addFile("ABC", "root/dir1/dirA" , "hello")
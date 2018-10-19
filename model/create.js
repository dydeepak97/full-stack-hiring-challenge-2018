const database = require('./db')
const fs = require('fs')
const mkdirp = require('mkdirp');

const db = database.getDB()

// exports.createFile = function(fName, fPath, content, type){
//     let queryString = "INSERT INTO files ( fName, fPath, content , type ) VALUES ( ?, ?, ?, ? );"

//     db.query(queryString, [ fName, fPath, content, type ], (err, result, fields) => {
//         if(err){
//             //SEND RESPONSE WITH ERROR
//             return false
//         }
//         else{
//             //SEND SUCCESS MESSAGE
//             return true
//         }
//     })
// }

console.log(db);




exports.addFile = function(fPath, fContent , fType){
    let dirLevels = fPath.split('/')
    console.log(dirLevels)
    var temp = db
    for(let level in dirLevels){
        console.log("Index: ", dirLevels[level])
        console.log("Vals: ", temp[dirLevels[level]]);
        console.log("Childs: ", temp[dirLevels[level]]);
        if(temp[dirLevels[level]] == undefined){
            if(level == dirLevels.length - 1){
                temp[dirLevels[level]] = {"type" : fType};
            }
            else{
                temp[dirLevels[level]] = {"type" : "dir"};
                console.log("Creating Dir...");
            }   
        }
        if(  temp[dirLevels[level]] != undefined){
            console.log("Still"); 
            temp = temp[dirLevels[level]]
             
        }
        console.log("TEMP :", temp);

       
        
        
    }
    // temp["fName"]["type"] = "file";
    // temp["fName"]["sub"] = null;
    // temp[fName] = {
    //         "type" : "file"
    // };
        

    console.log("Temp" , temp);
    //console.log("DB" , db["root"]["sub"]["dir1"]["sub"]["dirA"]);
    exports.db = db;
    let writeDB = JSON.stringify(db, null, 2); 
    fs.writeFile('./database/database.json', writeDB);

    let dirPath;
    let fName;
    if(fType == "folder"){
        dirPath = dirLevels.join('/');
    }
    else if(fType == "file"){
        fName = dirLevels[dirLevels.length-1];
        dirLevels.splice(dirLevels.length-1, 1);
        dirPath = dirLevels.join('/');
    }
    console.log(dirPath);
    

    mkdirp(dirPath, function (err) {
        if (err) console.error(err)
        else console.log('pow!')
    });
    
}


//exports.addFile("root/dir1/dirC/dirC1/db1A" , "hello", "file")

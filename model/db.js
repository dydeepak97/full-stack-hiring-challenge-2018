const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'backBench'
})

exports.getDB = function(){
    return db;
};

exports.setupDB = function(){
    console.log("Setting up DB")

    db.query("CREATE TABLE IF NOT EXISTS `files` ( `id` INT NOT NULL AUTO_INCREMENT , `fName` VARCHAR(100) NOT NULL , `fPath` VARCHAR(200) NOT NULL , `content` VARCHAR(200) NOT NULL, `type` VARCHAR(10) NOT NULL , PRIMARY KEY (`id`));")
}

// module.exports = {setupDB};
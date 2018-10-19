const createFile = require('../model/create');

exports.createHandler = function(req , res){
    let fPath = req.query['path'];
    let fContent = req.query['content'];
    let fType = req.query['type'];

    createFile.addFile(fPath, fContent, fType);
    
    res.end();

    return res;
}
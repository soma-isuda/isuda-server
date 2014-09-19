exports.test = function(req, res){
    console.log('test ');

    res.json({'message' : "server ready"});
}
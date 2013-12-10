
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { 
        title: 'Express' 
    });
};

exports.pinterest = function(req, res){
    res.render('pinterest', { 
        title: 'pinterest' 
    });
};
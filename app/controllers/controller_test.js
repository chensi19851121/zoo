exports.showInfo = function(req, res, next){
	var info = req.params.info;
	res.render('test/index', {info : info});
}
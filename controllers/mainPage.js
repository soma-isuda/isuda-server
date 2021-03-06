/**
 * Created by Phangji on 10/4/14.
 */

var model = require('../models/model');
var befTime = null;
var befResults = null;
/*
(function (){
	model.now(function (err, result) {
		if (err) console.log(err);
		befResults = result;
		var minTime = result[0].productEndTime;
		for(var i=1; i<result.length; i++){
			if(minTime > result[i].productEndTime)
				minTime = result[i].productEndTime;
		}
		befTime = minTime;
	});
})();
*/

exports.now = function (req, res) {
	console.log('Accessed to NOW');
	var providerNum = req.param('providerNum');
	var nowTime = new Date();
	console.log('nowTime', nowTime, ' befTime', befTime);
	if(nowTime > befTime){	//need to get NEW NOW DATA
		model.now(function (err, result) {
		    if (err) console.log(err);
            befResults = result;

            model.getNowISUDA(function (err, result) {
                if (err) console.log(err);
                var pdISUDA = result[0];
                var now = new Date();
                pdISUDA.productStartTime = now.toISOString();
                pdISUDA.productEndTime = new Date(now.getTime() + 1000*59 + 1000*60*59 + 1000*60*60*23).toISOString();

                befResults.push(pdISUDA);

                if(providerNum){
                    res.send(befResults[providerNum]);
                }else{
                    res.send(befResults);
                }
            });

		    var minTime = result[0].productEndTime;
		    for(var i=1; i<result.length; i++){
			if(minTime > result[i].productEndTime)
				minTime = result[i].productEndTime;
		    }
		    befTime = minTime;

		});
	}else{
		if(providerNum){
			res.send(befResults[providerNum]);
		}else{
			res.send(befResults);
		}
	}
	

    
};

exports.getUsersInterestingProducts = function (req, res) {
    var phoneNumber = req.param('phoneNumber');

    if (phoneNumber) {
        model.selectProductCount([phoneNumber], function (err, result) {
            if (err) console.log(err);
            var cnt = result[0].count;
            if (cnt < 3) {  // 예외 : 갯수가 미달인 경우
//                var resultArr = new Array();
//                for(var i=0; i<cnt; i++){
//                    model.selectOneRandomProduct(function (err, result) {
//                        if (err) console.log(err);
//                        resultArr.push(result);
//                    });
//                }
                model.selectRandomProducts(function (err, result) {
                    if (err) console.log(err);
                    res.send(result);
                });

            } else {
                model.selectProductInfoByInterestingCategory([phoneNumber], function (err, result) {
                    if (err) console.log(err);
                    res.send(result);
                });
            }
        });

    } else {  // 예외 : 클라이언트에서 폰넘버가 없을 때
        model.selectRandomProducts(function (err, result) {
            if (err) console.log(err);
            res.send(result);
        });
    }
};

exports.getProviders = function (req, res) {
    model.getProviders(function (err, result) {
        if (err) console.log(err);
        res.send(result);
    });
};

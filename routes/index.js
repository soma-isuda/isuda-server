var express = require('express');
var router = express.Router();

/* request Contorller */
var controller = require('../controllers/test');
var mainPage = require('../controllers/mainPage');
var schedulePage = require('../controllers/schedulePage');
var myPage = require('../controllers/myPage');
var selectPage =require('../controllers/selectPage');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ISUDA - Welcome to Smart Homeshopping' });
});

router.get('/test', controller.test);

//-------------MAIN---------------
router.get('/now', mainPage.now);

// ---------------GET category list--------------- 
router.get('/getFirstCategory', schedulePage.getFirstCategory);
router.get('/getSecondCategory/:firstId', schedulePage.getSecondCategory);
router.get('/getSecondCategory', schedulePage.getSecondCategory);

// ---------------GET product Info--------------- 
router.get('/productInfo', selectPage.getProductInfo);
//example : http://172.16.100.171:3000/productInfo?id=2 //selected information
//example : http://172.16.100.171:3000/productInfo //total information

// ---------------Alarm---------------
router.post('/sAlarms', myPage.postAlarms);         //단일상품 알람 등록
router.post('/cAlarms', myPage.insertCategoryAlarm);    //중분류 알람 등록 //TODO(error)

router.get('/sAlarms', myPage.getSMSAlarms);        //단일상품 알람 조회
router.get('/cAlarms', myPage.getAlarmedCategory);    //중분류 알람 조회
router.get('/cAlarmsSMS', myPage.getCategoryAlarms);    //중분류로 알림보낼 상품들 조회  )

router.delete('/sAlarms', myPage.deleteSMSAlarms);  //단일상품 알람 삭제    //TODO(error)

router.delete('/cAlarms', myPage.deleteCategoryAlarms);  //카테고리 상품 알람 삭제    //TODO(url)

/*
// ---------------Users -------------- 
router.get('/users', controller.getUsers);

router.put('/users', controller.putUsers);
*/
router.post('/user', myPage.postUsers);
router.delete('/user', myPage.deleteUser);  //TODO(error)


module.exports = router;

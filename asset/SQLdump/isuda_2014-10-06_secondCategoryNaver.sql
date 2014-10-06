# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.38-0ubuntu0.14.04.1)
# Database: isuda
# Generation Time: 2014-10-06 10:27:56 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table secondCategoryNaver
# ------------------------------------------------------------

DROP TABLE IF EXISTS `secondCategoryNaver`;

CREATE TABLE `secondCategoryNaver` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `firstId` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `secondCategoryNaver` WRITE;
/*!40000 ALTER TABLE `secondCategoryNaver` DISABLE KEYS */;

INSERT INTO `secondCategoryNaver` (`id`, `name`, `firstId`)
VALUES
	(101,'여성의류',1),
	(102,'여성 언더웨어/잠옷',1),
	(103,'남성의류',1),
	(104,'남성 언더웨어/잠옷',1),
	(105,'아동의류',1),
	(106,'아동 언더웨어/잠옷',1),
	(107,'여성의류 브랜드',1),
	(108,'남성의류 브랜드',1),
	(109,'언더웨어 브랜드',1),
	(201,'여성신발',2),
	(202,'남성신발',2),
	(203,'스포츠 브랜드',2),
	(204,'제화 브랜드',2),
	(205,'잡화 브랜드',2),
	(206,'신발용품',2),
	(207,'여행용가방/소품',2),
	(208,'여성가방',2),
	(209,'남성가방',2),
	(210,'지갑',2),
	(211,'헤어액세서리',2),
	(212,'모자',2),
	(213,'패션소품',2),
	(214,'주얼리',2),
	(215,'벨트',2),
	(216,'베이비주얼리',2),
	(217,'양말',2),
	(218,'시계',2),
	(219,'선글라스/안경테',2),
	(220,'순금',2),
	(221,'장갑',2),
	(301,'스킨케어',3),
	(302,'선케어',3),
	(303,'클렌징',3),
	(304,'뷰티소품',3),
	(305,'남성화장품',3),
	(306,'베이스메이크업',3),
	(307,'색조메이크업',3),
	(308,'마스크/팩',3),
	(309,'네일케어',3),
	(310,'향수',3),
	(311,'바디케어',3),
	(312,'헤어케어',3),
	(313,'헤어스타일링',3),
	(401,'휴대폰',4),
	(402,'카메라/캠코더용품',4),
	(403,'영상가전',4),
	(404,'음향가전',4),
	(405,'휴대폰 액세서리',4),
	(406,'광학기기/용품',4),
	(407,'계절가전',4),
	(408,'음향가전',4),
	(409,'주방가전',4),
	(410,'생활가전',4),
	(411,'이미용가전',4),
	(412,'자동차기기',4),
	(413,'PC',4),
	(414,'노트북',4),
	(415,'태블릿PC',4),
	(416,'PC부품',4),
	(417,'PC액세서리',4),
	(418,'노트북액세서리',4),
	(419,'모니터',4),
	(420,'모니터주변기기',4),
	(421,'태블릿PC액세서리',4),
	(422,'멀티미디어장비',4),
	(423,'소프트웨어',4),
	(424,'주변기기',4),
	(425,'',4),
	(426,'네트워크장비',4),
	(427,'게임기/타이틀',4),
	(428,'저장장치',4),
	(501,'침실가구',5),
	(502,'거실가구',5),
	(503,'주방가구',5),
	(504,'수납가구',5),
	(505,'아동/주니어가구',5),
	(506,'서재/사무용가구',5),
	(507,'아웃도어가구',5),
	(508,'DIY자제/용품',5),
	(509,'침구단품',5),
	(510,'침구세트',5),
	(511,'카페트/러그',5),
	(512,'인테리어소품',5),
	(513,'커튼/블라인드',5),
	(514,'홈데코',5),
	(515,'솜류',5),
	(516,'수예',5),
	(601,'분유',6),
	(602,'기저귀',6),
	(603,'물티슈',6),
	(604,'이유식',6),
	(605,'간식/영양제',6),
	(606,'수유용품',6),
	(607,'유모차',6),
	(608,'카시트',6),
	(609,'외출용품',6),
	(610,'목욕용품',6),
	(611,'스킨/바디용품',6),
	(612,'위생/건강용품',6),
	(613,'구강/청결용품',6),
	(614,'소독/살균용품',6),
	(615,'안전용품',6),
	(616,'유아가구',6),
	(617,'이유식용품',6),
	(618,'임부복',6),
	(619,'유아의류',6),
	(620,'세탁용품',6),
	(621,'출산준비물',6),
	(622,'임산부용품',6),
	(623,'출산/돌기념품',6),
	(624,'신생아의류',6),
	(625,'완구/매트',6),
	(626,'유아잡화',6),
	(627,'인형',6),
	(628,'수영복/용품',6),
	(629,'교재/서적',6),
	(630,'유아발육용품',6),
	(701,'축산',7),
	(702,'수산',7),
	(703,'농산물',7),
	(704,'반찬',7),
	(705,'김치',7),
	(706,'음료',7),
	(707,'과자',7),
	(708,'아이스크림/빙수',7),
	(709,'가공식품',7),
	(710,'냉동/간편조리식품',7),
	(711,'건강식품',7),
	(712,'다이어트식품',7),
	(801,'등산',8),
	(802,'캠핑',8),
	(803,'골프',8),
	(804,'자전거',8),
	(805,'스키/보드',8),
	(806,'낚시',8),
	(807,'수영',8),
	(808,'헬스',8),
	(809,'인라인스케이트',8),
	(810,'요가/필라테스',8),
	(811,'오토바이/스쿠터',8),
	(812,'아웃도어브랜드',8),
	(813,'스포츠액세서리',8),
	(814,'다이어트용품',8),
	(815,'스케이트/보드/롤러',8),
	(816,'축구',8),
	(817,'야구',8),
	(818,'농구',8),
	(819,'배구',8),
	(820,'탁구',8),
	(821,'배드민턴',8),
	(822,'스킨스쿠버',8),
	(823,'검도',8),
	(824,'테니스',8),
	(825,'스쿼시',8),
	(826,'족구',8),
	(827,'볼링',8),
	(828,'댄스',8),
	(829,'권투',8),
	(830,'보호용품',8),
	(831,'수련용품',8),
	(832,'무술용품',8),
	(833,'마라톤용품',8),
	(834,'당구용품',8),
	(835,'기타스포츠용',8),
	(901,'공구',9),
	(902,'문구/사무용품',9),
	(903,'화방용품',9),
	(904,'관상어용품',9),
	(905,'수집품',9),
	(906,'자동차용품',9),
	(907,'악기',9),
	(908,'DVD',9),
	(909,'악기',9),
	(910,'종교',9),
	(911,'음반',9),
	(912,'애완',9),
	(913,'욕실용품',9),
	(914,'세탁용품',9),
	(915,'건강측정용품',9),
	(916,'건강관리용품',9),
	(917,'당뇨관리용품',9),
	(918,'주방용품',9),
	(919,'좌욕/좌훈용품',9),
	(920,'의료용품',9),
	(921,'온열/찜질용품',9),
	(922,'재활운동용품',9),
	(923,'눈건강용품',9),
	(924,'실버용품',9),
	(925,'물리치료/저주파용품',9),
	(926,'구강위생용품',9),
	(927,'발건강용품',9),
	(928,'안마용품',9),
	(929,'수납/정리용품',9),
	(930,'원예/식물',9),
	(931,'생활용품',9),
	(932,'청소용품',9),
	(933,'블루레이',9),
	(934,'정원/원예용품',9),
	(1001,'공연/티켓',10),
	(1002,'모바일쿠폰/상품권',10),
	(1003,'지류/카드상품권',10),
	(1004,'여행/항공권',10),
	(1005,'e컨텐츠',10),
	(1006,'레저이용권',10),
	(1007,'꽃/케이크배달',10),
	(1101,'화장품',11),
	(1102,'주얼리',11),
	(1103,'시계/기프트',11),
	(1104,'패션/잡화',11),
	(1105,'전자제품',11),
	(1106,'향수',11),
	(1107,'식품/건강',11);

/*!40000 ALTER TABLE `secondCategoryNaver` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

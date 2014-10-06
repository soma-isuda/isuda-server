# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.14)
# Database: test
# Generation Time: 2014-10-02 23:42:30 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table productInfo
# ------------------------------------------------------------

DROP TABLE IF EXISTS `productInfo`;

CREATE TABLE `productInfo` (
  `id` varchar(20) NOT NULL,
  `productName` varchar(300) NOT NULL DEFAULT '',
  `productPrice` int(20) DEFAULT NULL,
  `productStartTime` datetime NOT NULL,
  `productEndTime` datetime NOT NULL,
  `providerId` varchar(2) NOT NULL DEFAULT '',
  `productPgURL` varchar(200) DEFAULT '',
  `productImgURL` varchar(200) DEFAULT '',
  `firstId` int(3) DEFAULT NULL,
  `secondId` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `productInfo` WRITE;
/*!40000 ALTER TABLE `productInfo` DISABLE KEYS */;

INSERT INTO `productInfo` (`id`, `productName`, `productPrice`, `productStartTime`, `productEndTime`, `providerId`, `productPgURL`, `productImgURL`, `firstId`, `secondId`)
VALUES
	('CJ201410030100','다본다 드림 블랙박스 32GB',349000,'2014-10-03 01:00:00','2014-10-03 02:00:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29312307&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/307/29312307M.jpg',4,42),
	('CJ201410030200','더쟈니러브 셀레브리티 셔츠 컬렉션 NO.5  (3 SET)',58000,'2014-10-03 02:00:00','2014-10-03 05:30:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=26937704&pic=TALI02','http://itemimage.cjmall.com/goods_images/26/704/26937704M.jpg',NULL,NULL),
	('CJ201410030530',' 대천김 재래김 20봉 + 김자반 10봉 + 7주년특별구성품(장바구니)',28900,'2014-10-03 05:30:00','2014-10-03 06:00:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29429390&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/390/29429390M.jpg',7,83),
	('CJ201410030600','면역엔글루칸4개월분',208000,'2014-10-03 06:00:00','2014-10-03 07:15:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29778768&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/768/29778768M.jpg',NULL,NULL),
	('CJ201410030715','밀폐용기의 진화 특허받은 이중밀폐 누름 쏙쏙이 풀세트',68800,'2014-10-03 07:15:00','2014-10-03 08:15:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=28932270&pic=TALI02','http://itemimage.cjmall.com/goods_images/28/270/28932270M.jpg',9,106),
	('CJ201410030815','2014 FW 드베르누와 여성 웜 니트 터틀렉 5종',68000,'2014-10-03 08:15:00','2014-10-03 09:20:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30185482&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/482/30185482M.jpg',1,2),
	('CJ201410030920','드페이블랙 FW신상 이태리 램스킨 뉴 디커(Dicker)부츠',168000,'2014-10-03 09:20:00','2014-10-03 10:20:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29539598&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/598/29539598M.jpg',NULL,NULL),
	('CJ201410031020','(퀸)구스차렵이불세트',298000,'2014-10-03 10:20:00','2014-10-03 11:30:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30532889&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/889/30532889M.jpg',5,55),
	('CJ201410031130','가에따노파리 천연양식진주 12mm 세트 + 로얄비즈 목걸이 1세트 더!',497000,'2014-10-03 11:30:00','2014-10-03 12:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29530598&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/598/29530598M.jpg',NULL,NULL),
	('CJ201410031240','오토비스 자동 물걸레 청소기(무선형)_KAC-5500',178000,'2014-10-03 12:40:00','2014-10-03 13:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29006324&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/324/29006324M.jpg',4,32),
	('CJ201410031440','아키 트리플업브라팬티1세트(63)',80000,'2014-10-03 14:40:00','2014-10-03 15:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29936428&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/428/29936428M.jpg',1,4),
	('CJ201410031540',' Lowell(로웰) 코튼모달 티셔츠  컬렉션 총7종',58800,'2014-10-03 15:40:00','2014-10-03 16:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29414251&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/251/29414251M.jpg',NULL,NULL),
	('CJ201410031640','아이오페 플랜트 스템셀 스킨 퍼펙션 에멀전',40000,'2014-10-03 16:40:00','2014-10-03 17:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=27009229&pic=TALI02','http://itemimage.cjmall.com/goods_images/27/229/27009229M.jpg',3,16),
	('CJ201410031740','베.지.밀.두.유! 시장가격비교 필수! 꿈의가격실현!!96팩+16팩 더! 총 112팩(7box)',48800,'2014-10-03 17:40:00','2014-10-03 18:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29562528&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/528/29562528M.jpg',NULL,NULL),
	('CJ201410031840','퍼스트룩 에디션 네이키드 램스킨 재킷 (남성)',255200,'2014-10-03 18:40:00','2014-10-03 20:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29778375&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/375/29778375M.jpg',1,2),
	('CJ201410032040','바이엘라 남성 소프트 코어  니트 5종',78900,'2014-10-03 20:40:00','2014-10-03 21:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30025119&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/119/30025119M.jpg',1,2),
	('CJ201410032140','셉 코르셋 마스크팩 세트(12+2+크림1)',109000,'2014-10-03 21:40:00','2014-10-03 22:40:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30434268&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/268/30434268M.jpg',3,21),
	('CJ201410032240','포나리나 2014FW 최신상! 더 스페셜 6.5CM 히든힐 앵클 부츠 슈퍼스타',218000,'2014-10-03 22:40:00','2014-10-03 23:50:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30305871&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/871/30305871M.jpg',NULL,NULL),
	('CJ201410032350','상콤플렉스 플라잉브라패키지2 (미리주문시 팬티2종더)',169900,'2014-10-03 23:50:00','2014-10-04 01:00:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=28242490&pic=TALI02','http://itemimage.cjmall.com/goods_images/28/490/28242490M.jpg',NULL,NULL),
	('CJ201410040100','태항산 여행_10/15~31 (매일출발) ',499000,'2014-10-04 01:00:00','2014-10-04 02:10:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30550130&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/130/30550130M.jpg',NULL,NULL),
	('CJ201410040210','오키나와 3일_10/14,19,20,22,26,27',599000,'2014-10-04 02:10:00','2014-10-04 03:10:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30553919&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/919/30553919M.jpg',NULL,NULL),
	('CJ201410040310','라이크라에스뷰티 노와이어 프론트 클로즈 12종(01)',168000,'2014-10-04 03:10:00','2014-10-04 05:30:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=28230229&pic=TALI02','http://itemimage.cjmall.com/goods_images/28/229/28230229M.jpg',1,4),
	('CJ201410040530',' 인덱스위생도마4종+스마트칼블럭4종+<특별구성품>가이타이너 핸드블랜더',58000,'2014-10-04 05:30:00','2014-10-04 06:00:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30022679&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/679/30022679M.jpg',9,106),
	('CJ201410040600','에어워크 남성 보카시 카라 티셔츠',69000,'2014-10-04 06:00:00','2014-10-04 07:20:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29659696&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/696/29659696M.jpg',1,2),
	('CJ201410040720','다니엘크레뮤 14FW 남성 38 Limited Edition 스웨터 패키지(4종)',84000,'2014-10-04 07:20:00','2014-10-04 08:20:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=28392148&pic=TALI02','http://itemimage.cjmall.com/goods_images/28/148/28392148M.jpg',1,2),
	('CJ201410040820','(퀸)독일직수입 2014구스다운풀세트',1189000,'2014-10-04 08:20:00','2014-10-04 09:20:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30490684&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/684/30490684M.jpg',5,55),
	('CJ201410040920','◆왕톡 단독◆한샘 프리미엄 키친<베니스 2.4M >',2192700,'2014-10-04 09:20:00','2014-10-04 10:20:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=27302826&pic=TALI02','http://itemimage.cjmall.com/goods_images/27/826/27302826M.jpg',NULL,NULL),
	('CJ201410041130',' 바스크 니트(남성)',124720,'2014-10-04 11:30:00','2014-10-04 13:00:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30098738&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/738/30098738M.jpg',1,1),
	('CJ201410041300','(단품)샤기 멀티카페트',35000,'2014-10-04 13:00:00','2014-10-04 14:10:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30419218&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/218/30419218M.jpg',5,57),
	('CJ201410041410','3D 분리팬티 라쉬반 8종 (1종무료체험 포함!)',118000,'2014-10-04 14:10:00','2014-10-04 15:20:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=28106598&pic=TALI02','http://itemimage.cjmall.com/goods_images/28/598/28106598M.jpg',1,5),
	('CJ201410041520','바이엘라 남성 심플라인 티셔츠 컬렉션 6종',58900,'2014-10-04 15:20:00','2014-10-04 17:30:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=29734083&pic=TALI02','http://itemimage.cjmall.com/goods_images/29/083/29734083M.jpg',1,2),
	('CJ201410041730','2015년형 삼원온스파 양모 온수매트 퀸사이즈 ',197800,'2014-10-04 17:30:00','2014-10-04 18:45:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=30342827&pic=TALI02','http://itemimage.cjmall.com/goods_images/30/827/30342827M.jpg',4,38),
	('CJ201410042130','CJ오쇼핑독점론칭!!  가누다 베개 2종+냅 세트',583000,'2014-10-04 21:30:00','2014-10-04 22:30:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=23712288&pic=TALI02','http://itemimage.cjmall.com/goods_images/23/288/23712288M.jpg',5,50),
	('CJ201410042230',' 여성 김하늘 애플힙진_다크인디고+워싱블루Set',98000,'2014-10-04 22:30:00','2014-10-05 01:00:00','CJ','http://mw.cjmall.com/m/prd/detail_cate.jsp?app_cd=PDA&item_cd=26911247&pic=TALI02','http://itemimage.cjmall.com/goods_images/26/247/26911247M.jpg',NULL,NULL),
	('GS201410030100',' 이너 뷰티 겔',69000,'2014-10-03 01:00:00','2014-10-03 02:00:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14312708&lseq=397375','http://image.gsshop.com/image/14/31/14312708_R1.jpg',3,16),
	('GS201410030200','★최초 세일! 역대 최저가, 기네스 팰트로 14\' FW 리미티드 셀렉션★ 앙띠브 에코레더 트렌치 코트',79000,'2014-10-03 02:00:00','2014-10-03 02:25:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14030520&lseq=397375','http://image.gsshop.com/image/14/03/14030520_R1.jpg',NULL,NULL),
	('GS201410030225',' ★F/W 신상  애티튜드 테일러드 자켓 GS 단독 런칭',74000,'2014-10-03 02:25:00','2014-10-03 02:45:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14176638&lseq=397375','http://image.gsshop.com/image/14/17/14176638_R1.jpg',1,1),
	('GS201410030245',' ICC Home 에코스톤 손주물 냄비세트_리치골드 ICC Home 에코스톤 손주물 냄비세트_밀란그레이',169000,'2014-10-03 02:45:00','2014-10-03 03:45:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=13800411&lseq=397375','http://image.gsshop.com/image/13/80/13800411_R1.jpg',NULL,NULL),
	('GS201410030345',' 핀란드에서 온 퓨어네이처 종이호일 1+1세트 (롤형 6개 + 원형찜 4개 + 원형 10개) +토네이도쿡멀티슬라이서(GS가50,800원)+물티슈3종',68800,'2014-10-03 03:45:00','2014-10-03 04:50:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14122719&lseq=397375','http://image.gsshop.com/image/14/12/14122719_R1.jpg',NULL,NULL),
	('GS201410030450',' 스칼렛 18K 천연루비 5ct반지세트 스칼렛 18k천연루비 1ct반지',1290000,'2014-10-03 04:50:00','2014-10-03 06:00:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14258168&lseq=397375','http://image.gsshop.com/image/14/25/14258168_R1.jpg',NULL,NULL),
	('GS201410030600',' 최초!! FILA 옵티마 패키지 + 1종 + 본품 드로즈 1종(랜덤)+상품평1종(랜덤) 특집 ! FILA 트렁크 패키지5종 + 1종 + 본품 트렁크1종',71910,'2014-10-03 06:00:00','2014-10-03 07:15:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=13890153&lseq=397375','http://image.gsshop.com/image/13/89/13890153_R1.jpg',NULL,NULL),
	('GS201410030715','2014 FW 최신상 트레일화를 6만원대에!! 여)프로스펙스 연아 트레일화(Trail-Lite2)2014 FW 최신상 트레일화를 6만원대에!! 남)프로스펙스 연아 트레일화(Trail-Lite2)',69000,'2014-10-03 07:15:00','2014-10-03 08:15:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14353088&lseq=397375','http://image.gsshop.com/image/14/35/14353088_R1.jpg',NULL,NULL),
	('GS201410030815',' LG 울트라포밍스프레이_0827',52800,'2014-10-03 08:15:00','2014-10-03 09:20:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14147578&lseq=397375','http://image.gsshop.com/image/14/14/14147578_R1.jpg',9,110),
	('GS201410030920',' NEW 실크테라피 최대용량 특집 세트',67900,'2014-10-03 09:20:00','2014-10-03 10:25:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14406311&lseq=397375','http://image.gsshop.com/image/14/40/14406311_R1.jpg',3,22),
	('GS201410031025','  최고급 헝가리산 거위털 토퍼세트(킹) [나투어텍스] 최고급 헝가리산 거위털 토퍼세트(Q) [나투어텍스] 최고급 헝가리산 거위털 토퍼세트(SS)',1490000,'2014-10-03 10:25:00','2014-10-03 11:30:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=13834464&lseq=397375','http://image.gsshop.com/image/13/83/13834464_R1.jpg',NULL,NULL),
	('GS201410031130',' STONEFLY 여성 컴포트슈즈 MORGAN 위빙백+장지갑 (NEW) STONEFLY 남성 컴포트슈즈 MORGAN 위빙백+장지갑 (멀티) MORGAN 위빙 서류 가방',129000,'2014-10-03 11:30:00','2014-10-03 12:40:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14120549&lseq=397375','http://image.gsshop.com/image/14/12/14120549_R1.jpg',NULL,NULL),
	('GS201410031240',' 뮤제네프 케라젤 컬러',79800,'2014-10-03 12:40:00','2014-10-03 13:40:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14506152&lseq=397375','http://image.gsshop.com/image/14/50/14506152_R1.jpg',3,23),
	('GS201410031340','암-실속하나로암보험',NULL,'2014-10-03 13:40:00','2014-10-03 14:40:00','GS','http://m.gsshop.comjavascript:alert(\'방송 중에만 상담예약 가능 합니다.\\n상담예약을 남기시면 전문상담원을 통해 상품 안내를 받으실 수 있습니다.\\n무료상담신청 전화번호는 080-000-4545 입니다.\');','http://image.gsshop.com/mobile/mc/images/bohum/thum_bohum_default.gif',NULL,NULL),
	('GS201410031440',' ★★ 원더브라 런칭 6년 대특집! 원더브라49 Secret Agent 패키지 + 미란다커시크릿팬티3 + 최초 브라팬티2세트 (무작위)까지!',169000,'2014-10-03 14:40:00','2014-10-03 15:40:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14465850&lseq=397375','http://image.gsshop.com/image/14/46/14465850_R1.jpg',1,4),
	('GS201410031540',' NEW 실크테라피 최대용량 특집 세트',67900,'2014-10-03 15:40:00','2014-10-03 16:40:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14406311&lseq=397375','http://image.gsshop.com/image/14/40/14406311_R1.jpg',3,22),
	('GS201410031640','실비-실비플러스암플랜',NULL,'2014-10-03 16:40:00','2014-10-03 17:40:00','GS','http://m.gsshop.comhttp://insu.gsshop.com/Product.do?cmd=read&flag=info&isCMS=&company_cd=N13&product_cd=N13128&product_type=102&product_display_type=33&lseq=397375','http://image.gsshop.com/mobile/mc/images/bohum/thum_bohum_default.gif',NULL,NULL),
	('GS201410031740','  하루의 열매 베리너츠 30봉+30봉+30봉 특별추가 10봉에 10봉 더!! 총 110봉!!! [1등 김치 종가집] 종가집 포기김치 9.5kg + 총각김치 1kg 더!!!!!!',58900,'2014-10-03 17:40:00','2014-10-03 19:35:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=11789455&lseq=397375','http://image.gsshop.com/image/11/78/11789455_R1.jpg',NULL,NULL),
	('GS201410031935',' 2015년형 좌우 분리난방 온수매트  퀸+퀸(200 x 150cm) [일월 굿밤 온수매트 SALE!!]2015년형 좌우 분리난방 온수매트  퀸(200 x 150cm)+싱글((200 x 100cm) [일월 굿밤 온수매트]2015년형 좌우 분리난방 온수매트  퀸(200 x 150cm) [일월 굿밤 온수매트]2015년형 일월 온수매트  싱글(200 x 100cm)',348800,'2014-10-03 19:35:00','2014-10-03 20:40:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14492380&lseq=397375','http://image.gsshop.com/image/14/49/14492380_R1.jpg',NULL,NULL),
	('GS201410032040','바디프랜드 렌탈 안마의자',NULL,'2014-10-03 20:40:00','2014-10-03 21:40:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14353385&lseq=397375','http://image.gsshop.com/image/14/35/14353385_R1.jpg',9,NULL),
	('GS201410032140',' NEW 실크테라피 최대용량 특집 세트',67900,'2014-10-03 21:40:00','2014-10-03 22:40:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14406311&lseq=397375','http://image.gsshop.com/image/14/40/14406311_R1.jpg',3,22),
	('GS201410032240',' ★★ 원더브라 런칭 6년 대특집! 원더브라49 Secret Agent 패키지 + 미란다커시크릿팬티3 + 최초 브라팬티2세트 (무작위)까지!',169000,'2014-10-03 22:40:00','2014-10-03 23:50:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14465850&lseq=397375','http://image.gsshop.com/image/14/46/14465850_R1.jpg',1,4),
	('GS201410032350','★조성아 25주년 역대급 신상품! 新개념 캡슐 파운데이션! 조성아 앰핏파운데이션 스페셜 세트',99000,'2014-10-03 23:50:00','2014-10-04 01:00:00','GS','http://m.gsshop.com/prd/prd.gs?prdid=14512847&lseq=397375','http://image.gsshop.com/image/14/51/14512847_R1.jpg',NULL,NULL),
	('HM201410030615','카라 뉴실키블라우스1종',59900,'2014-10-03 06:15:00','2014-10-03 07:15:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2026999315&bfmtNo=201410033001&brodDt=20141003&brodStrtDtm=20141003061500&brodType=','http://image.hyundaihmall.com/static/3/9/99/26/2026999315_0_300.jpg',NULL,NULL),
	('HM201410030715','로즈버드 비비안 맥시멈볼륨 노와이어 1차',144900,'2014-10-03 07:15:00','2014-10-03 08:15:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027405050&bfmtNo=201410033002&brodDt=20141003&brodStrtDtm=20141003071500&brodType=','http://image.hyundaihmall.com/static/0/5/40/27/2027405050_0_300.jpg',1,4),
	('HM201410030920','2015년형 일월 듀얼하트 온수매트(퀸)',178800,'2014-10-03 09:20:00','2014-10-03 10:20:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027372272&bfmtNo=201410033004&brodDt=20141003&brodStrtDtm=20141003092000&brodType=','http://image.hyundaihmall.com/static/2/2/37/27/2027372272_0_300.jpg',4,38),
	('HM201410031020','2세대 휴롬원액기 HH-SBF11',358000,'2014-10-03 10:20:00','2014-10-03 11:20:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027322943&bfmtNo=201410033005&brodDt=20141003&brodStrtDtm=20141003102000&brodType=','http://image.hyundaihmall.com/static/9/2/32/27/2027322943_0_300.png',4,33),
	('HM201410031120','글라스락 더 네이처 칼라 세트',75800,'2014-10-03 11:20:00','2014-10-03 12:20:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027310183&bfmtNo=201410033006&brodDt=20141003&brodStrtDtm=20141003112000&brodType=','http://image.hyundaihmall.com/static/1/0/31/27/2027310183_0_300.jpg',NULL,NULL),
	('HM201410031220','AIA생명 (무)꼭 필요한 건강보험(갱신형)',NULL,'2014-10-03 12:20:00','2014-10-03 13:25:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2025460020&bfmtNo=201410033007&brodDt=20141003&brodStrtDtm=20141003122000&brodType=','http://image.hyundaihmall.com/static/0/0/46/25/2025460020_0_300.jpg',NULL,NULL),
	('HM201410031325','NEW 스웨덴 에그팩 스페셜 패키지',68870,'2014-10-03 13:25:00','2014-10-03 14:30:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027416507&bfmtNo=201410033008&brodDt=20141003&brodStrtDtm=20141003132500&brodType=','http://image.hyundaihmall.com/static/5/6/41/27/2027416507_0_300.jpg',NULL,NULL),
	('HM201410031430','2014 NEW 한줌견과 레드',59900,'2014-10-03 14:30:00','2014-10-03 15:40:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027324925&bfmtNo=201410033009&brodDt=20141003&brodStrtDtm=20141003143000&brodType=','http://image.hyundaihmall.com/static/9/4/32/27/2027324925_0_300.jpg',7,84),
	('HM201410031540','페리엘리스 뉴욕 가을 액티브웨어 6종',134100,'2014-10-03 15:40:00','2014-10-03 17:40:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2026896471&bfmtNo=201410033010&brodDt=20141003&brodStrtDtm=20141003154000&brodType=','http://image.hyundaihmall.com/static/4/6/89/26/2026896471_0_300.jpg',1,2),
	('HM201410031740','동부화재 큰병 이기는 건강보험',NULL,'2014-10-03 17:40:00','2014-10-03 18:40:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2026763972&bfmtNo=201410033011&brodDt=20141003&brodStrtDtm=20141003174000&brodType=','http://image.hyundaihmall.com/static/9/3/76/26/2026763972_0_300.jpg',NULL,NULL),
	('HM201410031840','빅마마 깜짝 폭립 핫 BBQ 500g*1팩',18000,'2014-10-03 18:40:00','2014-10-03 19:35:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2026800100&bfmtNo=201410033012&brodDt=20141003&brodStrtDtm=20141003184000&brodType=','http://image.hyundaihmall.com/static/1/0/80/26/2026800100_0_300.jpg',7,82),
	('HM201410031935','다본다 블랙박스 드림 16G',309000,'2014-10-03 19:35:00','2014-10-03 20:40:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027271427&bfmtNo=201410033013&brodDt=20141003&brodStrtDtm=20141003193500&brodType=','http://image.hyundaihmall.com/static/4/1/27/27/2027271427_0_300.jpg',4,42),
	('HM201410032040','아너스 듀얼회전 물걸레청소기',148000,'2014-10-03 20:40:00','2014-10-03 21:40:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027413933&bfmtNo=201410033014&brodDt=20141003&brodStrtDtm=20141003204000&brodType=','http://image.hyundaihmall.com/static/9/3/41/27/2027413933_0_300.jpg',4,32),
	('HM201410032140','(무)THE건강한치아보험(갱신형)',NULL,'2014-10-03 21:40:00','2014-10-03 22:40:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2025932008&bfmtNo=201410033015&brodDt=20141003&brodStrtDtm=20141003214000&brodType=','http://image.hyundaihmall.com/static/0/2/93/25/2025932008_0_300.jpg',NULL,NULL),
	('HM201410032240','피오코 이탈리안 디커부츠',163000,'2014-10-03 22:40:00','2014-10-04 01:00:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027238021&bfmtNo=201410033016&brodDt=20141003&brodStrtDtm=20141003224000&brodType=','http://image.hyundaihmall.com/static/0/8/23/27/2027238021_0_300.jpg',2,6),
	('HM201410040100','클라우디가든  로즈가든 백팩 미니',58410,'2014-10-04 01:00:00','2014-10-04 02:00:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2027270010&bfmtNo=201410033017&brodDt=20141003&brodStrtDtm=20141004010000&brodType=','http://image.hyundaihmall.com/static/0/0/27/27/2027270010_0_300.jpg',NULL,NULL),
	('HM201410040200','고박사 간고등어',40900,'2014-10-04 02:00:00','2014-10-04 06:15:00','HM','http://m.hyundaihmall.com/front/smItemDetailR.do?SectId=1003&ItemCode=2025215677&bfmtNo=201410033018&brodDt=20141003&brodStrtDtm=20141004020000&brodType=','http://image.hyundaihmall.com/static/6/5/21/25/2025215677_0_300.jpg',7,83),
	('HS201410030100','큐슈 3일 10/12~12/19 금 출발 큐슈 3일 10/12~12/19 일,화 출발 [기막힌 온천여행 실속패키지]큐슈 3일 10/12~12/19 월,수,목,토 출발 [기막힌 온천여행 실속패키지]',449000,'2014-10-03 01:00:00','2014-10-03 02:00:00','HS','http://m.hnsmall.com/goods/view/11184484','http://image.hnsmall.com/images/goods/484/11184484_r.jpg',NULL,NULL),
	('HS201410030200',' 권상우의 트래블자켓(남성)[BFL이월특가] 권상우의 트래블자켓(여성)',38900,'2014-10-03 02:00:00','2014-10-03 02:55:00','HS','http://m.hnsmall.com/goods/view/11150042','http://image.hnsmall.com/images/goods/042/11150042_r.jpg',NULL,NULL),
	('HS201410030255','썬라이즈 네오 밀폐블럭 1+1세트! 2015년형 신상품!  썬라이즈 네오 밀폐블럭 1세트 썬라이즈 네오블럭 4칸형 용기[단품] 썬라이즈 네오 밀폐블럭 담그미 특대형  [단품] 썬라이즈 네오 밀폐블럭 담그미 대형  ',78800,'2014-10-03 02:55:00','2014-10-03 03:53:00','HS','http://m.hnsmall.com/goods/view/11175810','http://image.hnsmall.com/images/goods/810/11175810_r.jpg',NULL,NULL),
	('HS201410030416','안동참마 8개월분 + 삼육두유 1박스(16팩) ',78000,'2014-10-03 04:16:00','2014-10-03 05:15:00','HS','http://m.hnsmall.com/goods/view/10809828','http://image.hnsmall.com/images/goods/828/10809828_r.jpg',NULL,NULL),
	('HS201410030515','2014년 캐치맙 밀대청소기 (28종)단품) 캐치맙 멀티클리너 10P 단품) 캐치맙 밀대용패드 10P ',58800,'2014-10-03 05:15:00','2014-10-03 06:15:00','HS','http://m.hnsmall.com/goods/view/11040863','http://image.hnsmall.com/images/goods/863/11040863_r.jpg',NULL,NULL),
	('HS201410030615','스팀보이 온수매트 퀸 스팀보이 온수매트 싱글',338000,'2014-10-03 06:15:00','2014-10-03 07:20:00','HS','http://m.hnsmall.com/goods/view/11182125','http://image.hnsmall.com/images/goods/125/11182125_r.jpg',5,50),
	('HS201410030720','요거베리 요거트 메이커+베이킹소다 미라클 베이킹소다 7종세트',38900,'2014-10-03 07:20:00','2014-10-03 08:15:00','HS','http://m.hnsmall.com/goods/view/11163207','http://image.hnsmall.com/images/goods/207/11163207_r.jpg',NULL,NULL),
	('HS201410030815','(여성)2014년 BFL뉴라이트런닝화(초특가)(남성)2014년 BFL뉴라이트런닝화(초특가)2014년 BFL 마로 아동런닝화 ',29900,'2014-10-03 08:15:00','2014-10-03 09:20:00','HS','http://m.hnsmall.com/goods/view/11136585','http://image.hnsmall.com/images/goods/585/11136585_r.jpg',NULL,NULL),
	('HS201410030920','(M) 비트 세트 일반형 (6+4+2 파격구성,베이킹 파우더 최다)(M) 비트 세트 드럼형 (6+4+2 파격구성,베이킹 파우더 최다)',75900,'2014-10-03 09:20:00','2014-10-03 10:20:00','HS','http://m.hnsmall.com/goods/view/11182130','http://image.hnsmall.com/images/goods/130/11182130_r.jpg',NULL,NULL),
	('HS201410031020','(m)콘스타 멀티블랜더 세트',38800,'2014-10-03 10:20:00','2014-10-03 11:30:00','HS','http://m.hnsmall.com/goods/view/11090131','http://image.hnsmall.com/images/goods/131/11090131_r.jpg',NULL,NULL),
	('HS201410031130','(샴푸 풀세트) 댕기머리 진기현 프리미엄(트리트먼트 혼합세트) 댕기머리 진기현 프리미엄 댕기머리 1세트(진기현프리미엄)',118000,'2014-10-03 11:30:00','2014-10-03 12:39:00','HS','http://m.hnsmall.com/goods/view/11180060','http://image.hnsmall.com/images/goods/060/11180060_r.jpg',NULL,NULL),
	('HS201410031241',' 뿌리컬 볼륨기(1+1)특집 패키지(무6)',58900,'2014-10-03 12:41:00','2014-10-03 13:40:00','HS','http://m.hnsmall.com/goods/view/11121495','http://image.hnsmall.com/images/goods/495/11121495_r.jpg',NULL,NULL),
	('HS201410031340','숀리 원더코어 스마트',68000,'2014-10-03 13:40:00','2014-10-03 14:39:00','HS','http://m.hnsmall.com/goods/view/10685138','http://image.hnsmall.com/images/goods/138/10685138_r.jpg',8,101),
	('HS201410031441','초특가 ! 해피콜 다이아몬드 후라이팬세트(단품)해피콜  20m 양수 냄비',58800,'2014-10-03 14:41:00','2014-10-03 15:40:00','HS','http://m.hnsmall.com/goods/view/10968290','http://image.hnsmall.com/images/goods/290/10968290_r.jpg',NULL,NULL),
	('HS201410031540','아이플라워유  패키지(풀세트)아이플라워유 [The Terrace] 패키지(3종)아이플라워유 [The Terrace] 패키지 3종아이플라워유 [The Terrace] 패키지(3종)아이플라워유 [The Terrace]  떡갈고무나무(FRP화분)아이플라워유 [The Terrace]  안시리움(FRP화분)아이플라워유 [The Terrace]  아레카야자(FRP화분)아이플라워유 [The Terrace]  알로카시아(FRP화분)아이플라워유 [The Terrace]  팔손이(FRP화분)',158000,'2014-10-03 15:40:00','2014-10-03 16:39:00','HS','http://m.hnsmall.com/goods/view/11180014','http://image.hnsmall.com/images/goods/014/11180014_r.jpg',NULL,NULL),
	('HS201410031641','F.페이지by페이지플린 슬림핏정장팬츠5종세트(A)이신우 블랜딩블라우스4종',58900,'2014-10-03 16:41:00','2014-10-03 17:40:00','HS','http://m.hnsmall.com/goods/view/11177149','http://image.hnsmall.com/images/goods/149/11177149_r.jpg',NULL,NULL),
	('HS201410031740','라자 9존 독립스프링 침대 킹(K)라자 9존 독립스프링 라텍스탑 침대 퀸(Q)라자 9존 독립스프링 라텍스탑 침대슈퍼싱글(SS)',478000,'2014-10-03 17:40:00','2014-10-03 18:39:00','HS','http://m.hnsmall.com/goods/view/11150194','http://image.hnsmall.com/images/goods/194/11150194_r.jpg',NULL,NULL),
	('HS201410031841','하루건강견과 베리&요거트 90봉+30봉 더!(총120봉)',58900,'2014-10-03 18:41:00','2014-10-03 19:35:00','HS','http://m.hnsmall.com/goods/view/10718145','http://image.hnsmall.com/images/goods/145/10718145_r.jpg',7,84),
	('HS201410031935','(m) Amazonia 아사이베리 8팩+방송중에만 5팩 더★방송사상최저가★',188000,'2014-10-03 19:35:00','2014-10-03 20:40:00','HS','http://m.hnsmall.com/goods/view/11057343','http://image.hnsmall.com/images/goods/343/11057343_r.jpg',NULL,NULL),
	('HS201410032040','한일 대용량 티타늄골드 믹서기 HMF-3500TG',138000,'2014-10-03 20:40:00','2014-10-03 21:40:00','HS','http://m.hnsmall.com/goods/view/11130194','http://image.hnsmall.com/images/goods/194/11130194_r.jpg',4,33),
	('HS201410032140','(m)오버나잇슬림 다이어트 2세트(8주)+1세트(4주) 더! ★ 방송 최저가(일)',167000,'2014-10-03 21:40:00','2014-10-03 22:40:00','HS','http://m.hnsmall.com/goods/view/11013717','http://image.hnsmall.com/images/goods/717/11013717_r.jpg',7,93),
	('HS201410032240','(퀸) 에어룸 거위털 페더베드 토퍼(킹) 에어룸 거위털 페더베드 토퍼(슈퍼싱글) 에어룸 거위털 페더베드 토퍼',78900,'2014-10-03 22:40:00','2014-10-03 23:50:00','HS','http://m.hnsmall.com/goods/view/11180339','http://image.hnsmall.com/images/goods/339/11180339_r.jpg',NULL,NULL),
	('HS201410032350','(m)필립스 음파칫솔 소닉케어 패밀리세트(단품)필립스 음파칫솔 소닉케어 (1인용)(단품)필립스 음파칫솔 칫솔모 5개(단품)필립스 커피머신',174000,'2014-10-03 23:50:00','2014-10-04 01:00:00','HS','http://m.hnsmall.com/goods/view/11176861','http://image.hnsmall.com/images/goods/861/11176861_r.jpg',NULL,NULL),
	('LH201410030050','[SS 샤이니] 일명 다이아몬드 빵빵 고데기 디지털! 1+1 행사',44910,'2014-10-03 00:50:00','2014-10-03 02:00:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12459411','http://image2.lotteimall.com/goods/11/94/45/12459411_M4.jpg',3,22),
	('LH201410030200','[COUPS] 베아르 루즈핏 자켓',80100,'2014-10-03 02:00:00','2014-10-03 02:20:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12455566','http://image2.lotteimall.com/goods/66/55/45/12455566_M4.jpg',1,1),
	('LH201410030220','(퀸)2015년형 일월 뉴항균 안심 온수매트',189800,'2014-10-03 02:20:00','2014-10-03 03:10:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12457742','http://image2.lotteimall.com/goods/42/77/45/12457742_M1.jpg',4,38),
	('LH201410030310','[12종]아디다스 라이트 브라팬티 패키지 12종',167000,'2014-10-03 03:10:00','2014-10-03 04:00:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12454820','http://image2.lotteimall.com/goods/20/48/45/12454820_M5.jpg',1,4),
	('LH201410030400','조낙 프렌치 스니커즈',78000,'2014-10-03 04:00:00','2014-10-03 04:50:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12456332','http://image2.lotteimall.com/goods/32/63/45/12456332_M.jpg',2,6),
	('LH201410030450','백수오 퀸 프리미엄 3세트(12주)+1세트(4주)',207950,'2014-10-03 04:50:00','2014-10-03 05:50:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12432019','http://image2.lotteimall.com/goods/19/20/43/12432019_M1.jpg',NULL,NULL),
	('LH201410030720','[마마인하우스by박홍근][킹]면 자수 차렵 침구세트',196110,'2014-10-03 07:20:00','2014-10-03 08:20:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12459845','http://image2.lotteimall.com/goods/45/98/45/12459845_M.jpg',5,55),
	('LH201410030820','프렘 바이 잇미샤 점퍼+베스트 세트',116100,'2014-10-03 08:20:00','2014-10-03 10:20:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12458410','http://image2.lotteimall.com/goods/10/84/45/12458410_M10.jpg',1,1),
	('LH201410031020','PRIMA CLASSE(프리마클라쎄) 지오 믹스 스카프 (P142SC002/P142SC003)',275610,'2014-10-03 10:20:00','2014-10-03 12:40:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12460095','http://image2.lotteimall.com/goods/95/00/46/12460095_M.jpg',2,NULL),
	('LH201410031240','[베리떼 익스테이] 마블 팩트 본품 8g * 2 + 팩트 리필 8g * 3 + 베리떼 정품 기초 3종 + 베리떼 3색 립 팔레트 + 무료체험분',75000,'2014-10-03 12:40:00','2014-10-03 13:40:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12459262','http://image2.lotteimall.com/goods/62/92/45/12459262_M.jpg',3,18),
	('LH201410031440','2014 F/W 한빛 목화솜 면 카페트 점보특대형',85400,'2014-10-03 14:40:00','2014-10-03 15:40:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12458344','http://image2.lotteimall.com/goods/44/83/45/12458344_M3.jpg',5,57),
	('LH201410031540','[2014년] NEW 한샘 시스템 붙박이장 3900mm(13자)',1485800,'2014-10-03 15:40:00','2014-10-03 16:40:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12444991','http://image2.lotteimall.com/goods/91/49/44/12444991_M.jpg',5,47),
	('LH201410031640','테팔 새티스팩션 후라이팬 4종 + 유리뚜껑 + 키친아트 스테인레스 1.2L 전기주전자',123000,'2014-10-03 16:40:00','2014-10-03 17:40:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12458821','http://image2.lotteimall.com/goods/21/88/45/12458821_M9.jpg',NULL,NULL),
	('LH201410031740','Dole 슈퍼씨드 시리즈 렌틸콩 1kg * 10봉',49900,'2014-10-03 17:40:00','2014-10-03 18:40:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12460297','http://image2.lotteimall.com/goods/97/02/46/12460297_M.jpg',NULL,NULL),
	('LH201410031935','BIF 보루네오 이플렉스 7존 독립스프링 침대 (킹)',799000,'2014-10-03 19:35:00','2014-10-03 20:40:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12454285','http://image2.lotteimall.com/goods/85/42/45/12454285_M.jpg',5,57),
	('LH201410032145','[혜박앤룬] 레이스 패치 스트라이프 셔츠+가디건',71100,'2014-10-03 21:45:00','2014-10-03 22:40:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12455576','http://image2.lotteimall.com/goods/76/55/45/12455576_M9.jpg',1,1),
	('LH201410032240','[ELLYMOND] 순금 쌍반지 18.75g',1964130,'2014-10-03 22:40:00','2014-10-03 23:50:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12459402','http://image2.lotteimall.com/goods/02/94/45/12459402_M.jpg',1,1),
	('LH201410032350','캐논 정품 DSLR EOS 700D 트리플렌즈팩 [18-55mm STM+40mm STM +55-250mm STM 렌즈]',1202050,'2014-10-03 23:50:00','2014-10-04 00:50:00','LH','http://m.lotteimall.com/goods/viewGoodsDetail.lotte?goods_no=12460087','http://image2.lotteimall.com/goods/87/00/46/12460087_M.jpg',4,30),
	('NS201410030820','리큅 식품건조기세트',117460,'2014-10-03 08:20:00','2014-10-03 09:25:00','NS','','http://image.nsmall.com/itemimages/7/204/P15287204.jpg',4,33),
	('NS201410030925','다이콘 거위털이불 퀸 세트',274820,'2014-10-03 09:25:00','2014-10-03 10:25:00','NS','','http://image.nsmall.com/itemimages/3/183/P13663183.jpg',5,55),
	('NS201410031025','메르비 마사지기세트',223470,'2014-10-03 10:25:00','2014-10-03 11:35:00','NS','','http://image.nsmall.com/itemimages/9/681/P15279681.jpg',NULL,NULL),
	('NS201410031135','닥터S 유산균17',154050,'2014-10-03 11:35:00','2014-10-03 12:40:00','NS','','http://image.nsmall.com/itemimages/4/827/P15364827.jpg',7,93),
	('NS201410031240','아이런스 엘라스틱 스니커즈',57420,'2014-10-03 12:40:00','2014-10-03 13:40:00','NS','','http://image.nsmall.com/itemimages/7/508/P15307508.jpg',2,6),
	('NS201410031340','종근당건강 오메가3 8박스/16개월+영국산 비타민C 1000 2병/4개월',118000,'2014-10-03 13:40:00','2014-10-03 14:40:00','NS','','http://image.nsmall.com/itemimages/9/074/P15359074.jpg',NULL,NULL),
	('NS201410031440','엘렌실라 달팽이크림세트',77220,'2014-10-03 14:40:00','2014-10-03 15:40:00','NS','','http://image.nsmall.com/itemimages/2/352/P15242352.jpg',3,16),
	('NS201410031540','깨끗한나라 순수3겹세트',29900,'2014-10-03 15:40:00','2014-10-03 16:45:00','NS','','http://image.nsmall.com/itemimages/2/004/P15382004.jpg',9,110),
	('NS201410031645','수협 손질오징어+양념',39900,'2014-10-03 16:45:00','2014-10-03 17:20:00','NS','','http://image.nsmall.com/itemimages/3/261/P15223261.jpg',NULL,NULL),
	('NS201410031720','남안동농협 햇고춧가루 5kg',117210,'2014-10-03 17:20:00','2014-10-03 17:55:00','NS','','http://image.nsmall.com/itemimages/0/168/P15240168.jpg',NULL,NULL),
	('NS201410031755','수제 어묵속 주먹밥 총32봉',38900,'2014-10-03 17:55:00','2014-10-03 18:30:00','NS','','http://image.nsmall.com/itemimages/3/955/P15243955.jpg',NULL,NULL),
	('NS201410031830','무이자 쿠쿠티타늄IH 10인용 / 본구성:압력밥솥 IH 10인용( / 특별구성:★사은품 3종-별도 배송 1',293180,'2014-10-03 18:30:00','2014-10-03 19:35:00','NS','','http://image.nsmall.com/itemimages/4/013/P15244013.jpg',NULL,NULL),
	('NS201410031935','정관장 홍삼활력 PLUS 7박스/7개월',321830,'2014-10-03 19:35:00','2014-10-03 20:40:00','NS','','http://image.nsmall.com/itemimages/1/641/P15341641.jpg',NULL,NULL),
	('NS201410032040','노비타 비데 슈퍼슬림',179000,'2014-10-03 20:40:00','2014-10-03 21:40:00','NS','','http://image.nsmall.com/itemimages/2/340/P15242340.jpg',9,NULL),
	('NS201410032140','해피콜 IH진공냄비세트',223470,'2014-10-03 21:40:00','2014-10-03 22:40:00','NS','','http://image.nsmall.com/itemimages/2/059/P15342059.jpg',9,106),
	('NS201410032240','지나송 피아니 커튼 대형',160440,'2014-10-03 22:40:00','2014-10-03 23:50:00','NS','','http://image.nsmall.com/itemimages/1/795/P15281795.jpg',NULL,NULL),
	('NS201410032350','니모샤워기 더블세트',66230,'2014-10-03 23:50:00','2014-10-04 00:55:00','NS','','http://image.nsmall.com/itemimages/1/961/P15341961.jpg',NULL,NULL),
	('NS201410040055','삼원온수매트 퀸+퀸',389640,'2014-10-04 00:55:00','2014-10-04 01:40:00','NS','','http://image.nsmall.com/itemimages/4/021/P15244021.jpg',4,38),
	('NS201410040140','스위스밀리터리 전동공구',108000,'2014-10-04 01:40:00','2014-10-04 02:00:00','NS','','http://image.nsmall.com/itemimages/0/033/P15150033.jpg',9,111);

/*!40000 ALTER TABLE `productInfo` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

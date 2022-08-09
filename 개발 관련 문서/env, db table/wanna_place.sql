-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: wanna
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place` (
  `address` varchar(500) NOT NULL,
  `category_code` varchar(45) NOT NULL,
  `category_name` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `place_name` varchar(45) NOT NULL,
  `place_url` varchar(500) DEFAULT NULL,
  `x` varchar(500) NOT NULL,
  `y` varchar(500) NOT NULL,
  PRIMARY KEY (`place_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place`
--

LOCK TABLES `place` WRITE;
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` VALUES ('경남 거제시 하청면 실전리 880-1','AT4','관광명소','055-637-0067','거제맹종죽테마공원','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MjFfMTAw%2FMDAxNjU4MzgzNDA1MzYw.4uxDwYkN7edh4_8CR9j84Vf6T78wsl7VEnC87XK_Oekg.-kYDCWMilLkS0BapaH5SnQkE1nOZD6EOsE05a7M6Kq4g.JPEG%2Fupload_5aa367ebf8b2843cd2bf8008f428ce5c.jpg','128.650526691036','34.967677855871'),('경남 거제시 일운면 지세포리 374-8','FD6','음식점','055-682-0111','거제보재기집','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220324_246%2F1648078469637xK5SY_JPEG%2Fupload_e722528979ecb2d51d6c4419ce7efee6.jpg','128.712018700413','34.8307218954075'),('경남 거제시 거제면 서정리 978-26','AT4','관광명소','0507-1412-6997','거제식물원 정글돔','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211012_220%2F1634016498108H0PYm_JPEG%2F%25BA%25F1%25B3%25BB%25B8%25AE%25B4%25C2%25C1%25A4%25BF%25F81.jpg','128.57822917272344','34.85673294234183'),('경남 거제시 일운면 소동리 478-1','AT4','관광명소','055-682-0330','거제씨월드','http://geojeseaworld.cdn3.cafe24.com/bel_210630.jpg?ver=2.0','128.701461400376','34.8358811032706'),('경남 거제시 일운면 구조라리 423-1','AT4','관광명소','055-639-3000','구조라해수욕장','https://blog.kakaocdn.net/dn/chJRr0/btrhgkAKNbq/zOsU3NBCy89I26NVKfcKzK/img.jpg','128.692890014526','34.8069653420412'),('경남 거제시 아주동 1699-12','FD6','음식점','055-681-2545','더꽃 본점','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211003_103%2F1633246710204Y7472_JPEG%2FHIy3KWf5_qpqNLiqsYX8cpRc.jpg','128.691315766472','34.8661321931067'),('경남 거제시 아주동 1699-11','PK6','주차장','','더꽃 본점 주차장',NULL,'128.691417695444','34.8663038180742'),('경남 거제시 일운면 와현리 622','AD5','숙박','055-730-5000','리베라호텔 거제','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI510875559.jpg&type=f190_128','128.704157071171','34.8113792901885'),('경남 거제시 일운면 구조라리 502','AT4','관광명소','','매미성','https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjFfMjEx/MDAxNTU4NDMxNTc2NTA0.0NLWdZ-QpiGDB21BdruZo3in718ncX2Ks2pM1HcFXRcg.rn9u_h8b1CdLd5KHUdEU1Ugmv0adMGRQ8Tl-y_QOy88g.JPEG.bear00381/SE-3b94de62-fa79-41f1-a00c-705e640e3da2.jpg?type=w800','128.7049836287088','34.96808253657398'),('경남 거제시 남부면 갈곶리 산 14-47','AT4','관광명소','','바람의언덕','https://t1.daumcdn.net/cfile/tistory/116E814A4E66427C24','128.663149179091','34.7446210175676'),('경남 거제시 장평동 444-3','AD5','숙박','055-631-2114','삼성호텔 거제','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI569217225.jpg&type=f190_128','128.61229586467869','34.896053934662454'),('경남 거제시 일운면 소동리 115','AD5','숙박','1588-4888','소노캄 거제','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI598039075.jpg&type=f190_128','128.7029871295136','34.84351151200175'),('경남 거제시 동부면 학동리 218-3','AD5','숙박','055-636-9114','스터번호텔','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI598012964.jpg&type=f190_128','128.643687925641','34.7777029920372'),('경남 거제시 남부면 갈곶리 산 21-20','AT4','관광명소','','신선대전망대','https://img.tnote.kr/upload/photo/2019/12/1576144806423.jpg','128.664779450284','34.7374965930189'),('경남 거제시 일운면 지세포리 927-6','FD6','음식점','010-5774-9600','쌤김밥','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTdfMjMz%2FMDAxNjE1OTY0MTQ5NzY1.3fvf5V8xAEhVc5aOxfK7Pm3DeUIvsoCqSyPfqWIeJ68g.VLowXFKZtdkAq1q_HjxO3pCgH60M-MuZYTL8T0i0oAEg.JPEG.wlth0606%2FKakaoTalk_20210317_134708198_05.jpg','128.70372783123887','34.829590963483376'),('경남 거제시 옥포동 330','AD5','숙박','','애드미럴호텔','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI510159752.jpg&type=f190_128','128.68814050598772','34.889940885505915'),('경남 거제시 일운면 지세포리 831-2','FD6','음식점','055-682-2468','어방가','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210123_144%2F1611330914787rliLN_JPEG%2FSRJNMj4zYnCz9Ub9vWk8KarR.jpg','128.701339772116','34.8333700673754'),('경남 거제시 장승포동 537-2','FD6','음식점','055-681-1445','예이제게장백반 본점','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170731_22%2F1501472107016TBrkz_JPEG%2F186678405769015_4.jpeg','128.7228514252528','34.86338573600259'),('경남 거제시 고현동 968-2','FD6','음식점','0507-1400-4187','오복미역 거제점','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201127_33%2F1606427670786jKfQl_JPEG%2FKxksprFHH9ZIMc9CgGpO1rxP.jpg','128.6203067094762','34.88966010239988'),('경남 거제시 동부면 학동리 495-2','AD5','숙박','055-636-3200','토모노야호텔&료칸','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI576962965.jpg&type=f190_128','128.639786264313','34.7783721021798'),('경남 거제시 연초면 오비리 209-6','FD6','음식점','055-632-1212','하면옥 본점','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190922_18%2F15691256012645NT2Y_JPEG%2FG3djaQRwvckeg9ZL9OHj5adx.jpg','128.623099046774','34.9043289110359'),('경남 거제시 동부면 학동리 295-1','AT4','관광명소','055-635-5421','학동흑진주몽돌해변','https://blog.kakaocdn.net/dn/b3kl9Q/btqDPX5p4g6/6kNKc3fUMQWLf9U7nzSql0/img.jpg','128.641526158522','34.7746677942101'),('경남 거제시 일운면 지세포리 776-5','FD6','음식점','055-681-5556','한꼬막두꼬막','https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201021_286%2F1603240553100apQJi_JPEG%2FoqYyAeRVtdyDkIgMiWy52xpS.JPG.jpg','128.7024448021691','34.83097885883589'),('경남 거제시 일운면 지세포리 788-4','PK6','주차장','','한꼬막두꼬막 주차장',NULL,'128.702242850952','34.8308320748689'),('경남 거제시 일운면 소동리 2-2','AD5','숙박','055-682-5252','호텔 상상','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI762873209.jpg&type=f190_128','128.7098245582535','34.84745323601392'),('경남 거제시 장승포동 426-33','AD5','숙박','055-681-9700','홈포레스트 호텔','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI710742022.jpg&type=f190_128','128.723977783331','34.8670577283403'),('경남 거제시 옥포동 1266','AD5','숙박','055-687-0998','홈포레스트리조트','https://search.pstatic.net/common/?src=http://media.hotelscombined.com/HI552302152.jpg&type=f190_128','128.6833749219777','34.9031870642114');
/*!40000 ALTER TABLE `place` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-09 17:38:19

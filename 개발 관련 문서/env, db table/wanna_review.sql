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
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `place_name` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `address` text,
  `score` int DEFAULT NULL,
  `img` text,
  `content` text,
  `_date` varchar(45) DEFAULT NULL,
  `deadline` text,
  `_like` varchar(100) DEFAULT '0',
  `id` int NOT NULL AUTO_INCREMENT,
  `verify` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES ('거제씨월드','고래를 좋아하는 우영우 ㅎㅎ','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:08:18','2022/08/15 14:08:18','0',1,1),('거제씨월드','고래를 좋아하는 우영우 ㅎㅎafasdfaf','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:11:47','2022/08/15 14:11:47','0',2,0),('거제씨월드','고래를 좋아하는 우영우 ㅎㅎafasdfaasdfsafasdfafdf','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:14:31','2022/08/15 14:14:31','0',3,1),('거제씨월드','고래를 좋아하는 ?','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:20:20','2022/08/15 14:20:20','0',4,1),('거제씨월드','고래를 좋아하는 돌ㅁㄴㄹㄴㄹㄴㅇㄴㄹ ?','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:25:30','2022/08/15 14:25:30','0',5,1),('거제씨월드','고래를 좋아하는 돌ㅁㄴㄹㄴㄹㄴㅇasfasdfsadfasdfㄴㄹ ?','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:29:02','2022/08/15 14:29:02','0',6,1),('거제씨월드','고래 ?','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:32:22','2022/08/15 14:32:22','0',7,1),('거제씨월드','고래 aaaaaa?','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:40:04','2022/08/15 14:40:04','0',8,0),('거제씨월드','마지막','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:44:25','2022/08/15 14:44:25','0',9,0),('거제씨월드','찐마지막','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:46:27','2022/08/15 14:46:27','0',10,0),('거제씨월드','찐마지ㅁㄹㄴㅁㄹ막','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:49:36','2022/08/15 14:49:36','0',11,1),('거제씨월드','찐마지ㅁㄹㄴㅁㄹ막asfsafsafsafadf','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:52:22','2022/08/15 14:52:22','0',12,0),('거제씨월드','찐마지ㅁㅇㅁ나ㅏ밀ㅣㅁ러제ㄹㅔㅏ','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:53:13','2022/08/15 14:53:13','0',13,1),('거제씨월드','찐마지ㅁㅇㅁ나ㅏ밀ㅣㅁ러제ㄹㅔㅏfalse','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 14:55:16','2022/08/15 14:55:16','0',14,0),('거제씨월드','찐마지ㅁㅇㅁ나ㅏ밀ㅣㅁ러제ㄹㅔㅏfalse진ㅏ?','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:02:59','2022/08/15 15:02:59','0',15,1),('거제씨월드','1','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:05:45','2022/08/15 15:05:45','0',16,1),('거제씨월드','2','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:07:15','2022/08/15 15:07:15','0',17,1),('거제씨월드','3','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:09:53','2022/08/15 15:09:53','0',18,0),('거제씨월드','4','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:12:46','2022/08/15 15:12:46','0',19,0),('거제씨월드','6','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:18:34','2022/08/15 15:18:34','0',20,1),('거제씨월드','마막 찬ㅓ','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:23:17','2022/08/15 15:23:17','0',21,1),('거제씨월드','반대','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:24:55','2022/08/15 15:24:55','0',22,0),('거제씨월드','우영우 4개 못봄','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:49:41','2022/08/15 15:49:41','0',23,1),('거제씨월드','우영우 4개 못봄','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 15:52:06','2022/08/15 15:52:06','0',24,0),('거제씨월드','우영우 4개 못봄','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 16:02:30','2022/08/15 16:02:30','0',25,0),('거제씨월드','우영우 6개 못봄','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 16:18:05','2022/08/15 16:18:05','0',26,0),('거제씨월드','우영우 6개 못봄ㅠ','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/08 16:40:19','2022/08/15 16:40:19','0',27,0),('거제씨월드','우영우 6개 못봄ㅠasfasfafasfasf','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/09 09:34:53','2022/08/16 09:34:53','0',28,1),('거제씨월드','우영우 6개 못봄ㅠasfasfafasfasf','우영우','0xE171F3Efdf39514412156FaF4BdF003202ec2218',4,'https://kr-mb.theepochtimes.com/assets/uploads/2020/06/6600-2.jpg','향유고래는 ...','2022/08/09 09:35:58','2022/08/16 09:35:58','0',29,0),('가게 상호 넣을거에요','asdfadsfasdfasfd','유저닉네임',NULL,5,'uploadedFiles/1660010795203__dlalwl1.jpeg','asfdadsfadsfasd','2022/08/09 11:06:35','2022/08/16 11:06:35','0',30,0),('가게 상호 넣을거에요','민','유저닉네임',NULL,1,'uploadedFiles\\1660015742315__bookchon.jpg','기','2022/08/09 12:29:02','2022/08/16 12:29:02','0',31,0);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
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

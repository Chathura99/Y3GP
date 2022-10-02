-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 02, 2022 at 04:59 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vws`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `requested_date` datetime DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `university_college` varchar(255) DEFAULT NULL,
  `id` bigint(20) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `FK1ja8rua032fgnk9jmq7du3b3a` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `address`, `requested_date`, `district`, `university_college`, `id`, `first_name`, `last_name`) VALUES
(1, '14, New Colombo road, Polgahawela', '2022-07-06 00:00:00', 'Kurunegala', 'Colombo', 1, 'ChathuraM', 'Manohara');

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

DROP TABLE IF EXISTS `announcement`;
CREATE TABLE IF NOT EXISTS `announcement` (
  `ann_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ann_id`),
  KEY `FKiyptpr2q3m60hxqwto4rpe5uv` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `announcement`
--

INSERT INTO `announcement` (`ann_id`, `category`, `content`, `date`, `title`, `user_id`) VALUES
(1, 'all', 'The regreen earth project on Deduru Oya Tank', '2022-09-13 00:00:00', 'Prject cancelled!', 1),
(2, 'guest', 'There is a new project called \"Adurata Eliyak\" ...', '2022-07-09 12:10:00', 'New proposed project was published!', 5),
(6, 'all', 'new content one', '2022-07-09 12:10:00', 'New event now!', 4),
(7, 'guest', 'content', '2022-07-09 12:10:00', 'New Project Proposal 2', 1),
(14, 'all', 'new content', '2022-07-21 04:19:00', 'New Project Proposal 1', 1),
(33, 'guest', 'Content . . .p', '2022-09-09 10:41:56', 'Title', 5),
(34, '', 'Content', '2022-09-09 10:43:27', 'Title', 1),
(35, '', '1', '2022-09-19 18:35:17', 'Title new one', 1);

-- --------------------------------------------------------

--
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
CREATE TABLE IF NOT EXISTS `authority` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_code` varchar(255) DEFAULT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `authority`
--

INSERT INTO `authority` (`id`, `role_code`, `role_description`) VALUES
(1, 'ADMIN', 'Admin role'),
(2, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(3, 'VOLUNTEER', 'Volunteer role'),
(4, 'VOLUNTEER', 'Volunteer role'),
(5, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(6, 'VOLUNTEER', 'Volunteer role'),
(7, 'VOLUNTEER', 'Volunteer role'),
(8, 'VOLUNTEER', 'Volunteer role'),
(9, 'VOLUNTEER', 'Volunteer role'),
(11, 'VOLUNTEER', 'Volunteer role'),
(12, 'VOLUNTEER', 'Volunteer role'),
(13, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(14, 'VOLUNTEER', 'Volunteer role'),
(15, 'VOLUNTEER', 'Volunteer role'),
(16, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(17, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(18, 'VOLUNTEER', 'Volunteer role'),
(19, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(21, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(22, 'VOLUNTEER', 'Volunteer role'),
(23, 'VOLUNTEER', 'Volunteer role'),
(24, 'VOLUNTEER', 'Volunteer role'),
(25, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(26, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(27, 'VOLUNTEER', 'Volunteer role'),
(28, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(29, 'VOLUNTEER', 'Volunteer role'),
(30, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(31, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(32, 'VOLUNTEER', 'Volunteer role'),
(33, 'VOLUNTEER', 'Volunteer role'),
(34, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(35, 'VOLUNTEER', 'Volunteer role'),
(36, 'VOLUNTEER', 'Volunteer role'),
(37, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(38, 'PROJECT_COORDINATOR', 'Project coordinator role'),
(39, 'VOLUNTEER', 'Volunteer role');

-- --------------------------------------------------------

--
-- Table structure for table `discussion_topic`
--

DROP TABLE IF EXISTS `discussion_topic`;
CREATE TABLE IF NOT EXISTS `discussion_topic` (
  `topic_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_by` varchar(255) DEFAULT NULL,
  `started_date` datetime DEFAULT NULL,
  `topic` varchar(255) DEFAULT NULL,
  `topic_description` varchar(255) DEFAULT NULL,
  `forum_id` bigint(20) DEFAULT NULL,
  `reply_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`topic_id`),
  KEY `FK111vrfdx6eu69sp34xd3akldj` (`forum_id`),
  KEY `FKgsdns82dobfqj1o2d3eiyv1mp` (`reply_id`),
  KEY `FKr5x45hxqa5cu4r9raf02lor1w` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
CREATE TABLE IF NOT EXISTS `event` (
  `event_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `end_date` datetime DEFAULT NULL,
  `no_of_volunteers` int(11) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `volunteer_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `coordinate` varchar(255) DEFAULT NULL,
  `event_coordinator_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `FKan4fyegy93oot7nvfo7suce71` (`project_id`),
  KEY `volunteer_id` (`volunteer_id`),
  KEY `FKh2wk6uybbaav8iq58h0ru6fsv` (`event_coordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`event_id`, `end_date`, `no_of_volunteers`, `place`, `start_date`, `status`, `project_id`, `volunteer_id`, `name`, `coordinate`, `event_coordinator_id`) VALUES
(1, '2022-08-04 00:00:00', 10, 'Nikaweratiya', '2022-10-13 00:00:00', 0, 1, 23, NULL, NULL, NULL),
(2, '2022-09-04 00:00:00', 20, 'Kurunegala', '2022-09-04 00:00:00', 1, 5, 1, NULL, NULL, NULL),
(3, '2022-09-30 00:00:00', 25, 'Jaffna', '2022-09-30 00:00:00', 0, 2, 25, NULL, NULL, NULL),
(4, '2022-08-04 00:00:00', 10, 'Nikaweratiya', '2022-10-13 00:00:00', 0, 3, 23, NULL, NULL, NULL),
(5, '2022-09-04 00:00:00', 20, 'Kurunegala', '2022-09-04 00:00:00', 1, 4, 1, NULL, NULL, NULL),
(6, '2022-09-04 00:00:00', 20, 'Kurunegala', '2022-09-21 00:00:00', 1, 4, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `feedback_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `reply` varchar(255) DEFAULT NULL,
  `event_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`feedback_id`),
  KEY `FKjwhm48sj8827gyscux00ftf2n` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

DROP TABLE IF EXISTS `forum`;
CREATE TABLE IF NOT EXISTS `forum` (
  `forum_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_by` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `topic_id` bigint(20) DEFAULT NULL,
  `reply_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`forum_id`),
  KEY `FKf38upovl3v5qu8u5eb7tl2tbc` (`topic_id`),
  KEY `FK41f0tta5bofptbjc110pkufi0` (`reply_id`),
  KEY `FK2jbcsk5jpppjhwh8nmike6vw1` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `guest_user_feedback`
--

DROP TABLE IF EXISTS `guest_user_feedback`;
CREATE TABLE IF NOT EXISTS `guest_user_feedback` (
  `feedback_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`feedback_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `handle_project`
--

DROP TABLE IF EXISTS `handle_project`;
CREATE TABLE IF NOT EXISTS `handle_project` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `assigned_date` datetime DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `coordinator_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKen3nxlfjg897wgvnlpq4drodi` (`project_id`),
  KEY `FKfummu66p4akk882qgdne7r2su` (`coordinator_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `join_request`
--

DROP TABLE IF EXISTS `join_request`;
CREATE TABLE IF NOT EXISTS `join_request` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `requested_date` datetime DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `university_college` varchar(255) DEFAULT NULL,
  `nic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `join_request`
--

INSERT INTO `join_request` (`id`, `address`, `requested_date`, `district`, `email`, `first_name`, `last_name`, `phone_number`, `status`, `university_college`, `nic`) VALUES
(23, 'Alawwa', '2022-07-06 00:00:00', 'Kurunegala', 'an@gmail.com', 'Akesh', 'Nirwan', '+94752145875', 1, 'Colombo', '845789545v'),
(69, 'Polgahawela', '2022-08-12 00:00:00', 'Kurunegala', '2019cs160@stu.ucsc.cmb.ac.lk', 'Chathura', 'Senevirathne', '+94752145875', 1, 'Colombo', '985457555V'),
(77, 'New Colombo road, Polgahawela', '2022-08-18 22:00:12', 'Kurunegala', 'chathura.mano@gmail.com', 'Chathura', 'Senevirathne', '0702534588', 1, 'Colombo', '985457557v'),
(79, 'Polgahawela', '2022-08-24 23:23:23', 'Kurunegala', 'sd@gmail.com', 'Sudheera', 'Dilshani', '0702534588', 1, 'Jaffna', '985457555V'),
(80, 'Polgahawela', '2022-08-25 08:18:30', 'Kurunegala', 'chathurass@gmail.com', 'Malik', 'Senevirathne', '0702534588', 0, 'Colombo', '985457555V'),
(83, 'New Colombo road, Polgahawela', '2022-08-25 10:19:03', 'Kurunegala', 'chathura.manoharas@gmail.com', 'Malindu', 'Senevirathne', '0702534588', 1, 'Colombo', '985457555V'),
(84, 'Polgahawela', NULL, 'Kurunegala', '2019@stu.ucsc.cmb.ac.lk', 'Chathura', 'Senevirathne', '0702534588', 1, 'Colombo', '995869541V'),
(85, 'Polgahawela', '2022-09-03 22:46:32', 'Kurunegala', 'ccc@stu.ucsc.cmb.ac.lk', 'Chathura', 'Senevirathne', '0702534588', 1, 'Colombo', '995869541V'),
(86, 'Giriulla', '2022-09-04 21:49:08', 'Kurunegala', 'sumudu@gmail.com', 'Sumudu', 'Perera', '+94702534789', 1, 'Colombo', NULL),
(87, 'Polgahawela', '2022-09-09 18:22:20', 'Kurunegala', 'ls@gmail.com', 'Lakmi', 'Sadeepa', '0702534588', 1, 'Colombo', NULL),
(88, 'Kuchchaweli', '2022-09-19 21:44:54', 'Jaffna', 'p@gmail.com', 'Pasidu', 'Hadagama', '0714455865', 1, 'Colombo', '985698541v'),
(90, 'Deniyaya,Mathara', '2022-09-19 21:49:36', 'Mathara', 'ss@gmail.com', 'Sadun', 'Silva', '0714455865', 1, 'Peradeniya', '985457555v');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
CREATE TABLE IF NOT EXISTS `notification` (
  `notification_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `view` varchar(255) DEFAULT NULL,
  `view_group` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`notification_id`),
  KEY `FKb0yvoep4h4k92ipon31wmdf7e` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `participate_event`
--

DROP TABLE IF EXISTS `participate_event`;
CREATE TABLE IF NOT EXISTS `participate_event` (
  `event_id` bigint(20) NOT NULL,
  `volunteer_id` bigint(20) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`event_id`,`volunteer_id`),
  KEY `FK4wjas6o6sapxq3jbpeq9rhfmb` (`volunteer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `participate_event`
--

INSERT INTO `participate_event` (`event_id`, `volunteer_id`, `status`) VALUES
(1, 10, 0),
(1, 20, 0),
(1, 26, 0);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `project_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `president_id` bigint(20) DEFAULT 1,
  `volunteer_id` bigint(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `coordinator_id` bigint(20) DEFAULT NULL,
  `event_per_year` bigint(20) DEFAULT NULL,
  `proposed_date` datetime DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  KEY `FKae6j82s9g8edduqm0dclci82r` (`president_id`),
  KEY `FK61khxou3rh5tm1ucxump2y8bf` (`volunteer_id`),
  KEY `FKe7m52px5rhix6wbiaewj6e0n8` (`coordinator_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `description`, `name`, `start_date`, `president_id`, `volunteer_id`, `status`, `coordinator_id`, `event_per_year`, `proposed_date`) VALUES
(1, 'Mathematical seminar', 'Ganitha Saviya', '2022-09-08 00:00:00', 1, 23, '1', 6, 50, NULL),
(2, 'Plantaion', 'Re-Green Earth', '2022-03-24 00:00:00', 1, 2, '1', 2, 10, NULL),
(3, 'Blood donation', 'Lohithuppada', '2022-03-24 00:00:00', 1, 21, '1', 7, 2, '2022-07-05 00:00:00'),
(4, 'Grade 5 Scholarship', 'Pahe Hapan', '2022-03-24 00:00:00', 1, 21, '1', 2, 500, '2022-07-15 00:00:00'),
(5, 'University course selection guidance', 'Sarasavi Piyageta', '2022-03-24 00:00:00', 1, 21, '1', 2, 1000, '2022-07-05 00:00:00'),
(6, 'Power supply campaign', 'Adurata Eliyak', '2022-03-24 00:00:00', 1, 21, '1', 7, 1000, '2022-07-05 00:00:00'),
(7, 'Description . . . ', 'Sisu Mediya', '2022-03-24 00:00:00', 1, 15, '1', 33, 50, '2022-07-05 00:00:00'),
(8, 'House Development Project', 'Hisata Sewanak', '2022-09-08 00:00:00', 1, 30, '1', 60, 3, '2022-09-04 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `project_coordinator`
--

DROP TABLE IF EXISTS `project_coordinator`;
CREATE TABLE IF NOT EXISTS `project_coordinator` (
  `coordinator_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `university_college` varchar(255) DEFAULT NULL,
  `id` bigint(20) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`coordinator_id`),
  KEY `FKlwf923w8lu97uaok949h6xwxv` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_coordinator`
--

INSERT INTO `project_coordinator` (`coordinator_id`, `address`, `district`, `university_college`, `id`, `first_name`, `last_name`) VALUES
(2, 'Rideegama, Kurunegala', 'Kurunegala', 'Colombo', 4, 'Yashodha', 'Subhasinghe'),
(3, 'Bandaragama', 'Gampaha', 'Colombo', 5, 'Malik', 'Wijesooriya'),
(5, 'Koswatta', 'Gampaha', 'Colombo', NULL, 'Ravindu', 'Medegama'),
(6, 'Polgahawela', 'Kurunegala', 'Colombo', NULL, 'Kamal', 'Amarasinghhe'),
(7, 'Kurunegala', 'Kurunegala', 'Colombo', NULL, 'Chamara', 'Nilhan'),
(9, 'Colombo road, Nugegoda', 'Kurunegala', 'Colombo', 44, 'Shan', 'Dilranga'),
(17, 'Alawwa', 'Kurunegala', 'Colombo', 23, 'Akesh', 'Nirwan'),
(18, 'Polgahawela', 'Kurunegala', 'Colombo', 32, 'Charman', 'Silva'),
(19, 'Polgahawela', 'Kurunegala', 'Jaffna', 49, 'Sudheera', 'Dilshani'),
(23, 'Polgahawela', 'Kurunegala', 'Colombo', 79, 'Lakmi', 'Sadeepa'),
(24, 'Anuradhapura', 'Kurunegala', 'Colombo', 53, 'Chamod', 'Attanage'),
(25, 'New Colombo road, Polgahawela', 'Kurunegala', 'Colombo', 48, 'Chathura', 'Senevirathne'),
(26, 'New Colombo road, Polgahawela', 'Kurunegala', 'Colombo', 58, 'Malindu', 'Senevirathne'),
(27, 'Polgahawela', 'Kurunegala', 'Colombo', 45, 'Kamal', 'Amarasinghhe'),
(28, 'Kandy', 'Kurunegala', 'Colombo', 22, 'Nimantha', 'Manujaya'),
(29, 'Polgahawela', 'Kurunegala', 'Colombo', 55, 'Malik', 'Senevirathne'),
(33, 'Polgahawela', 'Kurunegala', 'Colombo', 56, 'malindu', 'Senevirathne'),
(38, 'Dambadeniya', 'Kurunegala', 'Colombo', 37, 'Sanajana', 'Rajapaksha'),
(42, 'Alawwa', 'Kurunegala', 'Colombo', 70, 'Akesh', 'Nirwan'),
(43, 'Alawwa', 'Kurunegala', 'Colombo', 70, 'Akesh', 'Nirwan'),
(44, 'Polgahawela', 'Kurunegala', 'Colombo', 31, 'chathu', 'manohara'),
(46, 'Anuradhapura', 'Kurunegala', 'Colombo', 53, 'Chamod', 'Attanage'),
(47, 'Colombo road, Nugegoda', 'Kurunegala', 'Colombo', 44, 'Shan', 'Dilranga'),
(49, 'Polgahawela', 'Kurunegala', 'Colombo', 79, 'Lakmi', 'Sadeepa'),
(60, 'Kuchchaweli', 'Jaffna', 'Colombo', 81, 'Pasidu', 'Hadagama');

-- --------------------------------------------------------

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
CREATE TABLE IF NOT EXISTS `reply` (
  `reply_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `replied_date` datetime DEFAULT NULL,
  `reply_description` varchar(255) DEFAULT NULL,
  `topic_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`reply_id`),
  KEY `FKoyv38kobf6ntepkhsvre52smc` (`topic_id`),
  KEY `FKapyyxlgntertu5okpkr685ir9` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `scholarship`
--

DROP TABLE IF EXISTS `scholarship`;
CREATE TABLE IF NOT EXISTS `scholarship` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `requested_date` datetime DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `nic` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `scholarship_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_on` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `user_key` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_lqjrcobrh9jc8wpcar64q1bfh` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `created_on`, `email`, `enabled`, `first_name`, `last_name`, `user_key`, `phone_number`, `updated_on`, `user_name`, `profile_pic`) VALUES
(1, '2022-09-06 00:00:00', 'chathura999@gmail.com', b'1', 'ChathuraM', 'Manohara', '$2a$10$XYYKHVopGXI/u4JrmEvUtuxmiph.1FGPG2sMhLhueZQQjybgfQc1m', '+94702534789', NULL, 'Chathura', NULL),
(3, '2022-06-23 00:00:00', 'ravi@gmail.com', b'1', 'Ravindu', 'Medegama', '$2a$10$8rFrrdnKvX7YCy1B0Vn/4Oz3LsKRbjJvQj2gZFB/jmOtVZAh23qyq', '+94757894521', NULL, 'Ravindu', NULL),
(4, NULL, 'yash@gmail.com', b'1', 'Yashodha', 'Subhasinghe', '$2a$10$fZPSkQ9iczMOzDqx2HPEGeJLMQOkOXq7X4l.j8uelrfA7a08pQJuq', '+94757894521', NULL, 'Yashodha', NULL),
(5, NULL, 'malik@gmail.com', b'1', 'Malik', 'Wijesooriya', '$2a$10$rwHkHhdwaDgGzONKsbAR/Ou9Q8nyqf6LKbSRjuzAzC5i7Y5kBJUsu', '+94757894777', NULL, 'Malik', NULL),
(6, NULL, 'sd@gmail.com', b'0', 'Shan', 'Dilranga', '$2a$10$FBcAfc39j9PxhJljhwIoCepaMbFWH.eoiPp/gkqMKMmj6dT.wFFYu', '+94757894777', NULL, 'Shan', NULL),
(7, NULL, 'mc@gmail.com', b'1', 'Madhura', 'Chamodara', '$2a$10$O2ZhWJYgRnHD.OV/il0a1e2PNUlM9Loz2V/LNCRn0oRJFqmG5qBv6', '+94757894777', NULL, 'Madhura', NULL),
(8, '2022-07-21 23:31:00', 'nm@gmail.com', b'1', 'Nipuna', 'Manujaya', '$2a$10$INVO24hM7BiufqD0Uiew/eHZ31/zpUNEOe2kQiyybqcPAatUFbf9y', '+94752145875', NULL, 'NipunaManujaya', NULL),
(10, NULL, 'chathura.madura11@gmail.com', b'1', 'Kalana', 'Manujaya', '$2a$10$BQq0XCt4YMqqBhHVfXQSd.lwDJbULzmvzry9Zc5TUyl3Cd7HE2F5S', '+94752145875', NULL, 'Kalana', NULL),
(11, NULL, 'cn@gmail.com', b'1', 'Chamara', 'Nilhan', '$2a$10$98f49XGvcgm8R1ACmJkEdujkM6DK58UE7lAUEZD2WExOgQLyq7J5q', '+94752145875', NULL, 'Chamara', NULL),
(17, NULL, 'kw@gmail.com', b'1', 'Kasun', 'Wishwajith', '$2a$10$L6f9DENFjtuENgu1iAZ7deCWHtNpnzgf2RHK4JFEgVXlqAo3yvnlW', '+94752145875', NULL, 'Kasun', NULL),
(22, NULL, 'am@gmail.com', b'1', 'Nimantha', 'Manujaya', '$2a$10$lNfQqUsWdYzCMXqxuxlF0uibq8HL609chetgPDuqFLsyW1Jg16aa.', '+94752145875', NULL, 'Nimantha', NULL),
(23, NULL, 'an@gmail.com', b'1', 'Akesh', 'Nirwan', '$2a$10$3WDrH7ufmMZzo3nr9lcyrOV33rMi.tH8QxbBQ6LGWWuMurewHoxj6', '+94752145875', NULL, 'Akesh', NULL),
(28, NULL, 'c@gmail.com', b'1', 'chathu', 'manohara', '$2a$10$1Dmqu6riGfpxe7vPnUIfhuLwYThLeke/9YMM.9iXj7KqJLgIVe6KG', '0715248569', NULL, 'chathu', NULL),
(31, NULL, 'ccc123@gmail.com', b'1', 'chathu', 'manohara', '$2a$10$aCZnHbvM0k8yyoRe3ZJE1OQCDC2cWyrWsAUP0Z4C4awqptuo4RczK', '0715248569', NULL, 'chathu0', NULL),
(32, '1899-11-06 00:00:00', 'ccc123@gmail.com', b'1', 'Charman', 'Silva', '$2a$10$kTdFSe1IaH09nRHD9a0A7eXOUq36WXIycQJpFSBiwKWjd7EQ8vxE2', '0715248569', NULL, 'chathu23', NULL),
(36, NULL, 'kw@gmail.com', b'1', 'Kasun', 'Wishwajith', '$2a$10$iketqsdmG4j/xSqpXwn/DOpdM62oC0MtaT1TPdFUe269piCKM5nNi', '+94752145875', NULL, 'Kasun6', NULL),
(37, '1899-11-13 00:00:00', 'sr@gmail.com', b'1', 'Sanajana', 'Rajapaksha', '$2a$10$.8Dt58lHZRt39DhsTq8oPuNm3U5AZH.ccQNgbvFZ8p/vI8qUUJyEm', '+94702534789', NULL, 'Sanajana74', NULL),
(40, NULL, 'shandilranga@gmail.com', b'0', 'Shan', 'Dilranga', '$2a$10$7ZBqxlyKSc1d6uM.kN/8POTtOfI12xatbLKNNTwnGlhCHV4BXUb9e', '+94702534789', NULL, NULL, NULL),
(44, NULL, 'shandilranga62@gmail.com', b'1', 'Shan', 'Dilranga', '$2a$10$L50p4B7T7vOVdf9JAI2k..EP6lgZ7Dmeba74vXvCw8tQenQXAqgBi', '+94702534789', NULL, 'Shan75', NULL),
(45, '2022-09-07 00:00:00', 'kamalk@gmail.com', b'1', 'Kamal', 'Amarasinghhe', '$2a$10$233xwXa4nHIs1Wshf.XX6ebxo0b1s8QnzqYQj79X7AHtIR.3IYFVC', '0702534588', NULL, 'Kamal72', NULL),
(46, NULL, 'am@gmail.com', b'1', 'Nimantha', 'Manujaya', '$2a$10$yOChV8ieeGyboX6pWy9ROeRTPIqFFlGVE7R65xC/gSLe7cjriEBt2', '+94752145875', NULL, 'Nimantha22', NULL),
(47, NULL, 'madurac.senevirathne@gmail.com', b'1', 'madhura', 'Senevirathne', '$2a$10$n0FtWj9O3rejveSe4ZXgh.QnwhjgxMUrGzZTx6Ma6Rp6RNaslgeze', '0702534588', NULL, 'madhura76', NULL),
(48, NULL, 'chathura.manars@gmail.com', b'1', 'Chathura', 'Senevirathne', '$2a$10$wcI/GOUWcAxSx/ilmAaYJuLFaPfhJ4bsSWbzKv67nMs4oGKKXA0uC', '0702534588', NULL, 'Chathura77', NULL),
(49, NULL, 'Chathua.manoha@gmail.com', b'1', 'Sudheera', 'Dilshani', '$2a$10$mCuFPvNqOSsQwxI2RWLnoOKKAtjH40/ZvfkY5dINLNtPyiNp4wK4O', '0702534588', NULL, 'Sudheera78', NULL),
(51, NULL, 'sd@gmail.com', b'0', 'Sudheera', 'Dilshani', '$2a$10$CxNZyRHcPuHPFQsRVz8TIOljn8VtF5f1F6cMsG4IAO9lJTL4UKvpW', '0702534588', NULL, 'Sudheera79', NULL),
(53, NULL, 'ca@gmail.com', b'1', 'Chamod', 'Attanage', '$2a$10$lKvmbuLJ/Sv.pb4vavljUeRwKHgdSuSF9z/C4j8q0nbE6fgjtZPaq', '+94752145875', NULL, 'Chamod24', NULL),
(55, NULL, 'chathuras@gmail.com', b'1', 'Malik', 'Senevirathne', '$2a$10$XfPyDykoKQE8OXkg8rPytuakjLGrLnGtBKjtAyMXMDH.cuHTcUmiG', '0702534588', NULL, 'Malik81', NULL),
(56, NULL, 'chathura@gmail.com', b'1', 'malindu', 'Senevirathne', '$2a$10$JbCBOvfjVr6k8quW5gQGwev1j8C9gJ58PTICLJruVdWTXvo1dVKia', '0702534588', NULL, 'malindu82', NULL),
(58, NULL, 'chathura.manoharas@gmail.com', b'1', 'Malindu', 'Senevirathne', '$2a$10$ss6So2jjk7wnZx0rlVlrAOWxUwXBW.ZaFIZZErDfZNVQAyRCk4vVO', '0702534588', NULL, 'Malindu83', NULL),
(60, NULL, 'chathurass@gmail.com', b'1', 'Malik', 'Senevirathne', '$2a$10$aZtkjSEuaFguuAkUHReXSewjuGCV9TFz/CW9KBAryJZx3GBCmx5YG', '0702534588', NULL, 'Malik80', NULL),
(61, NULL, '2019cs160@stu.ucsc.cmb.ac.lk', b'0', 'Chathura', 'Senevirathne', '$2a$10$TTlbm6sCRZnjoJabe5g/GOUGp5UWh0rWv8F33fUc3yHV6Ji4Im3Di', '+94752145875', NULL, 'Chathura69', NULL),
(70, NULL, 'an@gmail.com', b'1', 'Akesh', 'Nirwan', '$2a$10$W.lbtIuGvutsYD4mDuvEzu9EDSqjajskOBgoxI.ov9TZwLJezhTI6', '+94752145875', NULL, 'Akesh23', NULL),
(74, '2022-09-09 18:19:56', 'sumudu@gmail.com', b'0', 'Sumudu', 'Perera', '$2a$10$NDiqAhKbrj1/779j.Sf8FeCdReJZWK/e8yA3MJ2nUUjygq7wZSb06', '+94702534789', '2022-09-09 18:19:56', 'Sumudu86', NULL),
(76, '2022-09-09 18:20:52', 'c@stu.ucsc.cmb.ac.lk', b'0', 'Chathura', 'Senevirathne', '$2a$10$Ob9z0Qn0UAXl70s1mnWVIeQw.CcCfk9t9PPPITniaJDMYBASZf0zy', '0702534588', '2022-09-09 18:20:52', 'Chathura85', NULL),
(79, '2022-09-09 18:22:36', 'ls@gmail.com', b'0', 'Lakmi', 'Sadeepa', '$2a$10$iQWocayYqA35RX7m.9.9n.L/1khueS5GCGan6Pn/W.zG8Z3o0pQqe', '0702534588', '2022-09-09 18:22:36', 'Lakmi87', NULL),
(81, '2022-09-19 21:46:26', 'p@gmail.com', b'1', 'Pasidu', 'Hadagama', '$2a$10$dXfmj4gxlw8r5jSqq2pz4edcgvzu36i9GsyDhVSDC8c3nfPu/GnJK', '0714455865', '2022-09-19 21:46:26', 'Pasidu88', NULL),
(82, '2022-09-19 21:50:07', 'ss@gmail.com', b'1', 'Sadun', 'Silva', '$2a$10$Wznfz5dy3uUbgf5eoXRgce.oWa5VHsdB6X3Zgg9bRid7Gh7thrbA6', '0714455865', '2022-09-19 21:50:07', 'Sadun90', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_authority`
--

DROP TABLE IF EXISTS `user_authority`;
CREATE TABLE IF NOT EXISTS `user_authority` (
  `user_id` bigint(20) NOT NULL,
  `authorities_id` bigint(20) NOT NULL,
  KEY `FK6dpt8lan69laxao64clv8nnlm` (`authorities_id`),
  KEY `FKpqlsjpkybgos9w2svcri7j8xy` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_authority`
--

INSERT INTO `user_authority` (`user_id`, `authorities_id`) VALUES
(1, 1),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(10, 9),
(11, 11),
(17, 12),
(22, 13),
(23, 14),
(28, 15),
(31, 16),
(32, 17),
(36, 18),
(37, 19),
(44, 21),
(45, 22),
(46, 23),
(47, 24),
(48, 25),
(49, 26),
(51, 27),
(53, 28),
(55, 29),
(56, 30),
(58, 31),
(60, 32),
(61, 33),
(70, 34),
(74, 35),
(76, 36),
(79, 37),
(81, 38),
(82, 39);

-- --------------------------------------------------------

--
-- Table structure for table `volunteer`
--

DROP TABLE IF EXISTS `volunteer`;
CREATE TABLE IF NOT EXISTS `volunteer` (
  `volunteer_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `requested_date` datetime DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `university_college` varchar(255) DEFAULT NULL,
  `id` bigint(20) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `coordinator_or_not` bigint(20) DEFAULT 0,
  PRIMARY KEY (`volunteer_id`),
  KEY `FKswuwica4uqf616rdsmhexhrfc` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `volunteer`
--

INSERT INTO `volunteer` (`volunteer_id`, `address`, `requested_date`, `district`, `university_college`, `id`, `first_name`, `last_name`, `coordinator_or_not`) VALUES
(1, 'Koswatta', '2022-07-03 00:00:00', 'Gampaha', 'Colombo', 3, 'Ravindu', 'Medegama', 0),
(2, 'Polgahawela', '2022-07-06 00:00:00', 'Kurunegala', 'Colombo', 10, 'Kalana', 'Manujaya', 1),
(3, 'Kurunegala', NULL, 'Kurunegala', 'Colombo', 11, 'Chamara', 'Nilhan', 1),
(4, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 17, 'Kasun', 'Wishwajith', 0),
(5, 'Kandy', NULL, 'Kurunegala', 'Colombo', 22, 'Nimantha', 'Manujaya', 1),
(6, 'Alawwa', NULL, 'Kurunegala', 'Colombo', 23, 'Akesh', 'Nirwan', 1),
(7, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 28, 'chathu', 'manohara', 0),
(8, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 31, 'chathu', 'manohara', 1),
(9, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 32, 'Charman', 'Silva', 1),
(10, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 36, 'Kasun', 'Wishwajith', 1),
(11, 'Dambadeniya', NULL, 'Kurunegala', 'Colombo', 37, 'Sanajana', 'Rajapaksha', 1),
(13, 'Colombo road, Nugegoda', NULL, 'Kurunegala', 'Colombo', 44, 'Shan', 'Dilranga', 1),
(14, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 45, 'Kamal', 'Amarasinghhe', 1),
(15, 'Kandy', NULL, 'Kurunegala', 'Colombo', 46, 'Nimantha', 'Manujaya', 1),
(16, 'Polgahawela', NULL, 'Kurunegala', 'Peradeniya', 47, 'madhura', 'Senevirathne', 0),
(17, 'New Colombo road, Polgahawela', NULL, 'Kurunegala', 'Colombo', 48, 'Chathura', 'Senevirathne', 1),
(18, 'Polgahawela', NULL, 'Kurunegala', 'Jaffna', 49, 'Sudheera', 'Dilshani', 1),
(20, 'Anuradhapura', NULL, 'Kurunegala', 'Colombo', 53, 'Chamod', 'Attanage', 1),
(21, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 55, 'Malik', 'Senevirathne', 1),
(22, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 56, 'malindu', 'Senevirathne', 1),
(23, 'New Colombo road, Polgahawela', NULL, 'Kurunegala', 'Colombo', 58, 'Malindu', 'Senevirathne', 1),
(24, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 61, 'Chathura', 'Senevirathne', 0),
(25, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 60, 'Malik', 'Senevirathne', 0),
(26, 'Alawwa', NULL, 'Kurunegala', 'Colombo', 70, 'Akesh', 'Nirwan', 1),
(27, 'Giriulla', NULL, 'Kurunegala', 'Colombo', 74, 'Sumudu', 'Perera', 1),
(28, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 76, 'Chathura', 'Senevirathne', 0),
(29, 'Polgahawela', NULL, 'Kurunegala', 'Colombo', 79, 'Lakmi', 'Sadeepa', 1),
(30, 'Kuchchaweli', NULL, 'Jaffna', 'Colombo', 81, 'Pasidu', 'Hadagama', 1),
(31, 'Deniyaya,Mathara', NULL, 'Mathara', 'Peradeniya', 82, 'Sadun', 'Silva', 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK1ja8rua032fgnk9jmq7du3b3a` FOREIGN KEY (`id`) REFERENCES `user` (`id`);

--
-- Constraints for table `announcement`
--
ALTER TABLE `announcement`
  ADD CONSTRAINT `FKiyptpr2q3m60hxqwto4rpe5uv` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `discussion_topic`
--
ALTER TABLE `discussion_topic`
  ADD CONSTRAINT `FK111vrfdx6eu69sp34xd3akldj` FOREIGN KEY (`forum_id`) REFERENCES `forum` (`forum_id`),
  ADD CONSTRAINT `FKgsdns82dobfqj1o2d3eiyv1mp` FOREIGN KEY (`reply_id`) REFERENCES `reply` (`reply_id`),
  ADD CONSTRAINT `FKr5x45hxqa5cu4r9raf02lor1w` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `FK73n6jne4elo0i2b3ek96rkefh` FOREIGN KEY (`event_coordinator_id`) REFERENCES `project_coordinator` (`coordinator_id`),
  ADD CONSTRAINT `FKan4fyegy93oot7nvfo7suce71` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`),
  ADD CONSTRAINT `FKh2wk6uybbaav8iq58h0ru6fsv` FOREIGN KEY (`event_coordinator_id`) REFERENCES `volunteer` (`volunteer_id`),
  ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`volunteer_id`) REFERENCES `volunteer` (`volunteer_id`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `FKjwhm48sj8827gyscux00ftf2n` FOREIGN KEY (`event_id`) REFERENCES `event` (`event_id`);

--
-- Constraints for table `forum`
--
ALTER TABLE `forum`
  ADD CONSTRAINT `FK2jbcsk5jpppjhwh8nmike6vw1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK41f0tta5bofptbjc110pkufi0` FOREIGN KEY (`reply_id`) REFERENCES `reply` (`reply_id`),
  ADD CONSTRAINT `FKf38upovl3v5qu8u5eb7tl2tbc` FOREIGN KEY (`topic_id`) REFERENCES `discussion_topic` (`topic_id`);

--
-- Constraints for table `handle_project`
--
ALTER TABLE `handle_project`
  ADD CONSTRAINT `FKen3nxlfjg897wgvnlpq4drodi` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`),
  ADD CONSTRAINT `FKfummu66p4akk882qgdne7r2su` FOREIGN KEY (`coordinator_id`) REFERENCES `project_coordinator` (`coordinator_id`);

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `FKb0yvoep4h4k92ipon31wmdf7e` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `participate_event`
--
ALTER TABLE `participate_event`
  ADD CONSTRAINT `FK4wjas6o6sapxq3jbpeq9rhfmb` FOREIGN KEY (`volunteer_id`) REFERENCES `volunteer` (`volunteer_id`),
  ADD CONSTRAINT `FKibdvr3wf2u9sphsrbluubde0c` FOREIGN KEY (`event_id`) REFERENCES `event` (`event_id`);

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `FK61khxou3rh5tm1ucxump2y8bf` FOREIGN KEY (`volunteer_id`) REFERENCES `volunteer` (`volunteer_id`),
  ADD CONSTRAINT `FKae6j82s9g8edduqm0dclci82r` FOREIGN KEY (`president_id`) REFERENCES `admin` (`admin_id`),
  ADD CONSTRAINT `FKe7m52px5rhix6wbiaewj6e0n8` FOREIGN KEY (`coordinator_id`) REFERENCES `project_coordinator` (`coordinator_id`);

--
-- Constraints for table `project_coordinator`
--
ALTER TABLE `project_coordinator`
  ADD CONSTRAINT `FKlwf923w8lu97uaok949h6xwxv` FOREIGN KEY (`id`) REFERENCES `user` (`id`);

--
-- Constraints for table `reply`
--
ALTER TABLE `reply`
  ADD CONSTRAINT `FKapyyxlgntertu5okpkr685ir9` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKoyv38kobf6ntepkhsvre52smc` FOREIGN KEY (`topic_id`) REFERENCES `discussion_topic` (`topic_id`);

--
-- Constraints for table `user_authority`
--
ALTER TABLE `user_authority`
  ADD CONSTRAINT `FK6dpt8lan69laxao64clv8nnlm` FOREIGN KEY (`authorities_id`) REFERENCES `authority` (`id`),
  ADD CONSTRAINT `FKpqlsjpkybgos9w2svcri7j8xy` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `volunteer`
--
ALTER TABLE `volunteer`
  ADD CONSTRAINT `FKswuwica4uqf616rdsmhexhrfc` FOREIGN KEY (`id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

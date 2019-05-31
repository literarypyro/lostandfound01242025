-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2019 at 09:53 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lostnfound`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Item (Generic)', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'W4ep16lDgg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'WsM3JRqWOJ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'asdasdasdasd', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `claims`
--

CREATE TABLE IF NOT EXISTS `claims` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status_id` int(11) DEFAULT NULL,
  `request_id` int(11) DEFAULT NULL,
  `details` text COLLATE utf8_unicode_ci,
  `claim_date` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `claims`
--

INSERT INTO `claims` (`id`, `status_id`, `request_id`, `details`, `claim_date`, `created_at`, `updated_at`) VALUES
(1, 15, 20, NULL, '2019-05-17 02:05:31', '2019-05-16 18:05:31', '2019-05-16 18:05:31'),
(2, 16, 17, NULL, '2019-05-17 02:11:56', '2019-05-16 18:11:56', '2019-05-16 18:11:56'),
(3, 17, 18, NULL, '2019-05-17 02:13:36', '2019-05-16 18:13:36', '2019-05-16 18:13:36'),
(4, 18, 21, NULL, '2019-05-17 02:13:59', '2019-05-16 18:13:59', '2019-05-16 18:13:59'),
(5, 19, 19, 'asdfgdfgfg', '2019-05-17 02:15:26', '2019-05-16 18:15:26', '2019-05-16 18:15:26');

-- --------------------------------------------------------

--
-- Table structure for table `disposals`
--

CREATE TABLE IF NOT EXISTS `disposals` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status_id` int(11) DEFAULT NULL,
  `details` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `disposal_date` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `disposals`
--

INSERT INTO `disposals` (`id`, `status_id`, `details`, `disposal_date`, `created_at`, `updated_at`) VALUES
(1, 46, 'This is a sample disposal', '2019-05-15 00:00:00', '2019-05-14 23:14:05', '2019-05-14 23:14:05'),
(2, 74, 'sadsad', '2019-05-17 00:00:00', '2019-05-16 18:24:51', '2019-05-16 18:24:51');

-- --------------------------------------------------------

--
-- Table structure for table `found_records`
--

CREATE TABLE IF NOT EXISTS `found_records` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `found_date` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=43 ;

--
-- Dumping data for table `found_records`
--

INSERT INTO `found_records` (`id`, `found_date`, `created_at`, `updated_at`) VALUES
(40, '2019-05-23 00:00:00', '2019-05-22 21:42:27', '2019-05-22 21:42:27'),
(41, '2019-05-03 00:00:00', '2019-05-22 21:43:29', '2019-05-22 21:43:29'),
(42, '2019-05-23 00:00:00', '2019-05-22 21:44:13', '2019-05-22 21:44:13');

-- --------------------------------------------------------

--
-- Table structure for table `identifications`
--

CREATE TABLE IF NOT EXISTS `identifications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item_id` int(11) DEFAULT NULL,
  `reference_number` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `identification_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `identifications`
--

INSERT INTO `identifications` (`id`, `item_id`, `reference_number`, `identification_type`, `created_at`, `updated_at`) VALUES
(1, 1, 'rvkv9OqhuL', 'Iaee7gR0CA', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, '8yOl4GfY6S', 'TDNainYNNC', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `found_record_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `item_type_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=40 ;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `user_id`, `found_record_id`, `category_id`, `item_type_id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(37, NULL, 40, 1, 1, NULL, 'asdasd', '2019-05-22 21:42:27', '2019-05-22 21:42:27'),
(38, NULL, 41, 1, 2, NULL, 'asd', '2019-05-22 21:43:29', '2019-05-22 21:43:29'),
(39, NULL, 42, 1, 1, NULL, 'asasc', '2019-05-22 21:44:13', '2019-05-22 21:44:13');

-- --------------------------------------------------------

--
-- Table structure for table `item_details`
--

CREATE TABLE IF NOT EXISTS `item_details` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item_id` int(11) DEFAULT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shape` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `length` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `width` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `other_details` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `picture` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=38 ;

--
-- Dumping data for table `item_details`
--

INSERT INTO `item_details` (`id`, `item_id`, `color`, `shape`, `length`, `width`, `other_details`, `picture`, `created_at`, `updated_at`) VALUES
(35, 37, 'asd', 'asd', 'asd', 'asd', 'asd', '1558590147.jpg', '2019-05-22 21:42:27', '2019-05-22 21:42:27'),
(36, 38, 'asd', 'asd', 'asd', 'asd', 'asd', '1558590209.jpg', '2019-05-22 21:43:29', '2019-05-22 21:43:29'),
(37, 39, 'ascacs', 'ascsca', 'asccas', 'ascasc', 'ascasc', '1558590253.jpg', '2019-05-22 21:44:13', '2019-05-22 21:44:13');

-- --------------------------------------------------------

--
-- Table structure for table `item_requests`
--

CREATE TABLE IF NOT EXISTS `item_requests` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `status_id` int(11) DEFAULT NULL,
  `request_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `item_requests`
--

INSERT INTO `item_requests` (`id`, `user_id`, `category_id`, `description`, `status_id`, `request_date`, `created_at`, `updated_at`) VALUES
(1, 21, 1, 'This is a sample item', 1, '2019-05-30 00:00:00', '2019-05-29 21:56:50', '2019-05-29 21:56:50');

-- --------------------------------------------------------

--
-- Table structure for table `item_statuses`
--

CREATE TABLE IF NOT EXISTS `item_statuses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item_id` int(11) DEFAULT NULL,
  `status_type_id` int(11) DEFAULT NULL,
  `details` text COLLATE utf8_unicode_ci,
  `status_date` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=128 ;

--
-- Dumping data for table `item_statuses`
--

INSERT INTO `item_statuses` (`id`, `item_id`, `status_type_id`, `details`, `status_date`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, '2019-01-01 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 3, 1, NULL, '2019-05-14 00:00:00', '2019-05-13 17:31:13', '2019-05-13 17:31:13'),
(9, 1, 2, 'Looking for item', '2019-05-14 07:50:46', '2019-05-13 23:50:47', '2019-05-13 23:50:47'),
(10, 1, 3, 'Item retrieved', '2019-05-14 07:50:58', '2019-05-13 23:50:59', '2019-05-13 23:50:59'),
(40, 2, 4, 'asdasd', '2019-05-15 07:05:09', '2019-05-14 23:05:10', '2019-05-14 23:05:10'),
(46, 2, 5, 'This is a sample disposal', '2019-05-15 07:14:04', '2019-05-14 23:14:05', '2019-05-14 23:14:05'),
(47, 2, 4, 'Period of Storage Expired', '2019-05-15 00:00:00', '2019-05-14 23:14:30', '2019-05-14 23:14:30'),
(62, 4, 1, 'Found Item Recorded', '2019-05-17 02:19:05', '2019-05-16 18:19:05', '2019-05-16 18:19:05'),
(64, 4, 2, 'dassd', '2019-05-17 02:19:15', '2019-05-16 18:19:16', '2019-05-16 18:19:16'),
(71, 5, 1, 'Found Item Recorded', '2019-05-17 02:23:40', '2019-05-16 18:23:40', '2019-05-16 18:23:40'),
(72, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 18:24:13', '2019-05-16 18:24:13'),
(73, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 18:24:25', '2019-05-16 18:24:25'),
(74, 5, 5, 'sadsad', '2019-05-17 02:24:50', '2019-05-16 18:24:51', '2019-05-16 18:24:51'),
(75, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 18:24:52', '2019-05-16 18:24:52'),
(76, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 23:49:15', '2019-05-16 23:49:15'),
(77, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 23:50:00', '2019-05-16 23:50:00'),
(78, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 23:50:15', '2019-05-16 23:50:15'),
(79, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 23:50:40', '2019-05-16 23:50:40'),
(80, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 23:56:49', '2019-05-16 23:56:49'),
(81, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-16 23:59:32', '2019-05-16 23:59:32'),
(82, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:04:55', '2019-05-17 00:04:55'),
(83, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:11:32', '2019-05-17 00:11:32'),
(84, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:11:36', '2019-05-17 00:11:36'),
(85, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:12:10', '2019-05-17 00:12:10'),
(86, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:12:13', '2019-05-17 00:12:13'),
(87, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:13:11', '2019-05-17 00:13:11'),
(88, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:13:13', '2019-05-17 00:13:13'),
(89, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:13:28', '2019-05-17 00:13:28'),
(90, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:13:39', '2019-05-17 00:13:39'),
(91, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:14:36', '2019-05-17 00:14:36'),
(92, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:14:45', '2019-05-17 00:14:45'),
(93, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:14:53', '2019-05-17 00:14:53'),
(94, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:16:03', '2019-05-17 00:16:03'),
(95, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:16:07', '2019-05-17 00:16:07'),
(96, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:17:01', '2019-05-17 00:17:01'),
(97, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:17:06', '2019-05-17 00:17:06'),
(98, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:17:08', '2019-05-17 00:17:08'),
(99, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:17:45', '2019-05-17 00:17:45'),
(100, 5, 4, 'Period of Storage Expired', '2019-04-30 00:00:00', '2019-05-17 00:18:32', '2019-05-17 00:18:32'),
(101, 6, 1, 'Found Item Recorded', '2019-05-22 06:23:35', '2019-05-21 22:23:35', '2019-05-21 22:23:35'),
(102, 7, 1, 'Found Item Recorded', '2019-05-22 06:24:16', '2019-05-21 22:24:16', '2019-05-21 22:24:16'),
(103, 8, 1, 'Found Item Recorded', '2019-05-22 06:24:35', '2019-05-21 22:24:35', '2019-05-21 22:24:35'),
(104, 9, 1, 'Found Item Recorded', '2019-05-22 06:24:56', '2019-05-21 22:24:56', '2019-05-21 22:24:56'),
(105, 10, 1, 'Found Item Recorded', '2019-05-22 06:26:02', '2019-05-21 22:26:02', '2019-05-21 22:26:02'),
(106, 11, 1, 'Found Item Recorded', '2019-05-22 06:26:27', '2019-05-21 22:26:27', '2019-05-21 22:26:27'),
(107, 12, 1, 'Found Item Recorded', '2019-05-22 06:26:51', '2019-05-21 22:26:51', '2019-05-21 22:26:51'),
(108, 13, 1, 'Found Item Recorded', '2019-05-23 01:42:13', '2019-05-22 17:42:13', '2019-05-22 17:42:13'),
(109, 14, 1, 'Found Item Recorded', '2019-05-23 01:47:17', '2019-05-22 17:47:17', '2019-05-22 17:47:17'),
(110, 15, 1, 'Found Item Recorded', '2019-05-23 01:48:29', '2019-05-22 17:48:29', '2019-05-22 17:48:29'),
(111, 16, 1, 'Found Item Recorded', '2019-05-23 02:51:19', '2019-05-22 18:51:19', '2019-05-22 18:51:19'),
(112, 17, 1, 'Found Item Recorded', '2019-05-23 02:52:29', '2019-05-22 18:52:29', '2019-05-22 18:52:29'),
(113, 18, 1, 'Found Item Recorded', '2019-05-23 02:53:14', '2019-05-22 18:53:14', '2019-05-22 18:53:14'),
(114, 27, 1, 'Found Item Recorded', '2019-05-23 03:32:48', '2019-05-22 19:32:48', '2019-05-22 19:32:48'),
(115, 33, 1, 'Found Item Recorded', '2019-05-23 05:30:31', '2019-05-22 21:30:31', '2019-05-22 21:30:31'),
(116, 34, 1, 'Found Item Recorded', '2019-05-23 05:32:19', '2019-05-22 21:32:19', '2019-05-22 21:32:19'),
(117, 35, 1, 'Found Item Recorded', '2019-05-23 05:33:58', '2019-05-22 21:33:58', '2019-05-22 21:33:58'),
(118, 36, 1, 'Found Item Recorded', '2019-05-23 05:41:16', '2019-05-22 21:41:16', '2019-05-22 21:41:16'),
(119, 37, 1, 'Found Item Recorded', '2019-05-23 05:42:27', '2019-05-22 21:42:27', '2019-05-22 21:42:27'),
(120, 38, 1, 'Found Item Recorded', '2019-05-23 05:43:29', '2019-05-22 21:43:29', '2019-05-22 21:43:29'),
(121, 39, 1, 'Found Item Recorded', '2019-05-23 05:44:13', '2019-05-22 21:44:13', '2019-05-22 21:44:13'),
(122, 38, 4, 'Period of Storage Expired', '2019-05-04 00:00:00', '2019-05-22 21:46:23', '2019-05-22 21:46:23'),
(123, 38, 4, 'Period of Storage Expired', '2019-05-04 00:00:00', '2019-05-22 21:46:51', '2019-05-22 21:46:51'),
(124, 38, 4, 'Period of Storage Expired', '2019-05-04 00:00:00', '2019-05-29 21:53:29', '2019-05-29 21:53:29'),
(125, 38, 4, 'Period of Storage Expired', '2019-05-04 00:00:00', '2019-05-29 21:57:06', '2019-05-29 21:57:06'),
(126, 38, 4, 'Period of Storage Expired', '2019-05-04 00:00:00', '2019-05-30 00:20:30', '2019-05-30 00:20:30'),
(127, 38, 4, 'Period of Storage Expired', '2019-05-04 00:00:00', '2019-05-30 17:24:20', '2019-05-30 17:24:20');

-- --------------------------------------------------------

--
-- Table structure for table `item_types`
--

CREATE TABLE IF NOT EXISTS `item_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `duration` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `item_types`
--

INSERT INTO `item_types` (`id`, `name`, `duration`, `created_at`, `updated_at`) VALUES
(1, 'Perishables', '20', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Critical', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2019_03_11_080443_create_classifications', 1),
('2019_03_11_080616_create_item_requests', 1),
('2019_03_11_080628_create_item_statuses', 1),
('2019_03_11_080640_create_items', 1);

-- --------------------------------------------------------

--
-- Table structure for table `request_details`
--

CREATE TABLE IF NOT EXISTS `request_details` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `request_id` int(11) DEFAULT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shape` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `length` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `width` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `other_details` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=17 ;

--
-- Dumping data for table `request_details`
--

INSERT INTO `request_details` (`id`, `request_id`, `color`, `shape`, `length`, `width`, `other_details`, `created_at`, `updated_at`) VALUES
(9, 16, 'I know I will', 'Ill get over you', 'Ill pretend the ships not sinking', 'And I''ll tell myself I''m over you', 'Cause I''m the king of wishful thinking', '2019-05-07 22:50:05', '2019-05-07 22:50:05'),
(10, 17, 'I know I will', 'Ill get over you', 'Ill pretend the ships not sinking', 'And I''ll tell myself I''m over you', 'Cause I''m the king of wishful thinking', '2019-05-07 22:51:30', '2019-05-07 22:51:30'),
(11, 18, 'Black', 'Glasses', '200meters', '200 meteres', 'Gadget', '2019-05-08 21:45:30', '2019-05-08 21:45:30'),
(12, 19, 'sdddf', 'Aasd', 'fsdfsdf', 'fsdfsdfsdf', 'dfsdfsdffs', '2019-05-08 23:42:07', '2019-05-08 23:42:07'),
(13, 20, 'Trapezoid', 'Purple', '200 meteres', '2300 meters', 'asy', '2019-05-08 23:55:06', '2019-05-08 23:55:06'),
(14, 21, 'adsasd', 'asdasd', 'adsasd', 'adsasd', 'adsasd', '2019-05-10 00:16:01', '2019-05-10 00:16:01'),
(15, 22, 'adsad', 'adad', 'adads', 'adads', 'adsads', '2019-05-22 17:43:12', '2019-05-22 17:43:12'),
(16, 1, 'Purple', 'Triangle', '200 meters', '200 meters', 'This is a sample item', '2019-05-29 21:56:50', '2019-05-29 21:56:50');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE IF NOT EXISTS `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `request_id` int(11) DEFAULT NULL,
  `status_date` datetime DEFAULT NULL,
  `status_type_id` int(11) DEFAULT NULL,
  `details` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `request_id`, `status_date`, `status_type_id`, `details`, `created_at`, `updated_at`) VALUES
(2, 17, '2019-05-08 00:00:00', 1, 'On Process', '2019-05-07 22:51:30', '2019-05-07 22:51:30'),
(3, 18, '2019-05-09 00:00:00', 1, 'On Process', '2019-05-08 21:45:31', '2019-05-08 21:45:31'),
(4, 18, '2019-05-09 00:00:00', 1, 'On Process', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 19, '2019-05-09 00:00:00', 1, NULL, '2019-05-08 23:42:07', '2019-05-08 23:42:07'),
(6, 20, '2019-05-09 00:00:00', 1, 'Request Received', '2019-05-08 23:55:07', '2019-05-08 23:55:07'),
(7, 21, '2019-05-10 00:00:00', 1, 'Request Received', '2019-05-10 00:16:01', '2019-05-10 00:16:01'),
(15, 20, '2019-05-17 02:05:30', 3, 'This is a claim', '2019-05-16 18:05:31', '2019-05-16 18:05:31'),
(16, 17, '2019-05-17 02:11:55', 3, '213', '2019-05-16 18:11:56', '2019-05-16 18:11:56'),
(17, 18, '2019-05-17 02:13:34', 3, 'sdfdsff', '2019-05-16 18:13:35', '2019-05-16 18:13:35'),
(18, 21, '2019-05-17 02:13:57', 3, 'asdfgdfgfg', '2019-05-16 18:13:58', '2019-05-16 18:13:58'),
(19, 19, '2019-05-17 02:15:25', 3, 'asdfgdfgfg', '2019-05-16 18:15:26', '2019-05-16 18:15:26'),
(20, 22, '2019-05-23 00:00:00', 1, 'Request Received', '2019-05-22 17:43:12', '2019-05-22 17:43:12'),
(21, 1, '2019-05-30 00:00:00', 1, 'Request Received', '2019-05-29 21:56:50', '2019-05-29 21:56:50');

-- --------------------------------------------------------

--
-- Table structure for table `status_types`
--

CREATE TABLE IF NOT EXISTS `status_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `status_types`
--

INSERT INTO `status_types` (`id`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'On Process', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Retrieved', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Expired', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Disposed/Transferred ', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `login_type` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `api_token` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=25 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `created_at`, `updated_at`, `login_type`, `api_token`) VALUES
(8, 'asdasd', 'asdasd', '$2y$10$FKqDwedOuGpj2/LA7q966uKb.ofQ8tErYV4a6a60fIAiD0LGDjLLa', '2019-05-06 18:12:00', '2019-05-06 18:12:00', 'user', 'n507I6eG6lhWFJNGwPJkOV4YUnkiyKEU76k3sRrMPXRcuB6RDDsmpvoOBjTI'),
(9, 'asdasd', 'ss', '$2y$10$HKIIu8dXw251M/QhaSBQxensOA3aNqc/MRXFU6NB.7Usw3VlnQfyy', '2019-05-06 18:12:55', '2019-05-06 18:12:55', 'user', 'LgrkSZ9qO3Cdwv0RAt5DwA64oG3Sn4M0Z0QbCYzvP7vkkHOpt7CPD1sQIVIG'),
(10, 'asd', 'asd', '$2y$10$F5h38xHNcb6ZTGxdcg/8t.5PkiDjDtEDbijzmvSOZIe3yj5G2.2ra', '2019-05-06 18:14:10', '2019-05-06 18:14:10', 'user', 'RDQ6ncosN9rBStbtww2S9xff51L8lxs1L30rZgZ9QFj1g0Uxz7KhvdLQA2qU'),
(11, 'asdasd', 'ss', '$2y$10$8Yj.hOtQYTljjHRBoIAgc.YPDOC9KSpeqayibwukQnO90tCCHBBK6', '2019-05-06 18:16:04', '2019-05-06 18:16:04', 'user', 'JFMrZnobbjYq8DuquPKu3AqSKgt6ziSgN3uMBTMzEd46pYaBPzngp04pJ1nk'),
(12, 'Sample User', 'username', '$2y$10$wnSw1d2qIgkM5a4c6ukcqu9ztMAGWZslVD69wSqKreqynhGTFND2a', '2019-05-06 18:16:48', '2019-05-06 18:16:48', 'user', 'H7RKiVlZu6NX0cnfLjzULAYzJT3BX0hWaJo4n7PkUfeuqI10r2xDwAsp9Lvx'),
(13, 'asdasda', 'asd', '$2y$10$6lyey8HkxOZnI/hP3kmKFeCezkJPX8B3JzVbss8lUSxc/J.gTvpyi', '2019-05-06 18:17:27', '2019-05-06 18:17:27', 'user', 'LHcqTTd6rWIEaznejxOofjZKoZvYmZanGmGnxE2sW17FY4Y41f5alawlLDMl'),
(14, 'asdasd', 'asdsd', '$2y$10$JMUjt7/mvaJYT/4Goe672OUn6/EYaMSpfzmnjmFW2/KkuMz2mvMEK', '2019-05-06 18:25:52', '2019-05-06 18:25:52', 'user', '28x8acpxE3TwXirqDAfA5pUiOLEgWegYf30asQ5hwBmah3d1CXZ2h5L6DhJQ'),
(15, 'asdasdasd', 'asdasd', '$2y$10$pU.3iX09GqouT/NpxLoMEOLTs6qM3PHoYK.RAh1XVglFKMMc4E5N2', '2019-05-06 21:26:56', '2019-05-06 21:26:56', 'user', 'WlnXzjEsxieLAmb5HXNDI5IkNMBLbJHdF34OQtYZOzbRiJAOaQlPPIi2YjCe'),
(16, 'asdasdasd', 'asdasd', '$2y$10$MWr0Kf4DWHBUwYWcQIkD1eXB4Ydwy2mHmTKkKnzbXpHSY.2AuLXli', '2019-05-06 21:30:43', '2019-05-06 21:30:43', 'user', 'caee07Wn1nPTdDWsd55hznnqXm3JdbtO4UBDNPSW63GI3qNn0q98s6tGb4ym'),
(17, 'Patrick Silva', 'phponrails', '$2y$10$vTTuyZbMrzML8vlGJrCYZ.aBKohUB5DyrAYOnviPWLkqRVOJ3BYym', '2019-05-06 23:09:11', '2019-05-06 23:09:11', 'user', 'r6PtDS4J7zBg78dz9zedapOkVoO2S2wt9DG9OBcKXuajnzBnGx5xIRUH7JXw'),
(18, 'asdasd', 'asdasd', '$2y$10$0TgNI00OJlXQ.Ct90Pz8BeJlJpRxHIXwVEvUijGkdjdO92VKbcVFO', '2019-05-06 23:11:08', '2019-05-06 23:11:08', 'user', 'SZDi0qXJR0kFip087rdJ7XmOv9L9zAuextQIrlkWLsIY0afZl5pB3NbaT6Gd'),
(19, '312123', '123123', '$2y$10$76HnvrE7V4RCJo.4RHnO/eNfSpTtbG/t0Xpa30ICcwFRcl581I8Qu', '2019-05-06 23:11:57', '2019-05-06 23:11:57', 'user', 'ISJmavTXByWB90Mez7Ihb8b50YsEDfKxLMDMSXnIGZ9OGxZZuGKwg4DZjgIk'),
(20, 'This is Spinal Tap', 'user', '$2y$10$EXNoawyXzP/HEDzwlA90yuWYVMO3Hrm70j2vFUeAoMZXa7weGAZfK', '2019-05-06 23:20:23', '2019-05-06 23:20:23', 'user', 'AcMvjLiQVudxcwzx0qI8r6xi00ZdRRF4lKdYmjlwKEzmwQGsXucBTiLmwlhR'),
(21, 'asdasdasd', 'user2', '$2y$10$pa8355jFfivwK28GLoKTH.cczwqm0GS8TeQ4.7HdeyXm0SeInWvne', '2019-05-07 00:36:26', '2019-05-07 00:36:26', 'user', 'TPLDgI4TWmOyEprZvX5A8AWuJmp3Ie2MBoR8BiOvwuO0k7jwerwWx0gQOc5c'),
(22, 'This is another sample', 'admin1', '$2y$10$nYhaeD7l.QnFjxJPxSBmeuiewdXNFYYt9C2JO4AwpMFDyOBgi7M3y', '2019-05-10 00:26:22', '2019-05-10 00:26:22', 'administrator', 'zoOH2mqzsFi2gDezuiUtq0eX0gZ3xbXVCwPR8dKQXaLqZ3FDmKJAfjisGtyd'),
(23, 'asdasd', 'admin3', '$2y$10$RYlANCPeSsOUER.Bgi98beJxiGLKK4uUqLfd2n90frjdXrjF2YsIi', '2019-05-13 17:21:49', '2019-05-13 17:21:49', 'administrator', 'Hm1AqiVonzDNRPLDssfO2Qu4SDBY94OsAy610Fjce3du2RyBDXdmf8GqTIFm'),
(24, 'Patrick Silva', 'tulawit', '$2y$10$cfvN2FOF2hI7Gp0GQcKXh.QzNKVpM5MEYGT.ZeM4WbFQdmrQ4B.OC', '2019-05-21 21:56:38', '2019-05-21 21:56:38', '', 'qMIdUOE0b4PLbl5rSqWF5CWwNH9XUv3w6McZHpug76LfEOtipQVOQJYatgHc');

-- --------------------------------------------------------

--
-- Table structure for table `user_address`
--

CREATE TABLE IF NOT EXISTS `user_address` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `profile_id` int(11) DEFAULT NULL,
  `unit` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subdivision` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `zip_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

--
-- Dumping data for table `user_address`
--

INSERT INTO `user_address` (`id`, `profile_id`, `unit`, `street`, `subdivision`, `city`, `province`, `zip_code`, `country_id`, `created_at`, `updated_at`) VALUES
(1, 16, '123213231', '123123', '213231', '231231', '', '123213', 123123, '2019-05-06 23:08:19', '2019-05-06 23:08:19'),
(2, 17, '1', 'St', 'Sto', 'Mey', '', '3020', 0, '2019-05-06 23:09:46', '2019-05-06 23:09:46'),
(3, 18, 'adads', 'asdasd', 'adads', 'asdasd', '', 'asdads', 0, '2019-05-06 23:11:24', '2019-05-06 23:11:24'),
(4, 19, '21323', '231123', '213123', '213213', '', '123123', 231123, '2019-05-06 23:12:14', '2019-05-06 23:12:14'),
(5, 20, '231123231', '213123', '123123', '123231', '', '12123', 213231, '2019-05-06 23:20:45', '2019-05-06 23:20:45'),
(6, 21, 'asd', 'ads', 'asd', 'asd', '', '123', 0, '2019-05-07 00:36:46', '2019-05-07 00:36:46'),
(7, 22, 'adsads', 'adsads', 'asdasd', 'asdasd', '', 'adsads', 0, '2019-05-10 00:26:46', '2019-05-10 00:26:46'),
(8, 23, '213', '213', '213', '213', '', '213', 213, '2019-05-13 17:22:39', '2019-05-13 17:22:39'),
(9, 24, '1', 'St. Vincent de Paul Street', 'Sto. Nino', 'Meycauayan', '', '3020', 0, '2019-05-21 22:06:13', '2019-05-21 22:06:13');

-- --------------------------------------------------------

--
-- Table structure for table `user_contact`
--

CREATE TABLE IF NOT EXISTS `user_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `landline` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=12 ;

--
-- Dumping data for table `user_contact`
--

INSERT INTO `user_contact` (`id`, `landline`, `mobile`, `email`, `profile_id`, `created_at`, `updated_at`) VALUES
(3, '231231', '231123', '123123', 16, '2019-05-06 23:08:20', '2019-05-06 23:08:20'),
(4, '222', '22', '22', 17, '2019-05-06 23:09:47', '2019-05-06 23:09:47'),
(5, 'asdasd', 'asdads', 'asdasd', 18, '2019-05-06 23:11:26', '2019-05-06 23:11:26'),
(6, '231123', '213123', '213123', 19, '2019-05-06 23:12:15', '2019-05-06 23:12:15'),
(7, '123231', '213213', '12123231', 20, '2019-05-06 23:20:46', '2019-05-06 23:20:46'),
(8, '123', '123', '123', 21, '2019-05-07 00:36:47', '2019-05-07 00:36:47'),
(9, '132123123', '23123123', 'dsdasas', 22, '2019-05-10 00:26:47', '2019-05-10 00:26:47'),
(10, '213123', '213', 'asd', 23, '2019-05-13 17:22:41', '2019-05-13 17:22:41'),
(11, '265', '2266', 'patricksssilva@yahoo.com', 24, '2019-05-21 22:06:15', '2019-05-21 22:06:15');

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

CREATE TABLE IF NOT EXISTS `user_profiles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `middle_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=28 ;

--
-- Dumping data for table `user_profiles`
--

INSERT INTO `user_profiles` (`id`, `user_id`, `first_name`, `last_name`, `middle_name`, `created_at`, `updated_at`) VALUES
(2, 14, 'asdads', 'ss', 'asdad', '2019-05-06 21:25:34', '2019-05-06 21:25:34'),
(3, 15, 'asdasd', 'asd', 'asd', '2019-05-06 21:27:27', '2019-05-06 21:27:27'),
(19, 16, '123123123', '123123', '123123', '2019-05-06 23:06:52', '2019-05-06 23:06:52'),
(20, 17, 'Patrick', 'Silva', 'Sumido', '2019-05-06 23:09:45', '2019-05-06 23:09:45'),
(21, 18, 'asdasd', 'adsasd', 'asdads', '2019-05-06 23:11:23', '2019-05-06 23:11:23'),
(22, 19, '231123', '123123', '123123', '2019-05-06 23:12:12', '2019-05-06 23:12:12'),
(23, 20, '123123', '123123', '123123', '2019-05-06 23:20:44', '2019-05-06 23:20:44'),
(24, 21, 'asdasd', 'asdasd', 'asdasd', '2019-05-07 00:36:45', '2019-05-07 00:36:45'),
(25, 22, 'asdads', 'adsasd', 'adsads', '2019-05-10 00:26:44', '2019-05-10 00:26:44'),
(26, 23, 'asdsad', 'dasads', 'asddsa', '2019-05-13 17:22:35', '2019-05-13 17:22:35'),
(27, 24, 'Patrick Simon', 'Silva', 'Sumido', '2019-05-21 22:06:11', '2019-05-21 22:06:11');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

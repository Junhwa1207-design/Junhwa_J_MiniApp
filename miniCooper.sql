-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 15, 2020 at 11:03 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_miniCooper`
--

-- --------------------------------------------------------

--
-- Table structure for table `miniCooper`
--

CREATE TABLE `miniCooper` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `miniCooper`
--

INSERT INTO `miniCooper` (`id`, `name`, `price`, `description`, `image`) VALUES
(1, 'MINI COOPER S', '$30,756', 'EXPRESSIVE COLORS.\r\nColour is a matter of individual taste, but with a wide spectrum of tones to choose from, there’s something for everyone. Whether you go bold and bright with Solaris Orange or keep it subtle and sleek with Moonwalk Grey, you’re sure to make a striking statement of your personal style.\r\n', 'cooperRed.png'),
(2, 'COOPER SE 3 DOOR', ' $42,956', 'MINI UNION JACK LED TAILLIGHTS.\r\nThe reimagined MINI Union Jack LED taillights, available as an option, do more than just catch your eye; they emit a brighter, clearer light that is more energy-efficient than ever. Surrounded by a striking chrome frame or Piano Black for a sporty twist, they’re the perfect finishing touch to the MINI 3 door’s tail end.\r\n', 'cooperGrey.png'),
(3, 'JOHN COOER WORKS', '$38,406', 'HEAD-UP DISPLAY.\r\nGet all the right information you need, right where you want it. The available MINI Head-Up Display projects driving data such as speed and navigation prompts in your direct line of sight, helping you focus your gaze on the road.\r\n', 'cooperGreen.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `miniCooper`
--
ALTER TABLE `miniCooper`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `miniCooper`
--
ALTER TABLE `miniCooper`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

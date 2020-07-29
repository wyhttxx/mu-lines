use blog;
CREATE TABLE `tb_blogs` (
  `id` int(11) NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `titie` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `create_time` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `detail` text CHARACTER SET latin1,
  `preview_number` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `shows` int(11) DEFAULT NULL,
  `types` int(11) DEFAULT NULL,
  `link` tinytext CHARACTER SET latin1,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `tb_blogs_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `tb_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Create a new database, to make it easier to cleanup afterwards.

CREATE DATABASE graphql_prac;

USE graphql_prac;

CREATE TABLE `comments` (
  `comment_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) unsigned NOT NULL,
  `contents` text COLLATE utf8mb4_general_ci,
  `writer` int(10) unsigned DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`comment_id`),
  UNIQUE KEY `comment_id_UNIQUE` (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `posts` (
  `post_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` tinytext COLLATE utf8mb4_general_ci,
  `contents` text COLLATE utf8mb4_general_ci,
  `writer` int(10) unsigned DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`post_id`),
  UNIQUE KEY `post_id_UNIQUE` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `users` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `comments` 
ADD INDEX `fk_comments_writer_idx` (`writer` ASC) VISIBLE,
ADD INDEX `fk_comments_post_idx` (`post_id` ASC) VISIBLE;
;
ALTER TABLE `comments` 
ADD CONSTRAINT `fk_comments_post`
  FOREIGN KEY (`post_id`)
  REFERENCES `posts` (`post_id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
ADD CONSTRAINT `fk_comments_writer`
  FOREIGN KEY (`writer`)
  REFERENCES `users` (`user_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE `posts` 
ADD INDEX `fk_posts_writer_idx` (`writer` ASC) VISIBLE;
;
ALTER TABLE `posts` 
ADD CONSTRAINT `fk_posts_writer`
  FOREIGN KEY (`writer`)
  REFERENCES `users` (`user_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

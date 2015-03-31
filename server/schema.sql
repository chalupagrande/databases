CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  user_id INT,
  content varchar(255),
  room_id varchar(20)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  title varchar(20)
);
 
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name varchar(20)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


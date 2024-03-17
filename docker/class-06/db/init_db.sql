DROP DATABASE IF EXISTS mydb;

CREATE DATABASE mydb;

USE mydb;

DROP TABLE IF EXISTS mytable;

CREATE TABLE mytable ( 
  id INT NOT NULL AUTO_INCREMENT, 
  text LONGTEXT NOT NULL, 
  PRIMARY KEY (id) 
);


INSERT INTO mytable (text) VALUES("lorem ipsum dolor sit amet");
INSERT INTO mytable (text) VALUES("consectetur adipisicing elit");
INSERT INTO mytable (text) VALUES("laudantium esse eum ex qui");
INSERT INTO mytable (text) VALUES("fugiat facilis similique illum");
INSERT INTO mytable (text) VALUES("aliquid, tempora et excepturi");
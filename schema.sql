
CREATE DATABASE fleet;
USE fleet;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  username VARCHAR(100),
  password VARCHAR(255),
  role VARCHAR(50)
);

CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  plate VARCHAR(50),
  status VARCHAR(20),
  last_service DATE
);

CREATE TABLE ai_alerts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message TEXT,
  severity VARCHAR(20)
);

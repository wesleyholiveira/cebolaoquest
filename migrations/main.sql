CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(40) NOT NULL UNIQUE,
    email VARCHAR(120) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE IF NOT EXISTS players (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    level SMALLINT NOT NULL,
    exp INT NOT NULL,
    funds DECIMAL(10, 2) NOT NULL,
    valorPoints SMALLINT NOT NULL,
    proficiencyPoints SMALLINT NOT NULL,
    statusPoints SMALLINT NOT NULL,
    meritPoints SMALLINT NOT NULL,
    alignment ENUM('Bom', 'Neutro', 'Maligno') NOT NULL,
    principle ENUM('Leal', 'Neutro', 'Caótico') NOT NULL,
    class ENUM('Archer', 'Assassin', 'Caster (Criação de Território)', 'Caster (Magia Branca)', 'Berserker', 'Foreigner', 'Rider', 'Lancer', 'Avenger', 'Saber', 'Shielder') NOT NULL,
    species VARCHAR(40),
    sex ENUM('Masculino', 'Feminino'),
    weight DECIMAL(5, 2),
    height DECIMAL(5, 2),
    locality VARCHAR(50),
    age SMALLINT,
    blood_type CHAR(2),
    birthday DATE,
    self_denomination VARCHAR(100),
    talents TINYTEXT,
    likes TINYTEXT,
    dislikes TINYTEXT,
    abstract MEDIUMTEXT,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`user_id`) REFERENCES users (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_attributes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name CHAR(3) NOT NULL,
    `rank` CHAR(4) NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_stratagems (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    merits SMALLINT NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_negative_traits (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    merits SMALLINT NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_martial_skills (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    merits SMALLINT NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_special_techniques (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    merits SMALLINT NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_noble_phantasms (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    player_id INT NOT NULL,
    merits SMALLINT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_noble_phantasm_types (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    np_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`np_id`) REFERENCES player_noble_phantasms (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_noble_phantasm_special_strikes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    np_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`np_id`) REFERENCES player_noble_phantasms (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_noble_phantasm_effects (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    valors SMALLINT NOT NULL,
    np_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`np_id`) REFERENCES player_noble_phantasms (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(255) NOT NULL,
    player_id INT NOT NULL,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS player_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    subcategory TINYINT NOT NULL DEFAULT '0',
    children JSON NOT NULL,
    player_id INT NOT NULL,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

ALTER TABLE `player_stratagems` ADD `effect` MEDIUMTEXT;
ALTER TABLE `player_special_techniques` ADD `effect` MEDIUMTEXT;
ALTER TABLE `player_martial_skills` ADD `effect` MEDIUMTEXT;
ALTER TABLE `player_negative_traits` ADD `effect` MEDIUMTEXT;
ALTER TABLE `player_noble_phantasm_effects` ADD `effect` MEDIUMTEXT;

CREATE TABLE IF NOT EXISTS roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL  
);

CREATE TABLE IF NOT EXISTS user_roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES users (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`role_id`) REFERENCES roles (`id`) ON DELETE CASCADE
);

INSERT INTO roles (name) VALUES ('user'),('admin');

ALTER TABLE player_images ADD created_at TIMESTAMP NOT NULL DEFAULT current_timestamp;
ALTER TABLE player_categories ADD created_at TIMESTAMP NOT NULL DEFAULT current_timestamp;
ALTER TABLE roles ADD created_at TIMESTAMP NOT NULL DEFAULT current_timestamp;
ALTER TABLE user_roles ADD created_at TIMESTAMP NOT NULL DEFAULT current_timestamp;

ALTER TABLE players ADD max_hp SMALLINT NOT NULL DEFAULT 0;
ALTER TABLE players ADD hp SMALLINT NOT NULL DEFAULT 0;
ALTER TABLE players ADD max_sp SMALLINT NOT NULL DEFAULT 0;
ALTER TABLE players ADD sp SMALLINT NOT NULL DEFAULT 0;
ALTER TABLE players ADD active TINYINT NOT NULL DEFAULT 0;

UPDATE players SET max_hp = 100, max_sp = 100, hp = 100, sp = 100 WHERE id > 0;

ALTER TABLE player_attributes ADD value SMALLINT NOT NULL DEFAULT 6;
UPDATE players SET max_hp = 90, max_sp = 90 WHERE id > 0;

ALTER TABLE player_special_techniques ADD rarity CHAR(20) NOT NULL;
DROP TABLE player_noble_phantasm_special_strikes;
UPDATE players SET hp = 90 where hp >= 100;
UPDATE players SET sp = 90 where sp >= 100;

CREATE TABLE IF NOT EXISTS player_secret_origins (
	id INT PRIMARY KEY AUTO_INCREMENT,
    content JSON NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`) ON DELETE CASCADE
);

ALTER TABLE
    `players`
MODIFY COLUMN
    class enum(
    'Archer',
    'Assassin',
    'Caster (Brasão Magico)',
    'Caster (Magia Branca)',
    'Berserker',
    'Foreigner',
    'Lancer',
    'Avenger',
    'Saber',
    'Shielder'
);
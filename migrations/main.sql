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
    class ENUM('Archer', 'Assassin', 'Caster', 'Berserker', 'Foreigner', 'Rider', 'Lancer', 'Avenger', 'Saber', 'Shielder') NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`user_id`) REFERENCES users (`id`)
);

CREATE TABLE IF NOT EXISTS player_attributes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name CHAR(3) NOT NULL,
    `rank` CHAR(3) NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`)
);

CREATE TABLE IF NOT EXISTS player_stratagems (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`)
);

CREATE TABLE IF NOT EXISTS player_negative_traits (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`)
);

CREATE TABLE IF NOT EXISTS player_martial_skills (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`)
);

CREATE TABLE IF NOT EXISTS player_special_techniques (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`)
);

CREATE TABLE IF NOT EXISTS player_noble_phantasms (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    player_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`player_id`) REFERENCES players (`id`)
);

CREATE TABLE IF NOT EXISTS player_noble_phantasm_types (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    np_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`np_id`) REFERENCES player_noble_phantasms (`id`)
);

CREATE TABLE IF NOT EXISTS player_noble_phantasm_special_strikes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    np_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`np_id`) REFERENCES player_noble_phantasms (`id`)
);

CREATE TABLE IF NOT EXISTS player_noble_phantasm_effects (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    valors SMALLINT NOT NULL,
    np_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (`np_id`) REFERENCES player_noble_phantasms (`id`)
);

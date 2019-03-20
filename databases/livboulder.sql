-- MySQL Script generated by MySQL Workbench
-- Mon Mar 18 12:16:12 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`questions` (
  `water` TINYINT NOT NULL,
  `biking` TINYINT NOT NULL,
  `hiking` TINYINT NOT NULL,
  `lots_of_exercise` TINYINT NOT NULL,
  `competitive` TINYINT NOT NULL,
  `easy` TINYINT NOT NULL,
  `long` TINYINT NOT NULL,
  `adventurous` TINYINT NOT NULL,
  `close` TINYINT NOT NULL,
  `resultnumber` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`resultnumber`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`activities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`activities` (
  `activity` VARCHAR(45) NOT NULL,
  `activitynumber` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `image_index` INT NULL,
  PRIMARY KEY (`activitynumber`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`account` (
  `accountNumber` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `questions_resultnumber` INT NOT NULL,
  `activities_activitynumber` INT NOT NULL,
  PRIMARY KEY (`accountNumber`),
  UNIQUE INDEX `accountNumber_UNIQUE` (`accountNumber` ASC) VISIBLE,
  INDEX `fk_account_questions_idx` (`questions_resultnumber` ASC) VISIBLE,
  INDEX `fk_account_activities1_idx` (`activities_activitynumber` ASC) VISIBLE,
  CONSTRAINT `fk_account_questions`
    FOREIGN KEY (`questions_resultnumber`)
    REFERENCES `mydb`.`questions` (`resultnumber`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_account_activities1`
    FOREIGN KEY (`activities_activitynumber`)
    REFERENCES `mydb`.`activities` (`activitynumber`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
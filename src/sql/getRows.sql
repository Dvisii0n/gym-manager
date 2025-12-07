DELIMITER $$

CREATE PROCEDURE getRows(IN table_name VARCHAR(64))
BEGIN
    SET @query = CONCAT('SELECT * FROM ', table_name, ';');
    PREPARE stmt FROM @query;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END $$
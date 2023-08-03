-- Step 1: Create the user 'user_0d_1'@'localhost'
CREATE USER 'user_0d_1'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost';

-- Step 2: Grant all privileges to 'user_0d_1'@'localhost'
CREATE USER 'user_0d_2'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_2'@'localhost';

-- privileges!
SHOW GRANTS FOR user_0d_1@localhost;
SHOW GRANTS FOR user_0d_2@localhost;

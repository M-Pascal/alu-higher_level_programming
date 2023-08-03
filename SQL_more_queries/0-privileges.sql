-- 0-privileges.sql

-- Step 1: Create the user 'user_0d_1'@'localhost'
CREATE USER 'user_0d_1'@'localhost';

-- Step 2: Grant all privileges to 'user_0d_1'@'localhost'
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost';

-- Step 3: Check the granted privileges for 'user_0d_1'@'localhost'
SHOW GRANTS FOR 'user_0d_1'@'localhost';

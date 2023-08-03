-- Connect to the MySQL server using a privileged user (e.g., root)
-- Replace 'your_root_username' and 'your_root_password' with the actual credentials

-- Step 1: Check if the user already exists
SELECT COUNT(*) INTO @userExists FROM mysql.user WHERE user = 'user_0d_1';

-- Step 2: Create or update the user
SET @query = '';
IF @userExists > 0 THEN
    -- User already exists, update the password
    SET @query = CONCAT('ALTER USER \'user_0d_1\'@\'localhost\' IDENTIFIED WITH mysql_native_password BY \'user_0d_1_pwd\';');
ELSE
    -- User does not exist, create the user with all privileges
    SET @query = CONCAT('CREATE USER \'user_0d_1\'@\'localhost\' IDENTIFIED WITH mysql_native_password BY \'user_0d_1_pwd\';');
END IF;

-- Step 3: Grant all privileges to the user
SET @query = CONCAT(@query, 'GRANT ALL PRIVILEGES ON *.* TO \'user_0d_1\'@\'localhost\';');

-- Step 4: Apply the changes
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

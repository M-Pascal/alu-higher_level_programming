#!/bin/bash

# MySQL server credentials
MYSQL_USER="your_mysql_username"
MYSQL_PASS="your_mysql_password"

# MySQL user names for privileges listing
USERS=("user_0d_1" "user_0d_2")

# Loop through the user names and list their privileges
for user in "${USERS[@]}"; do
    echo "Privileges for user: $user"
    mysql -u"$MYSQL_USER" -p"$MYSQL_PASS" -e "SHOW GRANTS FOR '$user'@'localhost';"
    echo "-------------------------"
done

import MySQLdb
import sys

def list_states(username, password, database_name):
    # Connect to the MySQL server
    db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database_name)

    # Create a cursor object to interact with the database
    cursor = db.cursor()

    # Execute the query to retrieve states from the database
    query = "SELECT * FROM states ORDER BY id"
    cursor.execute(query)

    # Fetch all the results
    results = cursor.fetchall()

    # Close the cursor and the database connection
    cursor.close()
    db.close()

    # Print the results
    for row in results:
        print(row)

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script_name.py mysql_username mysql_password database_name")
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database_name = sys.argv[3]

    list_states(username, password, database_name)


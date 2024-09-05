# [playground](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_groupby)

# [Support](https://www.sqlteaching.com/#!select_columns)

## Command list
CREATE TABLE x(x TYPE,...)
INSERT INTO x VALUES
UPDATE x SET y 
DELETE FROM x
ALTER TABLE x ADD(DROP/RENAME) y


SELECT (DISTINCT) x FROM y 
x GROUP BY y
x WHERE y
x ORDER BY y (DESC)
x LIMIT 1 OFFSET 5
x AS y
x HAVING y

CASE WHEN x THEN y
WHEN a THEN b
ELSE y
END

x INNER JOIN y ON
x LEFT OUTER JOIN y ON
x RIGHT OUTER JOIN y ON
x FULL OUTER JOIN y ON

LEFT(x, string_position)
LENGTH(x)
AVG(x)
COUNT(x)
SUM(x)
MAX(x)
MIN(y)
SUBSTR(column_name, index, number_of_characters)
COALESCE(x, y, z)
ROUND(x, decimal)
POWER(x,y)
CEIL(x)
FLOOR(x)
MOD(x,y)
SIGN(x)
ABS(x)

x AND y
x OR y
x XOR y
x BETWEEN y AND z
x IN (y,z)
x IS (NOT) y
x IS (NOT) NULL
x LIKE "_Robot%"

'1985-08-17'

SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;

### Create tables

CREATE TABLE users (id INTEGER PRIMARY KEY, nickname TEXT, location TEXT);

CREATE TABLE badgers (id INTEGER PRIMARY KEY, name TEXT, points INTEGER);

INSERT INTO users VALUES (1, "Saul", "California")
INSERT INTO users VALUES (2, "John", "New York")


#### Groceries
CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);

INSERT INTO groceries VALUES (1, "Bananas", 56, 7);
INSERT INTO groceries VALUES(2, "Peanut Butter", 1, 2);
INSERT INTO groceries VALUES(3, "Dark Chocolate Bars", 2, 2);
INSERT INTO groceries VALUES(4, "Ice cream", 1, 12);
INSERT INTO groceries VALUES(5, "Cherries", 6, 2);
INSERT INTO groceries VALUES(6, "Chocolate syrup", 1, 4);

SELECT SUM(quantity) FROM groceries GROUP BY aisle;
SELECT * FROM groceries
SELECT name FROM groceries 

### order (ORDER BY)
SELECT * FROM groceries ORDER BY aisle

### filter (WHERE)
SELECT * 
FROM groceries 
WHERE aisle > 1 
ORDER BY aisle

### agregate functions (SUM, MIN, MAX)
SELECT SUM(quantity) FROM groceries;

SELECT SUM(quantity) FROM groceries GROUP BY aisle;

SELECT aisle, SUM(quantity) FROM groceries GROUP BY aisle;

### nested
SELECT * FROM family_members WHERE num_legs = (SELECT MIN(num_legs) FROM family_members);

### Examples


SELECT users.id, users.name, COUNT(posts.id) AS posts_written
FROM users
JOIN posts ON users.id = posts.user_id
GROUP BY users.id;

SELECT users.id, users.name, COUNT(posts.id) AS posts_written
FROM users
JOIN posts ON users.id = posts.user_id
GROUP BY users.id
HAVING posts_written >= 10;

SELECT Country, COUNT(*) AS OrderCounts
FROM Customers INNER JOIN Orders 
ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.Country
HAVING COUNT(*) > 10;


SELECT character.name, actor.name
FROM character
INNER JOIN character_actor
ON character.id = character_actor.character_id
INNER JOIN actor
ON actor.id = character_actor.actor_id

SELECT character.name, tv_show.name
FROM character
INNER JOIN character_tv_show
ON character.id = character_tv_show.character_id
INNER JOIN tv_show
ON character_tv_show.tv_show_id = tv_show.id
WHERE character.name !='Willow Rosenberg'
AND tv_show.name != 'How I Met Your Mother'

SELECT c.name AS character, a.name AS actor
FROM character AS c
LEFT JOIN character_actor AS ca
ON c.id = ca.character_id
LEFT JOIN actor AS a
ON a.id = ca.actor_id

SELECT *,
CASE WHEN species = 'human' THEN "talk"
WHEN species = 'dog' THEN "bark"
WHEN species = 'cat' THEN "meow"
END AS sound
FROM friends_of_pickles;

SELECT name,
COALESCE(tank,gun,sword) AS weapon
FROM fighters
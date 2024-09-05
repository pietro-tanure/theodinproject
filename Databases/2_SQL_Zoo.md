# https://sqlzoo.net/wiki/SQL_Tutorial

# 0 SELECT basics

SELECT name, population FROM world
  WHERE name IN ('Brazil', 'Russia', 'India', 'China');

# 1 SELECT name

SELECT capital, name FROM world
WHERE capital LIKE concat('%', name, '_%')

# 2 SELECT from world

SELECT name, population
FROM worldORE
WHERE name IN ('France', 'Germany', 'Italy')

SELECT name, ROUND(gdp/population, -3) FROM world
WHERE gdp > 1000000000000

SELECT name, capital
FROM world
WHERE LEFT(name,1) = LEFT(capital, 1)
AND name <> capital

# 3 SELECT from nobel

SELECT winner, yr, subject FROM nobel
WHERE winner LIKE "Sir%"
ORDER BY yr DESC, winner

SELECT winner, subject
FROM nobel
WHERE yr=1984
ORDER BY subject IN ('physics','chemistry'), subject,winner

# 4 SELECT from SELECT

SELECT name, continent FROM world
WHERE continent IN 
(SELECT continent FROM world
WHERE name IN ("Argentina","Australia"))
ORDER BY name

SELECT name, population/(SELECT SUM(population) FROM world WHERE continent = 'Europe')*100 AS percentage 
FROM world 
WHERE continent = 'Europe';

SELECT name 
FROM world
WHERE gdp > ALL(SELECT gdp FROM world WHERE continent = 'Europe' AND gdp>0);

SELECT continent, name, area FROM world x
    WHERE area >= ALL
        (SELECT area FROM world y
            WHERE y.continent=x.continent)

SELECT continent, name FROM world x
    WHERE name = (SELECT MIN(name) FROM world y
        WHERE y.continent=x.continent)


SELECT name, continent, population FROM world
WHERE continent IN
    (SELECT DISTINCT continent 
    FROM world x
    WHERE 25000000 >= ALL
        (SELECT population 
        FROM world y 
        WHERE x.continent = y.continent))

SELECT name, continent FROM world x
WHERE population > ALL
(SELECT 3*population FROM world y
WHERE x.name <> y.name
AND x.continent = y.continent)

# 5 SUM and COUNT

SELECT continent
FROM world
GROUP BY continent
HAVING SUM(population) >= 100000000;

# 6 JOIN

SELECT DISTINCT player FROM game 
JOIN goal ON matchid = id 
WHERE team1='GER' AND team2=teamid
OR team2='GER' AND team1=teamid

SELECT matchid, mdate, COUNT(player) FROM game
JOIN goal ON matchid = id
WHERE 'POL' IN (team1,team2)
GROUP BY matchid

SELECT mdate, team1, SUM(score1) score1, team2, SUM(score2) score2
FROM (
  SELECT id, mdate, team1,
  CASE WHEN teamid = team1 THEN 1 ELSE 0 END AS score1,      team2,
  CASE WHEN teamid = team2 THEN 1 ELSE 0 END AS score2 
  FROM game
  JOIN goal ON id = matchid) AS subquery
GROUP BY id
ORDER BY mdate, id, team1, team2

# 7 More JOIN operations

SELECT yr,COUNT(title) FROM
  movie JOIN casting ON movie.id=movieid
        JOIN actor   ON actorid=actor.id
WHERE name='Rock Hudson'
GROUP BY yr
HAVING COUNT(title) > 2

SELECT title, name FROM movie m
JOIN casting ON m.id = movieid
JOIN actor a ON actorid = a.id
WHERE ord = 1
AND m.id IN (
SELECT movieid FROM casting
WHERE actorid IN (
  SELECT id FROM actor
  WHERE name='Julie Andrews'))

SELECT name 
FROM actor a
 JOIN casting ON actorid = a.id
 JOIN movie m ON movieid = m.id
WHERE ord = 1
GROUP BY name
HAVING COUNT(*) >= 15

SELECT title, COUNT(actorid)
FROM movie
JOIN casting ON movieid = id
WHERE yr = 1978
GROUP BY title
ORDER BY COUNT(*) DESC, title

SELECT DISTINCT a.name 
FROM actor a
JOIN casting c1 ON a.id = c1.actorid
JOIN casting c2 ON c1.movieid = c2.movieid
JOIN actor ag ON c2.actorid = ag.id
WHERE ag.name = 'Art Garfunkel'
AND a.name <> 'Art Garfunkel';

# 8 Using Null
SELECT name, COALESCE(mobile, '07986 444 2266')
FROM teacher

SELECT name, 
    CASE WHEN dept IN (1,2) THEN 'Sci'
        ELSE 'Art'
    END AS field
FROM 
    teacher;

# 8 NSS Tutorial
SELECT subject, ROUND(SUM(response*A_STRONGLY_AGREE/100)/SUM(response)*100,0)
  FROM nss
 WHERE question='Q22'
   AND subject IN ('(8) Computer Science', '(H) Creative Arts and Design')
GROUP BY subject
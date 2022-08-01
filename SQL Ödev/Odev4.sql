SELECT DISTINCT(replacement_cost) FROM film 


SELECT COUNT (DISTINCT replacement_cost)  FROM film 


SELECT COUNT (title) FROM film 
WHERE title ~~ 'T%' and rating='G';


SELECT count(DISTINCT country) FROM country 
WHERE country  ~~ '_____';


SELECT COUNT(DISTINCT city) FROM city 
WHERE city ~~* '%r';


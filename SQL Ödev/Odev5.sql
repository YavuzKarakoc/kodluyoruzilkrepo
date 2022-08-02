SELECT * FROM film
WHERE title ILIKE '%n'
ORDER BY length
LIMIT 5



SELECT * FROM film
WHERE title ILIKE '%n'
ORDER BY length DESC
OFFSET 5
LIMIT 5


SELECT * FROM customer
WHERE store_id=1
ORDER BY last_name DESC
LIMIT 4


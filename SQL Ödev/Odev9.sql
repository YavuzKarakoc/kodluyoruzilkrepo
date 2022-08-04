SELECT city, country FROM city
INNER JOIN country ON city.country_id= country.country_id


SELECT first_name, last_name, payment_id FROM customer 
INNER JOIN payment  ON payment.customer_id= customer.customer_id


SELECT first_name, last_name, rental_id FROM customer 
INNER JOIN rental  ON rental.customer_id= customer.customer_id
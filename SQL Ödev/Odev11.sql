(SELECT first_name FROM actor)
UNION 
(SELECT first_name FROM customer)


(SELECT first_name FROM actor)
INTERSECT 
(SELECT first_name FROM customer)

(SELECT first_name FROM actor)
EXCEPT 
(SELECT first_name FROM customer)




--4 SORU  İLK 3 SORUDA TEKRAR EDEN LERİDE EKLİYORUZ
--1. souru için unionun yanına all
--2. soruda sonuç aynı 
--3. soruda da yine exceptin yanına all  ekliyoruz

(SELECT first_name FROM actor)
UNION ALL
(SELECT first_name FROM customer)


(SELECT first_name FROM actor)
INTERSECT 
(SELECT first_name FROM customer)

(SELECT first_name FROM actor)
EXCEPT ALL
(SELECT first_name FROM customer)





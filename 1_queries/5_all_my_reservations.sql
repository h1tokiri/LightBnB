-- SELECT
-- FROM TABLE1
-- JOIN TABLE2 ON TABLE1.column = TABLE2.column
-- WHERE
-- GROUP BY
-- HAVING
-- ORDER BY
-- LIMIT

-- properties and reservations

-- my submission
-- SELECT property_reviews.reservation_id AS id, properties.title AS title, properties.cost_per_night AS cost_per_night, reservations.start_date AS start_date, AVG(property_reviews.rating) AS average_rating
-- FROM properties
-- JOIN reservations ON properties.id = reservations.property_id
-- JOIN property_reviews ON properties.id = property_reviews.property_id
-- JOIN users ON reservations.guest_id = users.id
-- WHERE users.id = 1
-- GROUP BY property_reviews.reservation_id, properties.title, properties.cost_per_night, reservations.start_date
-- ORDER BY start_date
-- LIMIT 10;

-- LHL, this matches the expected result better
SELECT reservations.id, properties.title, properties.cost_per_night, reservations.start_date, avg(rating) as average_rating
FROM reservations -- better to use reservations as the main table
JOIN properties ON reservations.property_id = properties.id
JOIN property_reviews ON properties.id = property_reviews.property_id
WHERE reservations.guest_id = 1 -- best to use this since i dont need to join the users table to match this
GROUP BY properties.id, reservations.id
ORDER BY reservations.start_date
LIMIT 10;
-- SELECT
-- FROM TABLE1
-- JOIN TABLE2 ON TABLE1.column = TABLE2.column
-- WHERE
-- GROUP BY
-- HAVING
-- ORDER BY
-- LIMIT

-- my submission
SELECT properties.id, properties.title, properties.cost_per_night, AVG(property_reviews.rating) AS average_rating
FROM properties
JOIN property_reviews ON properties.id = property_reviews.property_id
WHERE property_reviews.rating >= 4 AND properties.city = 'Vancouver'
GROUP BY properties.id, properties.title, properties.cost_per_night
ORDER BY properties.cost_per_night
LIMIT 10;

-- LHL - same result, but organized slightly differently.
-- SELECT properties.id, title, cost_per_night, avg(property_reviews.rating) as average_rating
-- FROM properties
-- LEFT JOIN property_reviews ON properties.id = property_id
-- WHERE city LIKE '%ancouv%'
-- GROUP BY properties.id
-- HAVING avg(property_reviews.rating) >= 4
-- ORDER BY cost_per_night
-- LIMIT 10;
-- SELECT
-- FROM TABLE1
-- JOIN TABLE2 ON TABLE1.column = TABLE2.column
-- WHERE
-- GROUP BY
-- HAVING
-- ORDER BY
-- LIMIT

-- my submission
SELECT properties.city, COUNT(reservations.id) AS total_reservations
FROM properties
JOIN reservations ON properties.id = reservations.property_id
GROUP BY properties.city
ORDER BY total_reservations DESC;

-- LHL, slight differences
-- SELECT properties.city, count(reservations) as total_reservations
-- FROM reservations
-- JOIN properties ON property_id = properties.id
-- GROUP BY properties.city
-- ORDER BY total_reservations DESC;
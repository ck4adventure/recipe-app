---
title: Databases Continued
path: /basics/databases-continued
date: 2020-12-04
category: basics
---

## More on DBs

### Creating tables

```sql
CREATE DATABASE databaseName
CREATE TABLE tableName (name1	type1, name2	type2, . . .)
CREATE TABLE star (name varchar(20), ra float, dec float, vmag float)

CREATE TABLE star (name varchar(20) not null, ra float default 0, ...)
```

Data types:

- boolean, bit, tinyint, smallint, int, bigint;
- real/float, double, decimal;
- char, varchar, text, binary, blob, longblob;
- date, time, datetime, timestamp

### Keys

```sql
CREATE TABLE star (name varchar(20), ra float, dec float, vmag float, CONSTRAINT PRIMARY KEY (name))
```

A primary key is a unique identifier for a row and is
automatically not null

```sql
CREATE TABLE star (name varchar(20), ..., stellarType varchar(8),
CONSTRAINT stellarType_fk FOREIGN KEY (stellarType)
REFERENCES stellarTypes(id))
```

A foreign key is a referential constraint between two tables
identifying a column in one table that refers to a column in
another table.

### Insert

```sql
INSERT INTO tableName VALUES(val1, val2, . . . )
INSERT INTO star VALUES('Sirius'
, 101.287, -16.716, -1.47)
INSERT INTO star(name, vmag) VALUES('Canopus'
, -0.72)
```

### Delete

```sql
DELETE FROM tableName WHERE condition
TRUNCATE TABLE tableName
DROP TABLE tableName
DELETE FROM star WHERE name = 'Canopus'
DELETE FROM star WHERE name LIKE 'C_n%'
DELETE FROM star WHERE vmag > 0 OR dec < 0
DELETE FROM star WHERE vmag BETWEEN 0 and 5
```

### Update

```sql
UPDATE tableName SET columnName =	val1	WHERE condition
UPDATE star SET vmag = vmag + 0.5
UPDATE star SET vmag = -1.47 WHERE name LIKE 'Sirius'
```

### Select

```sql
SELECT selectionList
FROM tableList
WHERE condition
ORDER BY criteria

SELECT name, constellation
FROM star
WHERE dec > 0
ORDER by vmag

SELECT *
FROM star
WHERE ra
BETWEEN 0 AND 90

SELECT DISTINCT constellation
FROM star

SELECT name
FROM star
LIMIT 5
ORDER BY vmag
```

### Joins

Inner join: combining related rows

```sql
SELECT * FROM star s INNER JOIN stellarTypes t ON s.stellarType = t.id
SELECT * FROM star s, stellarTypes t WHERE s.stellarType = t.id
```

Outer join: each row does not need a matching row

````sql
SELECT * from star s LEFT OUTER JOIN stellarTypes t ON s.stellarType = t.id
SELECT * from star s RIGHT OUTER JOIN stellarTypes t ON s.stellarType = t.id
SELECT * from star s FULL OUTER JOIN stellarTypes t ON s.stellarType = t.id
```
````

### Aggregate functions

COUNT, AVG, MIN, MAX, SUM

```sql
SELECT COUNT(*)
FROM star

SELECT AVG(vmag)
FROM star

SELECT stellarType, MIN(vmag), MAX(vmag)
FROM star
GROUP BY stellarType

SELECT stellarType, AVG(vmag), COUNT(id)
FROM star
GROUP BY stellarType
HAVING vmag > 14
```

### Views

CREATE VIEW viewName AS . . .

```sql
CREATE VIEW region1View AS
  SELECT * FROM star WHERE ra BETWEEN 150 AND 170
    AND dec BETWEEN -10 AND 10

SELECT id FROM region1View WHERE vmag < 10
  CREATE VIEW region2View AS

SELECT * FROM star s, stellarTypes t WHERE s.stellarType = t.id
  AND ra BETWEEN 150 AND 170 AND dec BETWEEN -10 AND 10

SELECT id FROM regionView2 WHERE vmag < 10 and stellarType LIKE 'A%'
```

### Indexes

```sql
CREATE INDEX indexName ON tableName(columns)
CREATE INDEX vmagIndex ON star(vmag)
```

- A clustered index is one in which the ordering of data entries is the same as the ordering of data records.
- Only one clustered index per table but multiple unclustered indexes.
- Typically implemented as B+ trees but alternate types such as bitmap index for high frequency repeated data

### Cursors

```sql
DECLARE cursorName CURSOR FOR SELECT ...
OPEN cursorName
FETCH cursorName INTO ...
CLOSE cursorName
```

A cursor is a control structure for successive traversal of records in a result set

Slowest way of accessing data!!!

### Triggers

CREATE TRIGGER triggerName ON tableName ...

A trigger is procedural code that is automatically executed in response to
certain events on a particular table:

- INSERT
- UPDATE
- DELETE

```sql
CREATE TRIGGER starTrigger ON star FOR UPDATE AS
IF @@ROWCOUNT = 0 RETURN
IF UPDATE (vmag) EXEC refreshModels
GO
```

### Normalisation
- First	normal	form: 
  - no	repeating	elements	or	groups	of	elements 
  - table	has	a	unique	key	(and	no	nullable	columns)
- Second	normal	form: no	columns	dependent	on	only	part	of the	key
  - StarName Constellation Area
- Third	normal	form: no	columns	dependent	on	other	non-key columns
  - StarName Magnitude Flux
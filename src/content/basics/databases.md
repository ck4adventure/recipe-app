---
title: Database Refresher
path: /basics/databases
date: 2020-12-04
category: basics
---

## Datbase Refresher

#### What is a database??

A structured collection of data residing on a computer system that can be easily accessed, managed and updated

Data is organized according to a model and has a set schema

DBMS - Database Management System is the software around a DB to store and manage all the databases

#### Why use a DBMS?

- data independence
- efficient and concurrent access
- data integrity, security and safety
- uniform data administration
- reduced application development time
- data analysis tools

#### Increasing performance in databases

- SQLite
- MySQL, PostgreSQL
- SQLServer, Oracle
- ∗Hive, HadoopDB

#### Flat (file) model

- Data files that contain records with no structural relationships
- Additional information is required to interpret these files such as the file format properties
- Hollerith 1889 patent "Art of Compiling Statistics" describes how every US resident can be represented by a string of 80 characters and numbers
- Examples: delimited-separated data, HTML table

#### Relational model

- Data is organized as relations, attributes and domains
- A relation is a table with columns (attributes) and rows (tuples)
- The domain is the set of values that the attributes are allowed to take
- Within the relation, each row is unique, the column order is immaterial and each row contains a single value for each of its attributes
- Proposed by E. F. Codd in 1969/70

#### Transactions

- An atomic sequence of actions (read/write) in the database
- Each transaction has to be executed completely and must leave the database in a consistent state
- If the transaction fails or aborts midway, the database is "rolled back" to its initial consistent state

###### Example:

Authorise Paypal to pay \$100 for my eBay purchase:

- Debit my account \$100
- Credit the seller's account \$100

#### ACID

By definition, a database transaction must be:

- Atomic: all or nothing
- Consistent: no integrity constraints violated
- Isolated: does not interfere with any other transaction
- Durable: committed transaction effects persist

#### Concurrency

- DBMS ensures that interleaved transactions coming from different clients do not cause inconsistencies in the data
- It converts the concurrent transaction set into a new set that can be executed sequentially
- Before reading/writing an object, each transaction waits for a lock on the object
- Each transaction releases all its locks when finished

#### Locks

- DMBS can set and hold multiple locks simultaneously on different levels of the physical data structure
- Granularity: at a row level, page (a basic data block), extent (multiple array of pages) or even an entire table

Exclusive vs. shared
Optimistic vs. pessimistic

#### Logs

- Ensures atomicity of transactions
- Recovering after a crash, effects of partially executed transactions are undone using the log

Log record:
-- Header (transaction ID, timestamp, ...)
-- Item ID
-- Type
-- Old and new value

#### Partitions

- Horizontal: different rows in different tables
- Vertical: different columns in different tables (normalisation)
- Range: rows where values in a particular column are inside a certain range
- List: rows where values in a particular column match a list of values
- Hash: rows where a hash function returns a particular value

#### Structured Query Language (SQL)

- Appeared in 1974 from IBM
- First standard published in 1986; most recent in 2008
- SQL92 is taken to be default standard
- Different flavours:
  - Microsoft/Sybase: Transact-SQL
  - MySQL: MySQL
  - Oracle: PL/SQL
  - PostgreSQL: PL/pgSQL

CREATE DATABASE b5_psql_cs;

Create TABLE publishers (  
    id serial PRIMARY key,
    name TEXT NOT NULL
)

Create TABLE books (  
    id serial PRIMARY key,
    author_name TEXT ,
    published_year int,
    price  NUMERIC(6,2),
    in_stock BOOLEAN,
    publisher_id INTEGER REFERENCES  publishers(id) 
)

INSERT INTO publishers (name) VALUES
('Penguin Random House'),
('HarperCollins'),
('Simon & Schuster'),
('Macmillan'),
('Hachette Book Group'),
('Scholastic'),
('Oxford University Press'),
('Cambridge University Press'),
('Bloomsbury Publishing'),
('Pearson');

INSERT INTO books (author_name, published_year, price, in_stock, publisher_id) VALUES
('J.K. Rowling', 1997, 19.99, TRUE, 1),
('George Orwell', 1949, 14.50, FALSE, 2),
(NULL, 2020, 9.99, TRUE, 3),
('Jane Austen', NULL, 12.00, TRUE, 4),
('Mark Twain', 1884, NULL, FALSE, 5),
('Agatha Christie', 1934, 8.75, NULL, 6),
('Leo Tolstoy', 1869, 25.99, TRUE, NULL),
('Ernest Hemingway', 1952, 11.45, TRUE, 7),
('Stephen King', 1986, 15.60, FALSE, 8),
(NULL, NULL, NULL, NULL, 9);


select * from books

Select * from publishers ADD

Alter TABLE BOOKS ADD COLUMN genre TEXT

Select * from books

Alter table books RENAME COLUMN author_name to author;

Alter Table books Drop COLUMN genre;

Alter table books add column title text;


Select   author, price from books;

Select * from books where in_stock = false;

Select  * from  books where author = 'Agatha Christie'

Select author 

Select Count(*) from books; 

Select avg(price) from books;
Select MAX(price) from books;
Select MIN(price) from books;



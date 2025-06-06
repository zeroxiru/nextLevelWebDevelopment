DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS publishers;

CREATE TABLE publishers (  
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE books (  
    id SERIAL PRIMARY KEY,
    title TEXT,
    author_name TEXT,
    published_year INT,
    price NUMERIC(6,2),
    in_stock BOOLEAN,
    publisher_id INTEGER REFERENCES publishers(id)
);

INSERT INTO publishers (name) VALUES
('Bloomsbury'),
('Secker & Warburg'),
('Penguin Random House'),
('Oxford University Press'),
('American Publishing Company'),
('HarperCollins'),
('The Russian Messenger'),
('Charles Scribner Sons'),
('Viking Press'),
('Unknown Publisher');


INSERT INTO books (title, author_name, published_year, price, in_stock, publisher_id) VALUES
('Harry Potter and the Philosopher Stone', 'J.K. Rowling', 1997, 19.99, TRUE, 1),
('1984', 'George Orwell', 1949, 14.50, FALSE, 2),
('The Mystery of the Missing Code', NULL, 2020, 9.99, TRUE, 3),
('Pride and Prejudice', 'Jane Austen', NULL, 12.00, TRUE, 4),
('Adventures of Huckleberry Finn', 'Mark Twain', 1884, NULL, FALSE, 5),
('Murder on the Orient Express', 'Agatha Christie', 1934, 8.75, NULL, 6),
('War and Peace', 'Leo Tolstoy', 1869, 25.99, TRUE, NULL),
('The Old Man and the Sea', 'Ernest Hemingway', 1952, 11.45, TRUE, 7),
('It', 'Stephen King', 1986, 15.60, FALSE, 8),
('Untitled Manuscript', NULL, NULL, NULL, NULL, 9);


Select * from  books;
Select  * from  Books Where price between  8 and 11; ADD

Select * from books where title ILIKE 'the%';
Select * from books where title LIKE 'The%';

Select * from books where author_name ILIKE '%orwell'; ADD


Select * from books  where author_name IN ('George Orwell', 'J.K. Rowling')


-- Pagination 
Select * from books LIMIT 3;
Select * from books LIMIT 10  OFFSET 5; 

update books set price = price * 1.20; ADD

Select * from books;
Select * from books where id > 25 ;
Select * from books;

Alter Table books 
    Add Column published_country VARCHAR(255) DEFAULT 'Bangladesh' NOT NULL ;

Alter Table books 
    DROP Column published_country ;

Alter Table guide  RENAME to books;

Alter table books
RENAME COLUMN published_country to published_region;

Alter Table books
Alter COLUMN published_region set NOT Null;

Alter Table books
Alter COLUMN published_region drop NOT Null;

Alter TABLE books
ADD constraint unique_books_published_year UNIQUE(published_year);

Alter TABLE books
drop constraint unique_books_published_year ;
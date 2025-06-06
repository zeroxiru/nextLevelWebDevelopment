Create Table "User"(
    id SERIAL PRIMARY key,
     UserName VARCHAR(250) not NULL)

Create table Post(
    id Serial PRIMARY key,
    tittle TEXT,
    description Text,
    user_id INTEGER REFERENCES  "User"(id) on Delete CASCADE


)

drop table post

INSERT INTO "User" (UserName) VALUES
('Alice'),
('Bob'),
('Charlie'),
('Diana'),
('Ethan');

INSERT INTO Post (tittle, description, user_id) VALUES
('Post One', 'This is the first post by Alice.', 1),
('Post Two', 'Bob shares his thoughts here.', 2),
('Post Three', 'Charlie writes about tech.', 3),
('Post Four', 'Diana posts a recipe.', 4),
('Post Five', 'Ethan shares a travel story.', 5);
INSERT INTO Post (tittle, description, user_id) VALUES
 ('Post First', 'This is the first post by Alice.', 1);

select * from "User" 

Select * from Post

Delete from "User" where id = 1

Delete from post where id = 8

Alter table post 
alter COLUMN user_id set  not NULL;


Select tittle, description from Post where user_id =4

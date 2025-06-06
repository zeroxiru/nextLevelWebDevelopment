Select tittle, description, username from post
join "User" on post.user_id = "User".id 

Insert INTO post ( tittle, description, user_id) values ( 
 'the loving of Coding', 'I am a coder with very minimum capacity of logical thinking but i am very pationate about this sector.', NULL
)

Select tittle, description, username from post
left join "User" on post.user_id = "User".id

Select * from  "User"

Insert into "User" (id, username) values
(   ( 6, 'Ibrahim'),
   ( 7, 'Zohan')
)

   Select * from post
Full outer join "User" on post.user_id = "User".id ADD

CREATE Table workers( 
    emp_id serial PRIMARY key,
    emp_name VARCHAR(255),
    dept_id int
)

Create Table sections ( 
    dept_id INT,
    dept_name VARCHAR(50)
) 


-- Insert into workers (emp_id, emp_name, dept_id) values 
-- (1, 'Ibrahim', 2),
-- (2, 'Zohan Ibrahim', 3),
-- (3, 'Siara Mehrish', 2),
-- (4, 'Shahreen Islam', 1);

-- Insert into sections (dept_id, dept_name) values 
--     (1, 'Human Resources'),
--     (2, 'IT Department'),
--     (3, 'Software Development');

SElect * from workers;
SElect * from sections;
-- Delete from sections where dept_id in (1, 2,3)

Select * from workers
CROSS JOIN sections;
Select * from workers
NATURAL  JOIN sections;
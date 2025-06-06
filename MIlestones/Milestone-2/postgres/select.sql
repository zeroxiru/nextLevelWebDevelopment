Select * from students where country <> 'USA';

Select * from students where NOt country = 'USA'

Select * from students where email is null;

Select COALESCE(email, 'Email is not provided') from students

Select * from students  where country = 'USA'

Select * from students where country = 'USA' OR country = 'UK' or country = 'Australia';

Select * from students where country ILIKE any  (Array['usa', 'uk', 'Australia'])

Select * from Students where dob BETWEEN '2000-01-01' and '2003-01-01' order by dob;

Select * from students where country IN ('USA', 'UK', 'Canada') limit 3;

Select * from students limit 5 OFFSET 5 * 0;
Select * from students limit 5 OFFSET 5 * 1;
Select * from students limit 5 OFFSET 5 * 2;
Select * from students 

Delete from students where 
   grade = 'C' and country = 'USA';

Update students set email = 'charlie@gmail.com' where student_id = 5



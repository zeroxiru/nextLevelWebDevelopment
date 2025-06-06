Select now();

Create TABLE timeZone(ts timeStamp without time zone, tsz TIMESTAMP with time zone);

select * from  timeZone

Insert into timeZone values('2025-01-12 23:12:22', '2025-05-12 02:12:22')

Select CURRENT_DATE;

Select now():: date;
Select now():: time;

SElect to_char(now(), 'mm-dd-yyyy')

SElect to_char(now(), 'DDD')

Select CURRENT_DATE + INTERVAL '38 day';

Select age(Current_Date, ('1986-06-28'))

Select country, age from students GROUP BY country, age order by country;

Select country, count(*) from students
  group by country;

  Select Country, count(*), avg(age) from students
  group by country

   Select Country,  avg(age) from students
  group by country 
    having avg(age) >21;

Select * from Students;

Select first_name, last_name from students
   GROUP BY dob;

   Select extract(year from dob) as birthYear, count(*) from Students
     GROUP BY birthYear;


-- Active: 1747583190273@@127.0.0.1@5432@bookstore
Select * from  employees

Select * from departments

SELECT * from employees 
join departments on employees.department_id = departments.department_id

Select * from employees 
join departments using(department_id)

Select department_name from (Select department_name from departments)

Select department_name de from employees  GROUP BY department_name;

Select department_name, round(avg(salary)) from employees
join departments using(department_id) GROUP BY department_name

Select department_name,count(*) from employees
join departments using(department_id) GROUP BY department_name

Select department_name,max( round(avg(salary))) from employees
join departments using(department_id) GROUP BY department_name ADD

Select department_name, round(avg(salary)) as averageSalary from employees
join departments using (department_id)
GROUP BY department_name ORDER BY averageSalary DESC 
limit 1;

Select employee_name from employees 
/*** Note: {} is data to change ***/

/******** Create a database *********/
create database {database_name};


/******** Show all databases *********/
show databases;


/******** Select a database *********/
use {database_name};


/******** Remove a specific database *********/
drop database {database_name};


/******** Know the database is using *********/
select database();


/******** Create a table *********/
create table {table_name} ({column type}, {column type}, {column type}, etc.);

/*** Examples - Unique ***/
create table person (
	id varchar(255) not null,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    age int not null,
    timeAdded timestamp,
    unique (id)
);

/*** Examples - Set default data ***/
create table person (
	id varchar(255) not null,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    age int not null check (age >= 12 and timeAdded != null),
    timeAdded timestamp default current_timestamp,
    unique (id)
);

/*** Examples - Auto_increment ***/
create table person (
	id int not null auto_increment,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    age int not null check (age >= 12 and timeAdded != null),
    timeAdded timestamp default current_timestamp,
    unique (id)
);

/*** Examples - Primary key ***/
create table Person (
	id varchar(40),
    firstName varchar(100) not null,
	middleName varchar(100),
    lastName varchar(100) not null,
    age int not null,
    bornCountry varchar(100),
    timeAdded timestamp default current_timestamp,
    primary key (id)
);

/*** Examples - Foreign key ***/
create table orders (
	id int auto_increment,
    personID varchar(255),
	mount int not null,
    primary key (id),
    foreign key (personID) references person (id)
);


/******** Show all tables *********/
show tables;


/******** Show all columns from a table *********/
select * from {table_name};


/******** Delete a table *********/
drop table {table_name};


/******** Add new column to table *********/
alter table {table_name} add {column type};


/******** Remove a column from table *********/
alter table {table_name} drop column {column};


/******** Modify a column from table *********/
alter table {table_name} modify {column type};


/******** Make a column to be unique type *********/
alter table {table_name} add unique ({column});


/******** Make a column to be primary key *********/
alter table {table_name} add primary key ({column});


/******** Make a column to be foreign key *********/
alter table {table_name} add foreign key ({column}) references {parent_table_name} ({parent_column});


/******** Insert a row *********/
insert into {table_name} ({column}, {column}, {column}, etc.) values ({value}, {value}, {value}, etc.);

/*** Example ***/
insert into person (id, firstName, middleName, lastName, age, bornCountry) values ("801060850", "Ming", "Chung", "Ou", 25, "Taiwan");


/******** Remove all rows *********/
truncate {table_name};


/******** Get specific row(s) *********/
select * from {table_name} where {condition};


/******** Delete a row(s) *********/
delete from {table_name} where {condition};


/******** Update a row(s) *********/
update {table_name} set {column} = {value} where {condition};


/******** Some examples of select *********/
select * from person where middleName is null and age < 24;
select * from person where age > 20 and age <= 25;
select * from person where not middleName is not null;
select * from person where firstName = "Maria" or lastName = "Ou";
select * from person order by id asc; /* Get all rows but ordering asc */
select * from person order by id desc; /* Get all rows but ordering desc */
select * from person limit 3;    /* Take first 3 rows */
select * from person where middleName is null limit 1;
select * from person where age between 20 and 25;
select id, firstName, max(age) from person where middleName is null;
select * from person where age = (select max(age) from person);   /* Get the row with highest age */
select avg(age) from person;   /* Get average value of numeric column */
select count(*) from person where middleName is null;
select * from person where firstName like "m%";
select * from person where bornCountry in ("Taiwan", "Costa Rica");
select * from person where bornCountry in (select bornCountry from person where middleName is null);
select person.firstName, person.lastName, orders.mount from person inner join orders on person.id = orders.personID;
select count(id), bornCountry from person group by bornCountry;
select count(id), bornCountry from person group by bornCountry having count(id) >= 3;

select count(person.id), person.bornCountry, sum(orders.mount) from person
	inner join orders on person.id = orders.personID
		group by person.bornCountry
			having sum(orders.mount) > 0
				order by sum(orders.mount) asc;

select * from person where exists (select mount from orders where personID = person.id and mount < 5000);


/******** Some examples of functions *********/
drop function if exists practica;
delimiter //
create function practica() returns int
begin
	declare resultado int default 0;
    declare length int;
    declare i int default 1;
    declare orderMount int;
    select count(id) into length from orders;

    while (i <= length) do
		select mount into orderMount from orders where id = i;

        if resultado = 0 then
			set resultado = orderMount;
		else
			if resultado > orderMount then
				set resultado = orderMount;
			end if;
		end if;

		set i = i + 1;
    end while;

    return resultado;
end;


drop function if exists practica;
delimiter //
create function practica() returns varchar(255)
begin
	declare resultado int default 0;
	declare resultName varchar(100);
	declare resultID varchar(40);
    declare length int;
    declare i int default 1;
    declare currentMount int;
	declare currentID varchar(40);
    select count(id) into length from orders;

    loop1: loop
		select personID, mount into currentID, currentMount from orders where id = i;

        if resultado = 0 or resultado > currentMount then
			set resultado = currentMount;
			set resultID = currentID;
		end if;

		set i = i + 1;
		if i > length then
			leave loop1;
		else
			iterate loop1;
		end if;
    end loop loop1;

	select firstName into resultName from person where id = resultID;
	return concat(resultID, ": ", resultName, " with $", resultado);
end;


drop function if exists practica;
delimiter //
create function practica() returns varchar(255)
begin
	declare resultado int default 0;
	declare resultName varchar(100);
	declare resultID varchar(40);
    declare length int;
    declare i int default 1;
    declare currentMount int;
	declare currentID varchar(40);
    select count(id) into length from orders;

    repeat1: repeat
		select personID, mount into currentID, currentMount from orders where id = i;

        if resultado = 0 or resultado > currentMount then
			set resultado = currentMount;
			set resultID = currentID;
		end if;

		set i = i + 1;
	until i > length
    end repeat repeat1;

	select firstName into resultName from person where id = resultID;
	return concat(resultID, ": ", resultName, " with $", resultado);
end;

select practica();


/******** Some examples of procedure *********/
drop procedure if exists practica;
delimiter //
create procedure practica(in xname varchar(100))
begin
	select count(person.id) as Count, person.bornCountry, sum(orders.mount) from person
		inner join orders on person.id = orders.personID
			group by person.bornCountry
				having sum(orders.mount) > 0
					order by sum(orders.mount) asc;
end;


drop procedure if exists authentication;
delimiter //
create procedure authentication(in xuserName varchar(255), in xuserPass varchar(12))
begin
	select * from person where userName = xuserName and userPass = xuserPass;
end;

call authentication("mingchungou@gmail.com", "mingchun1991");


/******** Configuration of connecting to mysql db from other domain *********/
create user 'monty'@'localhost' identified by 'some_pass';
grant all privileges on *.* to 'monty'@'localhost' with grant option;
create user 'monty'@'%' identified by 'some_pass';
grant all privileges on *.* TO 'monty'@'%' with grant option;
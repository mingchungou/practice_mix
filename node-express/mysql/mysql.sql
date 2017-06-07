/******** Database *********/
create database mydb;
use mydb;



/******** Table users *********/
drop table if exists users;
create table users (
	id int auto_increment,
	name varchar(100) not null,
	username varchar(100) not null,
	email varchar(150) not null,
	password varchar(255) not null,
	image varchar(100),
	primary key (id)
);

truncate users;
select * from users;
describe users;



/******** Table artists *********/
drop table if exists artists;
create table artists (
	id int auto_increment,
	name varchar(100) not null,
	description varchar(100) not null,
	image varchar(100),
	primary key (id)
);

truncate artists;
select * from artists;
describe artists;



/******** Table albums *********/
drop table if exists albums;
create table albums (
	id int auto_increment,
	title: varchar(100) not null,
	description varchar(100) not null,
	year int not null,
	image varchar(100),
	artistID int,
	primary key (id),
	foreign key (artistID) references artists (id) on delete cascade
);

truncate albums;
select * from albums;
describe albums;



/******** Table songs *********/
drop table if exists songs;
create table songs (
	id int auto_increment,
	number int not null,
	name varchar(100) not null,
	duration varchar(10) not null,
	file varchar(100),
	albumID int,
	primary key (id),
	foreign key (albumID) references albums (id) on delete cascade
);

truncate songs;
select * from songs;
describe songs;

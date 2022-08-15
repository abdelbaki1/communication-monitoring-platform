drop table if exists repports     ;
drop table if exists subprojects  ;
drop table if exists projects     ;
drop table if exists workers      ;
drop table if exists managers     ;
create table managers(
id_manager varchar(20) primary key,
name varchar(30),last_name varchar(30),salary varchar(30));


create table workers(
id_worker varchar(20) primary key,
first_name varchar(20),
last_name varchar(20),
place varchar(20),
id_manager varchar(30),
foreign key (id_manager) references managers(id_manager));
create table projects (
id_project varchar(20) primary key,
noun varchar(20),
activated varchar(20),
deadline varchar(20),
Descrip varchar(20),
id_manager varchar(20) ,
foreign key (id_manager) references managers(id_manager));

create table subprojects(
id_sub_project varchar(25) primary key,
noun varchar(25),
Descrip varchar(25),
activated date,
deadline date,
id_project varchar(20),
id_worker varchar(20),
foreign key (id_project) references projects (id_project) ,
foreign key (id_worker) references workers (id_worker)); 
create table repports(
id_repport            varchar(20) primary key,
title            varchar(25),
typ            varchar(10) ,
des            text ,
written            date,
id_manager            varchar(20),
id_sub_projects  varchar(20),
id_worker            varchar(20),
id_project varchar(20),
foreign key (id_project) references projects(id_project),
foreign key (id_manager) references managers(id_manager),
foreign key (id_sub_projects) references subprojects(id_sub_project),
foreign key (id_worker) references workers(id_worker));
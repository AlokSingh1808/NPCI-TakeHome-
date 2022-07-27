Create database E_Commerce; 
use E_Commerce;

create table product (id bigint primary key, sku varchar(255), name varchar(255), description varchar(255), 
unitprice decimal(13,2), imageurl varchar(255), unitsinstock int, datecreated datetime(6), 
lastupdated DATETIME(6),categoryid BIGINT, foreign key (categoryid) references 
productcategory (categoryid));
insert into product values(1, "ABC", "Rice", "Bssmati", 50, "rice.jpg", 100, "2022-07-22", "2022-07-22", 1); 
insert into product values(2, "ABC", "Pulses", "Moong", 80, "daal.jpg", 80, "2022-07-22", "2022-07-22", 1); 
insert into product values(3, "ABC", "Bata", "Shoes", 1250, "bata.jpg", 7, "2022-07-22", "2022-07-22", 3); 
insert into product values(4, "ABC", "Lancer", "Shoes", 1050, "lancer.jpg", 7, "2022-07-22", "2022-07-22", 3);
insert into product values(5, "ABC", "Parle", "Cookie", 35.50, "parle.jpg", 25, "2022-07-22", "2022-07-22", 2);  
select * from product;


create table productcategory(categoryid bigint primary key, categoryname varchar(255));
insert into productcategory values (1, "Food");
insert into productcategory values (2, "Snacks");
insert into productcategory values (3, "Shoes");
insert into productcategory values (4, "Cloths");
select * from productcategory;


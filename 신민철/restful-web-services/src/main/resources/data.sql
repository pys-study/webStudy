insert into user_details(id, birth_date, name)
values (10001, current_date(), 'Modern');

insert into user_details(id, birth_date, name)
values (10002, current_date(), 'Isymyuel');

insert into user_details(id, birth_date, name)
values (10003, current_date(), 'Raviahn');

insert into post(id, description, user_id)
values (20001, 'AWS를 배우고 싶어요', 10001);

insert into post(id, description, user_id)
values (20002, 'DevOps를 배우고 싶어요', 10001);

insert into post(id, description, user_id)
values (20003, 'AWS 자격증을 따고 싶어요', 10002);

insert into post(id, description, user_id)
values (20004, '멀티 클라우드를 배우고 싶어요', 10002);
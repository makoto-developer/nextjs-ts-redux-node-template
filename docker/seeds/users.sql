-- auto-generated definition
create table users
(
    id      bigserial constraint users_pk primary key,
    name    varchar(255) not null,
    age     smallserial,
    profile varchar(2048),
    avatar  varchar(8946),
    role    varchar(255)
);

alter table users
    owner to postgres;

create unique index users_id_uindex
    on users (id);


insert into public.users (name, age, profile, avatar, role)
values  ('Alice', 29, 'Alice profile', 'https://pickaface.net/gallery/avatar/unr_xana_170911_2254_zhnr2.png', 'Admin'),
        ('Bob', 25, 'Bob profile', 'https://pickaface.net/gallery/avatar/unr_king_220214_1405_10yw56.png', 'User'),

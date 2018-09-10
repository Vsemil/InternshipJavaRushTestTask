USE test;

DROP TABLE IF EXISTS part;
CREATE TABLE part(
id bigint not null AUTO_INCREMENT,
amount integer not null,
is_compulsory bit not null,
name varchar(255),
primary key (id))
engine=MyISAM
DEFAULT CHARACTER SET = utf8;

INSERT INTO part (id, name, is_compulsory, amount)
VALUES (1, 'Материнская плата', true, 5),
(2, 'Процессор', true, 6),
(3, 'Кулер', true, 5),
(4, 'ОЗУ', true, 25),
(5, 'Видеокарта', false , 2),
(6, 'Жесткий диск', true, 2),
(7, 'SSD', false, 6),
(8, 'Вентилятор корпуса', false, 7),
(9, 'Блок питания', true, 4),
(10, 'Корпус', true, 5),
(11, 'Звуковая карта', false, 9),
(12, 'Сетевая карта', false, 2),
(13, 'Оптический привод', false, 1),
(14, 'ТВ тюнер', false, 1),
(15, 'Контроллер MS9904 4xCOM Ret', false, 1),
(16, 'Адаптер USB', false, 1),
(17, 'Монитор', true, 15),
(18, 'Подсветка корпуса', false, 3),
(19, 'Мышь', true, 20),
(20, 'Клавиатура', true, 23),
(21, 'Наушники', false, 7),
(22, 'Колонки', false, 4),
(23, 'Принтер', false, 2),
(24, 'Сканер', false, 1),
(25, 'Джойстик', false, 1),
(26, 'Коврик', false, 77),
(27, 'Бесперебойник', false, 6),
(28, 'Сетевой фильтр', false, 3),
(29, 'USB хаб', false, 8),
(30, 'Операционная система', true, 23),
(31, 'Антивирус', false, 13),
(32, 'Офис', false, 333);

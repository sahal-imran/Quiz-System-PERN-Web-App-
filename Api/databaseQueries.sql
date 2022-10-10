create table qb_sf
(
    id               bigint not null
        primary key,
    question         text,
    stems            text[],
    answer           text[],
    domain           text,
    explanation      text,
    explain_url      text,
    active_flag      bigint,
    preview_flag     bigint,
    image_flag       bigint,
    image_url        text,
    last_update_date timestamp
);

alter table qb_sf
    owner to postgres;


select * from qb_sf;

insert into qb_sf (id, question, stems, answer, "domain", explanation,explain_url, active_flag, preview_flag, image_flag, image_url, last_update_date)
values
       (1, 'which of these are the cities of india ?', '{"Goa","Karachi","Lahore","Delhi","Peshawar"} ', '{"1", "4"}','domain movement', 'Goa and delhi are the cities of india. All others are the pakistani cities.','',1,0,1,'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png','2022-09-09 09:30:27.000000'),    
       (2, 'Which of the language is used in web development?', '{"c++","dart","solidity","javascript"} ', '{"4"}','domain transform', 'Javascript is the language, used to develop frotend of Website.','https://dvg5hr78c8hf1.cloudfront.net/2016/06/17/13/45/01/cc2fac88-2f81-4cc5-9ec9-334042781fd0/1*OsjnQFK1i6CkjXQmTErAtw.jpeg',1,0,1,'https://copm.s3.amazonaws.com/189aa059.png','2022-09-09 09:30:27.000000'),
       (3, 'What is the name of Pakistan PM?', '{"Shehbaz","Nawaz","Obama","Henry","Imran"} ', '{"1"}','domain governance', 'Shehbaz sharif is the current PM of Pakistan. ','https://c.ndtvimg.com/2022-04/2e6tr7v_shehbaz-sharif_650x400_11_April_22.jpg',1,0,1,'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1200px-Flag_of_Pakistan.svg.png','2022-09-09 09:30:27.000000'),
       (4, 'which of these colors are termed as rgb?', '{"Red","Black","Green","Gray","Blue"} ', '{"1","3","5"}','domain governance', ' RGB termed after the name of red, green and blue colors. ','',1,0,1,'https://wallpaperaccess.com/full/909284.png','2022-09-09 09:30:27.000000'),
  (5, 'How many players a cricket team consist of?', '{"12","9","6","11","13"} ', '{"4"}','domain none', 'There are 11 players in a cricket team. ','https://content.api.news/v3/images/bin/3c6639fd8659a97bfa1ed7ed2c66063e?width=768',1,0,0,Null,'2022-09-09 09:30:27.000000');
    -- (6, 'what is the capital of India?', '{"india","nairobi","cary","wake forest","raleigh"} ', '[''1'', ''2'']','domain governance', 'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The ',1,0,1,'https://dataflakes.blob.core.windows.net/sf-data-engineer/data_spillage.png','2022-09-09 09:30:27.000000');
--   (7, 'what is the capital of India?', '{"india","nairobi","cary","wake forest","raleigh"} ', '[''1'', ''2'']','domain governance', 'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The ',1,0,1,'https://dataflakes.blob.core.windows.net/sf-data-engineer/data_spillage.png','2022-09-09 09:30:27.000000'),
--   (8, 'what is the capital of India?', '{"india","nairobi","cary","wake forest","raleigh"} ', '[''1'', ''2'']','domain governance', 'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The ',1,0,1,'https://dataflakes.blob.core.windows.net/sf-data-engineer/data_spillage.png','2022-09-09 09:30:27.000000'),
--   (9, 'what is the capital of India?', '{"india","nairobi","cary","wake forest","raleigh"} ', '[''1'', ''2'']','domain governance', 'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The ',1,0,1,'https://dataflakes.blob.core.windows.net/sf-data-engineer/data_spillage.png','2022-09-09 09:30:27.000000'),
--   (10, 'what is the capital of India?', '{"india","nairobi","cary","wake forest","raleigh"} ', '[''1'', ''2'']','domain governance', 'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The ',1,0,1,'https://dataflakes.blob.core.windows.net/sf-data-engineer/data_spillage.png','2022-09-09 09:30:27.000000'),

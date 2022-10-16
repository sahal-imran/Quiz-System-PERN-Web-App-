create table qb_sf
(
    id               SERIAL not null 
    primary key,
    question         text,
    image_stems_flag bigint,
    stems            text[],
    answer           text[],
    domain           text,
    explanation      text,
    explain_url      text,
    active_flag      bigint,
    preview_flag     bigint,
    image_flag       bigint,
    image_url        text,
    last_update_date date not null default current_timestamp
);

alter table qb_sf
    owner to postgres;


select * from qb_sf;

insert into qb_sf ( question,image_stems_flag, stems, answer, "domain", explanation,explain_url, active_flag, preview_flag, image_flag, image_url)
values

   ( 'which of these are the cities of india ?',0, '{"Goa","Karachi","Lahore","Delhi","Peshawar"} ', '{"1", "4"}','domain movement', 'Goa and delhi are the cities of india. All others are the pakistani cities.','',1,0,1,'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'),    
       ( 'Which of the language is used in web development?',1, '{"https://www.trio.dev/hubfs/Imported_Blog_Media/python_logo.jpg","https://quoininc.com/media_files/media_files/flutter%20logo%20%20resized.webp","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoUjr6UkKZSF4DD8yb_oRvxwPqz1QbW-oRg&usqp=CAU","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"} ', '{"4"}','domain transform', 'Javascript is the language, used to develop frotend of Website.','https://dvg5hr78c8hf1.cloudfront.net/2016/06/17/13/45/01/cc2fac88-2f81-4cc5-9ec9-334042781fd0/1*OsjnQFK1i6CkjXQmTErAtw.jpeg',1,0,1,'https://copm.s3.amazonaws.com/189aa059.png'),
       ( 'What is the PM of Pakistan?',1, '{"https://dataflakes.blob.core.windows.net/dbt-engineer/carbon%20(3).png","https://i.ytimg.com/vi/kU-t1qsEbqk/sddefault.jpg","https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221007171517.jpg","https://images.hindustantimes.com/img/2022/04/11/550x309/Shehbaz_Sharif_1649680028973_1649680029244.jpg"} ', '{"4"}','domain governance', 'Shehbaz sharif is the current PM of Pakistan. ','https://c.ndtvimg.com/2022-04/2e6tr7v_shehbaz-sharif_650x400_11_April_22.jpg',1,0,1,'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1200px-Flag_of_Pakistan.svg.png'),
       ( 'which of these colors are termed as rgb?',0, '{"Red","Black","Green","Gray","Blue"} ', '{"1","3","5"}','domain governance', ' RGB termed after the name of red, green and blue colors. ','',1,0,1,'https://wallpaperaccess.com/full/909284.png'),
  ('How many players a cricket team consist of?',0, '{"12","9","6","11","13"} ', '{"4"}','domain none', 'There are 11 players in a cricket team. ','https://content.api.news/v3/images/bin/3c6639fd8659a97bfa1ed7ed2c66063e?width=768',1,0,0,Null),
   ( 'Which of the following commands will generate documentation for a dbt project?',0, '{"dbt docs generate","dbt generate docs","dbt run docs","dbt docs serve"} ', '{"1"}','dbt Documentation', '','',1,0,0,Null),
       ( 'Which of the following commands will enable an engineer to view documentation for a project?',0, '{"dbt docs serve","dbt docs generate","dbt docs generate view"} ', '{"1"}','Develop dbt Models', '','',1,0,0,Null),
    
      ('What would be the result of compiling the code below in dbt?

{% for i in range(1, 3) %}
    select {{ i }} as my_column
{% if not loop.last %}
    union all 
{% endif %}
{% endfor %}',0, '{"select {{1}} as my_column
union all 
select {{2}} as my_column
union all 
select {{3}} as my_column","select 1 as my_column
union all 

select 2 as my_column
union all 

select 3 as my_column","select {1} as my_column
union all 
select {2} as my_column
union all 
select {3} as my_column","select {{1}} as my_column
union all 
select {{2}} as my_column
union all 
select {{3}} as my_column","The code would return an error message"} ', '{"1"}','Performance Optimization', '','',1,0,0,Null),
    
   

   ( 'What would be the result of running the code block below?

{# 

{% set my_cool_string = "dataflakes" %}

{% set value = "hello world" %}

{{ value }} {{my_cool_string}} to the world!

#}',0, '{"{

hello world dataflakes to the world!

}
limit 500","limit 500
/* limit added automatically by dbt cloud */","An error message","None of the options are valid"} ', '{"1"}','Performance Optimization', '','https://dataflakes.blob.core.windows.net/dbt-engineer/freshness.png',1,0,1,'https://dataflakes.blob.core.windows.net/dbt-engineer/freshness.png');
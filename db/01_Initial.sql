DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS post;

CREATE TABLE profile (
	id 			serial PRIMARY KEY,
	username 	text,
	email 		text 
);

CREATE TABLE post (
	id 			serial PRIMARY KEY,
	body 		text,
	post_date	timestamp with time zone NOT NULL,
	profile_id  integer,

	CONSTRAINT fk_post_to_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile (id)  
);
DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS forecast;

CREATE TABLE location (
	id 			serial PRIMARY KEY,
	latitude 	numeric,
	longitude	numeric,
	query_date  timestamp with time zone NOT NULL 
);

ALTER TABLE location OWNER TO weather_server;

CREATE TABLE forecast (
	id 			serial PRIMARY KEY,
	temp_high	integer,
	temp_low	integer,
	summary		text,
	precip		numeric,
	location_ID	integer,

		CONSTRAINT fk_forecast_to_location
		FOREIGN KEY (location_id)
		REFERENCES location (id)  
);

ALTER TABLE forecast OWNER TO weather_server;
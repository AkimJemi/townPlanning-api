CREATE DATABASE town_planning_api;

CREATE SCHEMA IF NOT EXISTS town_planning_api_schema;

CREATE TABLE IF NOT EXISTS town_planning_api_schema.estate_transaction (
    "prefecture_code" TEXT NOT NULL,
    "prefecture_name" TEXT NOT NULL,
    "type" INT,
    "year" INT,
    "value" INT,
    CONSTRAINT estate_transaction_pkey PRIMARY KEY (
        "prefecture_code",
        "prefecture_name",
        "type"
    )
);
CREATE TABLE IF NOT EXISTS public.time_display
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    dist double precision,
    times double precision,
    ts timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    status integer,
    CONSTRAINT time_display_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.time_display
    OWNER to postgres;
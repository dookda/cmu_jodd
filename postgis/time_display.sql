--
-- PostgreSQL database dump
--

-- Dumped from database version 11.12 (Ubuntu 11.12-1.pgdg16.04+1)
-- Dumped by pg_dump version 15.0

-- Started on 2022-12-02 20:47:52 +07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- TOC entry 220 (class 1259 OID 758476)
-- Name: time_display; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.time_display (
    id integer NOT NULL,
    dist double precision,
    times double precision,
    ts timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    status integer
);


ALTER TABLE public.time_display OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 758474)
-- Name: time_display_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.time_display_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.time_display_id_seq OWNER TO postgres;

--
-- TOC entry 3756 (class 0 OID 0)
-- Dependencies: 219
-- Name: time_display_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.time_display_id_seq OWNED BY public.time_display.id;


--
-- TOC entry 3619 (class 2604 OID 758479)
-- Name: time_display id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.time_display ALTER COLUMN id SET DEFAULT nextval('public.time_display_id_seq'::regclass);


--
-- TOC entry 3750 (class 0 OID 758476)
-- Dependencies: 220
-- Data for Name: time_display; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3757 (class 0 OID 0)
-- Dependencies: 219
-- Name: time_display_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.time_display_id_seq', 1, false);


--
-- TOC entry 3622 (class 2606 OID 758482)
-- Name: time_display time_display_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.time_display
    ADD CONSTRAINT time_display_pkey PRIMARY KEY (id);


-- Completed on 2022-12-02 20:47:54 +07

--
-- PostgreSQL database dump complete
--


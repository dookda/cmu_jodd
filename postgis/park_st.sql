--
-- PostgreSQL database dump
--

-- Dumped from database version 11.12 (Ubuntu 11.12-1.pgdg16.04+1)
-- Dumped by pg_dump version 15.0

-- Started on 2022-12-02 20:48:21 +07

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
-- TOC entry 222 (class 1259 OID 758485)
-- Name: park_st; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.park_st (
    id integer NOT NULL,
    total integer,
    blank integer,
    ts timestamp without time zone
);


ALTER TABLE public.park_st OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 758483)
-- Name: park_st_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.park_st_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.park_st_id_seq OWNER TO postgres;

--
-- TOC entry 3753 (class 0 OID 0)
-- Dependencies: 221
-- Name: park_st_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.park_st_id_seq OWNED BY public.park_st.id;


--
-- TOC entry 3619 (class 2604 OID 758488)
-- Name: park_st id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.park_st ALTER COLUMN id SET DEFAULT nextval('public.park_st_id_seq'::regclass);


--
-- TOC entry 3747 (class 0 OID 758485)
-- Dependencies: 222
-- Data for Name: park_st; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3754 (class 0 OID 0)
-- Dependencies: 221
-- Name: park_st_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.park_st_id_seq', 1, false);


-- Completed on 2022-12-02 20:48:22 +07

--
-- PostgreSQL database dump complete
--


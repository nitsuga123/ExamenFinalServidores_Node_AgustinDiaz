--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: activecar; Type: TABLE; Schema: public; Owner: ohbeftnf
--

CREATE TABLE activecar (
    id integer NOT NULL,
    car integer NOT NULL
);


ALTER TABLE activecar OWNER TO ohbeftnf;

--
-- Name: cars; Type: TABLE; Schema: public; Owner: ohbeftnf
--

CREATE TABLE cars (
    carid integer NOT NULL,
    topspeed integer NOT NULL,
    acceler integer NOT NULL,
    handling integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE cars OWNER TO ohbeftnf;

--
-- Name: player; Type: TABLE; Schema: public; Owner: ohbeftnf
--

CREATE TABLE player (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE player OWNER TO ohbeftnf;

--
-- Name: playercars; Type: TABLE; Schema: public; Owner: ohbeftnf
--

CREATE TABLE playercars (
    playerid integer NOT NULL,
    carid integer NOT NULL,
    topspeed integer NOT NULL,
    accele integer NOT NULL,
    handling integer NOT NULL
);


ALTER TABLE playercars OWNER TO ohbeftnf;

--
-- Name: playerdata; Type: TABLE; Schema: public; Owner: ohbeftnf
--

CREATE TABLE playerdata (
    playerid integer NOT NULL,
    exp integer NOT NULL,
    lvl integer NOT NULL,
    money integer NOT NULL
);


ALTER TABLE playerdata OWNER TO ohbeftnf;

--
-- Data for Name: activecar; Type: TABLE DATA; Schema: public; Owner: ohbeftnf
--

INSERT INTO activecar VALUES (1, 1);


--
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: ohbeftnf
--

INSERT INTO cars VALUES (1, 200, 200, 200, 'carx');
INSERT INTO cars VALUES (2, 200, 200, 200, 'cary');
INSERT INTO cars VALUES (3, 300, 300, 300, 'carz');


--
-- Data for Name: player; Type: TABLE DATA; Schema: public; Owner: ohbeftnf
--

INSERT INTO player VALUES (1, 'agustin');


--
-- Data for Name: playercars; Type: TABLE DATA; Schema: public; Owner: ohbeftnf
--

INSERT INTO playercars VALUES (1, 1, 200, 200, 200);
INSERT INTO playercars VALUES (1, 2, 300, 200, 400);


--
-- Data for Name: playerdata; Type: TABLE DATA; Schema: public; Owner: ohbeftnf
--

INSERT INTO playerdata VALUES (1, 500, 2, 50000);


--
-- Name: index_id; Type: INDEX; Schema: public; Owner: ohbeftnf
--

CREATE INDEX index_id ON player USING btree (id);


--
-- Name: index_id1; Type: INDEX; Schema: public; Owner: ohbeftnf
--

CREATE INDEX index_id1 ON activecar USING btree (id);


--
-- Name: index_playerid; Type: INDEX; Schema: public; Owner: ohbeftnf
--

CREATE INDEX index_playerid ON playerdata USING btree (playerid);


--
-- Name: index_playerid1; Type: INDEX; Schema: public; Owner: ohbeftnf
--

CREATE INDEX index_playerid1 ON playercars USING btree (playerid);


--
-- PostgreSQL database dump complete
--


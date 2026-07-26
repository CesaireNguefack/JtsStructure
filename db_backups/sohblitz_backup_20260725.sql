--
-- PostgreSQL database dump
--

\restrict mqdZPh20rOr9XQIyzaghxPktqb0xshrjiixQ3Or6DofViBUe49qkwko4qBV3cYj

-- Dumped from database version 16.13 (Homebrew)
-- Dumped by pg_dump version 16.13 (Homebrew)

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

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: cesaire
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO cesaire;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: cesaire
--

COMMENT ON SCHEMA public IS '';


--
-- Name: ReservationStatus; Type: TYPE; Schema: public; Owner: cesaire
--

CREATE TYPE public."ReservationStatus" AS ENUM (
    'PENDING',
    'CONFIRMED',
    'CANCELLED',
    'DONE'
);


ALTER TYPE public."ReservationStatus" OWNER TO cesaire;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Availability; Type: TABLE; Schema: public; Owner: cesaire
--

CREATE TABLE public."Availability" (
    id integer NOT NULL,
    start timestamp(3) without time zone NOT NULL,
    "end" timestamp(3) without time zone NOT NULL,
    type text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Availability" OWNER TO cesaire;

--
-- Name: Availability_id_seq; Type: SEQUENCE; Schema: public; Owner: cesaire
--

CREATE SEQUENCE public."Availability_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Availability_id_seq" OWNER TO cesaire;

--
-- Name: Availability_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cesaire
--

ALTER SEQUENCE public."Availability_id_seq" OWNED BY public."Availability".id;


--
-- Name: Contact; Type: TABLE; Schema: public; Owner: cesaire
--

CREATE TABLE public."Contact" (
    id integer NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    name text NOT NULL,
    phone text
);


ALTER TABLE public."Contact" OWNER TO cesaire;

--
-- Name: Contact_id_seq; Type: SEQUENCE; Schema: public; Owner: cesaire
--

CREATE SEQUENCE public."Contact_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Contact_id_seq" OWNER TO cesaire;

--
-- Name: Contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cesaire
--

ALTER SEQUENCE public."Contact_id_seq" OWNED BY public."Contact".id;


--
-- Name: Reservation; Type: TABLE; Schema: public; Owner: cesaire
--

CREATE TABLE public."Reservation" (
    id integer NOT NULL,
    "idService" integer NOT NULL,
    message text,
    email text NOT NULL,
    date timestamp(3) without time zone NOT NULL,
    city text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    name text NOT NULL,
    phone text,
    street text NOT NULL,
    zipcode text NOT NULL,
    status public."ReservationStatus" DEFAULT 'PENDING'::public."ReservationStatus" NOT NULL,
    lang text DEFAULT 'de'::text NOT NULL
);


ALTER TABLE public."Reservation" OWNER TO cesaire;

--
-- Name: Reservation_id_seq; Type: SEQUENCE; Schema: public; Owner: cesaire
--

CREATE SEQUENCE public."Reservation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Reservation_id_seq" OWNER TO cesaire;

--
-- Name: Reservation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cesaire
--

ALTER SEQUENCE public."Reservation_id_seq" OWNED BY public."Reservation".id;


--
-- Name: Service; Type: TABLE; Schema: public; Owner: cesaire
--

CREATE TABLE public."Service" (
    id integer NOT NULL,
    titre text NOT NULL,
    description text NOT NULL,
    price double precision NOT NULL,
    "dateCreation" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Service" OWNER TO cesaire;

--
-- Name: Service_id_seq; Type: SEQUENCE; Schema: public; Owner: cesaire
--

CREATE SEQUENCE public."Service_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Service_id_seq" OWNER TO cesaire;

--
-- Name: Service_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cesaire
--

ALTER SEQUENCE public."Service_id_seq" OWNED BY public."Service".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: cesaire
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO cesaire;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: cesaire
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO cesaire;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cesaire
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: cesaire
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO cesaire;

--
-- Name: Availability id; Type: DEFAULT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Availability" ALTER COLUMN id SET DEFAULT nextval('public."Availability_id_seq"'::regclass);


--
-- Name: Contact id; Type: DEFAULT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Contact" ALTER COLUMN id SET DEFAULT nextval('public."Contact_id_seq"'::regclass);


--
-- Name: Reservation id; Type: DEFAULT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Reservation" ALTER COLUMN id SET DEFAULT nextval('public."Reservation_id_seq"'::regclass);


--
-- Name: Service id; Type: DEFAULT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Service" ALTER COLUMN id SET DEFAULT nextval('public."Service_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Availability; Type: TABLE DATA; Schema: public; Owner: cesaire
--

COPY public."Availability" (id, start, "end", type, "createdAt", "updatedAt") FROM stdin;
3	2026-04-19 08:00:00	2026-04-22 12:00:00	available	2026-04-11 09:33:18.561	2026-04-11 09:33:18.561
4	2026-04-11 10:00:00	2026-04-11 12:00:00	available	2026-04-11 09:35:22.833	2026-04-11 09:35:22.833
5	2026-04-12 10:00:00	2026-04-12 12:00:00	available	2026-04-11 09:35:22.835	2026-04-11 09:35:22.835
7	2026-04-11 07:00:00	2026-04-11 09:00:00	available	2026-04-11 09:37:22.004	2026-04-11 09:37:22.004
12	2026-04-15 06:30:00	2026-04-15 08:00:00	available	2026-04-11 10:03:25.979	2026-04-11 10:03:25.979
14	2026-04-15 01:00:00	2026-04-15 03:00:00	available	2026-04-11 10:26:30.097	2026-04-11 10:26:30.097
15	2026-04-15 03:30:00	2026-04-15 05:30:00	blocked	2026-04-11 10:28:35.475	2026-04-11 10:28:50.314
16	2026-04-29 08:00:00	2026-04-30 12:00:00	available	2026-04-11 10:34:11.379	2026-04-11 10:34:11.379
17	2026-04-11 02:30:00	2026-04-11 03:30:00	available	2026-04-11 10:39:35.742	2026-04-11 10:39:35.742
1	2026-04-29 08:00:00	2026-04-30 12:00:00	blocked	2026-04-11 09:19:08.337	2026-04-11 10:45:12.428
13	2026-04-11 01:00:00	2026-04-11 02:00:00	blocked	2026-04-11 10:19:45.703	2026-04-11 10:45:50.204
18	2026-04-16 01:00:00	2026-04-16 01:30:00	available	2026-04-11 10:55:54.538	2026-04-11 10:56:04.97
8	2026-04-11 04:00:00	2026-04-11 06:00:00	blocked	2026-04-11 09:50:52.872	2026-04-11 11:23:58.28
\.


--
-- Data for Name: Contact; Type: TABLE DATA; Schema: public; Owner: cesaire
--

COPY public."Contact" (id, email, message, "createdAt", name, phone) FROM stdin;
3	sublimelabcameroun@gmail.com	merci mon pere	2026-03-31 21:14:07.621	Cesaire	234567990
4	sublimelabcameroun@gmail.com	Cest nous qui somme les foux	2026-03-31 21:22:21.405	Cesaire	23456789
5	sublimelabcameroun@gmail.com	reset tout rester, ou                	2026-03-31 21:40:00.42	Cesaire	23245576887
6	rre@gh.fr	merci	2026-04-11 16:04:37.36	resr	+346565
\.


--
-- Data for Name: Reservation; Type: TABLE DATA; Schema: public; Owner: cesaire
--

COPY public."Reservation" (id, "idService", message, email, date, city, "createdAt", name, phone, street, zipcode, status, lang) FROM stdin;
19	2	vient voir si nous somme compatible	sublimelabcameroun@gmail.com	2026-03-31 19:00:00	Mannheim	2026-03-30 14:27:36.271	vane	396500231	Seriected	23980	CONFIRMED	de
27	2	vient me voir au marché, les	sublimelabcameroun@gmail.com	2026-03-31 12:20:00	Mannheim	2026-03-30 18:06:57.581	sandra	2323456	Seckenheimerstraße	34789	CONFIRMED	de
4	1	Je souhaite réserver ce service pour une intervention à domicile.	jean.dupont@example.com	2026-04-10 14:30:00	Mannheim	2026-03-28 01:36:23.686	Jean Dupont	+491234567890	Hauptstraße 12	68159	CONFIRMED	de
6	1	ca marche bien depuis	tester@gmail.com	2026-03-29 11:30:00	Mannheim	2026-03-28 01:47:45.04	Tester	23484839	Seckenheimerstrasse	32948	CONFIRMED	de
7	2	merci pour tout 	markus@gmail.com	2026-03-29 12:45:00	Kalruhe	2026-03-28 01:53:07.537	Markus	23459800	Kersi	34290	CONFIRMED	de
17	2	merci pour la comprension 	venez@gmail.com	2026-03-31 12:20:00	Mannheim	2026-03-30 12:45:01.431	cesaire	123980	resert	2345	CONFIRMED	de
20	2	merci	dcesairecarlos@gmail.com	2026-03-31 19:22:00	cjjdfjdk	2026-03-30 14:29:23.009	vient me vir	3459	sdfdkj	22330	CONFIRMED	de
3	2	merci pour ceque je veux	cesare@gmail.com	2026-03-15 00:00:00	Worms	2026-03-12 10:52:33.341	cesaire test	\N	Samaria	34234	CANCELLED	de
16	2	vient me voir avec tout	sublimelabcameroun@gmail.com	2026-03-30 12:20:00	Mannheim	2026-03-30 12:36:15.621	vien de voitte	234900	Krester	23450	CONFIRMED	de
2	1	Nettoyage appartement	john@mail.com	2026-04-01 00:00:00	Paris	2026-03-11 16:22:11.242	JArthur Noe	\N	12 rue Paris	75000	CONFIRMED	de
18	2	merci de tout faire pour moi	sublimelabcameroun@gmail.com	2026-03-31 12:00:00	Mannheim	2026-03-30 14:13:35.757	carlos	234567	Resertz 	12334	PENDING	de
10	2	 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem inventore iste quas earum error et saepe voluptas atque quia id esse eligendi dolor repellendus consequuntur neque, iusto numquam officia eaque!	contact@sublimeprod.com	2026-03-29 12:00:00	Mannheim	2026-03-28 12:03:10.345	Mon Tresor💕💍	697575573	Ker3	45319	PENDING	de
11	1	Je souhaite réserver ce service pour une intervention à domicile.	jean.dupont@example.com	2026-04-10 14:30:00	Mannheim	2026-03-28 14:02:47.203	Jean Dupont	+491234567890	Hauptstraße 12	68159	PENDING	de
12	2	je viens de recevoir les documents concernant les charges que je vais devoir afficher 	dcesairecarlos@gmail.com	2026-03-31 11:20:00	manheim	2026-03-30 11:52:20.113	Cesaire	34758599	Seckenheimer 9	22334	PENDING	de
13	2	viens me dire ceque tu pense	dcesairecarlos@gmail.com	2026-03-31 12:20:00	Mannheim	2026-03-30 11:55:29.603	Carlos-ca	23456789	Marius	23198	PENDING	de
14	2	Bien jouer de la part	dcesairecarlos@gmail.com	2026-03-31 11:20:00	Mannheim	2026-03-30 11:59:00.255	carlos-mo	467388	Kse	33459	PENDING	de
15	2	mwerci	dcesairecarlos@gmail.com	2026-03-31 11:20:00	Manhheim	2026-03-30 12:18:41.119	je veux tester	23456	Kei3	23456	PENDING	de
21	2	tout marche bien	sublimelabcameroun@gmail.com	2026-03-31 20:33:00	Mannheim	2026-03-30 14:32:40.37	mercu 	17685279278	Seriasso	58378	CONFIRMED	de
22	2	Version tres stable, nous sommes deux fois 	sublimelabcameroun@gmail.com	2026-03-31 19:34:00	Mannheim	2026-03-30 16:47:51.94	Carlos-ca	017685279278	Seckenheimer	34212	PENDING	de
23	2	Vierst voir les choses	dcesairecarlos@gmail.com	2026-03-31 19:00:00	Mannheim	2026-03-30 16:50:00.796	cesaire	01768527927	Seckenheimerstra	34267	PENDING	de
24	2	Vente vêtement rouge	sublimelabcameroun@gmail.com	2026-03-31 12:20:00	Mannheim	2026-03-30 16:53:13.648	casongo	017634526	Seckenheimer	23178	CANCELLED	de
25	2	merci d'etre là pour moi, je suis avec la team actuellement. 	sublimelabcameroung@gmail.com	2026-03-31 12:12:00	Mannheim	2026-03-30 17:04:46.795	Cesaire	2345678	Rastaman	23345	PENDING	de
26	2	viens voir mes souvenirs, je suis avec les gens bien. 	sublimelabcameroun@gmail.com	2026-03-31 12:20:00	Mannheim	2026-03-30 17:07:16.565	Carlos-ca	234890384	Markus muller	34213	CONFIRMED	de
\.


--
-- Data for Name: Service; Type: TABLE DATA; Schema: public; Owner: cesaire
--

COPY public."Service" (id, titre, description, price, "dateCreation") FROM stdin;
1	Nettoyage maison	Nettoyage complet	80	2026-03-11 16:13:09.834
2	Nettoyage voiture	Nettoyage complet de   voiture et celle de votre femme	180	2026-03-11 16:13:55.652
3	Sublime Admin	Nous utilisons des produits derniers génération, merci à vous les soldats	230	2026-03-13 00:45:47.703
4	Nettoyage des Terrasses	Nous sommes les premiers sur le marché allemand: Nettoyage des Terrasses	70	2026-03-13 00:55:02.463
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: cesaire
--

COPY public."User" (id, name, email, password, "createdAt") FROM stdin;
1	Sublime Admin	contact@sublimeprod.com	$2b$10$sr2ZuL9ZwK6Z44i2COEATeY3sx0O2NnJ0hHRAyhqbUNmD5b9oV/I.	2026-03-11 16:26:16.16
3	Sublime Admin	1contact@sublimeprod.com	$2b$10$3pQOdrczdmpZe2S5Lc91auyBknlTcXCnJyigDjFblHQu9PRKZ40Xu	2026-03-12 23:49:57.487
4	tito	sublime@gmail.com	$2b$10$vj0hAgPZjDRE.khCzDAuIenxibh4EuSlsQdev30EDxVlTN2.D4FCm	2026-03-20 23:51:48.821
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: cesaire
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
725fc2ce-ba59-4bc8-accc-db4dcfc5ad5a	b9cadb17f5fa6f888af8fa6a75187e9b9a1654ce2a6db0dbfaff7f2703ffe860	2026-03-11 11:38:36.548148+01	20260311103836_create_entities	\N	\N	2026-03-11 11:38:36.533696+01	1
c3f8d1bd-63ef-423a-b4c5-fd90566646e3	ed5bdf8c2867290c718c4ec75585333d26b3fabdfe2ba1755699e2011663330e	2026-03-11 15:24:19.547397+01	20260311142419_update_reservation_status	\N	\N	2026-03-11 15:24:19.543659+01	1
9528fad9-5149-432d-875f-002c092aa949	fd5d4ee26e8cb26e2ebd91f84830c1fe0bae525a8a19d583005cb45a02b94300	2026-03-11 15:35:06.237111+01	20260311143506_add_reservation_status	\N	\N	2026-03-11 15:35:06.23411+01	1
ae46a0f1-dbdb-4036-9613-626fa7f1b16a	2364c86e3f526b67265c3663472f2e9afc38a29e7f969caad21d4d302e927375	2026-03-30 13:35:45.460066+02	20260330113545_add_lang_to_reservation	\N	\N	2026-03-30 13:35:45.453912+02	1
4727be35-3ca3-4e87-b484-6ed40615d624	a2961b515896ad243f7f87063106a7c1ebcb4033f8495e0f1d2cc0cc66660176	2026-03-31 14:01:22.9193+02	20260331120122_update_contact	\N	\N	2026-03-31 14:01:22.91655+02	1
19d35443-46aa-4fed-a0a4-d603aa33725f	5123f5b348f67efc7cb56f1f3c0227b541ce95931ef82e747a5a23962be97fe1	2026-04-11 10:23:16.696839+02	20260411082316_init_availability	\N	\N	2026-04-11 10:23:16.690718+02	1
\.


--
-- Name: Availability_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cesaire
--

SELECT pg_catalog.setval('public."Availability_id_seq"', 18, true);


--
-- Name: Contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cesaire
--

SELECT pg_catalog.setval('public."Contact_id_seq"', 6, true);


--
-- Name: Reservation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cesaire
--

SELECT pg_catalog.setval('public."Reservation_id_seq"', 30, true);


--
-- Name: Service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cesaire
--

SELECT pg_catalog.setval('public."Service_id_seq"', 4, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cesaire
--

SELECT pg_catalog.setval('public."User_id_seq"', 4, true);


--
-- Name: Availability Availability_pkey; Type: CONSTRAINT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Availability"
    ADD CONSTRAINT "Availability_pkey" PRIMARY KEY (id);


--
-- Name: Contact Contact_pkey; Type: CONSTRAINT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Contact"
    ADD CONSTRAINT "Contact_pkey" PRIMARY KEY (id);


--
-- Name: Reservation Reservation_pkey; Type: CONSTRAINT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY (id);


--
-- Name: Service Service_pkey; Type: CONSTRAINT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Service"
    ADD CONSTRAINT "Service_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: cesaire
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Reservation Reservation_idService_fkey; Type: FK CONSTRAINT; Schema: public; Owner: cesaire
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT "Reservation_idService_fkey" FOREIGN KEY ("idService") REFERENCES public."Service"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: cesaire
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict mqdZPh20rOr9XQIyzaghxPktqb0xshrjiixQ3Or6DofViBUe49qkwko4qBV3cYj


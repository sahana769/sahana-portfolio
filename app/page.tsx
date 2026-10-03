"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [theme, setTheme] = useState<"system" | "light" | "dark">("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as
      | "system"
      | "light"
      | "dark"
      | null;

    const initialTheme = savedTheme || "system";
    setTheme(initialTheme);

    const applyTheme = (selectedTheme: "system" | "light" | "dark") => {
      const root = document.documentElement;

      if (selectedTheme === "light") {
        root.classList.remove("dark");
        root.setAttribute("data-theme", "light");
      } else if (selectedTheme === "dark") {
        root.classList.add("dark");
        root.setAttribute("data-theme", "dark");
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        root.classList.toggle("dark", prefersDark);
        root.setAttribute(
          "data-theme",
          prefersDark ? "dark" : "light"
        );
      }
    };

    applyTheme(initialTheme);
  }, []);

  const changeTheme = (selectedTheme: "system" | "light" | "dark") => {
    setTheme(selectedTheme);
    localStorage.setItem("portfolio-theme", selectedTheme);

    const root = document.documentElement;

    if (selectedTheme === "light") {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    } else if (selectedTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      root.classList.toggle("dark", prefersDark);
      root.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    }
  };
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[120px] h-[450px] w-[450px] rounded-full bg-purple-700/20 blur-[140px]" />
        <div className="absolute right-[-120px] top-[80px] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[35%] h-[450px] w-[450px] rounded-full bg-fuchsia-700/10 blur-[150px]" />

        <span className="absolute left-[8%] top-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-purple-300" />
        <span className="absolute left-[18%] top-[65%] h-1 w-1 animate-pulse rounded-full bg-blue-300" />
        <span className="absolute left-[48%] top-[18%] h-1 w-1 animate-pulse rounded-full bg-purple-200" />
        <span className="absolute right-[18%] top-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-purple-300" />
        <span className="absolute right-[8%] top-[70%] h-1 w-1 animate-pulse rounded-full bg-blue-200" />
      </div>

      {/* ================= WATERMARK PHOTO ================= */}
      <div className="pointer-events-none absolute right-[-120px] top-[70px] hidden select-none opacity-[0.035] lg:block">
        <Image
          src="/xyz.jpg"
          alt=""
          width={700}
          height={850}
          className="h-[850px] w-[700px] object-cover grayscale"
        />
      </div>

      {/* ================= NAVIGATION ================= */}
      {/* ================= NAVBAR ================= */}
<nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">

  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">

    {/* LOGO */}
    <a
      href="#home"
      className="group flex items-center gap-3"
    >

      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-xs font-semibold text-purple-300 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/40">
        SN
      </div>

      <div className="hidden sm:block">
        <p className="text-sm font-semibold tracking-wide text-white">
          Sahana Naik
        </p>

        <p className="text-[10px] tracking-wider text-zinc-600">
          SOFTWARE ENGINEER
        </p>
      </div>

    </a>


    {/* DESKTOP NAVIGATION */}
    <div className="hidden items-center gap-7 md:flex">

      <a
        href="#home"
        className="text-xs text-zinc-400 transition-colors duration-300 hover:text-white"
      >
        Home
      </a>

      <a
        href="#about"
        className="text-xs text-zinc-400 transition-colors duration-300 hover:text-purple-300"
      >
        About
      </a>

      <a
        href="#skills"
        className="text-xs text-zinc-400 transition-colors duration-300 hover:text-purple-300"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="text-xs text-zinc-400 transition-colors duration-300 hover:text-purple-300"
      >
        Projects
      </a>

      <a
        href="#experience"
        className="text-xs text-zinc-400 transition-colors duration-300 hover:text-purple-300"
      >
        Experience
      </a>

    </div>


    {/* THEME SWITCHER */}
    <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl md:flex">

      <button
        type="button"
        onClick={() => changeTheme("light")}
        aria-label="Light mode"
        title="Light mode"
        className={`rounded-full px-2.5 py-1.5 text-sm transition-all duration-300 ${
          theme === "light"
            ? "bg-white text-black shadow-sm"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        ☀
      </button>

      <button
        type="button"
        onClick={() => changeTheme("system")}
        aria-label="System theme"
        title="System theme"
        className={`rounded-full px-2.5 py-1.5 text-sm transition-all duration-300 ${
          theme === "system"
            ? "bg-purple-500/20 text-purple-200"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        ◐
      </button>

      <button
        type="button"
        onClick={() => changeTheme("dark")}
        aria-label="Dark mode"
        title="Dark mode"
        className={`rounded-full px-2.5 py-1.5 text-sm transition-all duration-300 ${
          theme === "dark"
            ? "bg-purple-500/20 text-purple-200"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        ☾
      </button>

    </div>


    {/* CTA */}
    <a
      href="#contact"
      className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/10"
    >
      Let&apos;s Talk

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>

   <a
  href="/Sahana_AI.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-6 py-3 text-sm font-medium text-purple-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/15 hover:shadow-lg hover:shadow-purple-500/10"
>
  View Resume
  <span className="transition-transform duration-300 group-hover:translate-y-[-2px]">
    ↗
  </span>
</a>

<a
  href="/Sahana_AI.pdf"
  download
  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:text-purple-300"
>
  Download Resume
  <span className="transition-transform duration-300 group-hover:translate-y-1">
    ↓
  </span>
</a>

  </div>

</nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-6 pb-16 pt-28 sm:pt-32 lg:px-10 lg:pt-36"
      >

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* HERO TEXT */}
          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 backdrop-blur-md">

              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.9)]" />

              <span className="text-xs font-medium tracking-[0.18em] text-purple-200 uppercase">
                AI · ML · Software Engineering
              </span>

            </div>

            <p className="mb-3 text-sm font-medium tracking-[0.3em] text-zinc-400 uppercase">
              Hi, I'm
            </p>

            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Sahana{" "}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Naik
              </span>
            </h1>

            <h2 className="mt-7 text-2xl font-medium text-zinc-100 sm:text-3xl">
              Software Engineer
            </h2>

            <p className="mt-3 text-base font-medium text-purple-300 sm:text-lg">
              AI/ML Engineer · Data Analyst
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Building intelligent, data-driven software systems with
              artificial intelligence, machine learning and modern software
              technologies to solve real-world problems.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-purple-100 hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)]"
              >
                Explore My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://github.com/sahana769"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                GitHub
                <span>↗</span>
              </a>

            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-500">
              <span>Python</span>
              <span className="text-purple-500">•</span>
              <span>Machine Learning</span>
              <span className="text-purple-500">•</span>
              <span>GenAI</span>
              <span className="text-purple-500">•</span>
              <span>RAG</span>
              <span className="text-purple-500">•</span>
              <span>FastAPI</span>
            </div>

          </div>

          {/* HERO PHOTO */}
          {/* HERO PHOTO */}
<div className="relative mx-auto flex w-full max-w-[470px] items-center justify-center lg:max-w-[500px]">

  {/* Soft background glow */}
  <div className="absolute h-[320px] w-[320px] rounded-full bg-purple-600/15 blur-[100px] sm:h-[390px] sm:w-[390px]" />

  {/* Subtle orbit */}
  <div className="absolute h-[320px] w-[320px] animate-[spin_22s_linear_infinite] rounded-full border border-purple-400/10 sm:h-[390px] sm:w-[390px]" />

  <div className="absolute h-[270px] w-[270px] rounded-full border border-blue-400/[0.08] sm:h-[340px] sm:w-[340px]" />

  {/* Small decorative particles */}
  <div className="absolute right-[12%] top-[15%] h-2.5 w-2.5 rounded-full bg-purple-300 shadow-[0_0_20px_rgba(196,181,253,0.9)]" />

  <div className="absolute bottom-[16%] left-[10%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.9)]" />

  {/* PHOTO */}
  <div className="relative z-10">

    {/* Soft outer glow */}
    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/25 blur-xl" />

    {/* Professional glass frame */}
    <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.05] p-1.5 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">

      <div className="relative overflow-hidden rounded-[1.6rem]">

        <Image
          src="/xyz.jpg"
          alt="Sahana Naik"
          width={430}
          height={540}
          priority
          className="h-[390px] w-[310px] object-cover object-top transition-transform duration-700 hover:scale-[1.025] sm:h-[450px] sm:w-[350px]"
        />

        {/* Subtle bottom gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050510]/35 via-transparent to-transparent" />

      </div>

    </div>

  </div>

  {/* Small professional info badge */}
  <div className="absolute bottom-[7%] left-[2%] z-20 rounded-xl border border-white/10 bg-[#10101c]/85 px-3.5 py-2.5 shadow-xl backdrop-blur-xl">

    <div className="flex items-center gap-2.5">

      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/15 text-sm">
        ✦
      </div>

      <div>
        <p className="text-[11px] font-semibold text-white">
          AI & Software
        </p>

        <p className="text-[9px] text-zinc-500">
          Engineering
        </p>
      </div>

    </div>

  </div>

</div>

        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-purple-300 sm:flex"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">
            Scroll to explore
          </span>

          <span className="animate-bounce text-lg">
            ↓
          </span>
        </a>

      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:py-20 lg:px-10"
      >

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ABOUT TEXT */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-400" />

              <span className="text-xs font-medium tracking-[0.3em] text-purple-300 uppercase">
                About Me
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Turning{" "}
              <span className="bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
                data & ideas
              </span>{" "}
              into intelligent solutions.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-zinc-400">

              <p>
                I'm Sahana Naik, a Software Engineer with a strong interest
                in Artificial Intelligence, Machine Learning, Data Analytics
                and intelligent software systems.
              </p>

              <p>
                I enjoy taking real-world problems, understanding the data
                behind them and building practical solutions using modern AI
                and software engineering technologies.
              </p>

              <p>
                My work spans machine learning, generative AI, RAG-based
                applications, data analysis, backend development and
                interactive dashboards.
              </p>

            </div>

            {/* EDUCATION */}
            <div className="mt-9 flex flex-wrap gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.06]">

                <p className="text-xs text-zinc-500">
                  Master's Degree
                </p>

                <p className="mt-1 font-medium text-white">
                  MCA · 9.2 CGPA
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.06]">

                <p className="text-xs text-zinc-500">
                  Specialization
                </p>

                <p className="mt-1 font-medium text-white">
                  Data Science & AI
                </p>

              </div>

            </div>

          </div>

          {/* ABOUT CARDS */}
          <div className="relative">

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

            <div className="relative grid auto-rows-fr gap-5 sm:grid-cols-2">

              {/* CARD 1 */}
              <div className="about-card group flex h-full min-h-[390px] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">

                <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-purple-500/20">
                  ✦
                </div>

                <h3 className="text-lg font-semibold text-white">
                  AI & Machine Learning
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Building machine learning models and AI-powered
                  applications for practical, real-world use cases.
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">

                  {["Python", "Scikit-learn", "TensorFlow", "NLP"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400 transition-all duration-300 group-hover:border-purple-400/20 group-hover:text-purple-200"
                      >
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* CARD 2 */}
              <div className="about-card group flex h-full min-h-[390px] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">

                <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-500/20">
                  ◈
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Data & Analytics
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Exploring data, finding meaningful patterns and turning
                  analysis into actionable insights.
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">

                  {["SQL", "Pandas", "Power BI", "Tableau"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400 transition-all duration-300 group-hover:border-blue-400/20 group-hover:text-blue-200"
                      >
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* CARD 3 */}
              <div className="about-card group flex h-full min-h-[390px] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">

                <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-fuchsia-500/20">
                  ◉
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Software Engineering
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Developing modular applications, backend services and
                  intelligent software systems.
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">

                  {["FastAPI", "REST APIs", "Git", "Docker"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400 transition-all duration-300 group-hover:border-fuchsia-400/20 group-hover:text-fuchsia-200"
                      >
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* CARD 4 */}
              <div className="about-card group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.12] to-blue-500/[0.06] p-7">

                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl transition-all duration-700 group-hover:scale-150" />

                <div className="relative flex h-full flex-col">

                  <div className="flex items-center gap-3">

                    <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />

                    <span className="text-xs font-medium tracking-wider text-green-300 uppercase">
                      Currently Exploring
                    </span>

                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    AI for Software Engineering
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Exploring how AI can improve developer productivity,
                    software quality and intelligent engineering workflows.
                  </p>

                  <div className="mt-auto pt-8 text-2xl tracking-widest text-purple-300 transition-all duration-500 group-hover:tracking-[0.18em]">
                    AI · RAG · LLM
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURED PROJECTS ================= */}
<section
  id="projects"
  className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:py-20 lg:px-10"
>
  {/* SECTION HEADER */}
  <div className="mb-14">
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-purple-400" />

      <span className="text-xs font-medium tracking-[0.3em] text-purple-300 uppercase">
        Selected Work
      </span>
    </div>

    <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
      Projects that turn{" "}
      <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
        ideas into systems.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500">
      A selection of AI, machine learning and software engineering projects
      I've built to solve practical problems.
    </p>
  </div>

  {/* ================= PROJECT 01 ================= */}
  <div className="project-card group relative mb-6 overflow-hidden rounded-[2rem] border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.03] to-blue-500/[0.05] backdrop-blur-xl">
    <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:p-12">
      {/* LEFT */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-[10px] font-medium tracking-wider text-purple-300 uppercase">
            Featured Project
          </span>

          <span className="text-xs text-zinc-600">
            01
          </span>
        </div>

        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          IntelliLab AI
        </h3>

        <p className="mt-2 text-sm font-medium text-purple-300">
          Clinical Laboratory Intelligence Platform
        </p>

        <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          An end-to-end clinical laboratory intelligence platform designed to
          process laboratory reports and generate AI-powered explanations using
          OCR, retrieval-augmented generation and modern backend technologies.
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Python",
            "FastAPI",
            "Streamlit",
            "LangChain",
            "Gemini",
            "EasyOCR",
            "FAISS",
            "RAG",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-zinc-400 transition-all duration-300 group-hover:border-purple-400/20 group-hover:text-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/sahana769"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-purple-100"
          >
            View Project
            <span>→</span>
          </a>

          <a
            href="https://github.com/sahana769"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/10"
          >
            GitHub
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* RIGHT — REAL PROJECT IMAGE */}
      <div className="relative">
        <div className="project-preview relative overflow-hidden rounded-3xl border border-white/10 bg-[#080812] shadow-2xl">
          <Image
            src="/intellilab-ai.jpeg"
            alt="IntelliLab AI project dashboard"
            width={1200}
            height={800}
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2rem] bg-purple-500/10 blur-3xl" />
      </div>
    </div>
  </div>

  {/* ================= PROJECTS 02 + 03 ================= */}
  <div className="grid gap-6 md:grid-cols-2">
    {/* PROJECT 02 */}
    <div className="project-card group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
      {/* REAL PROJECT IMAGE */}
      <div className="relative h-56 overflow-hidden border-b border-white/5 bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.04] to-transparent p-5">
        <span className="absolute right-5 top-5 z-10 text-xs text-zinc-600">
          02
        </span>

        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#090912] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
          <Image
            src="/skill-matcher.jpeg"
            alt="AI Resume Analyzer project"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-[10px] font-medium tracking-[0.25em] text-blue-300 uppercase">
          RAG · ATS · GenAI
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white">
          AI Resume Analyzer
        </h3>

        <p className="mt-2 text-sm font-medium text-zinc-500">
          RAG-Based ATS & Skill-Gap Evaluation Tool
        </p>

        <p className="mt-5 text-sm leading-7 text-zinc-500">
          A RAG-based ATS application that compares resumes and job
          descriptions using semantic search and Generative AI to identify
          skill gaps and provide actionable recommendations.
        </p>

        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "RAG",
              "LangChain",
              "FAISS",
              "ChromaDB",
              "Streamlit",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-500 transition-colors group-hover:border-blue-400/20 group-hover:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <a
              href="https://github.com/sahana769"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-white transition-colors hover:text-purple-300"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* PROJECT 03 */}
    <div className="project-card group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
      {/* REAL PROJECT IMAGE */}
      <div className="relative h-56 overflow-hidden border-b border-white/5 bg-gradient-to-br from-fuchsia-500/[0.07] via-purple-500/[0.04] to-transparent p-5">
        <span className="absolute right-5 top-5 z-10 text-xs text-zinc-600">
          03
        </span>

        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#090912] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
          <Image
            src="/revenue-predictor.jpeg"
            alt="Corporate Revenue Forecasting project"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-[10px] font-medium tracking-[0.25em] text-fuchsia-300 uppercase">
          Machine Learning
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white">
          Corporate Revenue Forecasting
        </h3>

        <p className="mt-2 text-sm font-medium text-zinc-500">
          Time-Series Forecasting
        </p>

        <p className="mt-5 text-sm leading-7 text-zinc-500">
          A machine learning forecasting project using Linear Regression,
          Random Forest and XGBoost, supported by feature engineering,
          exploratory data analysis and PCA.
        </p>

        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Linear Regression",
              "Random Forest",
              "XGBoost",
              "PCA",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-500 transition-colors group-hover:border-fuchsia-400/20 group-hover:text-fuchsia-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <a
              href="https://github.com/sahana769"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-white transition-colors hover:text-purple-300"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ================= SKILLS ================= */}
<section
  id="skills"
  className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:py-20 lg:px-10"
>
  {/* SECTION HEADER */}
  <div className="mb-14">

    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-purple-400" />

      <span className="text-xs font-medium tracking-[0.3em] text-purple-300 uppercase">
        Technical Arsenal
      </span>
    </div>

    <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
      Tools I use to{" "}
      <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
        build & solve.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500">
      A practical combination of programming, AI, data analytics,
      software development and modern engineering tools.
    </p>

  </div>


  {/* SKILLS GRID */}
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">


    {/* ================= PROGRAMMING ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-xl text-purple-300">
          &lt;/&gt;
        </div>

        <span className="text-xs text-zinc-700">
          01
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        Programming
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Core programming and data manipulation technologies.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "Python",
          "SQL",
          "C++",
          "Pandas",
          "NumPy",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>


    {/* ================= AI & MACHINE LEARNING ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-xl text-fuchsia-300">
          ✦
        </div>

        <span className="text-xs text-zinc-700">
          02
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        AI & Machine Learning
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Building intelligent systems and machine learning solutions.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "Generative AI",
          "NLP",
          "Deep Learning",
          "RAG",
          "LLM Concepts",
          "Regression",
          "Classification",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>


    {/* ================= SOFTWARE DEVELOPMENT ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-300">
          ◇
        </div>

        <span className="text-xs text-zinc-700">
          03
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        Software Development
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Engineering practices used to build maintainable software.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "OOP",
          "Software Design",
          "Unit Testing",
          "Debugging",
          "Code Review",
          "CI/CD",
          "SDLC",
          "Git",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>


    {/* ================= DATA & ANALYTICS ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-xl text-emerald-300">
          ◉
        </div>

        <span className="text-xs text-zinc-700">
          04
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        Data & Analytics
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Turning raw data into useful insights and decisions.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "Data Cleaning",
          "EDA",
          "Statistical Analysis",
          "Data Validation",
          "Feature Engineering",
          "Model Evaluation",
          "Business Insights",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>


    {/* ================= TOOLS & PLATFORMS ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-xl text-cyan-300">
          ⌘
        </div>

        <span className="text-xs text-zinc-700">
          05
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        Tools & Platforms
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Development, collaboration and application-building tools.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "Visual Studio",
          "Azure DevOps",
          "Jupyter Notebook",
          "Git",
          "GitHub",
          "Streamlit",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>


    {/* ================= DATA & VISUALIZATION ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-xl text-orange-300">
          ◫
        </div>

        <span className="text-xs text-zinc-700">
          06
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        Visualization & BI
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Communicating analytical findings through visual reporting.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "Tableau",
          "Excel",
          "Matplotlib",
          "Seaborn",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>


    {/* ================= DATABASES ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-xl text-violet-300">
          ▦
        </div>

        <span className="text-xs text-zinc-700">
          07
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        Databases & Cloud
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Database technologies and cloud fundamentals.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "SQL Server",
          "AWS Redshift",
          "Azure Fundamentals",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>


    {/* ================= METHODOLOGIES ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-400/20 bg-pink-500/10 text-xl text-pink-300">
          ◎
        </div>

        <span className="text-xs text-zinc-700">
          08
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        Methodologies
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Practices that support collaborative and iterative development.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "Agile",
          "Continuous Improvement",
          "Cross-functional Collaboration",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>


    {/* ================= GIT / COLLABORATION ================= */}
    <div className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-xl text-indigo-300">
          ↗
        </div>

        <span className="text-xs text-zinc-700">
          09
        </span>

      </div>

      <h3 className="text-xl font-semibold text-white">
        Version Control
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Collaborative development and source-code management.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {[
          "Git",
          "GitHub",
          "Code Review",
          "CI/CD Concepts",
          "SDLC",
        ].map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>

  </div>

</section> 
  <section
    id="experience"
    className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:py-20 lg:px-10"
  >
    {/* SECTION HEADER */}
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-purple-300">
        Experience & Education
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        The journey behind{" "}
        <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
          the work.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500">
        A combination of professional experience, technical development and
        academic foundations that shaped my journey into software engineering,
        data and AI.
      </p>
    </div>

    {/* ================= EXPERIENCE ================= */}
    <div className="space-y-8">

      {/* ================= DATA ANALYST INTERN ================= */}
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-2xl hover:shadow-blue-500/5 lg:p-9">

        {/* Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-blue-500/15" />

        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <div>

            {/* Icon + Date */}
            <div className="flex items-start justify-between gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl transition-all duration-500 group-hover:scale-110">
                📊
              </div>

              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-medium text-blue-300">
                Internship
              </span>

            </div>

            {/* Role */}
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Data Analyst Intern
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Data Analyst
            </h3>

            {/* Company */}
            <p className="mt-4 text-sm font-medium text-zinc-400">
              Seventh Sense Talent Solutions
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Bengaluru, India
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Nov 2024 — Feb 2025
            </p>

            {/* Skills */}
            <div className="mt-7 flex flex-wrap gap-2">

              <span className="skill-pill">
                Python
              </span>

              <span className="skill-pill">
                SQL
              </span>

              <span className="skill-pill">
                Pandas
              </span>

              <span className="skill-pill">
                Data Analysis
              </span>

              <span className="skill-pill">
                Data Visualization
              </span>

              <span className="skill-pill">
                BI
              </span>

              <span className="skill-pill">
                Dashboards
              </span>

            </div>

          </div>

          {/* RIGHT — RESPONSIBILITIES */}
          <div className="space-y-5">

            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs text-blue-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Cleaned, validated and transformed customer and transaction
                datasets using SQL, Python and advanced Excel to improve data
                quality and reporting accuracy.
              </p>

            </div>

            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-xs text-purple-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Performed exploratory data analysis and statistical profiling to
                identify customer behavior, churn patterns and operational trends.
              </p>

            </div>

            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-500/10 text-xs text-fuchsia-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Built Excel macro-driven solutions and Python workflows to
                automate repetitive extraction, transformation and validation tasks.
              </p>

            </div>

            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-500/10 text-xs text-emerald-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Developed interactive Tableau dashboards and Power BI reports to
                track KPIs, revenue trends and business performance for leadership.
              </p>

            </div>

            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-xs text-purple-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Collaborated with Product, Engineering and Finance teams in an Agile
                environment to gather requirements and deliver analytical outputs.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= PYTHON DEVELOPER ================= */}
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-fuchsia-400/20 hover:shadow-2xl hover:shadow-fuchsia-500/5 lg:p-9">

        {/* Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-fuchsia-500/15" />

        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <div>

            {/* Icon + Date */}
            <div className="flex items-start justify-between gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-2xl transition-all duration-500 group-hover:scale-110">
                🐍
              </div>

              <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1.5 text-[10px] font-medium text-fuchsia-300">
                Development
              </span>

            </div>

            {/* Role */}
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
              Python Developer
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Python Developer
            </h3>

            {/* Company */}
            <p className="mt-4 text-sm font-medium text-zinc-400">
              Professional Experience
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Bengaluru, India
            </p>

            {/* Skills */}
            <div className="mt-7 flex flex-wrap gap-2">

              <span className="skill-pill">
                Python
              </span>

              <span className="skill-pill">
                REST APIs
              </span>

              <span className="skill-pill">
                OOP
              </span>

              <span className="skill-pill">
                FastAPI
              </span>

              <span className="skill-pill">
                Automation
              </span>

            </div>

          </div>

          {/* RIGHT — RESPONSIBILITIES */}
          <div className="space-y-5">

            {/* ITEM 1 */}
            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-xs text-purple-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Developed Python-based applications and reusable software
                components following structured programming practices.
              </p>

            </div>

            {/* ITEM 2 */}
            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs text-blue-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Built and worked with REST APIs and backend services using
                Python-based frameworks.
              </p>

            </div>

            {/* ITEM 3 */}
            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-500/10 text-xs text-fuchsia-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Applied Python programming and software engineering practices
                to build maintainable and reusable solutions.
              </p>

            </div>

            {/* ITEM 4 */}
            <div className="flex gap-4">

              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-500/10 text-xs text-emerald-300">
                ✓
              </div>

              <p className="text-sm leading-7 text-zinc-400">
                Contributed to improving existing workflows through automation,
                testing and structured Python development.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ================= EDUCATION ================= */}
    <section id="education" className="mt-12 pt-6">

      <div className="mb-10 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg">
          🎓
        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
            Education
          </p>

          <h3 className="mt-1 text-xl font-semibold text-white">
            Academic Foundation
          </h3>

        </div>

      </div>


      {/* EDUCATION GRID */}
      <div className="grid gap-5 md:grid-cols-2">

        {/* MCA */}
        <div className="education-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-purple-500/20" />

          <div className="relative">

            <div className="flex items-start justify-between gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-2xl">
                🎓
              </div>

              <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-[10px] font-medium text-purple-300">
                9.2 / 10
              </span>

            </div>

            <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
              Master&apos;s Degree
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Master of Computer Applications
            </h3>

            <p className="mt-3 text-sm font-medium text-zinc-400">
              AMC Engineering College
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Bengaluru
            </p>

            <div className="mt-7 flex flex-wrap gap-2">

              <span className="education-tag">
                Artificial Intelligence
              </span>

              <span className="education-tag">
                Machine Learning
              </span>

              <span className="education-tag">
                Data Analysis
              </span>

              <span className="education-tag">
                Statistics
              </span>

            </div>

          </div>

        </div>


        {/* BCA */}
        <div className="education-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-blue-500/20" />

          <div className="relative">

            <div className="flex items-start justify-between gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl">
                💻
              </div>

              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-medium text-blue-300">
                8.11 / 10
              </span>

            </div>

            <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Bachelor&apos;s Degree
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Bachelor of Computer Applications
            </h3>

            <p className="mt-3 text-sm font-medium text-zinc-400">
              Govt. First Grade College
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Honavar
            </p>

            <div className="mt-7 flex flex-wrap gap-2">

              <span className="education-tag">
                Computer Applications
              </span>

              <span className="education-tag">
                Programming
              </span>

              <span className="education-tag">
                Data
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  </section>
{/* ================= CERTIFICATIONS ================= */}
<section
  id="certifications"
  className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:py-20 lg:px-10"
>

  {/* SECTION HEADER */}
  <div className="mb-14">

    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-purple-400" />

      <span className="text-xs font-medium tracking-[0.3em] text-purple-300 uppercase">
        Certifications
      </span>
    </div>

    <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
      Credentials that{" "}
      <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
        strengthen my skills.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500">
      Continuous learning across data science, artificial intelligence,
      cloud technologies and modern productivity tools.
    </p>

  </div>


  {/* CERTIFICATION CARDS */}
  <div className="grid gap-5 md:grid-cols-3">


    {/* CERTIFICATE 1 */}
    <div className="certificate-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-purple-500/20" />

      <div className="relative">

        <div className="flex items-start justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            🏆
          </div>

          <span className="text-xs text-zinc-600">
            01
          </span>

        </div>


        <p className="mt-8 text-xs font-medium tracking-[0.2em] text-purple-300 uppercase">
          Data & AI
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-8 text-white">
          Data Science with Generative AI Program
        </h3>

        <p className="mt-4 text-sm text-zinc-500">
          Great Learning
        </p>


        <div className="mt-7 flex items-center gap-2 text-xs text-zinc-600">
          <span className="text-purple-300">✦</span>
          Data Science · GenAI · ML
        </div>

      </div>

    </div>


    {/* CERTIFICATE 2 */}
    <div className="certificate-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-blue-500/20" />

      <div className="relative">

        <div className="flex items-start justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
            ☁️
          </div>

          <span className="text-xs text-zinc-600">
            02
          </span>

        </div>


        <p className="mt-8 text-xs font-medium tracking-[0.2em] text-blue-300 uppercase">
          Cloud
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-8 text-white">
          Azure Fundamentals
        </h3>

        <p className="mt-4 text-sm text-zinc-500">
          Simplilearn SkillUp
        </p>


        <div className="mt-7 flex items-center gap-2 text-xs text-zinc-600">
          <span className="text-blue-300">✦</span>
          Azure · Cloud Fundamentals
        </div>

      </div>

    </div>


    {/* CERTIFICATE 3 */}
    <div className="certificate-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-fuchsia-500/20" />

      <div className="relative">

        <div className="flex items-start justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            ✨
          </div>

          <span className="text-xs text-zinc-600">
            03
          </span>

        </div>


        <p className="mt-8 text-xs font-medium tracking-[0.2em] text-fuchsia-300 uppercase">
          AI Productivity
        </p>

        <h3 className="mt-3 text-xl font-semibold leading-8 text-white">
          Gemini for Google Workspace
        </h3>

        <p className="mt-4 text-sm text-zinc-500">
          Simplilearn SkillUp
        </p>


        <div className="mt-7 flex items-center gap-2 text-xs text-zinc-600">
          <span className="text-fuchsia-300">✦</span>
          Gemini · Generative AI
        </div>

      </div>

    </div>

  </div>


  {/* BOTTOM HIGHLIGHT */}
  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-center backdrop-blur-xl">

    <p className="text-xs text-zinc-600">
      Always learning · Always building · Always improving
    </p>

  </div>

</section>

{/* ================= FOOTER ================= */}
{/* ================= CONTACT / FOOTER ================= */}
<footer
  id="contact"
  className="relative z-10 border-t border-white/10 px-6 py-24"
>
  <div className="mx-auto max-w-7xl">

    {/* Contact Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-purple-300">
        Get In Touch
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Let&apos;s build something
        <span className="block bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
          meaningful together.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500">
        I&apos;m open to opportunities, collaborations and interesting
        projects involving AI, software engineering and data.
      </p>

    </div>


    {/* Contact Card */}
    <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]">

      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-600">
        Email
      </p>

      <a
        href="mailto:sahananaik1704@gmail.com"
        className="break-all text-lg font-medium text-zinc-200 transition-colors duration-300 hover:text-purple-300 sm:text-2xl"
      >
        sahananaik1704@gmail.com
      </a>


      {/* Buttons */}
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

        <a
          href="mailto:sahananaik1704@gmail.com"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Email Me
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/sahana-naik-ml/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:text-purple-300"
        >
          LinkedIn
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>

        <a
          href="https://github.com/sahana769"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:text-purple-300"
        >
          GitHub
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>

      </div>

    </div>


    {/* Footer Bottom */}
    <div className="mt-20 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between">

      <p>
        © {new Date().getFullYear()} Sahana Naik. All rights reserved.
      </p>

      <p>
        Built with Next.js · React · Tailwind CSS
      </p>

    </div>

  </div>
</footer>

    </main>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-slate-950 px-6 pt-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sky-400">
            Personal Portfolio
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m Santiago Reyes Herrera
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-3xl">
            Systems Engineering Student & Developer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I build web and mobile applications using modern technologies such
            as React, Next.js, Python, Flutter, and databases.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400">
              Contact Me
            </a>
            <a href="/files/cv-santiago-reyes.pdf" download className="rounded-xl border border-sky-500 px-6 py-3 font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-slate-950">
              Download CV
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-2xl text-slate-400">
            <a href="https://github.com/Santlas09" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FaGithub className="transition hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/santlas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FaLinkedin className="transition hover:text-white" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-full border border-sky-400/40 bg-slate-900 shadow-2xl shadow-sky-500/20 md:h-96 md:w-96">
            <Image
              src="/images/profile.jpg"
              alt="Santiago Reyes Herrera"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
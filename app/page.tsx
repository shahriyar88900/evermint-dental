"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, type FormEvent } from "react";

const services = [
  {
    number: "01",
    title: "Preventive Care",
    description:
      "Routine exams, professional cleanings, and personalized guidance to keep your smile healthy.",
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    description:
      "Natural-looking whitening, veneers, and smile enhancements designed around your goals.",
  },
  {
    number: "03",
    title: "Restorative Care",
    description:
      "Comfortable, modern solutions including fillings, crowns, bridges, and dental implants.",
  },
  {
    number: "04",
    title: "Emergency Visits",
    description:
      "Prompt care for dental pain, broken teeth, swelling, and other urgent concerns.",
  },
];

const testimonials = [
  {
    quote:
      "The entire team made me feel comfortable from the moment I arrived. The experience was calm, clear, and genuinely caring.",
    name: "Olivia M.",
    service: "Preventive care patient",
  },
  {
    quote:
      "I finally found a dental practice that explains every option without pressure. My new smile feels completely natural.",
    name: "Daniel R.",
    service: "Cosmetic dentistry patient",
  },
  {
    quote:
      "Booking was simple, the office was beautiful, and everyone respected my time. I highly recommend Evermint Dental.",
    name: "Sophia L.",
    service: "Restorative care patient",
  },
];

const faqs = [
  {
    question: "Are you accepting new patients?",
    answer:
      "Yes. Evermint Dental welcomes new patients of all ages. Submit an appointment request and our team will contact you to confirm availability.",
  },
  {
    question: "Do you offer emergency appointments?",
    answer:
      "We reserve limited same-day availability for urgent dental concerns. Call the practice directly for the fastest assistance.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We work with many major PPO plans. Contact our team before your visit and we will help you understand your available benefits.",
  },
  {
    question: "Do you offer payment options?",
    answer:
      "Yes. Flexible payment arrangements are available for qualifying treatment plans. Our team will explain the options clearly before treatment begins.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbf9] text-[#173b36]">
      <header className="sticky top-0 z-50 border-b border-[#173b36]/10 bg-[#f7fbf9]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#176b5b] text-lg font-bold text-white shadow-lg shadow-[#176b5b]/20">
              E
            </span>
            <span>
              <span className="block text-lg font-bold tracking-tight">
                Evermint Dental
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4f756d]">
                Modern family dentistry
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a className="transition hover:text-[#e17b5f]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[#e17b5f]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#e17b5f]" href="#reviews">
              Reviews
            </a>
            <a className="transition hover:text-[#e17b5f]" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+15550142088"
              className="hidden items-center gap-2 text-sm font-semibold sm:flex"
            >
              <PhoneIcon />
              (555) 014-2088
            </a>

            <a
              href="#appointment"
              className="hidden rounded-full bg-[#173b36] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#176b5b] sm:inline-flex"
            >
              Book a visit
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onPointerUp={() => setMenuOpen((current) => !current)}
              onClick={(event) => {
               if (event.detail === 0) {
              setMenuOpen((current) => !current);
   }
}}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#173b36]/15 lg:hidden"
            >
              <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#173b36]/10 bg-[#f7fbf9] px-5 py-5 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 font-semibold">
              {["services", "about", "reviews", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="capitalize"
                >
                  {item}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#173b36] px-5 py-3 text-center text-white"
              >
                Book a visit
              </a>
            </div>
          </nav>
        )}
      </header>

      <section className="relative">
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-[#bfe3d6]/40 blur-3xl" />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#f4c9b9]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.03fr_0.97fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#176b5b]/15 bg-white px-4 py-2 text-sm font-semibold text-[#176b5b] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#e17b5f]" />
              Now welcoming new patients
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#12322d] sm:text-6xl lg:text-7xl">
              Thoughtful dental care for a{" "}
              <span className="text-[#e17b5f]">healthier smile.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4f6d67]">
              Modern dentistry with a personal touch. Experience comfortable,
              transparent care designed around you and your family.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#176b5b] px-7 py-4 font-bold text-white shadow-xl shadow-[#176b5b]/20 transition hover:-translate-y-0.5 hover:bg-[#12594c]"
              >
                Request an appointment
                <ArrowIcon />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[#173b36]/15 bg-white px-7 py-4 font-bold transition hover:border-[#176b5b]/40"
              >
                Explore our services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#4f6d67]">
              {["Gentle approach", "Transparent pricing", "Modern technology"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#dff2eb] text-[#176b5b]">
                      <CheckIcon />
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.25rem] bg-[#dceee8] p-3 shadow-[0_30px_90px_rgba(23,59,54,0.16)]">
              <img
src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"                alt="Dentist providing comfortable care to a patient"
                className="h-[520px] w-full rounded-[1.75rem] object-cover sm:h-[620px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 max-w-[230px] rounded-3xl bg-white p-5 shadow-2xl sm:-left-10">
              <div className="flex text-[#f2a45d]">★★★★★</div>
              <p className="mt-2 text-sm font-bold text-[#173b36]">
                4.9 average patient rating
              </p>
              <p className="mt-1 text-xs text-[#68817c]">
                Based on verified patient feedback
              </p>
            </div>

            <div className="absolute -right-3 top-8 rounded-3xl bg-[#173b36] p-5 text-white shadow-2xl sm:-right-8">
              <p className="text-3xl font-semibold">1,200+</p>
              <p className="mt-1 text-xs text-white/70">smiles cared for</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#173b36]/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 text-center sm:grid-cols-3 sm:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#78908b]">
              Convenient hours
            </p>
            <p className="mt-2 font-bold">Monday–Saturday</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#78908b]">
              Location
            </p>
            <p className="mt-2 font-bold">Central Austin, Texas</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#78908b]">
              Call our team
            </p>
            <a className="mt-2 block font-bold" href="tel:+15550142088">
              (555) 014-2088
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e17b5f]">
              Complete dental care
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Everything your smile needs, in one welcoming place.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#5d7670]">
            From preventive visits to smile transformations, our team combines
            modern techniques with patient-first care.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-[#173b36]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#176b5b]/30 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-bold text-[#e17b5f]">
                  {service.number}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#edf7f3] text-[#176b5b] transition group-hover:bg-[#176b5b] group-hover:text-white">
                  <ArrowIcon />
                </span>
              </div>
              <h3 className="mt-10 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 max-w-lg leading-7 text-[#637a75]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#173b36] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
             src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1300&q=85"
              alt="Dentist providing careful treatment to a patient"
              className="h-[520px] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 text-[#173b36] backdrop-blur">
              <p className="font-bold">A calmer kind of dental visit</p>
              <p className="mt-1 text-sm text-[#627872]">
                Thoughtful spaces, clear communication, and care at your pace.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0a58e]">
              Why Evermint
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Clinical excellence without the clinical feeling.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              We created Evermint Dental to make every appointment feel more
              comfortable, informed, and human. You will always understand your
              options before making a decision.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Personalized treatment recommendations",
                "Digital imaging and modern technology",
                "Comfort-focused care for anxious patients",
                "Clear estimates before treatment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-[#8fe0c6]">
                    <CheckIcon />
                  </span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#appointment"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#f0a58e] px-7 py-4 font-bold text-[#173b36] transition hover:bg-[#f7bca9]"
            >
              Meet your dental team
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#e6f3ee]">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=85"
              alt="Dr. Maya Carter"
              className="h-[560px] w-full object-cover object-top"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e17b5f]">
              Meet your dentist
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Dr. Maya Carter, DDS
            </h2>
            <p className="mt-3 text-lg font-semibold text-[#176b5b]">
              General and cosmetic dentist
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d7670]">
              Dr. Carter believes excellent dentistry begins with listening.
              Her calm, educational approach helps patients feel confident and
              involved throughout their care.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-[#5d7670]">
              She combines evidence-based treatment with modern digital
              technology to create comfortable experiences and natural-looking
              results.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Patient-first care",
                "Cosmetic dentistry",
                "Restorative dentistry",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#176b5b]/15 bg-[#edf7f3] px-4 py-2 text-sm font-semibold text-[#176b5b]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#edf7f3]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e17b5f]">
              Patient stories
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Care that patients feel good about.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col rounded-[2rem] bg-white p-7 shadow-sm"
              >
                <div className="text-[#f2a45d]">★★★★★</div>
                <blockquote className="mt-5 flex-1 text-lg leading-8 text-[#395a54]">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-8 border-t border-[#173b36]/10 pt-5">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[#718782]">
                    {testimonial.service}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="appointment" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#f1c4b5]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7b4435]">
                Request an appointment
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#173b36] sm:text-5xl">
                Ready for a healthier, more confident smile?
              </h2>
              <p className="mt-6 leading-7 text-[#614e48]">
                Tell us how to reach you and our friendly team will contact you
                to confirm a convenient appointment time.
              </p>

              <div className="mt-9 space-y-5">
                <div>
                  <p className="text-sm font-bold text-[#173b36]">Call us</p>
                  <a
                    href="tel:+15550142088"
                    className="mt-1 block text-lg font-semibold"
                  >
                    (555) 014-2088
                  </a>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#173b36]">Visit us</p>
                  <p className="mt-1 text-[#614e48]">
                    241 Cedar Lane, Austin, TX 78701
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#173b36]">Hours</p>
                  <p className="mt-1 text-[#614e48]">
                    Mon–Fri: 8:00 AM–6:00 PM
                    <br />
                    Saturday: 9:00 AM–2:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="m-3 rounded-[2rem] bg-white p-7 sm:m-5 sm:p-10">
              {submitted ? (
                <div className="grid min-h-[480px] place-items-center text-center">
                  <div>
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#dff2eb] text-[#176b5b]">
                      <CheckIcon />
                    </span>
                    <h3 className="mt-6 text-3xl font-semibold">
                      Thank you for reaching out.
                    </h3>
                    <p className="mx-auto mt-3 max-w-md leading-7 text-[#627872]">
                      Your appointment request has been received. Our team will
                      contact you shortly to confirm the details.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 rounded-full bg-[#173b36] px-6 py-3 font-bold text-white"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-bold">
                      Full name
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-2xl border border-[#173b36]/15 bg-[#f9fbfa] px-4 py-3.5 font-normal outline-none transition focus:border-[#176b5b]"
                      />
                    </label>

                    <label className="text-sm font-bold">
                      Phone number
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="mt-2 w-full rounded-2xl border border-[#173b36]/15 bg-[#f9fbfa] px-4 py-3.5 font-normal outline-none transition focus:border-[#176b5b]"
                      />
                    </label>

                    <label className="text-sm font-bold">
                      Email address
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-2xl border border-[#173b36]/15 bg-[#f9fbfa] px-4 py-3.5 font-normal outline-none transition focus:border-[#176b5b]"
                      />
                    </label>

                    <label className="text-sm font-bold">
                      Preferred date
                      <input
                        required
                        name="date"
                        type="date"
                        className="mt-2 w-full rounded-2xl border border-[#173b36]/15 bg-[#f9fbfa] px-4 py-3.5 font-normal outline-none transition focus:border-[#176b5b]"
                      />
                    </label>
                  </div>

                  <label className="mt-5 block text-sm font-bold">
                    Service
                    <select
                      required
                      name="service"
                      defaultValue=""
                      className="mt-2 w-full rounded-2xl border border-[#173b36]/15 bg-[#f9fbfa] px-4 py-3.5 font-normal outline-none transition focus:border-[#176b5b]"
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>
                      <option>Preventive care</option>
                      <option>Cosmetic dentistry</option>
                      <option>Restorative care</option>
                      <option>Emergency visit</option>
                      <option>New patient consultation</option>
                    </select>
                  </label>

                  <label className="mt-5 block text-sm font-bold">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="How can our team help? Please do not include private medical information."
                      className="mt-2 w-full resize-none rounded-2xl border border-[#173b36]/15 bg-[#f9fbfa] px-4 py-3.5 font-normal outline-none transition focus:border-[#176b5b]"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#176b5b] px-7 py-4 font-bold text-white transition hover:bg-[#12594c]"
                  >
                    Send appointment request
                    <ArrowIcon />
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-[#718782]">
                    This form is for scheduling requests only. Please do not
                    submit confidential medical information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e17b5f]">
            Frequently asked questions
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
            Helpful answers before your visit.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[#173b36]/10 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                {faq.question}
                <span className="text-2xl text-[#176b5b] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-[#627872]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-[#102c28] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f0a58e] text-lg font-bold text-[#173b36]">
                  E
                </span>
                <span className="text-lg font-bold">Evermint Dental</span>
              </div>
              <p className="mt-5 max-w-xs leading-7 text-white/60">
                Modern, compassionate dental care for every stage of your
                smile.
              </p>
            </div>

            <div>
              <p className="font-bold">Explore</p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                <a href="#services">Services</a>
                <a href="#about">About our practice</a>
                <a href="#reviews">Patient reviews</a>
                <a href="#appointment">Request an appointment</a>
              </div>
            </div>

            <div>
              <p className="font-bold">Contact</p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-white/60">
                <p>241 Cedar Lane, Austin, TX 78701</p>
                <a className="block" href="tel:+15550142088">
                  (555) 014-2088
                </a>
                <a className="block" href="mailto:hello@evermintdental.com">
                  hello@evermintdental.com
                </a>
              </div>
            </div>

            <div>
              <p className="font-bold">Office hours</p>
              <div className="mt-5 space-y-3 text-sm text-white/60">
                <div className="flex justify-between">
                  <span>Mon–Fri</span>
                  <span>8:00–6:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00–2:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/45 sm:flex-row">
            <p>© 2026 Evermint Dental. Portfolio concept website.</p>
            <div className="flex gap-5">
              <a href="#">Privacy</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
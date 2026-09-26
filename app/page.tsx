"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef, useState, type FormEvent } from "react";

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
    name: "Sample review 01",
    service: "Illustrative copy — not a patient testimonial",
  },
  {
    quote:
      "I finally found a dental practice that explains every option without pressure. My new smile feels completely natural.",
    name: "Sample review 02",
    service: "Illustrative copy — not a patient testimonial",
  },
  {
    quote:
      "Booking was simple, the office was beautiful, and everyone respected my time. I highly recommend Evermint Dental.",
    name: "Sample review 03",
    service: "Illustrative copy — not a patient testimonial",
  },
];

const faqs = [
  {
    question: "Can I request an appointment here?",
    answer:
      "This is a portfolio demo. Submit a request with fictional details and an @example.invalid email to try the flow. No real appointments are scheduled.",
  },
  {
    question: "What happens after a request is sent?",
    answer:
      "The demo stores a pending request in a private database. A real clinic would contact a patient before confirming availability.",
  },
  {
    question: "Are the listed services and photos real?",
    answer:
      "They illustrate a possible dental website. Services, people, photography, and practice details must be replaced and verified by the client before launch.",
  },
  {
    question: "Should I include health information in the form?",
    answer:
      "No. Use fictional contact details only and never include symptoms, medical history, or other confidential information in this demo.",
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const pendingRequest = useRef<{ payload: string; id: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    const payload = JSON.stringify(fields);
    if (pendingRequest.current?.payload !== payload) {
      pendingRequest.current = { payload, id: crypto.randomUUID() };
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, requestId: pendingRequest.current.id }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Could not send your request. Please try again.");
      }
      form.reset();
      pendingRequest.current = null;
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Could not send your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7fbf9] text-[#173b36]">
      <div className="bg-[#173b36] px-5 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        Portfolio demo · Fictional clinic and reviews · Use dummy details only · No real appointments
      </div>
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
              href="#appointment"
              className="hidden rounded-full bg-[#173b36] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#176b5b] sm:inline-flex"
            >
              Try the demo form
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#173b36]/15 lg:hidden"
            >
              <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" className="border-t border-[#173b36]/10 bg-[#f7fbf9] px-5 py-5 lg:hidden">
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
                Try the demo form
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
              Dental website portfolio concept
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
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
                alt="Stock photograph illustrating a dental visit"
                className="h-[520px] w-full rounded-[1.75rem] object-cover sm:h-[620px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 max-w-[230px] rounded-3xl bg-white p-5 shadow-2xl sm:-left-10">
              <div className="flex text-[#f2a45d]">★★★★★</div>
              <p className="mt-2 text-sm font-bold text-[#173b36]">
                Review layout preview
              </p>
              <p className="mt-1 text-xs text-[#68817c]">
                Sample content, not real patient feedback
              </p>
            </div>

            <div className="absolute -right-3 top-8 rounded-3xl bg-[#173b36] p-5 text-white shadow-2xl sm:-right-8">
              <p className="text-xl font-semibold">Built for clarity</p>
              <p className="mt-1 text-xs text-white/70">Responsive concept design</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#173b36]/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 text-center sm:grid-cols-3 sm:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#78908b]">
              Flexible layout
            </p>
            <p className="mt-2 font-bold">Adaptable office hours</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#78908b]">
              Practice details
            </p>
            <p className="mt-2 font-bold">Add your clinic location</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#78908b]">
              Contact section
            </p>
            <p className="mt-2 font-bold">Add your clinic phone</p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
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

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-[#173b36]/10 bg-white p-6 sm:p-7"
            >
              <span className="text-sm font-bold text-[#e17b5f]">
                {service.number}
              </span>
              <h3 className="mt-6 text-2xl font-semibold sm:mt-10">{service.title}</h3>
              <p className="mt-3 max-w-lg leading-7 text-[#637a75]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#173b36] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:gap-14 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
              alt="Stock photograph of a dental professional reviewing dental imaging"
              className="h-[440px] w-full rounded-[2rem] object-cover sm:h-[520px]"
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
              A welcoming approach to dental website design.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              This concept shows how a practice could present services, explain
              its approach, and collect appointment requests. A client would
              provide approved clinical information before launch.
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
              Try the appointment form
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#e6f3ee]">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=85"
              alt="Stock portrait used to illustrate a team profile layout"
              className="h-[560px] w-full object-cover object-top"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e17b5f]">
              Team profile example
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Introduce your dental team
            </h2>
            <p className="mt-3 text-lg font-semibold text-[#176b5b]">
              Add verified names and credentials before launch
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d7670]">
              This space can introduce a clinician with their approved biography,
              specialties, and a photo supplied with permission.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-[#5d7670]">
              The image is stock photography. Replace it with the clinic&apos;s
              real team and confirm every professional qualification.
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
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e17b5f]">
              Sample review cards
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              A layout for authentic patient feedback.
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

      <section id="appointment" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
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
                Try the request flow with fictional details. This portfolio
                website does not book appointments or contact patients.
              </p>

              <div className="mt-9 space-y-5">
                <div>
                  <p className="text-sm font-bold text-[#173b36]">Phone</p>
                  <p className="mt-1 text-[#614e48]">Your clinic phone goes here</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#173b36]">Visit us</p>
                  <p className="mt-1 text-[#614e48]">
                    Your clinic address goes here
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#173b36]">Hours</p>
                  <p className="mt-1 text-[#614e48]">
                    Add verified office hours
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
                      Your demo request was saved. No appointment is booked and
                      nobody will contact you from this portfolio site.
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
                        placeholder="demo@example.invalid"
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
                      placeholder="Demo note only. Do not include medical information."
                      className="mt-2 w-full resize-none rounded-2xl border border-[#173b36]/15 bg-[#f9fbfa] px-4 py-3.5 font-normal outline-none transition focus:border-[#176b5b]"
                    />
                  </label>

                  {submitError && <p role="alert" className="mt-5 text-sm text-red-700">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#176b5b] px-7 py-4 font-bold text-white transition hover:bg-[#12594c] disabled:cursor-wait disabled:opacity-60"
                  >
                    {submitting ? "Sending request…" : "Send appointment request"}
                    <ArrowIcon />
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-[#718782]">
                    Demo only: use a fictional name and phone number with an
                    @example.invalid email. Never submit real or medical information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 sm:px-8 sm:pb-24">
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
                Portfolio concept for a dental practice. All people,
                testimonials, and practice details are illustrative.
              </p>
            </div>

            <div>
              <p className="font-bold">Explore</p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                <a href="#services">Services</a>
                <a href="#about">About our practice</a>
                <a href="#reviews">Sample review layout</a>
                <a href="#appointment">Try the demo form</a>
              </div>
            </div>

            <div>
              <p className="font-bold">Practice details</p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-white/60">
                <p>Add your verified address</p>
                <p>Add your clinic phone and email</p>
              </div>
            </div>

            <div>
              <p className="font-bold">Before client launch</p>
              <div className="mt-5 space-y-3 text-sm text-white/60">
                <p>Verify services, credentials, hours, and patient reviews.</p>
                <p>Add approved privacy and accessibility pages.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/45 sm:flex-row">
            <p>© 2026 Evermint Dental. Portfolio concept website.</p>
            <p>Demo data only. No real appointment booking.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

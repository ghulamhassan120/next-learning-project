"use client";

import { useActionState } from "react";
import { contactAction } from "./contact.action";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const ContactPage = () => {
  const [state, dispatchAction, isPending] = useActionState(
    contactAction,
    null,
  );
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-4 py-10">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="mb-6 text-center text-2xl font-bold tracking-wide text-pink-200">
          Get In Touch
        </h1>

        {/* Card */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111820] p-5 shadow-2xl shadow-black/40">
          {/* Premium glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

          <form className="relative z-10 space-y-5" action={dispatchAction}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[11px] font-medium tracking-wide text-gray-300"
              >
                Full Name
              </label>

              <input
                id="name"
                name="fullname"
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-md border border-white/10 bg-[#e9f0ff] px-3 py-2.5 text-xs font-medium text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[11px] font-medium tracking-wide text-gray-300"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-white/10 bg-[#202b3b] px-3 py-2.5 text-xs text-white outline-none transition placeholder:text-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[11px] font-medium tracking-wide text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-md border border-white/10 bg-[#202b3b] px-3 py-3 text-xs text-white outline-none transition placeholder:text-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
              />
            </div>

            {/* Button */}
            <Submit />
          </form>
        </div>
        <section>
          {state && (
            <p
              className={`mt-4 rounded-md px-4 py-3 text-center text-sm font-medium ${
                state.success
                  ? "border border-green-500/20 bg-green-500/10 text-green-400"
                  : "border border-red-500/20 bg-red-500/10 text-red-400"
              }`}
            >
              {state.message}
            </p>
          )}
        </section>
        {/* Bottom text */}
        <p className="mt-5 text-center text-[10px] text-gray-600">
          We usually respond within 24 hours.
        </p>
      </div>
    </main>
  );
};

export default ContactPage;

export function Submit() {
  const {pending,data,method,action}=useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-gradient-to-r from-pink-600 to-pink-500 py-3 text-xs font-bold tracking-wide text-white shadow-lg shadow-pink-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-pink-500 hover:to-pink-400 hover:shadow-pink-500/30 active:translate-y-0"
    >
      {pending ? <h1>Loading....</h1> : "Send Message"}
    </button>
  );
}

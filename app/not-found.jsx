'use client'
const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-10 text-center shadow-2xl backdrop-blur-xl sm:p-16">

        {/* Glow */}
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10">

          {/* 404 */}
          <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
            404
          </h1>

          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <h2 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-400">
            Sorry, the page you're looking for doesn't exist or may have
            been moved to another location.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
            >
              ← Back to Home
            </a>

            <button
              onClick={() => window.history.back()}
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Go Back
            </button>

          </div>

          <p className="mt-10 text-sm text-slate-500">
            Error Code: 404
          </p>

        </div>
      </div>
    </main>
  );
};

export default NotFound;
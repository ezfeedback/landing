"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      router.replace("/");
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, router]);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = ((5 - countdown) / 5) * circumference;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8fafc]">
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #2563EB 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #34A853 0%, transparent 70%)",
        }}
      />

      {[
        { top: "12%", left: "18%", size: 6, delay: "0s" },
        { top: "25%", right: "22%", size: 8, delay: "1s" },
        { bottom: "20%", left: "10%", size: 5, delay: "0.5s" },
        { bottom: "30%", right: "15%", size: 7, delay: "1.5s" },
        { top: "60%", left: "30%", size: 4, delay: "2s" },
      ].map((dot, i) => (
        <span
          key={i}
          className="animate-float pointer-events-none absolute rounded-full bg-[#2563EB]/20"
          style={{
            ...dot,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
          }}
        />
      ))}
      
      <div className="animate-fade-in-up relative z-10 mx-4 flex max-w-lg flex-col items-center rounded-3xl border border-gray-100 bg-white/80 px-8 py-14 text-center shadow-xl backdrop-blur-md sm:px-14">
        <div className="relative mb-6">
          <span
            className="font-display select-none text-[120px] font-extrabold leading-none tracking-tight sm:text-[140px]"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #34A853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>
          
          <div
            className="pointer-events-none absolute inset-0 -z-10 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(52,168,83,0.12) 100%)",
              borderRadius: "50%",
              transform: "scale(1.3)",
            }}
          />
        </div>

        <h1 className="font-display mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          Page not found
        </h1>

        <p className="mb-8 max-w-sm text-base text-gray-500">
          Oops — the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="relative mb-8 flex items-center justify-center">
          <svg width="72" height="72" className="-rotate-90">
            {/* Track */}
            <circle
              cx="36"
              cy="36"
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="4"
            />
            
            <circle
              cx="36"
              cy="36"
              r={radius}
              fill="none"
              stroke="url(#grad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              className="transition-[stroke-dashoffset] duration-1000 ease-linear"
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#34A853" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute text-lg font-semibold text-gray-700">
            {countdown}
          </span>
        </div>

        <p className="mb-6 text-sm text-gray-400">
          Redirecting to home in{" "}
          <span className="font-medium text-gray-600">{countdown}s</span>
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #2563EB 0%, #34A853 100%)",
          }}
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:-translate-x-0.5"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>de
          Go back home
        </Link>
      </div>
    </div>
  );
}

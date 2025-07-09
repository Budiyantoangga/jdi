// app/splash/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      router.push('/login'); // ✅ arahkan ke halaman login
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
      {/* Efek latar */}
      <div className="absolute w-72 h-72 bg-cyan-400 opacity-20 rounded-full blur-3xl top-10 left-[-50px] animate-pulse" />
      <div className="absolute w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-2xl bottom-[-80px] right-[-60px] animate-spin-slow" />

      {/* Logo */}
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
          JDI<span className="text-cyan-400">-APP</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-slate-300 tracking-widest">
          Connecting the Future
        </p>
        <div className="mt-12">
          <div className="w-14 h-14 border-4 border-t-cyan-400 border-white rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

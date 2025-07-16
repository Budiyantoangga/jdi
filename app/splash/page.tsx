// app/splash/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      router.push("/login"); // ✅ arahkan ke halaman login
    }, 10000);
    return () => clearTimeout(timer);
  }, [router]);

  const customStyles = `
    @keyframes float {
      0% { transform: translateY(0px) translateX(0px); }
      25% { transform: translateY(-10px) translateX(10px); }
      50% { transform: translateY(0px) translateX(20px); }
      75% { transform: translateY(10px) translateX(10px); }
      100% { transform: translateY(0px) translateX(0px); }
    }
    
    @keyframes float-slow {
      0% { transform: translateY(0px) translateX(0px); }
      25% { transform: translateY(-15px) translateX(-15px); }
      50% { transform: translateY(0px) translateX(-30px); }
      75% { transform: translateY(15px) translateX(-15px); }
      100% { transform: translateY(0px) translateX(0px); }
    }
    
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }
    
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
  `;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background-jas2.jpg')",
        }}
      />
      {/* Dark Overlay for Exposure Effect */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Futuristic Glow Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-2xl animate-spin-slow" />

      {/* Additional Floating Particles */}
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 opacity-30 rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 opacity-40 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 left-3/4 w-5 h-5 bg-blue-400 opacity-25 rounded-full animate-bounce"
        style={{ animationDelay: "4s" }}
      />

      {/* Logo Container with Glassmorphic Effect */}
      <div className="z-10 text-center backdrop-blur-xl p-12 rounded-3xl border border-cyan-400/20 shadow-lg relative group">
        {/* Interactive light effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-green-600 rounded-3xl opacity-10 blur transition duration-500"></div>

        {/* Logo and Content */}
        <div className="relative">
          {/* Company Logo */}
          <div className="mb-2">
            <img
              src="/logo-jas.png"
              alt="JDI Company Logo"
              className="w-24 h-24 mx-auto object-contain drop-shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
            JDI<span className="text-orange-400">-APP</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-300/80 tracking-widest">
            Connecting the Future
          </p>
          <div className="mt-12">
            <div className="w-14 h-14 border-4 border-t-orange-400 border-white/20 rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </div>
      <style jsx>{customStyles}</style>
    </div>
  );
}
